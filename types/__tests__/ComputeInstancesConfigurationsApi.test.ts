import { ComputeInstancesConfigurationsApi } from '../ComputeInstancesConfigurationsApi';
import { createConfiguration } from '../../configuration';
import { IsomorphicFetchHttpLibrary } from '../../http/isomorphic-fetch';
import { ResponseContext } from '../../http/http';

describe('ComputeInstancesConfigurationsApi', () => {
    let api: ComputeInstancesConfigurationsApi;
    const testBody = JSON.stringify({ totalPages: 32 });

    beforeAll(() => {
        api = new ComputeInstancesConfigurationsApi(createConfiguration());

        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementation(() => {
            const headers = { 'content-type': 'application/json' };
            const body = {
                text: () => Promise.resolve(testBody),
                binary: () => Promise.resolve(new Blob()),
            };
            return Promise.resolve(new ResponseContext(200, headers, body));
        });
    });

    it('should get vm configs with http info', async () => {
        const response = await api.getVmConfigsWithHttpInfo();
        expect(response).toBeDefined();
        expect(response.httpStatusCode).toBe(200);
        const bodyText = await response.body.text();
        expect(bodyText).toEqual(testBody);
    });

    it('should handle error in get vm configs with http info', async () => {
        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementationOnce(() => {
            return Promise.reject(new Error('Network Error'));
        });

        await expect(api.getVmConfigsWithHttpInfo()).rejects.toThrow('Network Error');
    });

    it('should get vm configs', async () => {
        const response = await api.getVmConfigs();
        expect(response).toBeDefined();
        expect(response).toEqual(JSON.parse(testBody));
    });

    it('should handle error in get vm configs', async () => {
        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementationOnce(() => {
            return Promise.reject(new Error('Network Error'));
        });

        await expect(api.getVmConfigs()).rejects.toThrow('Network Error');
    });

    it('should call middleware pre and post functions', async () => {
        const preMock = jest.fn((ctx) => Promise.resolve(ctx));
        const postMock = jest.fn((rsp) => Promise.resolve(rsp));
        const apiWithMiddleware = new ComputeInstancesConfigurationsApi(
            createConfiguration({ middleware: [{ pre: preMock, post: postMock }] })
        );

        await apiWithMiddleware.getVmConfigs();

        expect(preMock).toHaveBeenCalled();
        expect(postMock).toHaveBeenCalled();
    });

    const extendJsonString = (str: string, data: object) => {
        const asJson = JSON.parse(str);
        return JSON.stringify({ ...asJson, ...data });
    };

    it('should modify request and response in middleware', async () => {
        const sendSpy = jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send');
        const preParams = { vCpuMin: 12 };
        const postParams = { number: 42 };

        const preMock = jest.fn((ctx) => {
            ctx.body = preParams;
            return Promise.resolve(ctx);
        });
        const postMock = jest.fn((rsp) => {
            return rsp.body.text().then((bodyText: any) => {
                rsp.body = {
                    text: async () => extendJsonString(bodyText, postParams),
                };
                return rsp;
            });
        });

        const apiWithMiddleware = new ComputeInstancesConfigurationsApi(
            createConfiguration({ middleware: [{ pre: preMock, post: postMock }] })
        );

        const response = await apiWithMiddleware.getVmConfigs();

        expect(preMock).toHaveBeenCalled();
        expect(postMock).toHaveBeenCalled();
        expect(response).toEqual({ ...JSON.parse(testBody), ...postParams });

        const callArgs = sendSpy.mock.calls[0][0];
        expect(callArgs.getBody()).toEqual(preParams);
    });
});
