import { SecurityGroupsApi } from '../SecurityGroupsApi';
import { createConfiguration } from '../../configuration';
import { IsomorphicFetchHttpLibrary } from '../../http/isomorphic-fetch';
import { ResponseContext } from '../../http/http';
import { testMiddleware, buildResponseBody, testApiHttpInfo } from '../utils/testHelper';

describe('SecurityGroupsApi', () => {
    const api = new SecurityGroupsApi(createConfiguration());
    const securityGroup = { id: 1, name: 'Test Group' };
    const headers = { 'content-type': 'application/json' };
    const securityGroups = [
        { id: 13, name: 'Imma group' },
        { id: 37, name: 'Me2' },
    ];
    const securityGroupId = 42;
    const instanceId = 1337;

    beforeEach(() => {
        jest.clearAllMocks();
        jest.restoreAllMocks();

        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementation(() => {
            return Promise.resolve(new ResponseContext(200, headers, buildResponseBody(securityGroup)));
        });
    });

    it('should get security group with http info', async () => {
        await testApiHttpInfo(() => api.getSecurityGroupWithHttpInfo(securityGroupId), securityGroup);
    });

    it('should handle error in get security group with http info', async () => {
        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementationOnce(() => {
            return Promise.reject(new Error('Network Error'));
        });

        await expect(api.getSecurityGroupWithHttpInfo(securityGroupId)).rejects.toThrow('Network Error');
    });

    it('should get security group', async () => {
        const response = await api.getSecurityGroup(securityGroupId);
        expect(response).toBeDefined();
        expect(response).toEqual(securityGroup);
    });

    it('should handle error in get security group', async () => {
        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementationOnce(() => {
            return Promise.reject(new Error('Network Error'));
        });

        await expect(api.getSecurityGroup(securityGroupId)).rejects.toThrow('Network Error');
    });

    it('should get security groups with http info', async () => {
        await testApiHttpInfo(() => api.getSecurityGroupsWithHttpInfo(), securityGroup);
    });

    it('should handle error in get security groups with http info', async () => {
        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementationOnce(() => {
            return Promise.reject(new Error('Network Error'));
        });

        await expect(api.getSecurityGroupsWithHttpInfo()).rejects.toThrow('Network Error');
    });

    it('should get security groups', async () => {
        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementation(() => {
            return Promise.resolve(new ResponseContext(200, headers, buildResponseBody(securityGroups)));
        });

        const response = await api.getSecurityGroups();
        expect(response).toBeDefined();
        expect(response).toEqual(securityGroups);
    });

    it('should handle error in get security groups', async () => {
        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementationOnce(() => {
            return Promise.reject(new Error('Network Error'));
        });

        await expect(api.getSecurityGroups()).rejects.toThrow('Network Error');
    });

    it('should create security group with http info', async () => {
        await testApiHttpInfo(() => api.securityGroupCreateWithHttpInfo(), securityGroup);
    });

    it('should handle error in create security group with http info', async () => {
        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementationOnce(() => {
            return Promise.reject(new Error('Network Error'));
        });

        await expect(api.securityGroupCreateWithHttpInfo({ name: 'New Group', rules: [] })).rejects.toThrow(
            'Network Error'
        );
    });

    it('should create security group', async () => {
        const response = await api.securityGroupCreate({ name: 'New Group', rules: [] });
        expect(response).toBeDefined();
        expect(response).toEqual(securityGroup);
    });

    it('should handle error in create security group', async () => {
        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementationOnce(() => {
            return Promise.reject(new Error('Network Error'));
        });

        await expect(api.securityGroupCreate({ name: 'New Group', rules: [] })).rejects.toThrow('Network Error');
    });

    it('should delete security group with http info', async () => {
        await testApiHttpInfo(() => api.securityGroupDeleteWithHttpInfo(securityGroupId), securityGroup);
    });

    it('should handle error in delete security group with http info', async () => {
        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementationOnce(() => {
            return Promise.reject(new Error('Network Error'));
        });

        await expect(api.securityGroupDeleteWithHttpInfo(securityGroupId)).rejects.toThrow('Network Error');
    });

    it('should delete security group', async () => {
        const response = await api.securityGroupDelete(securityGroupId);
        expect(response).toBeDefined();
        expect(response).toEqual(securityGroup);
    });

    it('should handle error in delete security group', async () => {
        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementationOnce(() => {
            return Promise.reject(new Error('Network Error'));
        });

        await expect(api.securityGroupDelete(securityGroupId)).rejects.toThrow('Network Error');
    });

    it('should add instance to security group with http info', async () => {
        await testApiHttpInfo(
            () => api.securityGroupInstanceAddWithHttpInfo(securityGroupId, { instanceId }),
            securityGroup
        );
    });

    it('should handle error in add instance to security group with http info', async () => {
        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementationOnce(() => {
            return Promise.reject(new Error('Network Error'));
        });

        await expect(api.securityGroupInstanceAddWithHttpInfo(securityGroupId, { instanceId })).rejects.toThrow(
            'Network Error'
        );
    });

    it('should add instance to security group', async () => {
        const response = await api.securityGroupInstanceAdd(securityGroupId, { instanceId });
        expect(response).toBeDefined();
        expect(response).toEqual(securityGroup);
    });

    it('should handle error in add instance to security group', async () => {
        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementationOnce(() => {
            return Promise.reject(new Error('Network Error'));
        });

        await expect(api.securityGroupInstanceAdd(1, { instanceId })).rejects.toThrow('Network Error');
    });

    it('should get instances in security group with http info', async () => {
        await testApiHttpInfo(() => api.securityGroupInstancesWithHttpInfo(securityGroupId), securityGroup);
    });

    it('should handle error in get instances in security group with http info', async () => {
        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementationOnce(() => {
            return Promise.reject(new Error('Network Error'));
        });

        await expect(api.securityGroupInstancesWithHttpInfo(securityGroupId)).rejects.toThrow('Network Error');
    });

    it('should get instances in security group', async () => {
        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementation(() => {
            return Promise.resolve(new ResponseContext(200, headers, buildResponseBody(securityGroups)));
        });
        const response = await api.securityGroupInstances(securityGroupId);
        expect(response).toBeDefined();
        expect(response).toEqual(securityGroups);
    });

    it('should handle error in get instances in security group', async () => {
        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementationOnce(() => {
            return Promise.reject(new Error('Network Error'));
        });

        await expect(api.securityGroupInstances(securityGroupId)).rejects.toThrow('Network Error');
    });

    it('should update security group with http info', async () => {
        await testApiHttpInfo(
            () => api.securityGroupUpdateWithHttpInfo(1, { name: 'Updated Group', rules: [] }),
            securityGroup
        );
    });

    it('should handle error in update security group with http info', async () => {
        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementationOnce(() => {
            return Promise.reject(new Error('Network Error'));
        });

        await expect(
            api.securityGroupUpdateWithHttpInfo(securityGroupId, { name: 'Updated Group', rules: [] })
        ).rejects.toThrow('Network Error');
    });

    it('should update security group', async () => {
        const response = await api.securityGroupUpdate(securityGroupId, { name: 'Updated Group', rules: [] });
        expect(response).toBeDefined();
        expect(response).toEqual(securityGroup);
    });

    it('should handle error in update security group', async () => {
        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementationOnce(() => {
            return Promise.reject(new Error('Network Error'));
        });

        await expect(api.securityGroupUpdate(securityGroupId, { name: 'Updated Group', rules: [] })).rejects.toThrow(
            'Network Error'
        );
    });

    it('should call middleware pre and post functions', async () => {
        const preMock = jest.fn((ctx) => Promise.resolve(ctx));
        const postMock = jest.fn((rsp) => Promise.resolve(rsp));
        const apiWithMiddleware = new SecurityGroupsApi(
            createConfiguration({ middleware: [{ pre: preMock, post: postMock }] })
        );

        await apiWithMiddleware.getSecurityGroup(securityGroupId);

        expect(preMock).toHaveBeenCalled();
        expect(postMock).toHaveBeenCalled();
    });

    it('should modify request and response in middleware', async () => {
        const preParams = { securityGroupId: 1111 };
        const postParams = { id: 1, name: 'Modified Group' };

        await testMiddleware(SecurityGroupsApi, 'getSecurityGroup', securityGroup, preParams, postParams);
    });
});
