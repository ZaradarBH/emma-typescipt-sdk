import { AuthenticationApi } from '../authenticationApi';
import nock from 'nock';

describe('AuthenticationApi', () => {
    let authenticationApi: AuthenticationApi;
    const basePath = 'https://api.emma.ms/external';
    const headers = { 'content-type': 'application/json' };
    const credentials = { clientId: 'test-client-id', clientSecret: 'test-client-secret' };
    const refreshToken = { refreshToken: 'test-refresh-token' };
    const token = { accessToken: 'test-access-token', refreshToken: 'test-refresh-token' };
    const newToken = { accessToken: 'new-access-token', refreshToken: 'new-refresh-token' };

    beforeEach(() => {
        authenticationApi = new AuthenticationApi();
        nock.cleanAll();
    });

    it('should issue a token', async () => {
        nock(basePath).post('/v1/issue-token', credentials).reply(200, token, headers);

        const result = await authenticationApi.issueToken(credentials);
        expect(result.body).toEqual(token);
    });

    it('should refresh a token', async () => {
        nock(basePath).post('/v1/refresh-token', refreshToken).reply(200, newToken, headers);

        const result = await authenticationApi.refreshToken(refreshToken);
        expect(result.body).toEqual(newToken);
    });

    it('should call interceptors', async () => {
        const interceptor = jest.fn((options) => {
            options.headers['x-interceptor-called'] = 'true';
            return Promise.resolve();
        });
        authenticationApi.addInterceptor(interceptor);

        nock(basePath, {
            reqheaders: {
                'x-interceptor-called': 'true',
            },
        })
            .post('/v1/issue-token', credentials)
            .reply(200, token, headers);

        await authenticationApi.issueToken(credentials);

        expect(interceptor).toHaveBeenCalled();
    });
});
