import { SpotInstancesApi } from '../SpotInstancesApi';
import { createConfiguration } from '../../configuration';
import { IsomorphicFetchHttpLibrary, ResponseContext } from '../../http/http';
import { buildResponseBody, testApiHttpInfo, testMiddleware } from '../utils/testHelper';

describe('SpotInstancesApi', () => {
    let spotInstancesApi = new SpotInstancesApi(createConfiguration());
    const headers = { 'content-type': 'application/json' };
    const spotInstanceId = 1;
    const mockSpotInstance = { id: 1, name: 'Test Spot Instance' };
    const mockSpotInstances = [
        { id: 18, name: 'Spot Instance 1' },
        { id: 28, name: 'Spot Instance 2' },
    ];

    beforeEach(() => {
        jest.clearAllMocks();
        jest.restoreAllMocks();

        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementation(() => {
            return Promise.resolve(new ResponseContext(200, headers, buildResponseBody(mockSpotInstance)));
        });
    });

    it('should get spot instance by ID', async () => {
        const response = await spotInstancesApi.getSpot(spotInstanceId);
        expect(response).toEqual(mockSpotInstance);
    });

    it('should get spot instance with http info by ID', async () => {
        await testApiHttpInfo(() => spotInstancesApi.getSpotWithHttpInfo(spotInstanceId), mockSpotInstance);
    });

    it('should get list of spot instances', async () => {
        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementation(() => {
            return Promise.resolve(new ResponseContext(200, headers, buildResponseBody(mockSpotInstances)));
        });

        const response = await spotInstancesApi.getSpots();
        expect(response).toEqual(mockSpotInstances);
    });

    it('should get list of spot instances with http info', async () => {
        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementation(() => {
            return Promise.resolve(new ResponseContext(200, headers, buildResponseBody(mockSpotInstances)));
        });

        await testApiHttpInfo(() => spotInstancesApi.getSpotsWithHttpInfo(), mockSpotInstances);
    });

    it('should create a spot instance', async () => {
        const response = await spotInstancesApi.spotCreate();
        expect(response).toEqual(mockSpotInstance);
    });

    it('should delete a spot instance', async () => {
        const response = await spotInstancesApi.spotDelete(spotInstanceId);
        expect(response).toEqual(mockSpotInstance);
    });

    it('should call middleware pre and post functions', async () => {
        const preMock = jest.fn((ctx) => Promise.resolve(ctx));
        const postMock = jest.fn((rsp) => Promise.resolve(rsp));
        const apiWithMiddleware = new SpotInstancesApi(
            createConfiguration({ middleware: [{ pre: preMock, post: postMock }] })
        );

        await apiWithMiddleware.getSpot(spotInstanceId);

        expect(preMock).toHaveBeenCalled();
        expect(postMock).toHaveBeenCalled();
    });

    it('should modify request and response in middleware', async () => {
        const preParams = { spotInstanceId: 1111 };
        const postParams = { id: 1, name: 'Modified Spot Instance' };

        await testMiddleware(SpotInstancesApi, 'getSpot', mockSpotInstance, preParams, postParams);
    });
});
