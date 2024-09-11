import { SubnetworksApi } from '../SubnetworksApi';
import { createConfiguration } from '../../configuration';
import { IsomorphicFetchHttpLibrary, ResponseContext } from '../../http/http';
import { testMiddleware, buildResponseBody, testApiHttpInfo } from '../utils/testHelper';

describe('SubnetworksApi', () => {
    let subnetworksApi = new SubnetworksApi(createConfiguration());
    const headers = { 'content-type': 'application/json' };
    const subnetworkId = '456';
    const mockSubnetwork = { id: subnetworkId, name: 'Test Subnetwork' };
    const mockSubnetworks = [
        { id: '22', name: 'Test Subnetwork 1' },
        { id: '333', name: 'Test Subnetwork 2' },
    ];

    beforeEach(() => {
        jest.clearAllMocks();
        jest.restoreAllMocks();

        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementation(() => {
            const headers = { 'content-type': 'application/json' };
            return Promise.resolve(new ResponseContext(200, headers, buildResponseBody(mockSubnetwork)));
        });
    });

    it('should get subnetwork by ID', async () => {
        const response = await subnetworksApi.v1SubnetworksSubnetworkIdGet(subnetworkId);
        expect(response).toEqual(mockSubnetwork);
    });

    it('should get subnetwork with http info by ID', async () => {
        await testApiHttpInfo(
            () => subnetworksApi.v1SubnetworksSubnetworkIdGetWithHttpInfo(subnetworkId),
            mockSubnetwork
        );
    });

    it('should get list of subnetworks', async () => {
        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementation(() => {
            return Promise.resolve(new ResponseContext(200, headers, buildResponseBody(mockSubnetworks)));
        });

        const response = await subnetworksApi.v1SubnetworksGet();
        expect(response).toEqual(mockSubnetworks);
    });

    it('should get list of subnetworks with http info', async () => {
        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementation(() => {
            return Promise.resolve(new ResponseContext(200, headers, buildResponseBody(mockSubnetworks)));
        });

        await testApiHttpInfo(() => subnetworksApi.v1SubnetworksGetWithHttpInfo(), mockSubnetworks);
    });

    it('should handle error in get subnetwork', async () => {
        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementationOnce(() => {
            return Promise.reject(new Error('Network Error'));
        });

        await expect(subnetworksApi.v1SubnetworksSubnetworkIdGet(subnetworkId)).rejects.toThrow('Network Error');
    });

    it('should handle error in get subnetworks', async () => {
        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementationOnce(() => {
            return Promise.reject(new Error('Network Error'));
        });

        await expect(subnetworksApi.v1SubnetworksGet()).rejects.toThrow('Network Error');
    });

    it('should call middleware pre and post functions in get subnetwork', async () => {
        const preMock = jest.fn((ctx) => Promise.resolve(ctx));
        const postMock = jest.fn((rsp) => Promise.resolve(rsp));
        const apiWithMiddleware = new SubnetworksApi(
            createConfiguration({ middleware: [{ pre: preMock, post: postMock }] })
        );

        await apiWithMiddleware.v1SubnetworksSubnetworkIdGet(subnetworkId);

        expect(preMock).toHaveBeenCalled();
        expect(postMock).toHaveBeenCalled();
    });

    it('should call middleware pre and post functions in get subnetworks', async () => {
        const preMock = jest.fn((ctx) => Promise.resolve(ctx));
        const postMock = jest.fn((rsp) => Promise.resolve(rsp));
        const apiWithMiddleware = new SubnetworksApi(
            createConfiguration({ middleware: [{ pre: preMock, post: postMock }] })
        );

        await apiWithMiddleware.v1SubnetworksGet();

        expect(preMock).toHaveBeenCalled();
        expect(postMock).toHaveBeenCalled();
    });

    it('should modify request and response in middleware', async () => {
        const preParams = { id: '888' };
        const postParams = {
            id: '333',
            name: 'test name',
            dataCenterId: '123',
            subnetworkPrefix: '_Delhi',
            subnetworkSize: 122,
            resources: { id: 15 },
        };

        await testMiddleware(SubnetworksApi, 'v1SubnetworksSubnetworkIdGet', mockSubnetwork, preParams, postParams);
    });
});
