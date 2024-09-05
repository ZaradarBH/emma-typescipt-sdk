import { LocationsApi } from '../LocationsApi';
import { createConfiguration } from '../../configuration';
import { IsomorphicFetchHttpLibrary, ResponseContext } from '../../http/http';
import { testMiddleware, buildResponseBody, testApiHttpInfo } from './utils';

describe('LocationsApi', () => {
    let locationsApi = new LocationsApi(createConfiguration());
    const headers = { 'content-type': 'application/json' };
    const locationId = 1;
    const mockLocation = { name: 'Test Location' };
    const mockLocations = [{ name: 'Location 1' }, { name: 'Location 2' }];

    beforeEach(() => {
        jest.clearAllMocks();
        jest.restoreAllMocks();

        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementation(() => {
            const headers = { 'content-type': 'application/json' };
            return Promise.resolve(new ResponseContext(200, headers, buildResponseBody(mockLocation)));
        });
    });

    it('should get location by ID', async () => {
        const response = await locationsApi.getLocation(locationId);
        expect(response).toEqual(mockLocation);
    });

    it('should get location with http info by ID', async () => {
        await testApiHttpInfo(() => locationsApi.getLocationWithHttpInfo(locationId), mockLocation);
    });

    it('should get list of locations', async () => {
        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementation(() => {
            return Promise.resolve(new ResponseContext(200, headers, buildResponseBody(mockLocations)));
        });

        const response = await locationsApi.getLocations();
        expect(response).toEqual(mockLocations);
    });

    it('should get list of locations with http info', async () => {
        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementation(() => {
            return Promise.resolve(new ResponseContext(200, headers, buildResponseBody(mockLocations)));
        });

        await testApiHttpInfo(() => locationsApi.getLocationsWithHttpInfo(), mockLocations);
    });

    it('should call middleware pre and post functions', async () => {
        const preMock = jest.fn((ctx) => Promise.resolve(ctx));
        const postMock = jest.fn((rsp) => Promise.resolve(rsp));
        const apiWithMiddleware = new LocationsApi(
            createConfiguration({ middleware: [{ pre: preMock, post: postMock }] })
        );

        await apiWithMiddleware.getLocation(locationId);

        expect(preMock).toHaveBeenCalled();
        expect(postMock).toHaveBeenCalled();
    });

    it('should modify request and response in middleware', async () => {
        const preParams = { continent: 'Africa' };
        const postParams = { region: 'Niger' };

        await testMiddleware(LocationsApi, 'getLocation', mockLocation, preParams, postParams);
    });
});
