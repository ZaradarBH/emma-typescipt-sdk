import { ComputeInstancesConfigurationsApi } from '../computeInstancesConfigurationsApi';
import nock from 'nock';

describe('ComputeInstancesConfigurationsApi', () => {
    let api: ComputeInstancesConfigurationsApi;
    const basePath = 'https://api.emma.ms/external';
    const headers = { 'content-type': 'application/json' };
    const testBody = { totalPages: 32 };

    beforeEach(() => {
        api = new ComputeInstancesConfigurationsApi();
        nock.cleanAll();
    });

    it('should get Kubernetes nodes configs', async () => {
        nock(basePath)
            .get('/v1/kubernetes-configs')
            .query({
                providerId: 1,
                locationId: 1,
                dataCenterId: 'dc1',
                vCpuType: 'standard',
                vCpu: 4,
                vCpuMin: 2,
                vCpuMax: 8,
                ramGb: 16,
                ramGbMin: 8,
                ramGbMax: 32,
                volumeGb: 100,
                volumeGbMin: 50,
                volumeGbMax: 200,
                volumeType: 'ssd',
                priceMin: 10,
                priceMax: 50,
                page: 1,
                size: 10,
            })
            .reply(200, testBody, headers);

        const response = await api.getKuberNodesConfigs(
            1,
            1,
            'dc1',
            'standard',
            4,
            2,
            8,
            16,
            8,
            32,
            100,
            50,
            200,
            'ssd',
            10,
            50,
            1,
            10
        );
        expect(response.body).toEqual(testBody);
    });

    it('should handle error in get Kubernetes nodes configs', async () => {
        nock(basePath)
            .get('/v1/kubernetes-configs')
            .query({
                providerId: 1,
                locationId: 1,
                dataCenterId: 'dc1',
                vCpuType: 'standard',
                vCpu: 4,
                vCpuMin: 2,
                vCpuMax: 8,
                ramGb: 16,
                ramGbMin: 8,
                ramGbMax: 32,
                volumeGb: 100,
                volumeGbMin: 50,
                volumeGbMax: 200,
                volumeType: 'ssd',
                priceMin: 10,
                priceMax: 50,
                page: 1,
                size: 10,
            })
            .replyWithError('Network Error');

        await expect(
            api.getKuberNodesConfigs(1, 1, 'dc1', 'standard', 4, 2, 8, 16, 8, 32, 100, 50, 200, 'ssd', 10, 50, 1, 10)
        ).rejects.toThrow('Network Error');
    });

    it('should get spot configs', async () => {
        nock(basePath)
            .get('/v1/spots-configs')
            .query({
                providerId: 1,
                locationId: 1,
                dataCenterId: 'dc1',
                cloudNetworkType: 'default',
                vCpuType: 'standard',
                vCpu: 4,
                vCpuMin: 2,
                vCpuMax: 8,
                ramGb: 16,
                ramGbMin: 8,
                ramGbMax: 32,
                volumeGb: 100,
                volumeGbMin: 50,
                volumeGbMax: 200,
                volumeType: 'ssd',
                priceMin: 10,
                priceMax: 50,
                page: 1,
                size: 10,
            })
            .reply(200, testBody, headers);

        const response = await api.getSpotConfigs(
            1,
            1,
            'dc1',
            'default',
            'standard',
            4,
            2,
            8,
            16,
            8,
            32,
            100,
            50,
            200,
            'ssd',
            10,
            50,
            1,
            10
        );
        expect(response.body).toEqual(testBody);
    });

    it('should handle error in get spot configs', async () => {
        nock(basePath)
            .get('/v1/spots-configs')
            .query({
                providerId: 1,
                locationId: 1,
                dataCenterId: 'dc1',
                cloudNetworkType: 'default',
                vCpuType: 'standard',
                vCpu: 4,
                vCpuMin: 2,
                vCpuMax: 8,
                ramGb: 16,
                ramGbMin: 8,
                ramGbMax: 32,
                volumeGb: 100,
                volumeGbMin: 50,
                volumeGbMax: 200,
                volumeType: 'ssd',
                priceMin: 10,
                priceMax: 50,
                page: 1,
                size: 10,
            })
            .replyWithError('Network Error');

        await expect(
            api.getSpotConfigs(
                1,
                1,
                'dc1',
                'default',
                'standard',
                4,
                2,
                8,
                16,
                8,
                32,
                100,
                50,
                200,
                'ssd',
                10,
                50,
                1,
                10
            )
        ).rejects.toThrow('Network Error');
    });

    it('should get VM configs', async () => {
        nock(basePath)
            .get('/v1/vms-configs')
            .query({
                providerId: 1,
                locationId: 1,
                dataCenterId: 'dc1',
                cloudNetworkType: 'default',
                vCpuType: 'standard',
                vCpu: 4,
                vCpuMin: 2,
                vCpuMax: 8,
                ramGb: 16,
                ramGbMin: 8,
                ramGbMax: 32,
                volumeGb: 100,
                volumeGbMin: 50,
                volumeGbMax: 200,
                volumeType: 'ssd',
                priceMin: 10,
                priceMax: 50,
                page: 1,
                size: 10,
            })
            .reply(200, testBody, headers);

        const response = await api.getVmConfigs(
            1,
            1,
            'dc1',
            'default',
            'standard',
            4,
            2,
            8,
            16,
            8,
            32,
            100,
            50,
            200,
            'ssd',
            10,
            50,
            1,
            10
        );
        expect(response.body).toEqual(testBody);
    });

    it('should handle error in get VM configs', async () => {
        nock(basePath)
            .get('/v1/vms-configs')
            .query({
                providerId: 1,
                locationId: 1,
                dataCenterId: 'dc1',
                cloudNetworkType: 'default',
                vCpuType: 'standard',
                vCpu: 4,
                vCpuMin: 2,
                vCpuMax: 8,
                ramGb: 16,
                ramGbMin: 8,
                ramGbMax: 32,
                volumeGb: 100,
                volumeGbMin: 50,
                volumeGbMax: 200,
                volumeType: 'ssd',
                priceMin: 10,
                priceMax: 50,
                page: 1,
                size: 10,
            })
            .replyWithError('Network Error');

        await expect(
            api.getVmConfigs(1, 1, 'dc1', 'default', 'standard', 4, 2, 8, 16, 8, 32, 100, 50, 200, 'ssd', 10, 50, 1, 10)
        ).rejects.toThrow('Network Error');
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
            .get('/v1/vms-configs')
            .query({
                providerId: 1,
                locationId: 1,
                dataCenterId: 'dc1',
                cloudNetworkType: 'default',
                vCpuType: 'standard',
                vCpu: 4,
                vCpuMin: 2,
                vCpuMax: 8,
                ramGb: 16,
                ramGbMin: 8,
                ramGbMax: 32,
                volumeGb: 100,
                volumeGbMin: 50,
                volumeGbMax: 200,
                volumeType: 'ssd',
                priceMin: 10,
                priceMax: 50,
                page: 1,
                size: 10,
            })
            .reply(200, testBody, headers);

        await api.getVmConfigs(
            1,
            1,
            'dc1',
            'default',
            'standard',
            4,
            2,
            8,
            16,
            8,
            32,
            100,
            50,
            200,
            'ssd',
            10,
            50,
            1,
            10
        );

        expect(interceptor).toHaveBeenCalled();
    });
});
