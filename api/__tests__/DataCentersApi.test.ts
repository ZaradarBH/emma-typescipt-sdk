import { DataCentersApi } from '../dataCentersApi';
import nock from 'nock';

describe('DataCentersApi', () => {
    let api: DataCentersApi;
    const basePath = 'https://api.emma.ms/external';
    const headers = { 'content-type': 'application/json' };
    const dataCenterId = 'dc-123';
    const mockDataCenter = {
        id: 'dc-123',
        name: 'Test Data Center',
        providerName: 'Test Provider',
        locationName: 'Test Location',
    };
    const mockDataCenters = [
        { id: 'dc-123', name: 'Test Data Center 1', providerName: 'Test Provider', locationName: 'Test Location' },
        { id: 'dc-456', name: 'Test Data Center 2', providerName: 'Test Provider', locationName: 'Test Location' },
    ];

    beforeEach(() => {
        api = new DataCentersApi();
        nock.cleanAll();
    });

    it('should fetch data center by ID successfully', async () => {
        nock(basePath).get(`/v1/data-centers/${dataCenterId}`).reply(200, mockDataCenter, headers);

        const response = await api.getDataCenter(dataCenterId);
        expect(response.body).toEqual(mockDataCenter);
    });

    it('should handle error in get data center by ID', async () => {
        nock(basePath).get(`/v1/data-centers/${dataCenterId}`).replyWithError('Network Error');

        await expect(api.getDataCenter(dataCenterId)).rejects.toThrow('Network Error');
    });

    it('should fetch list of data centers successfully', async () => {
        nock(basePath)
            .get('/v1/data-centers')
            .query({
                dataCenterName: 'Test Data Center',
                locationId: 1,
                providerName: 'Test Provider',
            })
            .reply(200, mockDataCenters, headers);

        const response = await api.getDataCenters('Test Data Center', 1, 'Test Provider');
        expect(response.body).toEqual(mockDataCenters);
    });

    it('should handle error in get list of data centers', async () => {
        nock(basePath)
            .get('/v1/data-centers')
            .query({
                dataCenterName: 'Test Data Center',
                locationId: 1,
                providerName: 'Test Provider',
            })
            .replyWithError('Network Error');

        await expect(api.getDataCenters('Test Data Center', 1, 'Test Provider')).rejects.toThrow('Network Error');
    });

    it('should call interceptors', async () => {
        const interceptor = jest.fn((options) => {
            options.headers['x-interceptor-called'] = 'true';
            return Promise.resolve();
        });
        api.addInterceptor(interceptor);

        nock(basePath, {
            reqheaders: {
                'x-interceptor-called': 'true',
            },
        })
            .get('/v1/data-centers')
            .reply(200, mockDataCenters, headers);

        await api.getDataCenters();

        expect(interceptor).toHaveBeenCalled();
    });
});
