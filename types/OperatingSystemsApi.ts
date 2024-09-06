import { OperatingSystemsApiRequestFactory, OperatingSystemsApiResponseProcessor } from '../apis/OperatingSystemsApi';
import { Configuration } from '../configuration';
import { HttpInfo } from '../http/http';
import { OperatingSystem } from '../models/OperatingSystem';

export class OperatingSystemsApi {
    private requestFactory: OperatingSystemsApiRequestFactory;
    private responseProcessor: OperatingSystemsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OperatingSystemsApiRequestFactory,
        responseProcessor?: OperatingSystemsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OperatingSystemsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OperatingSystemsApiResponseProcessor();
    }

    /**
     * Returns an operating system (supported by the cloud providers) by its ID. The method provides detailed information about each operating system, including its family, type, version, and architecture.
     * Get operating system by ID
     * @param operatingSystemId ID of the operating system
     * @param _options
     */
    public getOperatingSystemWithHttpInfo(
        operatingSystemId: number,
        _options?: Configuration
    ): Promise<HttpInfo<OperatingSystem>> {
        // build promise chain
        let middlewarePre = this.requestFactory.getOperatingSystem(operatingSystemId, _options);
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
                return middlewarePost.then((rsp) => this.responseProcessor.getOperatingSystemWithHttpInfo(rsp));
            });
    }

    /**
     * Returns an operating system (supported by the cloud providers) by its ID. The method provides detailed information about each operating system, including its family, type, version, and architecture.
     * Get operating system by ID
     * @param operatingSystemId ID of the operating system
     * @param _options
     */
    public getOperatingSystem(operatingSystemId: number, _options?: Configuration): Promise<OperatingSystem> {
        return this.getOperatingSystemWithHttpInfo(operatingSystemId, _options).then((apiResponse) => apiResponse.data);
    }

    /**
     * Returns a list of available operating systems of compute instances supported by the cloud providers. The method provides detailed information about each operating system, including its family, type, version, and architecture. Use this list of the operating systems to find an OS when you create any compute instance.
     * Get list of operating systems
     * @param type Type of the operating system
     * @param architecture Architecture of the operating system
     * @param version Version of the operating system
     * @param _options
     */
    public getOperatingSystemsWithHttpInfo(
        type?: string,
        architecture?: string,
        version?: string,
        _options?: Configuration
    ): Promise<HttpInfo<Array<OperatingSystem>>> {
        // build promise chain
        let middlewarePre = this.requestFactory.getOperatingSystems(type, architecture, version, _options);
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
                return middlewarePost.then((rsp) => this.responseProcessor.getOperatingSystemsWithHttpInfo(rsp));
            });
    }

    /**
     * Returns a list of available operating systems of compute instances supported by the cloud providers. The method provides detailed information about each operating system, including its family, type, version, and architecture. Use this list of the operating systems to find an OS when you create any compute instance.
     * Get list of operating systems
     * @param type Type of the operating system
     * @param architecture Architecture of the operating system
     * @param version Version of the operating system
     * @param _options
     */
    public getOperatingSystems(
        type?: string,
        architecture?: string,
        version?: string,
        _options?: Configuration
    ): Promise<Array<OperatingSystem>> {
        return this.getOperatingSystemsWithHttpInfo(type, architecture, version, _options).then(
            (apiResponse) => apiResponse.data
        );
    }
}
