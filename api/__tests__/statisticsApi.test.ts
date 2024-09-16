import { StatisticsApi } from '../statisticsApi';
import nock from 'nock';
import { GetStatisticalDataRequest } from '../../model/getStatisticalDataRequest';
import { VmMonitoringQueryFilters } from '../../model/vmMonitoringQueryFilters';

describe('StatisticsApi', () => {
    let api: StatisticsApi;
    const basePath = 'https://api.emma.ms/external';
    const headers = { 'content-type': 'application/json' };
    const mockGetStatisticalDataRequest = {
        datasetName: GetStatisticalDataRequest.DatasetNameEnum.Analytics,
        filters: { period: VmMonitoringQueryFilters.PeriodEnum._15M },
        coreClusterId: 131,
        vmId: 15,
    };
    const mockGetStatisticalData200Response = {};

    beforeEach(() => {
        api = new StatisticsApi();
        nock.cleanAll();
    });

    it('should fetch statistical data successfully', async () => {
        nock(basePath).post('/v1/statistics/retrieve').reply(200, mockGetStatisticalData200Response, headers);

        const response = await api.getStatisticalData(mockGetStatisticalDataRequest);
        expect(response.body).toEqual(mockGetStatisticalData200Response);
    });

    it('should handle error in fetch statistical data', async () => {
        nock(basePath).post('/v1/statistics/retrieve').replyWithError('Network Error');

        await expect(api.getStatisticalData(mockGetStatisticalDataRequest)).rejects.toThrow('Network Error');
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
            .post('/v1/statistics/retrieve')
            .reply(200, mockGetStatisticalData200Response, headers);

        await api.getStatisticalData(mockGetStatisticalDataRequest);

        expect(interceptor).toHaveBeenCalled();
    });
});
