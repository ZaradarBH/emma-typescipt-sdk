import { AuthenticationApiRequestFactory, AuthenticationApiResponseProcessor } from '../apis/AuthenticationApi';
import { Configuration } from '../configuration';
import { Credentials } from '../models/Credentials';
import { HttpInfo } from '../http/http';
import { Token } from '../models/Token';
import { RefreshToken } from '../models/RefreshToken';

export class AuthenticationApi {
    private requestFactory: AuthenticationApiRequestFactory;
    private responseProcessor: AuthenticationApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthenticationApiRequestFactory,
        responseProcessor?: AuthenticationApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AuthenticationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AuthenticationApiResponseProcessor();
    }

    /**
     * Returns an access token and a refresh token for this API. The bearer access token enables you to get access and send requests to the endpoints in this API.  To get the tokens, you need to send a Client ID and a Client Secret, which you can obtain from the Service application in your project. First, create a Service app in your project (Project -> Settings -> Service apps).  To manage access rights to the API, select an appropriate access level for your app when creating the service app - **Read**, **Operate,** or **Manage**.  The Bearer access token is a text string, included in the request header, for example:  ``` curl -X GET https://api.emma.ms/external/v1/locations -H \"Authorization: Bearer YOUR-ACCESS-TOKEN-HERE\" ```
     * Issue token
     * @param credentials
     * @param _options
     */
    public issueTokenWithHttpInfo(credentials?: Credentials, _options?: Configuration): Promise<HttpInfo<Token>> {
        // build promise chain
        let middlewarePre = this.requestFactory.issueToken(credentials, _options);
        for (let middleware of this.configuration.middleware) {
            middlewarePre = middlewarePre.then((ctx) => middleware.pre(ctx));
        }

        return middlewarePre
            .then((ctx) => this.configuration.httpApi.send(ctx))
            .then((response) => {
                let middlewarePost = Promise.resolve(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePost = middlewarePost.then((rsp) => middleware.post(rsp));
                }
                return middlewarePost.then((rsp) => this.responseProcessor.issueTokenWithHttpInfo(rsp));
            });
    }

    /**
     * Returns an access token and a refresh token for this API. The bearer access token enables you to get access and send requests to the endpoints in this API.  To get the tokens, you need to send a Client ID and a Client Secret, which you can obtain from the Service application in your project. First, create a Service app in your project (Project -> Settings -> Service apps).  To manage access rights to the API, select an appropriate access level for your app when creating the service app - **Read**, **Operate,** or **Manage**.  The Bearer access token is a text string, included in the request header, for example:  ``` curl -X GET https://api.emma.ms/external/v1/locations -H \"Authorization: Bearer YOUR-ACCESS-TOKEN-HERE\" ```
     * Issue token
     * @param credentials
     * @param _options
     */
    public issueToken(credentials?: Credentials, _options?: Configuration): Promise<Token> {
        return this.issueTokenWithHttpInfo(credentials, _options).then((apiResponse) => apiResponse.data);
    }

    /**
     * Returns an access token for this API using a refresh token. The refresh token enables you to get a new access token (when it is expired) without needing the Client ID and Client Secret. To get the access token, you need to send the refresh token in the payload. You can obtain the refresh token from the `/v1/issue-token` endpoint.
     * Refresh token
     * @param refreshToken
     * @param _options
     */
    public refreshTokenWithHttpInfo(refreshToken?: RefreshToken, _options?: Configuration): Promise<HttpInfo<Token>> {
        // build promise chain
        let middlewarePre = this.requestFactory.refreshToken(refreshToken, _options);
        for (let middleware of this.configuration.middleware) {
            middlewarePre = middlewarePre.then((ctx) => middleware.pre(ctx));
        }

        return middlewarePre
            .then((ctx) => this.configuration.httpApi.send(ctx))
            .then((response) => {
                let middlewarePost = Promise.resolve(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePost = middlewarePost.then((rsp) => middleware.post(rsp));
                }
                return middlewarePost.then((rsp) => this.responseProcessor.refreshTokenWithHttpInfo(rsp));
            });
    }

    /**
     * Returns an access token for this API using a refresh token. The refresh token enables you to get a new access token (when it is expired) without needing the Client ID and Client Secret. To get the access token, you need to send the refresh token in the payload. You can obtain the refresh token from the `/v1/issue-token` endpoint.
     * Refresh token
     * @param refreshToken
     * @param _options
     */
    public refreshToken(refreshToken?: RefreshToken, _options?: Configuration): Promise<Token> {
        return this.refreshTokenWithHttpInfo(refreshToken, _options).then((apiResponse) => apiResponse.data);
    }
}
