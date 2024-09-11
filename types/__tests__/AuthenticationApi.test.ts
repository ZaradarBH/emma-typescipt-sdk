import { AuthenticationApi } from '../AuthenticationApi';
import { createConfiguration } from '../../configuration';
import { IsomorphicFetchHttpLibrary, ResponseContext } from '../../http/http';
import { Credentials } from '../../models/Credentials';
import { Token } from '../../models/Token';
import { RefreshToken } from '../../models/RefreshToken';
import { buildResponseBody, testApiHttpInfo } from '../utils/testHelper';

describe('AuthenticationApi', () => {
    let api: AuthenticationApi;
    const headers = { 'content-type': 'application/json' };
    const credentials: Credentials = { clientId: 'test-client-id', clientSecret: 'test-client-secret' };
    const refreshToken: RefreshToken = { refreshToken: 'test-refresh-token' };
    const token: Token = { accessToken: 'test-access-token', refreshToken: 'test-refresh-token' };
    const newToken: Token = { accessToken: 'new-access-token', refreshToken: 'new-refresh-token' };

    beforeEach(() => {
        api = new AuthenticationApi(createConfiguration());
        jest.clearAllMocks();
        jest.restoreAllMocks();
    });

    it('should issue a token', async () => {
        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementation(() => {
            return Promise.resolve(new ResponseContext(200, headers, buildResponseBody(token)));
        });

        const result = await api.issueToken(credentials);
        expect(result).toEqual(token);
    });

    it('should issue a token with http info', async () => {
        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementation(() => {
            return Promise.resolve(new ResponseContext(200, headers, buildResponseBody(token)));
        });

        await testApiHttpInfo(() => api.issueTokenWithHttpInfo(credentials), token);
    });

    it('should refresh a token', async () => {
        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementation(() => {
            return Promise.resolve(new ResponseContext(200, headers, buildResponseBody(newToken)));
        });

        const result = await api.refreshToken(refreshToken);
        expect(result).toEqual(newToken);
    });

    it('should refresh a token with http info', async () => {
        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementation(() => {
            return Promise.resolve(new ResponseContext(200, headers, buildResponseBody(newToken)));
        });

        await testApiHttpInfo(() => api.refreshTokenWithHttpInfo(refreshToken), newToken);
    });
});
