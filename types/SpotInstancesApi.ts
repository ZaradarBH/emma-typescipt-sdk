import { SpotInstancesApiRequestFactory, SpotInstancesApiResponseProcessor } from '../apis/SpotInstancesApi';
import { Configuration } from '../configuration';
import { HttpInfo, RequestContext, ResponseContext } from '../http/http';
import { Vm } from '../models/Vm';
import { SpotActionsRequest } from '../models/SpotActionsRequest';
import { SpotCreate } from '../models/SpotCreate';

export class SpotInstancesApi {
    private requestFactory: SpotInstancesApiRequestFactory;
    private responseProcessor: SpotInstancesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SpotInstancesApiRequestFactory,
        responseProcessor?: SpotInstancesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SpotInstancesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SpotInstancesApiResponseProcessor();
    }

    /**
     * Returns a spot instance by its ID.  A Spot Instance is a specialized compute instance that allows you to access and utilize unused instance capacity at a steeply discounted rate.  Spot price is charged on an hourly basis.
     * Get spot instance by id
     * @param spotInstanceId ID of the spot instance
     * @param _options
     */
    public getSpotWithHttpInfo(spotInstanceId: number, _options?: Configuration): Promise<HttpInfo<Vm>> {
        // build promise chain
        let middlewarePre = this.requestFactory.getSpot(spotInstanceId, _options);
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
                return middlewarePost.then((rsp) => this.responseProcessor.getSpotWithHttpInfo(rsp));
            });
    }

    /**
     * Returns a spot instance by its ID.  A Spot Instance is a specialized compute instance that allows you to access and utilize unused instance capacity at a steeply discounted rate.  Spot price is charged on an hourly basis.
     * Get spot instance by id
     * @param spotInstanceId ID of the spot instance
     * @param _options
     */
    public getSpot(spotInstanceId: number, _options?: Configuration): Promise<Vm> {
        return this.getSpotWithHttpInfo(spotInstanceId, _options).then((apiResponse) => apiResponse.data);
    }

    /**
     * Returns a list of spot instances.  A Spot Instance is a specialized compute instance that allows you to access and utilize unused instance capacity at a steeply discounted rate.  Spot price is charged on an hourly basis.
     * Get list of spot instances
     */
    public getSpotsWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<Vm>>> {
        // build promise chain
        let middlewarePre = this.requestFactory.getSpots(_options);
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
                return middlewarePost.then((rsp) => this.responseProcessor.getSpotsWithHttpInfo(rsp));
            });
    }

    /**
     * Returns a list of spot instances.  A Spot Instance is a specialized compute instance that allows you to access and utilize unused instance capacity at a steeply discounted rate.  Spot price is charged on an hourly basis.
     * Get list of spot instances
     */
    public getSpots(_options?: Configuration): Promise<Array<Vm>> {
        return this.getSpotsWithHttpInfo(_options).then((apiResponse) => apiResponse.data);
    }

    /**
     * This endpoint reboots a spot instance.
     * Perform actions with a spot instance
     * @param spotInstanceId ID of the spot instance
     * @param spotActionsRequest
     * @param _options
     */
    public spotActionsWithHttpInfo(
        spotInstanceId: number,
        spotActionsRequest?: SpotActionsRequest,
        _options?: Configuration
    ): Promise<HttpInfo<Vm>> {
        // build promise chain
        let middlewarePre = this.requestFactory.spotActions(spotInstanceId, spotActionsRequest, _options);
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
                return middlewarePost.then((rsp) => this.responseProcessor.spotActionsWithHttpInfo(rsp));
            });
    }

    /**
     * This endpoint reboots a spot instance.
     * Perform actions with a spot instance
     * @param spotInstanceId ID of the spot instance
     * @param spotActionsRequest
     * @param _options
     */
    public spotActions(
        spotInstanceId: number,
        spotActionsRequest?: SpotActionsRequest,
        _options?: Configuration
    ): Promise<Vm> {
        return this.spotActionsWithHttpInfo(spotInstanceId, spotActionsRequest, _options).then(
            (apiResponse) => apiResponse.data
        );
    }

    /**
     * This method creates a spot instance according to the specified parameters.  A Spot Instance is a specialized compute instance that allows you to access and utilize unused instance capacity at a steeply discounted rate. Spot price is charged on an hourly basis.   To create a spot instance, follow these steps:  1. Select a data center using the `/v1/data-centers` endpoint. The data center determines the provider and location of the spot instance.  2. Select an available hardware configuration for the spot instance using the `/v1/spots-configs` endpoint.  3. Select an SSH key for the Linux spot instance using the `/v1/ssh-keys` endpoint.  4. Select an operating system using the `/v1/operating-systems` endpoint.  5. Choose one of the cloud network types: _multi-cloud, isolated,_ or _default_. Choose the _multi-cloud_ network type if you need to connect compute instances from different providers.  You may choose not to specify a security group. In this case, the spot instance will be added to the default security group.  A `price` field of a spot instance is not required.   The spot instance market operates on a bidding system. Your specified price acts as your bid in this market. If your bid is higher than the current spot price, your instance request will likely be fulfilled. However, if the market price exceeds your bid, your instance may not be launched or could be terminated if already running.
     * Create spot instance
     * @param spotCreate
     * @param _options
     */
    public spotCreateWithHttpInfo(spotCreate?: SpotCreate, _options?: Configuration): Promise<HttpInfo<Vm>> {
        // build promise chain
        let middlewarePre = this.requestFactory.spotCreate(spotCreate, _options);
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
                return middlewarePost.then((rsp) => this.responseProcessor.spotCreateWithHttpInfo(rsp));
            });
    }

    /**
     * This method creates a spot instance according to the specified parameters.  A Spot Instance is a specialized compute instance that allows you to access and utilize unused instance capacity at a steeply discounted rate. Spot price is charged on an hourly basis.   To create a spot instance, follow these steps:  1. Select a data center using the `/v1/data-centers` endpoint. The data center determines the provider and location of the spot instance.  2. Select an available hardware configuration for the spot instance using the `/v1/spots-configs` endpoint.  3. Select an SSH key for the Linux spot instance using the `/v1/ssh-keys` endpoint.  4. Select an operating system using the `/v1/operating-systems` endpoint.  5. Choose one of the cloud network types: _multi-cloud, isolated,_ or _default_. Choose the _multi-cloud_ network type if you need to connect compute instances from different providers.  You may choose not to specify a security group. In this case, the spot instance will be added to the default security group.  A `price` field of a spot instance is not required.   The spot instance market operates on a bidding system. Your specified price acts as your bid in this market. If your bid is higher than the current spot price, your instance request will likely be fulfilled. However, if the market price exceeds your bid, your instance may not be launched or could be terminated if already running.
     * Create spot instance
     * @param spotCreate
     * @param _options
     */
    public spotCreate(spotCreate?: SpotCreate, _options?: Configuration): Promise<Vm> {
        return this.spotCreateWithHttpInfo(spotCreate, _options).then((apiResponse) => apiResponse.data);
    }

    /**
     * This method deletes a spot instance.
     * Delete spot instance
     * @param spotInstanceId ID of the spot instance
     * @param _options
     */
    public spotDeleteWithHttpInfo(spotInstanceId: number, _options?: Configuration): Promise<HttpInfo<Vm>> {
        // build promise chain
        let middlewarePre = this.requestFactory.spotDelete(spotInstanceId, _options);
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
                return middlewarePost.then((rsp) => this.responseProcessor.spotDeleteWithHttpInfo(rsp));
            });
    }

    /**
     * This method deletes a spot instance.
     * Delete spot instance
     * @param spotInstanceId ID of the spot instance
     * @param _options
     */
    public spotDelete(spotInstanceId: number, _options?: Configuration): Promise<Vm> {
        return this.spotDeleteWithHttpInfo(spotInstanceId, _options).then((apiResponse) => apiResponse.data);
    }
}
