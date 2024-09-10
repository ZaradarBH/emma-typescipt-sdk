import { SSHKeysApi } from '../SSHKeysApi';
import { createConfiguration } from '../../configuration';
import { IsomorphicFetchHttpLibrary, ResponseContext } from '../../http/http';
import { testMiddleware, buildResponseBody, testApiHttpInfo } from '../utils/testHelper';

describe('SSHKeysApi', () => {
    let sshKeysApi = new SSHKeysApi(createConfiguration());
    const headers = { 'content-type': 'application/json' };
    const sshKeyId = 1;
    const mockSshKey = { id: sshKeyId, name: 'test-key', key: 'ssh-rsa AAA...' };
    const mockSshKeys = [
        { id: 888, name: 'key1', key: 'ssh-rsa bla-bla' },
        { id: 999, name: 'key2', key: 'wat?' },
    ];
    const mockSshKeysCreateImportResponse = { id: 3, name: 'new-key', key: 'ssh-rsa CCC...' };

    beforeEach(() => {
        jest.clearAllMocks();
        jest.restoreAllMocks();

        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementation(() => {
            return Promise.resolve(new ResponseContext(200, headers, buildResponseBody(mockSshKey)));
        });
    });

    it('should get SSH key by ID', async () => {
        const response = await sshKeysApi.getSshKey(sshKeyId);
        expect(response).toEqual(mockSshKey);
    });

    it('should get SSH key with http info by ID', async () => {
        await testApiHttpInfo(() => sshKeysApi.getSshKeyWithHttpInfo(sshKeyId), mockSshKey);
    });

    it('should delete SSH key by ID', async () => {
        const response = await sshKeysApi.sshKeyDelete(sshKeyId);
        expect(response).toStrictEqual(mockSshKey);
    });

    it('should update SSH key by ID', async () => {
        const sshKeyUpdate = { name: 'updated-key' };
        const updatedSshKey = { id: sshKeyId, name: 'updated-key', key: 'ssh-rsa AAA...' };

        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementation(() => {
            return Promise.resolve(new ResponseContext(200, headers, buildResponseBody(updatedSshKey)));
        });

        const response = await sshKeysApi.sshKeyUpdate(sshKeyId, sshKeyUpdate);
        expect(response).toEqual(updatedSshKey);
    });

    it('should get list of SSH keys', async () => {
        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementation(() => {
            return Promise.resolve(new ResponseContext(200, headers, buildResponseBody(mockSshKeys)));
        });

        const response = await sshKeysApi.sshKeys();
        expect(response).toEqual(mockSshKeys);
    });

    it('should get list of SSH keys with http info', async () => {
        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementation(() => {
            return Promise.resolve(new ResponseContext(200, headers, buildResponseBody(mockSshKeys)));
        });

        await testApiHttpInfo(() => sshKeysApi.sshKeysWithHttpInfo(), mockSshKeys);
    });

    it('should create or import SSH key', async () => {
        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementation(() => {
            return Promise.resolve(
                new ResponseContext(201, headers, buildResponseBody(mockSshKeysCreateImportResponse))
            );
        });

        const response = await sshKeysApi.sshKeysCreateImport();
        expect(response).toEqual(mockSshKeysCreateImportResponse);
    });

    it('should create or import SSH key with http info', async () => {
        const sshKeysCreateImportRequest = { name: 'new-key', key: 'ssh-rsa CCC...' };

        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementation(() => {
            return Promise.resolve(
                new ResponseContext(201, headers, buildResponseBody(mockSshKeysCreateImportResponse))
            );
        });

        await testApiHttpInfo(() => sshKeysApi.sshKeysCreateImportWithHttpInfo(), mockSshKeysCreateImportResponse, 201);
    });

    it('should call middleware pre and post functions', async () => {
        const preMock = jest.fn((ctx) => Promise.resolve(ctx));
        const postMock = jest.fn((rsp) => Promise.resolve(rsp));
        const apiWithMiddleware = new SSHKeysApi(
            createConfiguration({ middleware: [{ pre: preMock, post: postMock }] })
        );

        await apiWithMiddleware.getSshKey(sshKeyId);

        expect(preMock).toHaveBeenCalled();
        expect(postMock).toHaveBeenCalled();
    });

    it('should modify request and response in middleware', async () => {
        const preParams = { type: 'Movie' };
        const postParams = { createdByName: 'Zoidberg' };

        await testMiddleware(SSHKeysApi, 'getSshKey', mockSshKey, preParams, postParams);
    });
});
