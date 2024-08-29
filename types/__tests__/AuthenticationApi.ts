import { AuthenticationApi } from '../AuthenticationApi';
import { Configuration, createConfiguration } from '../../configuration';
import { Credentials } from '../../models/Credentials';
import { Token } from '../../models/Token';
import { HttpInfo, HttpMethod, RequestContext, ResponseContext } from '../../http/http';

describe('AuthenticationApi', () => {
    let api: AuthenticationApi;
    let configuration: Configuration;

    beforeEach(() => {
        configuration = createConfiguration();
        api = new AuthenticationApi(configuration);
    });

    it('should issue a token', async () => {
        const credentials: Credentials = { clientId: 'test-client-id', clientSecret: 'test-client-secret' };
        const token: Token = { accessToken: 'test-access-token', refreshToken: 'test-refresh-token' };

        jest.spyOn(api['requestFactory'], 'issueToken').mockReturnValue(
            Promise.resolve(new RequestContext('https://example.com', HttpMethod.GET))
        );
        jest.spyOn(api['responseProcessor'], 'issueTokenWithHttpInfo').mockReturnValue(
            Promise.resolve({ data: token } as HttpInfo<Token>)
        );

        const result = await api.issueToken(credentials);
        expect(result).toEqual(token);
    });

    it('should refresh a token', async () => {
        const refreshToken = { refreshToken: 'test-refresh-token' };
        const token: Token = { accessToken: 'new-access-token', refreshToken: 'new-refresh-token' };

        jest.spyOn(api['requestFactory'], 'refreshToken').mockReturnValue(
            Promise.resolve(new RequestContext('https://example.com', HttpMethod.GET))
        );
        jest.spyOn(api['responseProcessor'], 'refreshTokenWithHttpInfo').mockReturnValue(
            Promise.resolve({ data: token } as HttpInfo<Token>)
        );

        const result = await api.refreshToken(refreshToken);
        expect(result).toEqual(token);
    });

    it('should refresh a token with HttpInfo', async () => {
        const refreshToken = { refreshToken: 'test-refresh-token' };
        const token: Token = { accessToken: 'new-access-token', refreshToken: 'new-refresh-token' };
        const httpInfo = { data: token };

        jest.spyOn(api['requestFactory'], 'refreshToken').mockReturnValue(
            Promise.resolve(new RequestContext('https://example.com', HttpMethod.GET))
        );
        jest.spyOn(api['configuration'].httpApi, 'send').mockReturnValue(
            Promise.resolve(
                new ResponseContext(
                    200,
                    { 'content-type': 'application/json' },
                    { text: async () => JSON.stringify(token), binary: async () => new Blob() }
                )
            )
        );

        const result = await api.refreshTokenWithHttpInfo(refreshToken);
        expect(result.data).toEqual(httpInfo.data);
    });
});
