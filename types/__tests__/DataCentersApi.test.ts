import { DataCentersApi } from '../DataCentersApi';
import { createConfiguration } from '../../configuration';
import { DataCenter } from '../../models/DataCenter';
import { IsomorphicFetchHttpLibrary } from '../../http/isomorphic-fetch';
import { ResponseContext } from '../../http/http';

describe('DataCentersApi', () => {
    const api = new DataCentersApi(createConfiguration());
    const dataCenterId = 'dc-123';
    const mockDataCenter: DataCenter = {
        id: dataCenterId,
        name: 'Test Data Center',
        locationName: 'Test Location',
    };

    beforeEach(() => {
        jest.clearAllMocks();
        jest.restoreAllMocks();

        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementation(() => {
            const headers = { 'content-type': 'application/json' };
            const body = {
                text: () => Promise.resolve(JSON.stringify(mockDataCenter)),
                binary: () => Promise.resolve(new Blob()),
            };
            return Promise.resolve(new ResponseContext(200, headers, body));
        });
    });

    test('should fetch data center by ID successfully', async () => {
        const dataCenter = await api.getDataCenter(dataCenterId);
        expect(dataCenter).toEqual(mockDataCenter);
    });

    test('should get data center with http info', async () => {
        const response = await api.getDataCenterWithHttpInfo(dataCenterId);
        expect(response.httpStatusCode).toBe(200);
        const bodyText = await response.body.text();
        expect(bodyText).toEqual(JSON.stringify(mockDataCenter));
    });

    it('should handle error in get data center', async () => {
        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementationOnce(() => {
            return Promise.reject(new Error('Network Error'));
        });

        await expect(api.getDataCenter(dataCenterId)).rejects.toThrow('Network Error');
    });

    it('should handle error in get data centers', async () => {
        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementationOnce(() => {
            return Promise.reject(new Error('Network Error'));
        });

        await expect(api.getDataCenters()).rejects.toThrow('Network Error');
    });

    test('should fetch list of data centers successfully', async () => {
        const mockDataCenters: DataCenter[] = [
            { id: 'dc-123', name: 'Test Data Center 1', providerName: 'Test Provider', locationName: 'Test Location' },
            { id: 'dc-456', name: 'Test Data Center 2', providerName: 'Test Provider', locationName: 'Test Location' },
        ];
        const response = await getDataCenters(mockDataCenters, () => api.getDataCenters());
        expect(response).toEqual(mockDataCenters);
    });

    test('should fetch empty list of data centers successfully', async () => {
        await getDataCenters([], () => api.getDataCenters());
        const response = await getDataCenters([], () => api.getDataCenters());
        expect(response).toEqual([]);
    });

    test('should get data centers with http info', async () => {
        const mockDataCenters: DataCenter[] = [
            { id: 'dc-123', name: 'Test Data Center 1', providerName: 'Test Provider', locationName: 'Test Location' },
            { id: 'dc-456', name: 'Test Data Center 2', providerName: 'Test Provider', locationName: 'Test Location' },
        ];
        const response = await getDataCenters(mockDataCenters, () => api.getDataCentersWithHttpInfo());
        expect(response.httpStatusCode).toBe(200);
        const bodyText = await response.body.text();
        expect(bodyText).toEqual(JSON.stringify(mockDataCenters));
    });

    async function getDataCenters(mockDataCenters: DataCenter[], getFunction: Function) {
        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementationOnce(() => {
            const headers = { 'content-type': 'application/json' };
            const body = {
                text: () => Promise.resolve(JSON.stringify(mockDataCenters)),
                binary: () => Promise.resolve(new Blob()),
            };
            return Promise.resolve(new ResponseContext(200, headers, body));
        });

        return await getFunction();
    }

    it('should call middleware pre and post functions in get data center', async () => {
        const preMock = jest.fn((ctx) => Promise.resolve(ctx));
        const postMock = jest.fn((rsp) => Promise.resolve(rsp));
        const apiWithMiddleware = new DataCentersApi(
            createConfiguration({ middleware: [{ pre: preMock, post: postMock }] })
        );

        await apiWithMiddleware.getDataCenter(dataCenterId);

        expect(preMock).toHaveBeenCalled();
        expect(postMock).toHaveBeenCalled();
    });

    it('should call middleware pre and post functions in get data centers', async () => {
        const preMock = jest.fn((ctx) => Promise.resolve(ctx));
        const postMock = jest.fn((rsp) => Promise.resolve(rsp));
        const apiWithMiddleware = new DataCentersApi(
            createConfiguration({ middleware: [{ pre: preMock, post: postMock }] })
        );

        await apiWithMiddleware.getDataCenters(dataCenterId);

        expect(preMock).toHaveBeenCalled();
        expect(postMock).toHaveBeenCalled();
    });

    const extendJsonString = (str: string, data: object) => {
        const asJson = JSON.parse(str);
        return JSON.stringify({ ...asJson, ...data });
    };

    it('should modify request and response in middleware', async () => {
        const sendSpy = jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send');
        const preParams = { providerName: 'Test Provider' };
        const postParams = { locationId: 42 };

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

        const apiWithMiddleware = new DataCentersApi(
            createConfiguration({ middleware: [{ pre: preMock, post: postMock }] })
        );

        const response = await apiWithMiddleware.getDataCenter(dataCenterId);

        expect(preMock).toHaveBeenCalled();
        expect(postMock).toHaveBeenCalled();
        expect(response).toEqual({ ...mockDataCenter, ...postParams });

        const callArgs = sendSpy.mock.calls[0][0];
        expect(callArgs.getBody()).toEqual(preParams);
    });
});
