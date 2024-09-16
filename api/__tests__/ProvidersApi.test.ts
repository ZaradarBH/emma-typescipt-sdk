import { ProvidersApi } from '../providersApi';
import nock from 'nock';
import { Provider } from '../../model/provider';
import http from 'http';

describe('ProvidersApi', () => {
    let api: ProvidersApi;
    const basePath = 'https://api.emma.ms/external';
    const headers = { 'content-type': 'application/json' };
    const providerId = 1;
    const mockProvider: Provider = { id: 1, name: 'Test Provider' };
    const mockProviders: Provider[] = [
        { id: 1, name: 'Test Provider 1' },
        { id: 2, name: 'Test Provider 2' },
    ];

    beforeEach(() => {
        api = new ProvidersApi();
        nock.cleanAll();
    });

    it('should fetch provider by ID successfully', async () => {
        nock(basePath).get(`/v1/providers/${providerId}`).reply(200, mockProvider, headers);

        const response = await api.getProvider(providerId);
        expect(response.body).toEqual(mockProvider);
    });

    it('should handle error in get provider by ID', async () => {
        nock(basePath).get(`/v1/providers/${providerId}`).replyWithError('Network Error');

        await expect(api.getProvider(providerId)).rejects.toThrow('Network Error');
    });

    it('should fetch list of providers successfully', async () => {
        nock(basePath).get('/v1/providers').reply(200, mockProviders, headers);

        const response = await api.getProviders();
        expect(response.body).toEqual(mockProviders);
    });

    it('should handle error in get list of providers', async () => {
        nock(basePath).get('/v1/providers').replyWithError('Network Error');

        await expect(api.getProviders()).rejects.toThrow('Network Error');
    });
});
