import {
    ComputeInstancesConfigurationsApiRequestFactory,
    ComputeInstancesConfigurationsApiResponseProcessor,
} from '../apis/ComputeInstancesConfigurationsApi';
import { Configuration } from '../configuration';
import { HttpInfo, RequestContext, ResponseContext } from '../http/http';
import { GetVmConfigs200Response } from '../models/GetVmConfigs200Response';
import './promiseMap';

export class ComputeInstancesConfigurationsApi {
    private requestFactory: ComputeInstancesConfigurationsApiRequestFactory;
    private responseProcessor: ComputeInstancesConfigurationsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ComputeInstancesConfigurationsApiRequestFactory,
        responseProcessor?: ComputeInstancesConfigurationsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ComputeInstancesConfigurationsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ComputeInstancesConfigurationsApiResponseProcessor();
    }

    /**
     * When creating spot instances you need to provide the desired hardware configurations. These configurations include CPU, CPU type, RAM, volume size, and volume type. Different cloud providers offer various configurations in different data centers. Therefore, before creating any compute instance, you need to verify the available configurations.  Use this endpoint as a reference for available configurations for spot instances. You can search the available configurations by different parameters (provider, location, data center, cloud network type, CPU, CPU type, RAM, volume size, volume type, and price).  When you find an appropriate configuration, provide the hardware parameters in the endpoint for creating or editing a spot instance.
     * Search available configurations for spot instance creation
     * @param providerId ID of the cloud provider
     * @param locationId ID of the geographic location
     * @param dataCenterId ID of the cloud provider\&#39;s data center
     * @param cloudNetworkType Type of cloud network
     * @param vCpuType Type of vCPUs for the compute instance
     * @param vCpu virtual Central Processing Units (vCPUs) for the compute instance
     * @param vCpuMin Minimum number of vCPUs for the compute instance
     * @param vCpuMax Maximum number of vCPUs for the compute instance
     * @param ramGb RAM of the compute instance in gigabytes
     * @param ramGbMin Minimum RAM of the compute instance in gigabytes
     * @param ramGbMax Maximum RAM of the compute instance in gigabytes
     * @param volumeGb Volume size of the compute instance in gigabytes
     * @param volumeGbMin Minimum volume size of the compute instance in gigabytes
     * @param volumeGbMax Maximum volume size of the compute instance in gigabytes
     * @param volumeType Volume type of the compute instance
     * @param priceMin Minimum price of the compute instance
     * @param priceMax Maximum price of the compute instance
     * @param page Page number
     * @param size Query size
     * @param _options
     */
    public getSpotConfigsWithHttpInfo(
        providerId?: number,
        locationId?: number,
        dataCenterId?: string,
        cloudNetworkType?: 'isolated' | 'multi-cloud' | 'default',
        vCpuType?: 'shared' | 'standard' | 'hpc',
        vCpu?: number,
        vCpuMin?: number,
        vCpuMax?: number,
        ramGb?: number,
        ramGbMin?: number,
        ramGbMax?: number,
        volumeGb?: number,
        volumeGbMin?: number,
        volumeGbMax?: number,
        volumeType?: 'ssd' | 'ssd-plus',
        priceMin?: number,
        priceMax?: number,
        page?: number,
        size?: number,
        _options?: Configuration
    ): Promise<HttpInfo<GetVmConfigs200Response>> {
        // build promise chain
        let middlewarePre = this.requestFactory.getSpotConfigs(
            providerId,
            locationId,
            dataCenterId,
            cloudNetworkType,
            vCpuType,
            vCpu,
            vCpuMin,
            vCpuMax,
            ramGb,
            ramGbMin,
            ramGbMax,
            volumeGb,
            volumeGbMin,
            volumeGbMax,
            volumeType,
            priceMin,
            priceMax,
            page,
            size,
            _options
        );
        for (let middleware of this.configuration.middleware) {
            middlewarePre = middlewarePre.then(promiseMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePre.then(promiseMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).then(
            promiseMap((response: ResponseContext) => {
                let middlewarePost = Promise.resolve(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePost = middlewarePost.then(promiseMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePost.then((rsp) => this.responseProcessor.getSpotConfigsWithHttpInfo(rsp));
            })
        );
    }

    /**
     * When creating spot instances you need to provide the desired hardware configurations. These configurations include CPU, CPU type, RAM, volume size, and volume type. Different cloud providers offer various configurations in different data centers. Therefore, before creating any compute instance, you need to verify the available configurations.  Use this endpoint as a reference for available configurations for spot instances. You can search the available configurations by different parameters (provider, location, data center, cloud network type, CPU, CPU type, RAM, volume size, volume type, and price).  When you find an appropriate configuration, provide the hardware parameters in the endpoint for creating or editing a spot instance.
     * Search available configurations for spot instance creation
     * @param providerId ID of the cloud provider
     * @param locationId ID of the geographic location
     * @param dataCenterId ID of the cloud provider\&#39;s data center
     * @param cloudNetworkType Type of cloud network
     * @param vCpuType Type of vCPUs for the compute instance
     * @param vCpu virtual Central Processing Units (vCPUs) for the compute instance
     * @param vCpuMin Minimum number of vCPUs for the compute instance
     * @param vCpuMax Maximum number of vCPUs for the compute instance
     * @param ramGb RAM of the compute instance in gigabytes
     * @param ramGbMin Minimum RAM of the compute instance in gigabytes
     * @param ramGbMax Maximum RAM of the compute instance in gigabytes
     * @param volumeGb Volume size of the compute instance in gigabytes
     * @param volumeGbMin Minimum volume size of the compute instance in gigabytes
     * @param volumeGbMax Maximum volume size of the compute instance in gigabytes
     * @param volumeType Volume type of the compute instance
     * @param priceMin Minimum price of the compute instance
     * @param priceMax Maximum price of the compute instance
     * @param page Page number
     * @param size Query size
     * @param _options
     */
    public getSpotConfigs(
        providerId?: number,
        locationId?: number,
        dataCenterId?: string,
        cloudNetworkType?: 'isolated' | 'multi-cloud' | 'default',
        vCpuType?: 'shared' | 'standard' | 'hpc',
        vCpu?: number,
        vCpuMin?: number,
        vCpuMax?: number,
        ramGb?: number,
        ramGbMin?: number,
        ramGbMax?: number,
        volumeGb?: number,
        volumeGbMin?: number,
        volumeGbMax?: number,
        volumeType?: 'ssd' | 'ssd-plus',
        priceMin?: number,
        priceMax?: number,
        page?: number,
        size?: number,
        _options?: Configuration
    ): Promise<GetVmConfigs200Response> {
        return this.getSpotConfigsWithHttpInfo(
            providerId,
            locationId,
            dataCenterId,
            cloudNetworkType,
            vCpuType,
            vCpu,
            vCpuMin,
            vCpuMax,
            ramGb,
            ramGbMin,
            ramGbMax,
            volumeGb,
            volumeGbMin,
            volumeGbMax,
            volumeType,
            priceMin,
            priceMax,
            page,
            size,
            _options
        ).then((apiResponse) => apiResponse.data);
    }

    /**
     * When creating virtual machines you need to provide the desired hardware configurations. These configurations include CPU, CPU type, RAM, volume size, and volume type. Different cloud providers offer various configurations in different data centers. Therefore, before creating any compute instance, you need to verify the available configurations.  Use this endpoint as a reference for available configurations for virtual machines. You can search the available configurations by different parameters (provider, location, data center, cloud network type, CPU, CPU type, RAM, volume size, volume type, and price).  When you find an appropriate configuration, provide the hardware parameters in the endpoint for creating or editing a virtual machine.
     * Search available configurations for virtual machine creation
     * @param providerId ID of the cloud provider
     * @param locationId ID of the geographic location
     * @param dataCenterId ID of the cloud provider\&#39;s data center
     * @param cloudNetworkType Type of cloud network
     * @param vCpuType Type of vCPUs for the compute instance
     * @param vCpu virtual Central Processing Units (vCPUs) for the compute instance
     * @param vCpuMin Minimum number of vCPUs for the compute instance
     * @param vCpuMax Maximum number of vCPUs for the compute instance
     * @param ramGb RAM of the compute instance in gigabytes
     * @param ramGbMin Minimum RAM of the compute instance in gigabytes
     * @param ramGbMax Maximum RAM of the compute instance in gigabytes
     * @param volumeGb Volume size of the compute instance in gigabytes
     * @param volumeGbMin Minimum volume size of the compute instance in gigabytes
     * @param volumeGbMax Maximum volume size of the compute instance in gigabytes
     * @param volumeType Volume type of the compute instance
     * @param priceMin Minimum price of the compute instance
     * @param priceMax Maximum price of the compute instance
     * @param page Page number
     * @param size Query size
     * @param _options
     */
    public getVmConfigsWithHttpInfo(
        providerId?: number,
        locationId?: number,
        dataCenterId?: string,
        cloudNetworkType?: 'isolated' | 'multi-cloud' | 'default',
        vCpuType?: 'shared' | 'standard' | 'hpc',
        vCpu?: number,
        vCpuMin?: number,
        vCpuMax?: number,
        ramGb?: number,
        ramGbMin?: number,
        ramGbMax?: number,
        volumeGb?: number,
        volumeGbMin?: number,
        volumeGbMax?: number,
        volumeType?: 'ssd' | 'ssd-plus',
        priceMin?: number,
        priceMax?: number,
        page?: number,
        size?: number,
        _options?: Configuration
    ): Promise<HttpInfo<GetVmConfigs200Response>> {
        // build promise chain
        let middlewarePre = this.requestFactory.getVmConfigs(
            providerId,
            locationId,
            dataCenterId,
            cloudNetworkType,
            vCpuType,
            vCpu,
            vCpuMin,
            vCpuMax,
            ramGb,
            ramGbMin,
            ramGbMax,
            volumeGb,
            volumeGbMin,
            volumeGbMax,
            volumeType,
            priceMin,
            priceMax,
            page,
            size,
            _options
        );
        for (let middleware of this.configuration.middleware) {
            middlewarePre = middlewarePre.then(promiseMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePre.then(promiseMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).then(
            promiseMap((response: ResponseContext) => {
                let middlewarePost = Promise.resolve(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePost = middlewarePost.then(promiseMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePost.then((rsp) => this.responseProcessor.getVmConfigsWithHttpInfo(rsp));
            })
        );
    }

    /**
     * When creating virtual machines you need to provide the desired hardware configurations. These configurations include CPU, CPU type, RAM, volume size, and volume type. Different cloud providers offer various configurations in different data centers. Therefore, before creating any compute instance, you need to verify the available configurations.  Use this endpoint as a reference for available configurations for virtual machines. You can search the available configurations by different parameters (provider, location, data center, cloud network type, CPU, CPU type, RAM, volume size, volume type, and price).  When you find an appropriate configuration, provide the hardware parameters in the endpoint for creating or editing a virtual machine.
     * Search available configurations for virtual machine creation
     * @param providerId ID of the cloud provider
     * @param locationId ID of the geographic location
     * @param dataCenterId ID of the cloud provider\&#39;s data center
     * @param cloudNetworkType Type of cloud network
     * @param vCpuType Type of vCPUs for the compute instance
     * @param vCpu virtual Central Processing Units (vCPUs) for the compute instance
     * @param vCpuMin Minimum number of vCPUs for the compute instance
     * @param vCpuMax Maximum number of vCPUs for the compute instance
     * @param ramGb RAM of the compute instance in gigabytes
     * @param ramGbMin Minimum RAM of the compute instance in gigabytes
     * @param ramGbMax Maximum RAM of the compute instance in gigabytes
     * @param volumeGb Volume size of the compute instance in gigabytes
     * @param volumeGbMin Minimum volume size of the compute instance in gigabytes
     * @param volumeGbMax Maximum volume size of the compute instance in gigabytes
     * @param volumeType Volume type of the compute instance
     * @param priceMin Minimum price of the compute instance
     * @param priceMax Maximum price of the compute instance
     * @param page Page number
     * @param size Query size
     * @param _options
     */
    public getVmConfigs(
        providerId?: number,
        locationId?: number,
        dataCenterId?: string,
        cloudNetworkType?: 'isolated' | 'multi-cloud' | 'default',
        vCpuType?: 'shared' | 'standard' | 'hpc',
        vCpu?: number,
        vCpuMin?: number,
        vCpuMax?: number,
        ramGb?: number,
        ramGbMin?: number,
        ramGbMax?: number,
        volumeGb?: number,
        volumeGbMin?: number,
        volumeGbMax?: number,
        volumeType?: 'ssd' | 'ssd-plus',
        priceMin?: number,
        priceMax?: number,
        page?: number,
        size?: number,
        _options?: Configuration
    ): Promise<GetVmConfigs200Response> {
        return this.getVmConfigsWithHttpInfo(
            providerId,
            locationId,
            dataCenterId,
            cloudNetworkType,
            vCpuType,
            vCpu,
            vCpuMin,
            vCpuMax,
            ramGb,
            ramGbMin,
            ramGbMax,
            volumeGb,
            volumeGbMin,
            volumeGbMax,
            volumeType,
            priceMin,
            priceMax,
            page,
            size,
            _options
        ).then((apiResponse) => apiResponse.data);
    }
}
