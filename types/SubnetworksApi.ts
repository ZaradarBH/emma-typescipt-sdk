import { SubnetworksApiRequestFactory, SubnetworksApiResponseProcessor } from '../apis/SubnetworksApi';
import { Configuration } from '../configuration';
import { HttpInfo, RequestContext, ResponseContext } from '../http/http';
import { Subnetwork } from '../models/Subnetwork';
import { SubnetworkCreate } from '../models/SubnetworkCreate';
import { SubnetworkEdit } from '../models/SubnetworkEdit';

export class SubnetworksApi {
    private requestFactory: SubnetworksApiRequestFactory;
    private responseProcessor: SubnetworksApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SubnetworksApiRequestFactory,
        responseProcessor?: SubnetworksApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SubnetworksApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SubnetworksApiResponseProcessor();
    }

    /**
     * Returns a list of subnetworks within the project.
     * Get list of subnetworks
     */
    public v1SubnetworksGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<Subnetwork>>> {
        // build promise chain
        let middlewarePre = this.requestFactory.v1SubnetworksGet(_options);
        for (let middleware of this.configuration.middleware) {
            middlewarePre = middlewarePre.then((ctx: RequestContext) => middleware.pre(ctx));
        }

        return middlewarePre
            .then((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
            .then((response: ResponseContext) => {
                let middlewarePost = Promise.resolve(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePost = middlewarePost.then((rsp: ResponseContext) => middleware.post(rsp));
                }
                return middlewarePost.then((rsp) => this.responseProcessor.v1SubnetworksGetWithHttpInfo(rsp));
            });
    }

    /**
     * Returns a list of subnetworks within the project.
     * Get list of subnetworks
     */
    public v1SubnetworksGet(_options?: Configuration): Promise<Array<Subnetwork>> {
        return this.v1SubnetworksGetWithHttpInfo(_options).then((apiResponse) => apiResponse.data);
    }

    /**
     * This method creates a subnetwork. To create a subnetwork, consider the following parameters: 1. Select a data center using the `/v1/data-centers` endpoint. The data center determines the provider and location of the subnetwork. 2. Specify the IP address range (optional) and network size (required). Subnetwork prefix value must be in ranges: 10.0.0.0 - 10.255.255.255, 172.16.0.0 - 172.31.255.255, 192.168.0.0 - 192.168.255.255, network size must be /28-/16 for DigitalOcean and /24-/16 for Gcore.
     * Create subnetwork
     * @param subnetworkCreate
     * @param _options
     */
    public v1SubnetworksPostWithHttpInfo(
        subnetworkCreate?: SubnetworkCreate,
        _options?: Configuration
    ): Promise<HttpInfo<SubnetworkCreate>> {
        // build promise chain
        let middlewarePre = this.requestFactory.v1SubnetworksPost(subnetworkCreate, _options);
        for (let middleware of this.configuration.middleware) {
            middlewarePre = middlewarePre.then((ctx: RequestContext) => middleware.pre(ctx));
        }

        return middlewarePre
            .then((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
            .then((response: ResponseContext) => {
                let middlewarePost = Promise.resolve(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePost = middlewarePost.then((rsp: ResponseContext) => middleware.post(rsp));
                }
                return middlewarePost.then((rsp) => this.responseProcessor.v1SubnetworksPostWithHttpInfo(rsp));
            });
    }

    /**
     * This method creates a subnetwork. To create a subnetwork, consider the following parameters: 1. Select a data center using the `/v1/data-centers` endpoint. The data center determines the provider and location of the subnetwork. 2. Specify the IP address range (optional) and network size (required). Subnetwork prefix value must be in ranges: 10.0.0.0 - 10.255.255.255, 172.16.0.0 - 172.31.255.255, 192.168.0.0 - 192.168.255.255, network size must be /28-/16 for DigitalOcean and /24-/16 for Gcore.
     * Create subnetwork
     * @param subnetworkCreate
     * @param _options
     */
    public v1SubnetworksPost(subnetworkCreate?: SubnetworkCreate, _options?: Configuration): Promise<SubnetworkCreate> {
        return this.v1SubnetworksPostWithHttpInfo(subnetworkCreate, _options).then((apiResponse) => apiResponse.data);
    }

    /**
     * This method deletes a subnetwork.
     * Delete subnetwork
     * @param subnetworkId Subnetwork ID
     * @param _options
     */
    public v1SubnetworksSubnetworkIdDeleteWithHttpInfo(
        subnetworkId: string,
        _options?: Configuration
    ): Promise<HttpInfo<Subnetwork>> {
        // build promise chain
        let middlewarePre = this.requestFactory.v1SubnetworksSubnetworkIdDelete(subnetworkId, _options);
        for (let middleware of this.configuration.middleware) {
            middlewarePre = middlewarePre.then((ctx: RequestContext) => middleware.pre(ctx));
        }

        return middlewarePre
            .then((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
            .then((response: ResponseContext) => {
                let middlewarePost = Promise.resolve(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePost = middlewarePost.then((rsp: ResponseContext) => middleware.post(rsp));
                }
                return middlewarePost.then((rsp) =>
                    this.responseProcessor.v1SubnetworksSubnetworkIdDeleteWithHttpInfo(rsp)
                );
            });
    }

    /**
     * This method deletes a subnetwork.
     * Delete subnetwork
     * @param subnetworkId Subnetwork ID
     * @param _options
     */
    public v1SubnetworksSubnetworkIdDelete(subnetworkId: string, _options?: Configuration): Promise<Subnetwork> {
        return this.v1SubnetworksSubnetworkIdDeleteWithHttpInfo(subnetworkId, _options).then(
            (apiResponse) => apiResponse.data
        );
    }

    /**
     * Returns a subnetwork by its ID.
     * Get subnetwork by ID
     * @param subnetworkId Subnetwork ID
     * @param _options
     */
    public v1SubnetworksSubnetworkIdGetWithHttpInfo(
        subnetworkId: string,
        _options?: Configuration
    ): Promise<HttpInfo<Subnetwork>> {
        // build promise chain
        let middlewarePre = this.requestFactory.v1SubnetworksSubnetworkIdGet(subnetworkId, _options);
        for (let middleware of this.configuration.middleware) {
            middlewarePre = middlewarePre.then((ctx: RequestContext) => middleware.pre(ctx));
        }

        return middlewarePre
            .then((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
            .then((response: ResponseContext) => {
                let middlewarePost = Promise.resolve(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePost = middlewarePost.then((rsp: ResponseContext) => middleware.post(rsp));
                }
                return middlewarePost.then((rsp: ResponseContext) =>
                    this.responseProcessor.v1SubnetworksSubnetworkIdGetWithHttpInfo(rsp)
                );
            });
    }

    /**
     * Returns a subnetwork by its ID.
     * Get subnetwork by ID
     * @param subnetworkId Subnetwork ID
     * @param _options
     */
    public v1SubnetworksSubnetworkIdGet(subnetworkId: string, _options?: Configuration): Promise<Subnetwork> {
        return this.v1SubnetworksSubnetworkIdGetWithHttpInfo(subnetworkId, _options).then(
            (apiResponse) => apiResponse.data
        );
    }

    /**
     * This method updates a subnetwork. Only the subnetwork name can be updated.
     * Update subnetwork
     * @param subnetworkId Subnetwork ID
     * @param subnetworkEdit
     * @param _options
     */
    public v1SubnetworksSubnetworkIdPutWithHttpInfo(
        subnetworkId: string,
        subnetworkEdit?: SubnetworkEdit,
        _options?: Configuration
    ): Promise<HttpInfo<Subnetwork>> {
        // build promise chain
        let middlewarePre = this.requestFactory.v1SubnetworksSubnetworkIdPut(subnetworkId, subnetworkEdit, _options);
        for (let middleware of this.configuration.middleware) {
            middlewarePre = middlewarePre.then((ctx: RequestContext) => middleware.pre(ctx));
        }

        return middlewarePre
            .then((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
            .then((response: ResponseContext) => {
                let middlewarePost = Promise.resolve(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePost = middlewarePost.then((rsp: ResponseContext) => middleware.post(rsp));
                }
                return middlewarePost.then((rsp) =>
                    this.responseProcessor.v1SubnetworksSubnetworkIdPutWithHttpInfo(rsp)
                );
            });
    }

    /**
     * This method updates a subnetwork. Only the subnetwork name can be updated.
     * Update subnetwork
     * @param subnetworkId Subnetwork ID
     * @param subnetworkEdit
     * @param _options
     */
    public v1SubnetworksSubnetworkIdPut(
        subnetworkId: string,
        subnetworkEdit?: SubnetworkEdit,
        _options?: Configuration
    ): Promise<Subnetwork> {
        return this.v1SubnetworksSubnetworkIdPutWithHttpInfo(subnetworkId, subnetworkEdit, _options).then(
            (apiResponse) => apiResponse.data
        );
    }
}
