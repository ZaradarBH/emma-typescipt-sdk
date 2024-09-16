import { LocationsApi } from '../locationsApi';
import nock from 'nock';
import { Location } from '../../model/location';
import http from 'http';

describe('LocationsApi', () => {
    let api: LocationsApi;
    const basePath = 'https://api.emma.ms/external';
    const headers = { 'content-type': 'application/json' };
    const locationId = 1;
    const mockLocation: Location = { id: 1, name: 'Test Location' };
    const mockLocations: Location[] = [
        { id: 1, name: 'Test Location 1' },
        { id: 2, name: 'Test Location 2' },
    ];

    beforeEach(() => {
        api = new LocationsApi();
        nock.cleanAll();
    });

    it('should fetch location by ID successfully', async () => {
        nock(basePath).get(`/v1/locations/${locationId}`).reply(200, mockLocation, headers);

        const response = await api.getLocation(locationId);
        expect(response.body).toEqual(mockLocation);
    });

    it('should handle error in get location by ID', async () => {
        nock(basePath).get(`/v1/locations/${locationId}`).replyWithError('Network Error');

        await expect(api.getLocation(locationId)).rejects.toThrow('Network Error');
    });

    it('should fetch list of locations successfully', async () => {
        nock(basePath).get('/v1/locations').reply(200, mockLocations, headers);

        const response = await api.getLocations();
        expect(response.body).toEqual(mockLocations);
    });

    it('should handle error in get list of locations', async () => {
        nock(basePath).get('/v1/locations').replyWithError('Network Error');

        await expect(api.getLocations()).rejects.toThrow('Network Error');
    });
});
