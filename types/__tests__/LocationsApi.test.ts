import { LocationsApi } from '../LocationsApi';
import { createConfiguration } from '../../configuration';
import { IsomorphicFetchHttpLibrary, ResponseContext } from '../../http/http';

describe('LocationsApi', () => {
    let locationsApi = new LocationsApi(createConfiguration());
    const headers = { 'content-type': 'application/json' };
    const locationId = 1;
    const mockLocation = { name: 'Test Location' };
    const mockLocations = [{ name: 'Location 1' }, { name: 'Location 2' }];

    const buildResponseBody = (data: Object) => ({
        text: () => Promise.resolve(JSON.stringify(data)),
        binary: () => Promise.resolve(new Blob()),
    });

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
        const response = await locationsApi.getLocationWithHttpInfo(locationId);
        expect(response.httpStatusCode).toBe(200);
        const bodyText = await response.body.text();
        expect(bodyText).toEqual(JSON.stringify(mockLocation));
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

        const response = await locationsApi.getLocationsWithHttpInfo();
        expect(response.httpStatusCode).toBe(200);
        const bodyText = await response.body.text();
        expect(bodyText).toEqual(JSON.stringify(mockLocations));
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

    const extendJsonString = (str: string, data: object) => {
        const asJson = JSON.parse(str);
        return JSON.stringify({ ...asJson, ...data });
    };

    it('should modify request and response in middleware', async () => {
        const sendSpy = jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send');
        const preParams = { continent: 'Africa' };
        const postParams = { region: 'Niger' };

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

        const apiWithMiddleware = new LocationsApi(
            createConfiguration({ middleware: [{ pre: preMock, post: postMock }] })
        );

        const response = await apiWithMiddleware.getLocation(locationId);

        expect(preMock).toHaveBeenCalled();
        expect(postMock).toHaveBeenCalled();
        expect(response).toEqual({ ...mockLocation, ...postParams });

        const callArgs = sendSpy.mock.calls[0][0];
        expect(callArgs.getBody()).toEqual(preParams);
    });
});
