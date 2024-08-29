import { BearerAuthAuthentication, configureAuthMethods, TokenProvider, AuthMethodsConfiguration } from '../auth';
import { HttpMethod, RequestContext } from '../../http/http';

class MockTokenProvider implements TokenProvider {
    private token: string;

    constructor(token: string) {
        this.token = token;
    }

    getToken(): Promise<string> | string {
        return this.token;
    }
}

describe('BearerAuthAuthentication', () => {
    it('should return the correct name', () => {
        const tokenProvider = new MockTokenProvider('test-token');
        const auth = new BearerAuthAuthentication(tokenProvider);
        expect(auth.getName()).toBe('bearerAuth');
    });

    it('should apply the authentication scheme to the request context', async () => {
        const tokenProvider = new MockTokenProvider('test-token');
        const auth = new BearerAuthAuthentication(tokenProvider);
        const context = new RequestContext('https://example.com', HttpMethod.GET);

        await auth.applySecurityAuthentication(context);
        expect(context.getHeaders().Authorization).toBe('Bearer test-token');
    });
});

describe('configureAuthMethods', () => {
    it('should configure auth methods correctly', () => {
        const tokenProvider = new MockTokenProvider('test-token');
        const config: AuthMethodsConfiguration = {
            bearerAuth: { tokenProvider },
        };

        const authMethods = configureAuthMethods(config);
        expect(authMethods['bearerAuth']).toBeInstanceOf(BearerAuthAuthentication);
    });

    it('should return an empty object if no config is provided', () => {
        const authMethods = configureAuthMethods(undefined);
        expect(authMethods).toEqual({});
    });

    it('should configure default auth method if provided', () => {
        const defaultAuth = new BearerAuthAuthentication(new MockTokenProvider('default-token'));
        const config: AuthMethodsConfiguration = {
            default: defaultAuth,
        };

        const authMethods = configureAuthMethods(config);
        expect(authMethods['default']).toBe(defaultAuth);
    });
});
