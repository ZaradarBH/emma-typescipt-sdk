import { SecurityGroupsApi } from '../securityGroupsApi';
import nock from 'nock';
import { SecurityGroupInstanceAdd } from '../../model/securityGroupInstanceAdd';
import { Vm } from '../../model/vm';
import { SecurityGroupRuleRequest } from '../../model/securityGroupRuleRequest';
import ProtocolEnum = SecurityGroupRuleRequest.ProtocolEnum;

describe('SecurityGroupsApi', () => {
    let api: SecurityGroupsApi;
    const basePath = 'https://api.emma.ms/external';
    const headers = { 'content-type': 'application/json' };
    const securityGroupId = 1;
    const mockSecurityGroup = { id: 1, name: 'Test Security Group' };
    const mockVm: Vm = { id: 1, name: 'Test VM' };
    const mockSecurityGroupRequest = {
        name: 'Updated Security Group',
        rules: [
            {
                direction: SecurityGroupRuleRequest.DirectionEnum.Inbound,
                protocol: ProtocolEnum.Tcp,
                ports: '80',
                ipRange: '192.168.0.0/16',
            },
            {
                direction: SecurityGroupRuleRequest.DirectionEnum.Outbound,
                protocol: ProtocolEnum.Udp,
                ports: '53',
                ipRange: '10.0.0.0/8',
            },
        ],
    };
    const mockSecurityGroupInstanceAdd: SecurityGroupInstanceAdd = { instanceId: 1 };

    beforeEach(() => {
        api = new SecurityGroupsApi();
        nock.cleanAll();
    });

    it('should create security group successfully', async () => {
        nock(basePath).post('/v1/security-groups').reply(201, mockSecurityGroup, headers);

        const response = await api.securityGroupCreate(mockSecurityGroupRequest);
        expect(response.body).toEqual(mockSecurityGroup);
    });

    it('should handle error in create security group', async () => {
        nock(basePath).post('/v1/security-groups').replyWithError('Network Error');

        await expect(api.securityGroupCreate(mockSecurityGroupRequest)).rejects.toThrow('Network Error');
    });

    it('should delete security group successfully', async () => {
        nock(basePath).delete(`/v1/security-groups/${securityGroupId}`).reply(204, {}, headers);

        const response = await api.securityGroupDelete(securityGroupId);
        expect(response.response.statusCode).toBe(204);
    });

    it('should handle error in delete security group', async () => {
        nock(basePath).delete(`/v1/security-groups/${securityGroupId}`).replyWithError('Network Error');

        await expect(api.securityGroupDelete(securityGroupId)).rejects.toThrow('Network Error');
    });

    it('should add instance to security group successfully', async () => {
        nock(basePath).post(`/v1/security-groups/${securityGroupId}/instances`).reply(200, mockVm, headers);

        const response = await api.securityGroupInstanceAdd(securityGroupId, mockSecurityGroupInstanceAdd);
        expect(response.body).toEqual(mockVm);
    });

    it('should handle error in add instance to security group', async () => {
        nock(basePath).post(`/v1/security-groups/${securityGroupId}/instances`).replyWithError('Network Error');

        await expect(api.securityGroupInstanceAdd(securityGroupId, mockSecurityGroupInstanceAdd)).rejects.toThrow(
            'Network Error'
        );
    });

    it('should update security group successfully', async () => {
        nock(basePath).put(`/v1/security-groups/${securityGroupId}`).reply(200, mockSecurityGroup, headers);

        const response = await api.securityGroupUpdate(securityGroupId, mockSecurityGroupRequest);
        expect(response.body).toEqual(mockSecurityGroup);
    });

    it('should handle error in update security group', async () => {
        nock(basePath).put(`/v1/security-groups/${securityGroupId}`).replyWithError('Network Error');

        await expect(api.securityGroupUpdate(securityGroupId, mockSecurityGroupRequest)).rejects.toThrow(
            'Network Error'
        );
    });

    it('should fetch instances in security group successfully', async () => {
        nock(basePath).get(`/v1/security-groups/${securityGroupId}/instances`).reply(200, [mockVm], headers);

        const response = await api.securityGroupInstances(securityGroupId);
        expect(response.body).toEqual([mockVm]);
    });

    it('should handle error in fetch instances in security group', async () => {
        nock(basePath).get(`/v1/security-groups/${securityGroupId}/instances`).replyWithError('Network Error');

        await expect(api.securityGroupInstances(securityGroupId)).rejects.toThrow('Network Error');
    });

    it('should fetch list of security groups successfully', async () => {
        nock(basePath).get('/v1/security-groups').reply(200, [mockSecurityGroup], headers);

        const response = await api.getSecurityGroups();
        expect(response.body).toEqual([mockSecurityGroup]);
    });

    it('should handle error in fetch list of security groups', async () => {
        nock(basePath).get('/v1/security-groups').replyWithError('Network Error');

        await expect(api.getSecurityGroups()).rejects.toThrow('Network Error');
    });

    it('should fetch security group by ID successfully', async () => {
        nock(basePath).get(`/v1/security-groups/${securityGroupId}`).reply(200, mockSecurityGroup, headers);

        const response = await api.getSecurityGroup(securityGroupId);
        expect(response.body).toEqual(mockSecurityGroup);
    });

    it('should handle error in fetch security group by ID', async () => {
        nock(basePath).get(`/v1/security-groups/${securityGroupId}`).replyWithError('Network Error');

        await expect(api.getSecurityGroup(securityGroupId)).rejects.toThrow('Network Error');
    });
});
