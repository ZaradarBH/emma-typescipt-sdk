import { DataCentersApiRequestFactory, DataCentersApiResponseProcessor } from '../apis/DataCentersApi';
import { Configuration } from '../configuration';
import { HttpInfo, RequestContext, ResponseContext } from '../http/http';
import { DataCenter } from '../models/DataCenter';

export class DataCentersApi {
    private requestFactory: DataCentersApiRequestFactory;
    private responseProcessor: DataCentersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DataCentersApiRequestFactory,
        responseProcessor?: DataCentersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DataCentersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DataCentersApiResponseProcessor();
    }

    /**
     * Returns a data center from a cloud provider by data center ID. Information on the data center includes its name, provider and location.
     * Get data center by ID
     * @param dataCenterId ID of the cloud provider\&#39;s data center
     * @param _options
     */
    public getDataCenterWithHttpInfo(dataCenterId: string, _options?: Configuration): Promise<HttpInfo<DataCenter>> {
        // build promise chain
        let middlewarePre = this.requestFactory.getDataCenter(dataCenterId, _options);
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
                return middlewarePost.then((rsp) => this.responseProcessor.getDataCenterWithHttpInfo(rsp));
            });
    }

    /**
     * Returns a data center from a cloud provider by data center ID. Information on the data center includes its name, provider and location.
     * Get data center by ID
     * @param dataCenterId ID of the cloud provider\&#39;s data center
     * @param _options
     */
    public getDataCenter(dataCenterId: string, _options?: Configuration): Promise<DataCenter> {
        return this.getDataCenterWithHttpInfo(dataCenterId, _options).then((apiResponse) => apiResponse.data);
    }

    /**
     * Returns a list of data centers from cloud providers. All compute instances are created in data centers. The data center ID is necessary for creating any compute instance. Use this endpoint to find the provider\'s data centers.
     * Get list of data centers
     * @param dataCenterName Name of the cloud provider\&#39;s data center
     * @param locationId ID of the geographic location
     * @param providerName Name of the cloud provider
     * @param _options
     */
    public getDataCentersWithHttpInfo(
        dataCenterName?: string,
        locationId?: number,
        providerName?: string,
        _options?: Configuration
    ): Promise<HttpInfo<Array<DataCenter>>> {
        // build promise chain
        let middlewarePre = this.requestFactory.getDataCenters(dataCenterName, locationId, providerName, _options);
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
                return middlewarePost.then((rsp) => this.responseProcessor.getDataCentersWithHttpInfo(rsp));
            });
    }

    /**
     * Returns a list of data centers from cloud providers. All compute instances are created in data centers. The data center ID is necessary for creating any compute instance. Use this endpoint to find the provider\'s data centers.
     * Get list of data centers
     * @param dataCenterName Name of the cloud provider\&#39;s data center
     * @param locationId ID of the geographic location
     * @param providerName Name of the cloud provider
     * @param _options
     */
    public getDataCenters(
        dataCenterName?: string,
        locationId?: number,
        providerName?: string,
        _options?: Configuration
    ): Promise<Array<DataCenter>> {
        return this.getDataCentersWithHttpInfo(dataCenterName, locationId, providerName, _options).then(
            (apiResponse) => apiResponse.data
        );
    }
}
