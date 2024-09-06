import { ProvidersApi } from '../ProvidersApi';
import { createConfiguration } from '../../configuration';
import { IsomorphicFetchHttpLibrary, ResponseContext } from '../../http/http';
import { testMiddleware, buildResponseBody, testApiHttpInfo } from '../utils/testHelper';

describe('ProvidersApi', () => {
    let providersApi = new ProvidersApi(createConfiguration());
    const headers = { 'content-type': 'application/json' };
    const providerId = 123;
    const mockProvider = { id: providerId, name: 'Test Provider' };
    const mockProviders = [
        { id: 1, name: 'Test Provider 1' },
        { id: 2, name: 'Test Provider 2' },
    ];

    beforeEach(() => {
        jest.clearAllMocks();
        jest.restoreAllMocks();

        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementation(() => {
            const headers = { 'content-type': 'application/json' };
            return Promise.resolve(new ResponseContext(200, headers, buildResponseBody(mockProvider)));
        });
    });

    it('should get provider by ID', async () => {
        const response = await providersApi.getProvider(providerId);
        expect(response).toEqual(mockProvider);
    });

    it('should get provider with http info by ID', async () => {
        await testApiHttpInfo(() => providersApi.getProviderWithHttpInfo(providerId), mockProvider);
    });

    it('should get list of providers', async () => {
        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementation(() => {
            return Promise.resolve(new ResponseContext(200, headers, buildResponseBody(mockProviders)));
        });

        const response = await providersApi.getProviders();
        expect(response).toEqual(mockProviders);
    });

    it('should get list of providers with http info', async () => {
        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementation(() => {
            return Promise.resolve(new ResponseContext(200, headers, buildResponseBody(mockProviders)));
        });

        await testApiHttpInfo(() => providersApi.getProvidersWithHttpInfo(), mockProviders);
    });

    it('should handle error in get provider', async () => {
        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementationOnce(() => {
            return Promise.reject(new Error('Network Error'));
        });

        await expect(providersApi.getProvider(providerId)).rejects.toThrow('Network Error');
    });

    it('should handle error in get providers', async () => {
        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementationOnce(() => {
            return Promise.reject(new Error('Network Error'));
        });

        await expect(providersApi.getProviders()).rejects.toThrow('Network Error');
    });

    it('should call middleware pre and post functions in get provider', async () => {
        const preMock = jest.fn((ctx) => Promise.resolve(ctx));
        const postMock = jest.fn((rsp) => Promise.resolve(rsp));
        const apiWithMiddleware = new ProvidersApi(
            createConfiguration({ middleware: [{ pre: preMock, post: postMock }] })
        );

        await apiWithMiddleware.getProvider(providerId);

        expect(preMock).toHaveBeenCalled();
        expect(postMock).toHaveBeenCalled();
    });

    it('should call middleware pre and post functions in get providers', async () => {
        const preMock = jest.fn((ctx) => Promise.resolve(ctx));
        const postMock = jest.fn((rsp) => Promise.resolve(rsp));
        const apiWithMiddleware = new ProvidersApi(
            createConfiguration({ middleware: [{ pre: preMock, post: postMock }] })
        );

        await apiWithMiddleware.getProviders();

        expect(preMock).toHaveBeenCalled();
        expect(postMock).toHaveBeenCalled();
    });

    it('should modify request and response in middleware', async () => {
        const preParams = { id: 999 };
        const postParams = { name: 'SUPA' };

        await testMiddleware(ProvidersApi, 'getProvider', mockProvider, preParams, postParams);
    });
});
