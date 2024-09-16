import { SpotInstancesApi } from '../spotInstancesApi';
import nock from 'nock';
import { Vm } from '../../model/vm';
import { SpotCreate } from '../../model/spotCreate';
import { SpotActionsRequest } from '../../model/spotActionsRequest';
import ActionEnum = SpotActionsRequest.ActionEnum;

describe('SpotInstancesApi', () => {
    let api: SpotInstancesApi;
    const basePath = 'https://api.emma.ms/external';
    const headers = { 'content-type': 'application/json' };
    const spotInstanceId = 1;
    const mockVm: Vm = { id: 1, name: 'Test VM' };
    const mockSpotCreate: SpotCreate = {
        name: 'Test Spot Instance',
        dataCenterId: 'dc-1',
        osId: 1,
        cloudNetworkType: SpotCreate.CloudNetworkTypeEnum.Default,
        vCpuType: SpotCreate.VCpuTypeEnum.Standard,
        vCpu: 2,
        ramGb: 4,
        volumeType: SpotCreate.VolumeTypeEnum.Ssd,
        volumeGb: 100,
        sshKeyId: 1,
        securityGroupId: 1,
        price: 0.05,
    };
    const mockSpotActionsRequest: SpotActionsRequest = {
        action: ActionEnum.Reboot,
    };
    beforeEach(() => {
        api = new SpotInstancesApi();
        nock.cleanAll();
    });

    it('should fetch spot instance by ID successfully', async () => {
        nock(basePath).get(`/v1/spot-instances/${spotInstanceId}`).reply(200, mockVm, headers);

        const response = await api.getSpot(spotInstanceId);
        expect(response.body).toEqual(mockVm);
    });

    it('should handle error in fetch spot instance by ID', async () => {
        nock(basePath).get(`/v1/spot-instances/${spotInstanceId}`).replyWithError('Network Error');

        await expect(api.getSpot(spotInstanceId)).rejects.toThrow('Network Error');
    });

    it('should fetch list of spot instances successfully', async () => {
        nock(basePath).get('/v1/spot-instances').reply(200, [mockVm], headers);

        const response = await api.getSpots();
        expect(response.body).toEqual([mockVm]);
    });

    it('should handle error in fetch list of spot instances', async () => {
        nock(basePath).get('/v1/spot-instances').replyWithError('Network Error');

        await expect(api.getSpots()).rejects.toThrow('Network Error');
    });

    it('should create spot instance successfully', async () => {
        nock(basePath).post('/v1/spot-instances').reply(201, mockVm, headers);

        const response = await api.spotCreate(mockSpotCreate);
        expect(response.body).toEqual(mockVm);
    });

    it('should handle error in create spot instance', async () => {
        nock(basePath).post('/v1/spot-instances').replyWithError('Network Error');

        await expect(api.spotCreate(mockSpotCreate)).rejects.toThrow('Network Error');
    });

    it('should delete spot instance successfully', async () => {
        nock(basePath).delete(`/v1/spot-instances/${spotInstanceId}`).reply(204, {}, headers);

        const response = await api.spotDelete(spotInstanceId);
        expect(response.response.statusCode).toBe(204);
    });

    it('should handle error in delete spot instance', async () => {
        nock(basePath).delete(`/v1/spot-instances/${spotInstanceId}`).replyWithError('Network Error');

        await expect(api.spotDelete(spotInstanceId)).rejects.toThrow('Network Error');
    });

    it('should perform actions with spot instance successfully', async () => {
        nock(basePath).post(`/v1/spot-instances/${spotInstanceId}/actions`).reply(200, mockVm, headers);

        const response = await api.spotActions(spotInstanceId, mockSpotActionsRequest);
        expect(response.body).toEqual(mockVm);
    });

    it('should handle error in perform actions with spot instance', async () => {
        nock(basePath).post(`/v1/spot-instances/${spotInstanceId}/actions`).replyWithError('Network Error');

        await expect(api.spotActions(spotInstanceId, mockSpotActionsRequest)).rejects.toThrow('Network Error');
    });
});
