import { ProvidersApiRequestFactory, ProvidersApiResponseProcessor } from '../apis/ProvidersApi';
import { Configuration } from '../configuration';
import { HttpInfo } from '../http/http';
import { Provider } from '../models/Provider';

export class ProvidersApi {
    private requestFactory: ProvidersApiRequestFactory;
    private responseProcessor: ProvidersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ProvidersApiRequestFactory,
        responseProcessor?: ProvidersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ProvidersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ProvidersApiResponseProcessor();
    }

    /**
     * Returns a cloud provider by provider ID. Cloud service provider is a third-party company that provides scalable computing resources that users can access over emma platform. Provider is necessary when you select a data center for creating compute instances.
     * Get cloud provider by ID
     * @param providerId ID of the cloud provider
     * @param _options
     */
    public getProviderWithHttpInfo(providerId: number, _options?: Configuration): Promise<HttpInfo<Provider>> {
        // build promise chain
        let middlewarePre = this.requestFactory.getProvider(providerId, _options);
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
                return middlewarePost.then((rsp) => this.responseProcessor.getProviderWithHttpInfo(rsp));
            });
    }

    /**
     * Returns a cloud provider by provider ID. Cloud service provider is a third-party company that provides scalable computing resources that users can access over emma platform. Provider is necessary when you select a data center for creating compute instances.
     * Get cloud provider by ID
     * @param providerId ID of the cloud provider
     * @param _options
     */
    public getProvider(providerId: number, _options?: Configuration): Promise<Provider> {
        return this.getProviderWithHttpInfo(providerId, _options).then((apiResponse) => apiResponse.data);
    }

    /**
     * Returns a list of cloud providers. Cloud service provider is a third-party company that provides scalable computing resources that users can access over emma platform. When you create any computing resources in emma you create them in the provider\'s datacenters. Provider is necessary when you select a data center for creating compute instances.
     * Get list of cloud providers
     * @param providerName Name of the cloud provider
     * @param _options
     */
    public getProvidersWithHttpInfo(
        providerName?: string,
        _options?: Configuration
    ): Promise<HttpInfo<Array<Provider>>> {
        // build promise chain
        let middlewarePre = this.requestFactory.getProviders(providerName, _options);
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
                return middlewarePost.then((rsp) => this.responseProcessor.getProvidersWithHttpInfo(rsp));
            });
    }

    /**
     * Returns a list of cloud providers. Cloud service provider is a third-party company that provides scalable computing resources that users can access over emma platform. When you create any computing resources in emma you create them in the provider\'s datacenters. Provider is necessary when you select a data center for creating compute instances.
     * Get list of cloud providers
     * @param providerName Name of the cloud provider
     * @param _options
     */
    public getProviders(providerName?: string, _options?: Configuration): Promise<Array<Provider>> {
        return this.getProvidersWithHttpInfo(providerName, _options).then((apiResponse) => apiResponse.data);
    }
}
