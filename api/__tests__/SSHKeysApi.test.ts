import { SSHKeysApi } from '../sSHKeysApi';
import nock from 'nock';
import { SshKey } from '../../model/sshKey';
import { SshKeysCreateImportRequest } from '../../model/sshKeysCreateImportRequest';
import { SshKeysCreateImport201Response } from '../../model/sshKeysCreateImport201Response';
import { SshKeyUpdate } from '../../model/sshKeyUpdate';
import { SshKeyCreate } from '../../model/sshKeyCreate';

describe('SSHKeysApi', () => {
    let api: SSHKeysApi;
    const basePath = 'https://api.emma.ms/external';
    const headers = { 'content-type': 'application/json' };
    const sshKeyId = 1;
    const mockSshKey: SshKey = { id: 1, name: 'Test SSH Key' };
    const mockSshKeysCreateImportRequest: SshKeysCreateImportRequest = {
        name: 'Test SSH Key',
        key: 'ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAr...',
        keyType: SshKeyCreate.KeyTypeEnum.Rsa,
    };
    const mockSshKeysCreateImport201Response: SshKeysCreateImport201Response = {
        id: 1,
        name: 'Test SSH Key',
        key: 'ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAr...',
        privateKey: '-----BEGIN PRIVATE KEY-----...',
    };
    const mockSshKeyUpdate: SshKeyUpdate = {
        name: 'Updated SSH Key',
    };

    beforeEach(() => {
        api = new SSHKeysApi();
        nock.cleanAll();
    });

    it('should create or import SSH key successfully', async () => {
        nock(basePath).post('/v1/ssh-keys').reply(201, mockSshKeysCreateImport201Response, headers);

        const response = await api.sshKeysCreateImport(mockSshKeysCreateImportRequest);
        expect(response.body).toEqual(mockSshKeysCreateImport201Response);
    });

    it('should handle error in create or import SSH key', async () => {
        nock(basePath).post('/v1/ssh-keys').replyWithError('Network Error');

        await expect(api.sshKeysCreateImport(mockSshKeysCreateImportRequest)).rejects.toThrow('Network Error');
    });

    it('should fetch SSH key by ID successfully', async () => {
        nock(basePath).get(`/v1/ssh-keys/${sshKeyId}`).reply(200, mockSshKey, headers);

        const response = await api.getSshKey(sshKeyId);
        expect(response.body).toEqual(mockSshKey);
    });

    it('should handle error in fetch SSH key by ID', async () => {
        nock(basePath).get(`/v1/ssh-keys/${sshKeyId}`).replyWithError('Network Error');

        await expect(api.getSshKey(sshKeyId)).rejects.toThrow('Network Error');
    });

    it('should delete SSH key successfully', async () => {
        nock(basePath).delete(`/v1/ssh-keys/${sshKeyId}`).reply(204, {}, headers);

        const response = await api.sshKeyDelete(sshKeyId);
        expect(response.response.statusCode).toBe(204);
    });

    it('should handle error in delete SSH key', async () => {
        nock(basePath).delete(`/v1/ssh-keys/${sshKeyId}`).replyWithError('Network Error');

        await expect(api.sshKeyDelete(sshKeyId)).rejects.toThrow('Network Error');
    });

    it('should update SSH key successfully', async () => {
        nock(basePath).put(`/v1/ssh-keys/${sshKeyId}`).reply(200, mockSshKey, headers);

        const response = await api.sshKeyUpdate(sshKeyId, mockSshKeyUpdate);
        expect(response.body).toEqual(mockSshKey);
    });

    it('should handle error in update SSH key', async () => {
        nock(basePath).put(`/v1/ssh-keys/${sshKeyId}`).replyWithError('Network Error');

        await expect(api.sshKeyUpdate(sshKeyId, mockSshKeyUpdate)).rejects.toThrow('Network Error');
    });

    it('should fetch list of SSH keys successfully', async () => {
        nock(basePath).get('/v1/ssh-keys').reply(200, [mockSshKey], headers);

        const response = await api.sshKeys();
        expect(response.body).toEqual([mockSshKey]);
    });

    it('should handle error in fetch list of SSH keys', async () => {
        nock(basePath).get('/v1/ssh-keys').replyWithError('Network Error');

        await expect(api.sshKeys()).rejects.toThrow('Network Error');
    });
});
