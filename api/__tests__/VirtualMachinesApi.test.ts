import { VirtualMachinesApi } from '../virtualMachinesApi';
import nock from 'nock';
import { VmActionsRequest } from '../../model/vmActionsRequest';
import { VmCreate } from '../../model/vmCreate';

describe('VirtualMachinesApi', () => {
    let api: VirtualMachinesApi;
    const basePath = 'https://api.emma.ms/external';
    const headers = { 'content-type': 'application/json' };
    const vmId = 1;
    const mockVm = { id: 1, name: 'Test VM' };
    const mockVmCreate = {
        name: 'Test VM',
        dataCenterId: 'dc-123',
        osId: 1,
        cloudNetworkType: VmCreate.CloudNetworkTypeEnum.Default,
        vCpuType: VmCreate.VCpuTypeEnum.Standard,
        vCpu: 2,
        ramGb: 4,
        volumeType: VmCreate.VolumeTypeEnum.Ssd,
        volumeGb: 100,
        sshKeyId: 1,
    };
    const mockVmActionsRequest = {
        action: VmActionsRequest.ActionEnum.Edithardware,
        dataCenterId: 'dc-123',
        name: 'Test VM',
        vCpu: 2,
        ramGb: 4,
        volumeGb: 100,
    };

    beforeEach(() => {
        api = new VirtualMachinesApi();
        nock.cleanAll();
    });

    it('should create virtual machine successfully', async () => {
        nock(basePath).post('/v1/vms').reply(201, mockVm, headers);

        const response = await api.vmCreate(mockVmCreate);
        expect(response.body).toEqual(mockVm);
    });

    it('should handle error in create virtual machine', async () => {
        nock(basePath).post('/v1/vms').replyWithError('Network Error');

        await expect(api.vmCreate(mockVmCreate)).rejects.toThrow('Network Error');
    });

    it('should fetch virtual machine by ID successfully', async () => {
        nock(basePath).get(`/v1/vms/${vmId}`).reply(200, mockVm, headers);

        const response = await api.getVm(vmId);
        expect(response.body).toEqual(mockVm);
    });

    it('should handle error in fetch virtual machine by ID', async () => {
        nock(basePath).get(`/v1/vms/${vmId}`).replyWithError('Network Error');

        await expect(api.getVm(vmId)).rejects.toThrow('Network Error');
    });

    it('should delete virtual machine successfully', async () => {
        nock(basePath).delete(`/v1/vms/${vmId}`).reply(204, {}, headers);

        const response = await api.vmDelete(vmId);
        expect(response.response.statusCode).toBe(204);
    });

    it('should handle error in delete virtual machine', async () => {
        nock(basePath).delete(`/v1/vms/${vmId}`).replyWithError('Network Error');

        await expect(api.vmDelete(vmId)).rejects.toThrow('Network Error');
    });

    it('should fetch list of virtual machines successfully', async () => {
        nock(basePath).get('/v1/vms').reply(200, [mockVm], headers);

        const response = await api.getVms();
        expect(response.body).toEqual([mockVm]);
    });

    it('should handle error in fetch list of virtual machines', async () => {
        nock(basePath).get('/v1/vms').replyWithError('Network Error');

        await expect(api.getVms()).rejects.toThrow('Network Error');
    });

    it('should perform actions with a virtual machine successfully', async () => {
        nock(basePath).post(`/v1/vms/${vmId}/actions`).reply(200, mockVm, headers);

        const response = await api.vmActions(vmId, mockVmActionsRequest);
        expect(response.body).toEqual(mockVm);
    });

    it('should handle error in perform actions with a virtual machine', async () => {
        nock(basePath).post(`/v1/vms/${vmId}/actions`).replyWithError('Network Error');

        await expect(api.vmActions(vmId, mockVmActionsRequest)).rejects.toThrow('Network Error');
    });
});
