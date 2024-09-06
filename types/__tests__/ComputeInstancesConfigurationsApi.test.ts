import { ComputeInstancesConfigurationsApi } from '../ComputeInstancesConfigurationsApi';
import { createConfiguration } from '../../configuration';
import { IsomorphicFetchHttpLibrary } from '../../http/isomorphic-fetch';
import { ResponseContext } from '../../http/http';
import { testMiddleware, buildResponseBody, testApiHttpInfo } from '../utils/testHelper';

describe('ComputeInstancesConfigurationsApi', () => {
    const api = new ComputeInstancesConfigurationsApi(createConfiguration());
    const testBody = { totalPages: 32 };

    beforeEach(() => {
        jest.clearAllMocks();
        jest.restoreAllMocks();

        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementation(() => {
            const headers = { 'content-type': 'application/json' };
            return Promise.resolve(new ResponseContext(200, headers, buildResponseBody(testBody)));
        });
    });

    it('should get vm configs with http info', async () => {
        await testApiHttpInfo(() => api.getVmConfigsWithHttpInfo(), testBody);
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
        expect(response).toEqual(testBody);
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

    it('should modify request and response in middleware', async () => {
        const preParams = { vCpuMin: 12 };
        const postParams = { number: 42 };

        await testMiddleware(ComputeInstancesConfigurationsApi, 'getVmConfigs', testBody, preParams, postParams);
    });
});
