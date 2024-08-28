import { LocationsApiRequestFactory, LocationsApiResponseProcessor } from '../apis/LocationsApi';
import { Configuration } from '../configuration';
import { HttpInfo, RequestContext, ResponseContext } from '../http/http';
import { Location } from '../models/Location';
import './promiseMap';

export class LocationsApi {
    private requestFactory: LocationsApiRequestFactory;
    private responseProcessor: LocationsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: LocationsApiRequestFactory,
        responseProcessor?: LocationsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LocationsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LocationsApiResponseProcessor();
    }

    /**
     * Returns a geographic location by its ID. Locations are cities or states (in the case of the USA) where providers have data centers.
     * Get location by ID
     * @param locationId ID of the geographic location
     * @param _options
     */
    public getLocationWithHttpInfo(locationId: number, _options?: Configuration): Promise<HttpInfo<Location>> {
        // build promise chain
        let middlewarePre = this.requestFactory.getLocation(locationId, _options);
        for (let middleware of this.configuration.middleware) {
            middlewarePre = middlewarePre.then(promiseMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePre.then(promiseMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).then(
            promiseMap((response: ResponseContext) => {
                let middlewarePost = Promise.resolve(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePost = middlewarePost.then(promiseMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePost.then((rsp) => this.responseProcessor.getLocationWithHttpInfo(rsp));
            })
        );
    }

    /**
     * Returns a geographic location by its ID. Locations are cities or states (in the case of the USA) where providers have data centers.
     * Get location by ID
     * @param locationId ID of the geographic location
     * @param _options
     */
    public getLocation(locationId: number, _options?: Configuration): Promise<Location> {
        return this.getLocationWithHttpInfo(locationId, _options).then((apiResponse) => apiResponse.data);
    }

    /**
     * Returns a list of geographic locations of the provider\'s data centers. Locations are cities or states (in the case of the USA). When creating any compute instance, you need to specify a data center. This method helps you find locations with data centers.
     * Get list of locations
     * @param name Name of the geographic location
     * @param _options
     */
    public getLocationsWithHttpInfo(name?: string, _options?: Configuration): Promise<HttpInfo<Array<Location>>> {
        // build promise chain
        let middlewarePre = this.requestFactory.getLocations(name, _options);
        for (let middleware of this.configuration.middleware) {
            middlewarePre = middlewarePre.then(promiseMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePre.then(promiseMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).then(
            promiseMap((response: ResponseContext) => {
                let middlewarePost = Promise.resolve(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePost = middlewarePost.then(promiseMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePost.then((rsp) => this.responseProcessor.getLocationsWithHttpInfo(rsp));
            })
        );
    }

    /**
     * Returns a list of geographic locations of the provider\'s data centers. Locations are cities or states (in the case of the USA). When creating any compute instance, you need to specify a data center. This method helps you find locations with data centers.
     * Get list of locations
     * @param name Name of the geographic location
     * @param _options
     */
    public getLocations(name?: string, _options?: Configuration): Promise<Array<Location>> {
        return this.getLocationsWithHttpInfo(name, _options).then((apiResponse) => apiResponse.data);
    }
}
