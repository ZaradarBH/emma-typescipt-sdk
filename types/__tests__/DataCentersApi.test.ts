import { DataCentersApi } from '../DataCentersApi';
import { createConfiguration } from '../../configuration';
import { DataCenter } from '../../models/DataCenter';
import { IsomorphicFetchHttpLibrary } from '../../http/isomorphic-fetch';
import { ResponseContext } from '../../http/http';
import { testMiddleware, buildResponseBody, testApiHttpInfo } from '../utils/testHelper';

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
            return Promise.resolve(new ResponseContext(200, headers, buildResponseBody(mockDataCenter)));
        });
    });

    test('should fetch data center by ID successfully', async () => {
        const dataCenter = await api.getDataCenter(dataCenterId);
        expect(dataCenter).toEqual(mockDataCenter);
    });

    test('should get data center with http info', async () => {
        await testApiHttpInfo(() => api.getDataCenterWithHttpInfo(dataCenterId), mockDataCenter);
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
        await testApiHttpInfo(
            () => getDataCenters(mockDataCenters, () => api.getDataCentersWithHttpInfo()),
            mockDataCenters
        );
    });

    async function getDataCenters(mockDataCenters: DataCenter[], getFunction: Function) {
        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementationOnce(() => {
            const headers = { 'content-type': 'application/json' };
            return Promise.resolve(new ResponseContext(200, headers, buildResponseBody(mockDataCenters)));
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

    it('should modify request and response in middleware', async () => {
        const preParams = { providerName: 'Test Provider' };
        const postParams = { locationId: 42 };

        await testMiddleware(DataCentersApi, 'getDataCenter', mockDataCenter, preParams, postParams);
    });
});
