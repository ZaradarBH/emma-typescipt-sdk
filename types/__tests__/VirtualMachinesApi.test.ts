import { VirtualMachinesApi } from '../VirtualMachinesApi';
import { createConfiguration } from '../../configuration';
import { IsomorphicFetchHttpLibrary, ResponseContext } from '../../http/http';
import { buildResponseBody, testApiHttpInfo, testMiddleware } from '../utils/testHelper';
import { VmStatusEnum } from '../../models/Vm';

describe('VirtualMachinesApi', () => {
    let virtualMachinesApi = new VirtualMachinesApi(createConfiguration());
    const headers = { 'content-type': 'application/json' };
    const vmId = 1;
    const mockVm = { id: 1, name: 'Test VM' };
    const mockVms = [
        { id: 555, name: 'VM 1' },
        { id: 666, name: 'VM 2' },
    ];

    beforeEach(() => {
        jest.clearAllMocks();
        jest.restoreAllMocks();

        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementation(() => {
            return Promise.resolve(new ResponseContext(200, headers, buildResponseBody(mockVm)));
        });
    });

    it('should get virtual machine by ID', async () => {
        const response = await virtualMachinesApi.getVm(vmId);
        expect(response).toEqual(mockVm);
    });

    it('should get virtual machine with http info by ID', async () => {
        await testApiHttpInfo(() => virtualMachinesApi.getVmWithHttpInfo(vmId), mockVm);
    });

    it('should get list of virtual machines', async () => {
        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementation(() => {
            return Promise.resolve(new ResponseContext(200, headers, buildResponseBody(mockVms)));
        });

        const response = await virtualMachinesApi.getVms();
        expect(response).toEqual(mockVms);
    });

    it('should get list of virtual machines with http info', async () => {
        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementation(() => {
            return Promise.resolve(new ResponseContext(200, headers, buildResponseBody(mockVms)));
        });

        await testApiHttpInfo(() => virtualMachinesApi.getVmsWithHttpInfo(), mockVms);
    });

    it('should create a virtual machine', async () => {
        const response = await virtualMachinesApi.vmCreate();
        expect(response).toEqual(mockVm);
    });

    it('should delete a virtual machine', async () => {
        const response = await virtualMachinesApi.vmDelete(vmId);
        expect(response).toEqual(mockVm);
    });

    it('should call middleware pre and post functions', async () => {
        const preMock = jest.fn((ctx) => Promise.resolve(ctx));
        const postMock = jest.fn((rsp) => Promise.resolve(rsp));
        const apiWithMiddleware = new VirtualMachinesApi(
            createConfiguration({ middleware: [{ pre: preMock, post: postMock }] })
        );

        await apiWithMiddleware.getVm(vmId);

        expect(preMock).toHaveBeenCalled();
        expect(postMock).toHaveBeenCalled();
    });

    it('should modify request and response in middleware', async () => {
        const preParams = { vmId: 1111 };
        const postParams = {
            id: 569,
            createdAt: '2023',
            createdByName: 'creator',
            createdById: '142',
            modifiedAt: '2024',
            modifiedByName: 'modifier',
            modifiedById: 317,
            name: 'Some Name',
            projectId: 305,
            status: VmStatusEnum.Busy,
            provider: { id: 5 },
            location: { id: 7 },
            dataCenter: { id: 8 },
            os: { id: 9 },
            vCpu: 5,
            ramGb: 512,
            sshKeyId: 13,
            userName: 'User',
        };

        await testMiddleware(VirtualMachinesApi, 'getVm', mockVm, preParams, postParams);
    });
});
