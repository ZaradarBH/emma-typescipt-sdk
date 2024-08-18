import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { BadRequestError } from '../models/BadRequestError';
import { ConflictError } from '../models/ConflictError';
import { Credentials } from '../models/Credentials';
import { DataCenter } from '../models/DataCenter';
import { ForbiddenError } from '../models/ForbiddenError';
import { GetVmConfigs200Response } from '../models/GetVmConfigs200Response';
import { Location } from '../models/Location';
import { NotFoundError } from '../models/NotFoundError';
import { OperatingSystem } from '../models/OperatingSystem';
import { PageableObject } from '../models/PageableObject';
import { PaginatedResult } from '../models/PaginatedResult';
import { Provider } from '../models/Provider';
import { RefreshToken } from '../models/RefreshToken';
import { SecurityGroup } from '../models/SecurityGroup';
import { SecurityGroupInstanceAdd } from '../models/SecurityGroupInstanceAdd';
import { SecurityGroupRequest } from '../models/SecurityGroupRequest';
import { SecurityGroupRule } from '../models/SecurityGroupRule';
import { SecurityGroupRuleRequest } from '../models/SecurityGroupRuleRequest';
import { SortObject } from '../models/SortObject';
import { SpotActionsRequest } from '../models/SpotActionsRequest';
import { SpotCreate } from '../models/SpotCreate';
import { SpotReboot } from '../models/SpotReboot';
import { SshKey } from '../models/SshKey';
import { SshKeyCreate } from '../models/SshKeyCreate';
import { SshKeyGenerated } from '../models/SshKeyGenerated';
import { SshKeyImport } from '../models/SshKeyImport';
import { SshKeyUpdate } from '../models/SshKeyUpdate';
import { SshKeysCreateImport201Response } from '../models/SshKeysCreateImport201Response';
import { SshKeysCreateImportRequest } from '../models/SshKeysCreateImportRequest';
import { Subnetwork } from '../models/Subnetwork';
import { SubnetworkCreate } from '../models/SubnetworkCreate';
import { SubnetworkEdit } from '../models/SubnetworkEdit';
import { SubnetworkResources } from '../models/SubnetworkResources';
import { Tag } from '../models/Tag';
import { Token } from '../models/Token';
import { UnauthorizedError } from '../models/UnauthorizedError';
import { UnprocessableEntityError } from '../models/UnprocessableEntityError';
import { Vm } from '../models/Vm';
import { VmActionsRequest } from '../models/VmActionsRequest';
import { VmClone } from '../models/VmClone';
import { VmConfiguration } from '../models/VmConfiguration';
import { VmConfigurationCost } from '../models/VmConfigurationCost';
import { VmCost } from '../models/VmCost';
import { VmCreate } from '../models/VmCreate';
import { VmDataCenter } from '../models/VmDataCenter';
import { VmDisksInner } from '../models/VmDisksInner';
import { VmEditHardware } from '../models/VmEditHardware';
import { VmLocation } from '../models/VmLocation';
import { VmNetworksInner } from '../models/VmNetworksInner';
import { VmOs } from '../models/VmOs';
import { VmProvider } from '../models/VmProvider';
import { VmReboot } from '../models/VmReboot';
import { VmSecurityGroup } from '../models/VmSecurityGroup';
import { VmShutdown } from '../models/VmShutdown';
import { VmStart } from '../models/VmStart';
import { VmSubnetwork } from '../models/VmSubnetwork';
import { VmTransfer } from '../models/VmTransfer';
import { ObservableAuthenticationApi } from './ObservableAPI';

import { AuthenticationApiRequestFactory, AuthenticationApiResponseProcessor} from "../apis/AuthenticationApi";
export class PromiseAuthenticationApi {
    private api: ObservableAuthenticationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthenticationApiRequestFactory,
        responseProcessor?: AuthenticationApiResponseProcessor
    ) {
        this.api = new ObservableAuthenticationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns an access token and a refresh token for this API. The bearer access token enables you to get access and send requests to the endpoints in this API.  To get the tokens, you need to send a Client ID and a Client Secret, which you can obtain from the Service application in your project. First, create a Service app in your project (Project -> Settings -> Service apps).  To manage access rights to the API, select an appropriate access level for your app when creating the service app - **Read**, **Operate,** or **Manage**.  The Bearer access token is a text string, included in the request header, for example:  ``` curl -X GET https://api.emma.ms/external/v1/locations -H \"Authorization: Bearer YOUR-ACCESS-TOKEN-HERE\" ``` 
     * Issue token
     * @param credentials 
     */
    public issueTokenWithHttpInfo(credentials?: Credentials, _options?: Configuration): Promise<HttpInfo<Token>> {
        const result = this.api.issueTokenWithHttpInfo(credentials, _options);
        return result.toPromise();
    }

    /**
     * Returns an access token and a refresh token for this API. The bearer access token enables you to get access and send requests to the endpoints in this API.  To get the tokens, you need to send a Client ID and a Client Secret, which you can obtain from the Service application in your project. First, create a Service app in your project (Project -> Settings -> Service apps).  To manage access rights to the API, select an appropriate access level for your app when creating the service app - **Read**, **Operate,** or **Manage**.  The Bearer access token is a text string, included in the request header, for example:  ``` curl -X GET https://api.emma.ms/external/v1/locations -H \"Authorization: Bearer YOUR-ACCESS-TOKEN-HERE\" ``` 
     * Issue token
     * @param credentials 
     */
    public issueToken(credentials?: Credentials, _options?: Configuration): Promise<Token> {
        const result = this.api.issueToken(credentials, _options);
        return result.toPromise();
    }

    /**
     * Returns an access token for this API using a refresh token. The refresh token enables you to get a new access token (when it is expired) without needing the Client ID and Client Secret. To get the access token, you need to send the refresh token in the payload. You can obtain the refresh token from the `/v1/issue-token` endpoint. 
     * Refresh token
     * @param refreshToken 
     */
    public refreshTokenWithHttpInfo(refreshToken?: RefreshToken, _options?: Configuration): Promise<HttpInfo<Token>> {
        const result = this.api.refreshTokenWithHttpInfo(refreshToken, _options);
        return result.toPromise();
    }

    /**
     * Returns an access token for this API using a refresh token. The refresh token enables you to get a new access token (when it is expired) without needing the Client ID and Client Secret. To get the access token, you need to send the refresh token in the payload. You can obtain the refresh token from the `/v1/issue-token` endpoint. 
     * Refresh token
     * @param refreshToken 
     */
    public refreshToken(refreshToken?: RefreshToken, _options?: Configuration): Promise<Token> {
        const result = this.api.refreshToken(refreshToken, _options);
        return result.toPromise();
    }


}



import { ObservableComputeInstancesConfigurationsApi } from './ObservableAPI';

import { ComputeInstancesConfigurationsApiRequestFactory, ComputeInstancesConfigurationsApiResponseProcessor} from "../apis/ComputeInstancesConfigurationsApi";
export class PromiseComputeInstancesConfigurationsApi {
    private api: ObservableComputeInstancesConfigurationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ComputeInstancesConfigurationsApiRequestFactory,
        responseProcessor?: ComputeInstancesConfigurationsApiResponseProcessor
    ) {
        this.api = new ObservableComputeInstancesConfigurationsApi(configuration, requestFactory, responseProcessor);
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
     */
    public getSpotConfigsWithHttpInfo(providerId?: number, locationId?: number, dataCenterId?: string, cloudNetworkType?: 'isolated' | 'multi-cloud' | 'default', vCpuType?: 'shared' | 'standard' | 'hpc', vCpu?: number, vCpuMin?: number, vCpuMax?: number, ramGb?: number, ramGbMin?: number, ramGbMax?: number, volumeGb?: number, volumeGbMin?: number, volumeGbMax?: number, volumeType?: 'ssd' | 'ssd-plus', priceMin?: number, priceMax?: number, page?: number, size?: number, _options?: Configuration): Promise<HttpInfo<GetVmConfigs200Response>> {
        const result = this.api.getSpotConfigsWithHttpInfo(providerId, locationId, dataCenterId, cloudNetworkType, vCpuType, vCpu, vCpuMin, vCpuMax, ramGb, ramGbMin, ramGbMax, volumeGb, volumeGbMin, volumeGbMax, volumeType, priceMin, priceMax, page, size, _options);
        return result.toPromise();
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
     */
    public getSpotConfigs(providerId?: number, locationId?: number, dataCenterId?: string, cloudNetworkType?: 'isolated' | 'multi-cloud' | 'default', vCpuType?: 'shared' | 'standard' | 'hpc', vCpu?: number, vCpuMin?: number, vCpuMax?: number, ramGb?: number, ramGbMin?: number, ramGbMax?: number, volumeGb?: number, volumeGbMin?: number, volumeGbMax?: number, volumeType?: 'ssd' | 'ssd-plus', priceMin?: number, priceMax?: number, page?: number, size?: number, _options?: Configuration): Promise<GetVmConfigs200Response> {
        const result = this.api.getSpotConfigs(providerId, locationId, dataCenterId, cloudNetworkType, vCpuType, vCpu, vCpuMin, vCpuMax, ramGb, ramGbMin, ramGbMax, volumeGb, volumeGbMin, volumeGbMax, volumeType, priceMin, priceMax, page, size, _options);
        return result.toPromise();
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
     */
    public getVmConfigsWithHttpInfo(providerId?: number, locationId?: number, dataCenterId?: string, cloudNetworkType?: 'isolated' | 'multi-cloud' | 'default', vCpuType?: 'shared' | 'standard' | 'hpc', vCpu?: number, vCpuMin?: number, vCpuMax?: number, ramGb?: number, ramGbMin?: number, ramGbMax?: number, volumeGb?: number, volumeGbMin?: number, volumeGbMax?: number, volumeType?: 'ssd' | 'ssd-plus', priceMin?: number, priceMax?: number, page?: number, size?: number, _options?: Configuration): Promise<HttpInfo<GetVmConfigs200Response>> {
        const result = this.api.getVmConfigsWithHttpInfo(providerId, locationId, dataCenterId, cloudNetworkType, vCpuType, vCpu, vCpuMin, vCpuMax, ramGb, ramGbMin, ramGbMax, volumeGb, volumeGbMin, volumeGbMax, volumeType, priceMin, priceMax, page, size, _options);
        return result.toPromise();
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
     */
    public getVmConfigs(providerId?: number, locationId?: number, dataCenterId?: string, cloudNetworkType?: 'isolated' | 'multi-cloud' | 'default', vCpuType?: 'shared' | 'standard' | 'hpc', vCpu?: number, vCpuMin?: number, vCpuMax?: number, ramGb?: number, ramGbMin?: number, ramGbMax?: number, volumeGb?: number, volumeGbMin?: number, volumeGbMax?: number, volumeType?: 'ssd' | 'ssd-plus', priceMin?: number, priceMax?: number, page?: number, size?: number, _options?: Configuration): Promise<GetVmConfigs200Response> {
        const result = this.api.getVmConfigs(providerId, locationId, dataCenterId, cloudNetworkType, vCpuType, vCpu, vCpuMin, vCpuMax, ramGb, ramGbMin, ramGbMax, volumeGb, volumeGbMin, volumeGbMax, volumeType, priceMin, priceMax, page, size, _options);
        return result.toPromise();
    }


}



import { ObservableDataCentersApi } from './ObservableAPI';

import { DataCentersApiRequestFactory, DataCentersApiResponseProcessor} from "../apis/DataCentersApi";
export class PromiseDataCentersApi {
    private api: ObservableDataCentersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DataCentersApiRequestFactory,
        responseProcessor?: DataCentersApiResponseProcessor
    ) {
        this.api = new ObservableDataCentersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns a data center from a cloud provider by data center ID. Information on the data center includes its name, provider and location. 
     * Get data center by ID
     * @param dataCenterId ID of the cloud provider\&#39;s data center
     */
    public getDataCenterWithHttpInfo(dataCenterId: string, _options?: Configuration): Promise<HttpInfo<DataCenter>> {
        const result = this.api.getDataCenterWithHttpInfo(dataCenterId, _options);
        return result.toPromise();
    }

    /**
     * Returns a data center from a cloud provider by data center ID. Information on the data center includes its name, provider and location. 
     * Get data center by ID
     * @param dataCenterId ID of the cloud provider\&#39;s data center
     */
    public getDataCenter(dataCenterId: string, _options?: Configuration): Promise<DataCenter> {
        const result = this.api.getDataCenter(dataCenterId, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of data centers from cloud providers. All compute instances are created in data centers. The data center ID is necessary for creating any compute instance. Use this endpoint to find the provider\'s data centers. 
     * Get list of data centers
     * @param dataCenterName Name of the cloud provider\&#39;s data center
     * @param locationId ID of the geographic location
     * @param providerName Name of the cloud provider
     */
    public getDataCentersWithHttpInfo(dataCenterName?: string, locationId?: number, providerName?: string, _options?: Configuration): Promise<HttpInfo<Array<DataCenter>>> {
        const result = this.api.getDataCentersWithHttpInfo(dataCenterName, locationId, providerName, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of data centers from cloud providers. All compute instances are created in data centers. The data center ID is necessary for creating any compute instance. Use this endpoint to find the provider\'s data centers. 
     * Get list of data centers
     * @param dataCenterName Name of the cloud provider\&#39;s data center
     * @param locationId ID of the geographic location
     * @param providerName Name of the cloud provider
     */
    public getDataCenters(dataCenterName?: string, locationId?: number, providerName?: string, _options?: Configuration): Promise<Array<DataCenter>> {
        const result = this.api.getDataCenters(dataCenterName, locationId, providerName, _options);
        return result.toPromise();
    }


}



import { ObservableLocationsApi } from './ObservableAPI';

import { LocationsApiRequestFactory, LocationsApiResponseProcessor} from "../apis/LocationsApi";
export class PromiseLocationsApi {
    private api: ObservableLocationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LocationsApiRequestFactory,
        responseProcessor?: LocationsApiResponseProcessor
    ) {
        this.api = new ObservableLocationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns a geographic location by its ID. Locations are cities or states (in the case of the USA) where providers have data centers. 
     * Get location by ID
     * @param locationId ID of the geographic location
     */
    public getLocationWithHttpInfo(locationId: number, _options?: Configuration): Promise<HttpInfo<Location>> {
        const result = this.api.getLocationWithHttpInfo(locationId, _options);
        return result.toPromise();
    }

    /**
     * Returns a geographic location by its ID. Locations are cities or states (in the case of the USA) where providers have data centers. 
     * Get location by ID
     * @param locationId ID of the geographic location
     */
    public getLocation(locationId: number, _options?: Configuration): Promise<Location> {
        const result = this.api.getLocation(locationId, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of geographic locations of the provider\'s data centers. Locations are cities or states (in the case of the USA). When creating any compute instance, you need to specify a data center. This method helps you find locations with data centers. 
     * Get list of locations
     * @param name Name of the geographic location
     */
    public getLocationsWithHttpInfo(name?: string, _options?: Configuration): Promise<HttpInfo<Array<Location>>> {
        const result = this.api.getLocationsWithHttpInfo(name, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of geographic locations of the provider\'s data centers. Locations are cities or states (in the case of the USA). When creating any compute instance, you need to specify a data center. This method helps you find locations with data centers. 
     * Get list of locations
     * @param name Name of the geographic location
     */
    public getLocations(name?: string, _options?: Configuration): Promise<Array<Location>> {
        const result = this.api.getLocations(name, _options);
        return result.toPromise();
    }


}



import { ObservableOperatingSystemsApi } from './ObservableAPI';

import { OperatingSystemsApiRequestFactory, OperatingSystemsApiResponseProcessor} from "../apis/OperatingSystemsApi";
export class PromiseOperatingSystemsApi {
    private api: ObservableOperatingSystemsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OperatingSystemsApiRequestFactory,
        responseProcessor?: OperatingSystemsApiResponseProcessor
    ) {
        this.api = new ObservableOperatingSystemsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns an operating system (supported by the cloud providers) by its ID. The method provides detailed information about each operating system, including its family, type, version, and architecture. 
     * Get operating system by ID
     * @param operatingSystemId ID of the operating system
     */
    public getOperatingSystemWithHttpInfo(operatingSystemId: number, _options?: Configuration): Promise<HttpInfo<OperatingSystem>> {
        const result = this.api.getOperatingSystemWithHttpInfo(operatingSystemId, _options);
        return result.toPromise();
    }

    /**
     * Returns an operating system (supported by the cloud providers) by its ID. The method provides detailed information about each operating system, including its family, type, version, and architecture. 
     * Get operating system by ID
     * @param operatingSystemId ID of the operating system
     */
    public getOperatingSystem(operatingSystemId: number, _options?: Configuration): Promise<OperatingSystem> {
        const result = this.api.getOperatingSystem(operatingSystemId, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of available operating systems of compute instances supported by the cloud providers. The method provides detailed information about each operating system, including its family, type, version, and architecture. Use this list of the operating systems to find an OS when you create any compute instance. 
     * Get list of operating systems
     * @param type Type of the operating system
     * @param architecture Architecture of the operating system
     * @param version Version of the operating system
     */
    public getOperatingSystemsWithHttpInfo(type?: string, architecture?: string, version?: string, _options?: Configuration): Promise<HttpInfo<Array<OperatingSystem>>> {
        const result = this.api.getOperatingSystemsWithHttpInfo(type, architecture, version, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of available operating systems of compute instances supported by the cloud providers. The method provides detailed information about each operating system, including its family, type, version, and architecture. Use this list of the operating systems to find an OS when you create any compute instance. 
     * Get list of operating systems
     * @param type Type of the operating system
     * @param architecture Architecture of the operating system
     * @param version Version of the operating system
     */
    public getOperatingSystems(type?: string, architecture?: string, version?: string, _options?: Configuration): Promise<Array<OperatingSystem>> {
        const result = this.api.getOperatingSystems(type, architecture, version, _options);
        return result.toPromise();
    }


}



import { ObservableProvidersApi } from './ObservableAPI';

import { ProvidersApiRequestFactory, ProvidersApiResponseProcessor} from "../apis/ProvidersApi";
export class PromiseProvidersApi {
    private api: ObservableProvidersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProvidersApiRequestFactory,
        responseProcessor?: ProvidersApiResponseProcessor
    ) {
        this.api = new ObservableProvidersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns a cloud provider by provider ID. Cloud service provider is a third-party company that provides scalable computing resources that users can access over emma platform. Provider is necessary when you select a data center for creating compute instances. 
     * Get cloud provider by ID
     * @param providerId ID of the cloud provider
     */
    public getProviderWithHttpInfo(providerId: number, _options?: Configuration): Promise<HttpInfo<Provider>> {
        const result = this.api.getProviderWithHttpInfo(providerId, _options);
        return result.toPromise();
    }

    /**
     * Returns a cloud provider by provider ID. Cloud service provider is a third-party company that provides scalable computing resources that users can access over emma platform. Provider is necessary when you select a data center for creating compute instances. 
     * Get cloud provider by ID
     * @param providerId ID of the cloud provider
     */
    public getProvider(providerId: number, _options?: Configuration): Promise<Provider> {
        const result = this.api.getProvider(providerId, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of cloud providers. Cloud service provider is a third-party company that provides scalable computing resources that users can access over emma platform. When you create any computing resources in emma you create them in the provider\'s datacenters. Provider is necessary when you select a data center for creating compute instances. 
     * Get list of cloud providers
     * @param providerName Name of the cloud provider
     */
    public getProvidersWithHttpInfo(providerName?: string, _options?: Configuration): Promise<HttpInfo<Array<Provider>>> {
        const result = this.api.getProvidersWithHttpInfo(providerName, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of cloud providers. Cloud service provider is a third-party company that provides scalable computing resources that users can access over emma platform. When you create any computing resources in emma you create them in the provider\'s datacenters. Provider is necessary when you select a data center for creating compute instances. 
     * Get list of cloud providers
     * @param providerName Name of the cloud provider
     */
    public getProviders(providerName?: string, _options?: Configuration): Promise<Array<Provider>> {
        const result = this.api.getProviders(providerName, _options);
        return result.toPromise();
    }


}



import { ObservableSSHKeysApi } from './ObservableAPI';

import { SSHKeysApiRequestFactory, SSHKeysApiResponseProcessor} from "../apis/SSHKeysApi";
export class PromiseSSHKeysApi {
    private api: ObservableSSHKeysApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SSHKeysApiRequestFactory,
        responseProcessor?: SSHKeysApiResponseProcessor
    ) {
        this.api = new ObservableSSHKeysApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns an SSH key by ID for access to Linux compute instances. You can only retrieve the SSH keys created by the current Service application that you use to send a request. You can\'t retrieve SSH keys created by other users and applications. 
     * Get SSH key by id
     * @param sshKeyId SSH key ID
     */
    public getSshKeyWithHttpInfo(sshKeyId: number, _options?: Configuration): Promise<HttpInfo<SshKey>> {
        const result = this.api.getSshKeyWithHttpInfo(sshKeyId, _options);
        return result.toPromise();
    }

    /**
     * Returns an SSH key by ID for access to Linux compute instances. You can only retrieve the SSH keys created by the current Service application that you use to send a request. You can\'t retrieve SSH keys created by other users and applications. 
     * Get SSH key by id
     * @param sshKeyId SSH key ID
     */
    public getSshKey(sshKeyId: number, _options?: Configuration): Promise<SshKey> {
        const result = this.api.getSshKey(sshKeyId, _options);
        return result.toPromise();
    }

    /**
     * This method deletes a SSH key. You can only delete an SSH key created by the current Service application that you use to send a request. You can\'t delete SSH keys created by other users and applications. 
     * Delete SSH keys
     * @param sshKeyId SSH key ID
     */
    public sshKeyDeleteWithHttpInfo(sshKeyId: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.sshKeyDeleteWithHttpInfo(sshKeyId, _options);
        return result.toPromise();
    }

    /**
     * This method deletes a SSH key. You can only delete an SSH key created by the current Service application that you use to send a request. You can\'t delete SSH keys created by other users and applications. 
     * Delete SSH keys
     * @param sshKeyId SSH key ID
     */
    public sshKeyDelete(sshKeyId: number, _options?: Configuration): Promise<void> {
        const result = this.api.sshKeyDelete(sshKeyId, _options);
        return result.toPromise();
    }

    /**
     * This method updates a name of an existing SSH-key. You can only update an SSH key created by the current Service application that you use to send a request. You can\'t update SSH keys created by other users and applications. 
     * Update SSH keys
     * @param sshKeyId SSH key ID
     * @param sshKeyUpdate 
     */
    public sshKeyUpdateWithHttpInfo(sshKeyId: number, sshKeyUpdate?: SshKeyUpdate, _options?: Configuration): Promise<HttpInfo<SshKey>> {
        const result = this.api.sshKeyUpdateWithHttpInfo(sshKeyId, sshKeyUpdate, _options);
        return result.toPromise();
    }

    /**
     * This method updates a name of an existing SSH-key. You can only update an SSH key created by the current Service application that you use to send a request. You can\'t update SSH keys created by other users and applications. 
     * Update SSH keys
     * @param sshKeyId SSH key ID
     * @param sshKeyUpdate 
     */
    public sshKeyUpdate(sshKeyId: number, sshKeyUpdate?: SshKeyUpdate, _options?: Configuration): Promise<SshKey> {
        const result = this.api.sshKeyUpdate(sshKeyId, sshKeyUpdate, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of the SSH keys for access to Linux compute instances. You can use these keys to create compute instances.   The list only contains the SSH keys created by the current Service application that you use to send a request.   You can\'t retrieve a list of SSH keys created by other users and applications. 
     * Get list of SSH keys
     */
    public sshKeysWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<SshKey>>> {
        const result = this.api.sshKeysWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Returns a list of the SSH keys for access to Linux compute instances. You can use these keys to create compute instances.   The list only contains the SSH keys created by the current Service application that you use to send a request.   You can\'t retrieve a list of SSH keys created by other users and applications. 
     * Get list of SSH keys
     */
    public sshKeys(_options?: Configuration): Promise<Array<SshKey>> {
        const result = this.api.sshKeys(_options);
        return result.toPromise();
    }

    /**
     * This method creates an SSH key that can be used for Linux compute instance creation. An SSH key can be created in two ways: generated by emma or imported by the user.  If you want to **generate** a key, specify two fields: name and keyType (RSA or ED25519). The key will be generated, and you will receive a private key in the response. The private key will be shown only once, so copy and save it to connect to the Linux compute instances.  If you want to **import** an existing SSH key, specify two fields: name and key. In the key field, insert your public SSH key as a string. It will be imported. 
     * Create or import SSH key
     * @param sshKeysCreateImportRequest 
     */
    public sshKeysCreateImportWithHttpInfo(sshKeysCreateImportRequest?: SshKeysCreateImportRequest, _options?: Configuration): Promise<HttpInfo<SshKeysCreateImport201Response>> {
        const result = this.api.sshKeysCreateImportWithHttpInfo(sshKeysCreateImportRequest, _options);
        return result.toPromise();
    }

    /**
     * This method creates an SSH key that can be used for Linux compute instance creation. An SSH key can be created in two ways: generated by emma or imported by the user.  If you want to **generate** a key, specify two fields: name and keyType (RSA or ED25519). The key will be generated, and you will receive a private key in the response. The private key will be shown only once, so copy and save it to connect to the Linux compute instances.  If you want to **import** an existing SSH key, specify two fields: name and key. In the key field, insert your public SSH key as a string. It will be imported. 
     * Create or import SSH key
     * @param sshKeysCreateImportRequest 
     */
    public sshKeysCreateImport(sshKeysCreateImportRequest?: SshKeysCreateImportRequest, _options?: Configuration): Promise<SshKeysCreateImport201Response> {
        const result = this.api.sshKeysCreateImport(sshKeysCreateImportRequest, _options);
        return result.toPromise();
    }


}



import { ObservableSecurityGroupsApi } from './ObservableAPI';

import { SecurityGroupsApiRequestFactory, SecurityGroupsApiResponseProcessor} from "../apis/SecurityGroupsApi";
export class PromiseSecurityGroupsApi {
    private api: ObservableSecurityGroupsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SecurityGroupsApiRequestFactory,
        responseProcessor?: SecurityGroupsApiResponseProcessor
    ) {
        this.api = new ObservableSecurityGroupsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns a security groups by its ID.  A security group refers to a set of rules that determine what network traffic is allowed to enter or leave a particular compute instance. It acts as a virtual firewall, controlling inbound and outbound traffic based on predefined rules.  Security groups operate based on predefined rules that allow or deny traffic based on specified criteria, such as source IP address, destination IP address, port number, and protocol. 
     * Get security group by ID
     * @param securityGroupId ID of the security group
     */
    public getSecurityGroupWithHttpInfo(securityGroupId: number, _options?: Configuration): Promise<HttpInfo<SecurityGroup>> {
        const result = this.api.getSecurityGroupWithHttpInfo(securityGroupId, _options);
        return result.toPromise();
    }

    /**
     * Returns a security groups by its ID.  A security group refers to a set of rules that determine what network traffic is allowed to enter or leave a particular compute instance. It acts as a virtual firewall, controlling inbound and outbound traffic based on predefined rules.  Security groups operate based on predefined rules that allow or deny traffic based on specified criteria, such as source IP address, destination IP address, port number, and protocol. 
     * Get security group by ID
     * @param securityGroupId ID of the security group
     */
    public getSecurityGroup(securityGroupId: number, _options?: Configuration): Promise<SecurityGroup> {
        const result = this.api.getSecurityGroup(securityGroupId, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of security groups. A security group refers to a set of rules that determine what network traffic is allowed to enter or leave a particular compute instance. It acts as a virtual firewall, controlling inbound and outbound traffic based on predefined rules. Security groups operate based on predefined rules that allow or deny traffic based on specified criteria, such as source IP address, destination IP address, port number, and protocol. 
     * Get list of security groups
     */
    public getSecurityGroupsWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<SecurityGroup>>> {
        const result = this.api.getSecurityGroupsWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Returns a list of security groups. A security group refers to a set of rules that determine what network traffic is allowed to enter or leave a particular compute instance. It acts as a virtual firewall, controlling inbound and outbound traffic based on predefined rules. Security groups operate based on predefined rules that allow or deny traffic based on specified criteria, such as source IP address, destination IP address, port number, and protocol. 
     * Get list of security groups
     */
    public getSecurityGroups(_options?: Configuration): Promise<Array<SecurityGroup>> {
        const result = this.api.getSecurityGroups(_options);
        return result.toPromise();
    }

    /**
     * This method creates a security group.  A security group refers to a set of rules that determine what network traffic is allowed to enter or leave a particular compute instance. It acts as a virtual firewall, controlling inbound and outbound traffic based on predefined rules.  Security groups operate based on predefined rules that allow traffic based on specified criteria, such as source IP address, destination IP address, port number, and protocol.  When creating a security group, provide its name and a set of inbound and outbound rules. You can only define rules that allow traffic, not deny it. All traffic is denied except for explicitly allowed traffic.  Security groups control TCP, SCTP, GRE, ESP, AH, UDP, and ICMP protocols, or all the selected protocols at once.  After creating a security group, a set of default rules is added to the security group. These rules are immutable, and you can\'t edit or delete them.  All traffic in the selected protocol is allowed if the IP range in a rule is set to `0.0.0.0/0`. 
     * Create security group
     * @param securityGroupRequest 
     */
    public securityGroupCreateWithHttpInfo(securityGroupRequest?: SecurityGroupRequest, _options?: Configuration): Promise<HttpInfo<SecurityGroup>> {
        const result = this.api.securityGroupCreateWithHttpInfo(securityGroupRequest, _options);
        return result.toPromise();
    }

    /**
     * This method creates a security group.  A security group refers to a set of rules that determine what network traffic is allowed to enter or leave a particular compute instance. It acts as a virtual firewall, controlling inbound and outbound traffic based on predefined rules.  Security groups operate based on predefined rules that allow traffic based on specified criteria, such as source IP address, destination IP address, port number, and protocol.  When creating a security group, provide its name and a set of inbound and outbound rules. You can only define rules that allow traffic, not deny it. All traffic is denied except for explicitly allowed traffic.  Security groups control TCP, SCTP, GRE, ESP, AH, UDP, and ICMP protocols, or all the selected protocols at once.  After creating a security group, a set of default rules is added to the security group. These rules are immutable, and you can\'t edit or delete them.  All traffic in the selected protocol is allowed if the IP range in a rule is set to `0.0.0.0/0`. 
     * Create security group
     * @param securityGroupRequest 
     */
    public securityGroupCreate(securityGroupRequest?: SecurityGroupRequest, _options?: Configuration): Promise<SecurityGroup> {
        const result = this.api.securityGroupCreate(securityGroupRequest, _options);
        return result.toPromise();
    }

    /**
     * This method deletes a security group.  A security group refers to a set of rules that determine what network traffic is allowed to enter or leave a particular compute instance. It acts as a virtual firewall, controlling inbound and outbound traffic based on predefined rules.  Security groups operate based on predefined rules that allow traffic based on specified criteria, such as source IP address, destination IP address, port number, and protocol.  You can\'t delete a security group if any compute instance is using this security group. To delete a security group, first remove a compute instance from the security group using this method: `POST /v1/security-groups/{securityGroupId}/instances` 
     * Delete security group
     * @param securityGroupId ID of the security group
     */
    public securityGroupDeleteWithHttpInfo(securityGroupId: number, _options?: Configuration): Promise<HttpInfo<SecurityGroup>> {
        const result = this.api.securityGroupDeleteWithHttpInfo(securityGroupId, _options);
        return result.toPromise();
    }

    /**
     * This method deletes a security group.  A security group refers to a set of rules that determine what network traffic is allowed to enter or leave a particular compute instance. It acts as a virtual firewall, controlling inbound and outbound traffic based on predefined rules.  Security groups operate based on predefined rules that allow traffic based on specified criteria, such as source IP address, destination IP address, port number, and protocol.  You can\'t delete a security group if any compute instance is using this security group. To delete a security group, first remove a compute instance from the security group using this method: `POST /v1/security-groups/{securityGroupId}/instances` 
     * Delete security group
     * @param securityGroupId ID of the security group
     */
    public securityGroupDelete(securityGroupId: number, _options?: Configuration): Promise<SecurityGroup> {
        const result = this.api.securityGroupDelete(securityGroupId, _options);
        return result.toPromise();
    }

    /**
     * This method adds a compute instance to the selected security group.  A security group refers to a set of rules that determine what network traffic is allowed to enter or leave a particular compute instance. It acts as a virtual firewall, controlling inbound and outbound traffic based on predefined rules.  Security groups operate based on predefined rules that allow traffic based on specified criteria, such as source IP address, destination IP address, port number, and protocol.  Any compute instance always uses some security group since its creation. Adding a compute instance to a security group effectively means moving it from one security group to another. When adding a compute instance to a new security group, it is automatically removed from the previous security group. 
     * Add instance to security group
     * @param securityGroupId ID of the security group
     * @param securityGroupInstanceAdd 
     */
    public securityGroupInstanceAddWithHttpInfo(securityGroupId: number, securityGroupInstanceAdd?: SecurityGroupInstanceAdd, _options?: Configuration): Promise<HttpInfo<Vm>> {
        const result = this.api.securityGroupInstanceAddWithHttpInfo(securityGroupId, securityGroupInstanceAdd, _options);
        return result.toPromise();
    }

    /**
     * This method adds a compute instance to the selected security group.  A security group refers to a set of rules that determine what network traffic is allowed to enter or leave a particular compute instance. It acts as a virtual firewall, controlling inbound and outbound traffic based on predefined rules.  Security groups operate based on predefined rules that allow traffic based on specified criteria, such as source IP address, destination IP address, port number, and protocol.  Any compute instance always uses some security group since its creation. Adding a compute instance to a security group effectively means moving it from one security group to another. When adding a compute instance to a new security group, it is automatically removed from the previous security group. 
     * Add instance to security group
     * @param securityGroupId ID of the security group
     * @param securityGroupInstanceAdd 
     */
    public securityGroupInstanceAdd(securityGroupId: number, securityGroupInstanceAdd?: SecurityGroupInstanceAdd, _options?: Configuration): Promise<Vm> {
        const result = this.api.securityGroupInstanceAdd(securityGroupId, securityGroupInstanceAdd, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of compute instances using the selected security group.  A security group refers to a set of rules that determine what network traffic is allowed to enter or leave a particular compute instance. It acts as a virtual firewall, controlling inbound and outbound traffic based on predefined rules.  Security groups operate based on predefined rules that allow traffic based on specified criteria, such as source IP address, destination IP address, port number, and protocol. 
     * Get instances in security group
     * @param securityGroupId ID of the security group
     */
    public securityGroupInstancesWithHttpInfo(securityGroupId: number, _options?: Configuration): Promise<HttpInfo<Array<Vm>>> {
        const result = this.api.securityGroupInstancesWithHttpInfo(securityGroupId, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of compute instances using the selected security group.  A security group refers to a set of rules that determine what network traffic is allowed to enter or leave a particular compute instance. It acts as a virtual firewall, controlling inbound and outbound traffic based on predefined rules.  Security groups operate based on predefined rules that allow traffic based on specified criteria, such as source IP address, destination IP address, port number, and protocol. 
     * Get instances in security group
     * @param securityGroupId ID of the security group
     */
    public securityGroupInstances(securityGroupId: number, _options?: Configuration): Promise<Array<Vm>> {
        const result = this.api.securityGroupInstances(securityGroupId, _options);
        return result.toPromise();
    }

    /**
     * This method updates a security group.  A security group refers to a set of rules that determine what network traffic is allowed to enter or leave a particular compute instance. It acts as a virtual firewall, controlling inbound and outbound traffic based on predefined rules.  Security groups operate based on predefined rules that allow traffic based on specified criteria, such as source IP address, destination IP address, port number, and protocol.  When editing a security group, you can add and delete the inbound and outbound rules. You can only define rules that allow traffic, not deny it. All traffic is denied except for explicitly allowed traffic.  Security groups control TCP, SCTP, GRE, ESP, AH, UDP, and ICMP protocols, or all the selected protocols at once.  After creating a security group, a set of default rules is added to the security group. These rules are immutable, and you can\'t edit or delete them. When editing a security group, _you should provide the default rules along with any other rules._  All traffic in the selected protocol is allowed if the IP range in a rule is set to `0.0.0.0/0`. 
     * Update security group
     * @param securityGroupId ID of the security group
     * @param securityGroupRequest 
     */
    public securityGroupUpdateWithHttpInfo(securityGroupId: number, securityGroupRequest?: SecurityGroupRequest, _options?: Configuration): Promise<HttpInfo<SecurityGroup>> {
        const result = this.api.securityGroupUpdateWithHttpInfo(securityGroupId, securityGroupRequest, _options);
        return result.toPromise();
    }

    /**
     * This method updates a security group.  A security group refers to a set of rules that determine what network traffic is allowed to enter or leave a particular compute instance. It acts as a virtual firewall, controlling inbound and outbound traffic based on predefined rules.  Security groups operate based on predefined rules that allow traffic based on specified criteria, such as source IP address, destination IP address, port number, and protocol.  When editing a security group, you can add and delete the inbound and outbound rules. You can only define rules that allow traffic, not deny it. All traffic is denied except for explicitly allowed traffic.  Security groups control TCP, SCTP, GRE, ESP, AH, UDP, and ICMP protocols, or all the selected protocols at once.  After creating a security group, a set of default rules is added to the security group. These rules are immutable, and you can\'t edit or delete them. When editing a security group, _you should provide the default rules along with any other rules._  All traffic in the selected protocol is allowed if the IP range in a rule is set to `0.0.0.0/0`. 
     * Update security group
     * @param securityGroupId ID of the security group
     * @param securityGroupRequest 
     */
    public securityGroupUpdate(securityGroupId: number, securityGroupRequest?: SecurityGroupRequest, _options?: Configuration): Promise<SecurityGroup> {
        const result = this.api.securityGroupUpdate(securityGroupId, securityGroupRequest, _options);
        return result.toPromise();
    }


}



import { ObservableSpotInstancesApi } from './ObservableAPI';

import { SpotInstancesApiRequestFactory, SpotInstancesApiResponseProcessor} from "../apis/SpotInstancesApi";
export class PromiseSpotInstancesApi {
    private api: ObservableSpotInstancesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SpotInstancesApiRequestFactory,
        responseProcessor?: SpotInstancesApiResponseProcessor
    ) {
        this.api = new ObservableSpotInstancesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns a spot instance by its ID.  A Spot Instance is a specialized compute instance that allows you to access and utilize unused instance capacity at a steeply discounted rate.  Spot price is charged on an hourly basis. 
     * Get spot instance by id
     * @param spotInstanceId ID of the spot instance
     */
    public getSpotWithHttpInfo(spotInstanceId: number, _options?: Configuration): Promise<HttpInfo<Vm>> {
        const result = this.api.getSpotWithHttpInfo(spotInstanceId, _options);
        return result.toPromise();
    }

    /**
     * Returns a spot instance by its ID.  A Spot Instance is a specialized compute instance that allows you to access and utilize unused instance capacity at a steeply discounted rate.  Spot price is charged on an hourly basis. 
     * Get spot instance by id
     * @param spotInstanceId ID of the spot instance
     */
    public getSpot(spotInstanceId: number, _options?: Configuration): Promise<Vm> {
        const result = this.api.getSpot(spotInstanceId, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of spot instances.  A Spot Instance is a specialized compute instance that allows you to access and utilize unused instance capacity at a steeply discounted rate.  Spot price is charged on an hourly basis. 
     * Get list of spot instances
     */
    public getSpotsWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<Vm>>> {
        const result = this.api.getSpotsWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Returns a list of spot instances.  A Spot Instance is a specialized compute instance that allows you to access and utilize unused instance capacity at a steeply discounted rate.  Spot price is charged on an hourly basis. 
     * Get list of spot instances
     */
    public getSpots(_options?: Configuration): Promise<Array<Vm>> {
        const result = this.api.getSpots(_options);
        return result.toPromise();
    }

    /**
     * This endpoint reboots a spot instance. 
     * Perform actions with a spot instance
     * @param spotInstanceId ID of the spot instance
     * @param spotActionsRequest 
     */
    public spotActionsWithHttpInfo(spotInstanceId: number, spotActionsRequest?: SpotActionsRequest, _options?: Configuration): Promise<HttpInfo<Vm>> {
        const result = this.api.spotActionsWithHttpInfo(spotInstanceId, spotActionsRequest, _options);
        return result.toPromise();
    }

    /**
     * This endpoint reboots a spot instance. 
     * Perform actions with a spot instance
     * @param spotInstanceId ID of the spot instance
     * @param spotActionsRequest 
     */
    public spotActions(spotInstanceId: number, spotActionsRequest?: SpotActionsRequest, _options?: Configuration): Promise<Vm> {
        const result = this.api.spotActions(spotInstanceId, spotActionsRequest, _options);
        return result.toPromise();
    }

    /**
     * This method creates a spot instance according to the specified parameters.  A Spot Instance is a specialized compute instance that allows you to access and utilize unused instance capacity at a steeply discounted rate. Spot price is charged on an hourly basis.   To create a spot instance, follow these steps:  1. Select a data center using the `/v1/data-centers` endpoint. The data center determines the provider and location of the spot instance.  2. Select an available hardware configuration for the spot instance using the `/v1/spots-configs` endpoint.  3. Select an SSH key for the Linux spot instance using the `/v1/ssh-keys` endpoint.  4. Select an operating system using the `/v1/operating-systems` endpoint.  5. Choose one of the cloud network types: _multi-cloud, isolated,_ or _default_. Choose the _multi-cloud_ network type if you need to connect compute instances from different providers.  You may choose not to specify a security group. In this case, the spot instance will be added to the default security group.  A `price` field of a spot instance is not required.   The spot instance market operates on a bidding system. Your specified price acts as your bid in this market. If your bid is higher than the current spot price, your instance request will likely be fulfilled. However, if the market price exceeds your bid, your instance may not be launched or could be terminated if already running. 
     * Create spot instance
     * @param spotCreate 
     */
    public spotCreateWithHttpInfo(spotCreate?: SpotCreate, _options?: Configuration): Promise<HttpInfo<Vm>> {
        const result = this.api.spotCreateWithHttpInfo(spotCreate, _options);
        return result.toPromise();
    }

    /**
     * This method creates a spot instance according to the specified parameters.  A Spot Instance is a specialized compute instance that allows you to access and utilize unused instance capacity at a steeply discounted rate. Spot price is charged on an hourly basis.   To create a spot instance, follow these steps:  1. Select a data center using the `/v1/data-centers` endpoint. The data center determines the provider and location of the spot instance.  2. Select an available hardware configuration for the spot instance using the `/v1/spots-configs` endpoint.  3. Select an SSH key for the Linux spot instance using the `/v1/ssh-keys` endpoint.  4. Select an operating system using the `/v1/operating-systems` endpoint.  5. Choose one of the cloud network types: _multi-cloud, isolated,_ or _default_. Choose the _multi-cloud_ network type if you need to connect compute instances from different providers.  You may choose not to specify a security group. In this case, the spot instance will be added to the default security group.  A `price` field of a spot instance is not required.   The spot instance market operates on a bidding system. Your specified price acts as your bid in this market. If your bid is higher than the current spot price, your instance request will likely be fulfilled. However, if the market price exceeds your bid, your instance may not be launched or could be terminated if already running. 
     * Create spot instance
     * @param spotCreate 
     */
    public spotCreate(spotCreate?: SpotCreate, _options?: Configuration): Promise<Vm> {
        const result = this.api.spotCreate(spotCreate, _options);
        return result.toPromise();
    }

    /**
     * This method deletes a spot instance. 
     * Delete spot instance
     * @param spotInstanceId ID of the spot instance
     */
    public spotDeleteWithHttpInfo(spotInstanceId: number, _options?: Configuration): Promise<HttpInfo<Vm>> {
        const result = this.api.spotDeleteWithHttpInfo(spotInstanceId, _options);
        return result.toPromise();
    }

    /**
     * This method deletes a spot instance. 
     * Delete spot instance
     * @param spotInstanceId ID of the spot instance
     */
    public spotDelete(spotInstanceId: number, _options?: Configuration): Promise<Vm> {
        const result = this.api.spotDelete(spotInstanceId, _options);
        return result.toPromise();
    }


}



import { ObservableSubnetworksApi } from './ObservableAPI';

import { SubnetworksApiRequestFactory, SubnetworksApiResponseProcessor} from "../apis/SubnetworksApi";
export class PromiseSubnetworksApi {
    private api: ObservableSubnetworksApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SubnetworksApiRequestFactory,
        responseProcessor?: SubnetworksApiResponseProcessor
    ) {
        this.api = new ObservableSubnetworksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns a list of subnetworks within the project. 
     * Get list of subnetworks
     */
    public v1SubnetworksGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<Subnetwork>>> {
        const result = this.api.v1SubnetworksGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Returns a list of subnetworks within the project. 
     * Get list of subnetworks
     */
    public v1SubnetworksGet(_options?: Configuration): Promise<Array<Subnetwork>> {
        const result = this.api.v1SubnetworksGet(_options);
        return result.toPromise();
    }

    /**
     * This method creates a subnetwork. To create a subnetwork, consider the following parameters: 1. Select a data center using the `/v1/data-centers` endpoint. The data center determines the provider and location of the subnetwork. 2. Specify the IP address range (optional) and network size (required). Subnetwork prefix value must be in ranges: 10.0.0.0 - 10.255.255.255, 172.16.0.0 - 172.31.255.255, 192.168.0.0 - 192.168.255.255, network size must be /28-/16 for DigitalOcean and /24-/16 for Gcore. 
     * Create subnetwork
     * @param subnetworkCreate 
     */
    public v1SubnetworksPostWithHttpInfo(subnetworkCreate?: SubnetworkCreate, _options?: Configuration): Promise<HttpInfo<SubnetworkCreate>> {
        const result = this.api.v1SubnetworksPostWithHttpInfo(subnetworkCreate, _options);
        return result.toPromise();
    }

    /**
     * This method creates a subnetwork. To create a subnetwork, consider the following parameters: 1. Select a data center using the `/v1/data-centers` endpoint. The data center determines the provider and location of the subnetwork. 2. Specify the IP address range (optional) and network size (required). Subnetwork prefix value must be in ranges: 10.0.0.0 - 10.255.255.255, 172.16.0.0 - 172.31.255.255, 192.168.0.0 - 192.168.255.255, network size must be /28-/16 for DigitalOcean and /24-/16 for Gcore. 
     * Create subnetwork
     * @param subnetworkCreate 
     */
    public v1SubnetworksPost(subnetworkCreate?: SubnetworkCreate, _options?: Configuration): Promise<SubnetworkCreate> {
        const result = this.api.v1SubnetworksPost(subnetworkCreate, _options);
        return result.toPromise();
    }

    /**
     * This method deletes a subnetwork. 
     * Delete subnetwork
     * @param subnetworkId Subnetwork ID
     */
    public v1SubnetworksSubnetworkIdDeleteWithHttpInfo(subnetworkId: string, _options?: Configuration): Promise<HttpInfo<Subnetwork>> {
        const result = this.api.v1SubnetworksSubnetworkIdDeleteWithHttpInfo(subnetworkId, _options);
        return result.toPromise();
    }

    /**
     * This method deletes a subnetwork. 
     * Delete subnetwork
     * @param subnetworkId Subnetwork ID
     */
    public v1SubnetworksSubnetworkIdDelete(subnetworkId: string, _options?: Configuration): Promise<Subnetwork> {
        const result = this.api.v1SubnetworksSubnetworkIdDelete(subnetworkId, _options);
        return result.toPromise();
    }

    /**
     * Returns a subnetwork by its ID. 
     * Get subnetwork by ID
     * @param subnetworkId Subnetwork ID
     */
    public v1SubnetworksSubnetworkIdGetWithHttpInfo(subnetworkId: string, _options?: Configuration): Promise<HttpInfo<Subnetwork>> {
        const result = this.api.v1SubnetworksSubnetworkIdGetWithHttpInfo(subnetworkId, _options);
        return result.toPromise();
    }

    /**
     * Returns a subnetwork by its ID. 
     * Get subnetwork by ID
     * @param subnetworkId Subnetwork ID
     */
    public v1SubnetworksSubnetworkIdGet(subnetworkId: string, _options?: Configuration): Promise<Subnetwork> {
        const result = this.api.v1SubnetworksSubnetworkIdGet(subnetworkId, _options);
        return result.toPromise();
    }

    /**
     * This method updates a subnetwork. Only the subnetwork name can be updated. 
     * Update subnetwork
     * @param subnetworkId Subnetwork ID
     * @param subnetworkEdit 
     */
    public v1SubnetworksSubnetworkIdPutWithHttpInfo(subnetworkId: string, subnetworkEdit?: SubnetworkEdit, _options?: Configuration): Promise<HttpInfo<Subnetwork>> {
        const result = this.api.v1SubnetworksSubnetworkIdPutWithHttpInfo(subnetworkId, subnetworkEdit, _options);
        return result.toPromise();
    }

    /**
     * This method updates a subnetwork. Only the subnetwork name can be updated. 
     * Update subnetwork
     * @param subnetworkId Subnetwork ID
     * @param subnetworkEdit 
     */
    public v1SubnetworksSubnetworkIdPut(subnetworkId: string, subnetworkEdit?: SubnetworkEdit, _options?: Configuration): Promise<Subnetwork> {
        const result = this.api.v1SubnetworksSubnetworkIdPut(subnetworkId, subnetworkEdit, _options);
        return result.toPromise();
    }


}



import { ObservableVirtualMachinesApi } from './ObservableAPI';

import { VirtualMachinesApiRequestFactory, VirtualMachinesApiResponseProcessor} from "../apis/VirtualMachinesApi";
export class PromiseVirtualMachinesApi {
    private api: ObservableVirtualMachinesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: VirtualMachinesApiRequestFactory,
        responseProcessor?: VirtualMachinesApiResponseProcessor
    ) {
        this.api = new ObservableVirtualMachinesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint returns a virtual machine by ID. 
     * Get virtual machine by id
     * @param vmId ID of the virtual machine
     */
    public getVmWithHttpInfo(vmId: number, _options?: Configuration): Promise<HttpInfo<Vm>> {
        const result = this.api.getVmWithHttpInfo(vmId, _options);
        return result.toPromise();
    }

    /**
     * This endpoint returns a virtual machine by ID. 
     * Get virtual machine by id
     * @param vmId ID of the virtual machine
     */
    public getVm(vmId: number, _options?: Configuration): Promise<Vm> {
        const result = this.api.getVm(vmId, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of virtual machines within the project. 
     * Get list of virtual machines
     */
    public getVmsWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<Vm>>> {
        const result = this.api.getVmsWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Returns a list of virtual machines within the project. 
     * Get list of virtual machines
     */
    public getVms(_options?: Configuration): Promise<Array<Vm>> {
        const result = this.api.getVms(_options);
        return result.toPromise();
    }

    /**
     * This method performs several actions with a virtual machine:   - Start a virtual machine   - Shutdown a virtual machine   - Reboot a virtual machine   - Transfer a virtual machine   - Clone a virtual machine   - Edit hardware of a virtual machine 
     * Perform actions with a virtual machine
     * @param vmId ID of the virtual machine
     * @param vmActionsRequest 
     */
    public vmActionsWithHttpInfo(vmId: number, vmActionsRequest?: VmActionsRequest, _options?: Configuration): Promise<HttpInfo<Vm>> {
        const result = this.api.vmActionsWithHttpInfo(vmId, vmActionsRequest, _options);
        return result.toPromise();
    }

    /**
     * This method performs several actions with a virtual machine:   - Start a virtual machine   - Shutdown a virtual machine   - Reboot a virtual machine   - Transfer a virtual machine   - Clone a virtual machine   - Edit hardware of a virtual machine 
     * Perform actions with a virtual machine
     * @param vmId ID of the virtual machine
     * @param vmActionsRequest 
     */
    public vmActions(vmId: number, vmActionsRequest?: VmActionsRequest, _options?: Configuration): Promise<Vm> {
        const result = this.api.vmActions(vmId, vmActionsRequest, _options);
        return result.toPromise();
    }

    /**
     * This method creates a virtual machine according to the specified parameters.  To create a virtual machine, follow these steps:  1. Select a data center using the `/v1/data-centers` endpoint. The data center determines the provider and location of the virtual machine.  2. Select an available hardware configuration for the virtual machine using the `/v1/vms-configs` endpoint.  3. Select an SSH key for the Linux virtual machine using the `/v1/ssh-keys` endpoint.  4. Select an operating system using the `/v1/operating-systems` endpoint.  5. Choose one of the cloud network types: _multi-cloud, isolated,_ or _default_. Choose the _multi-cloud_ network type if you need to connect compute instances from different providers.  You may choose not to specify a security group. In this case, the virtual machine will be added to the default security group. 
     * Create virtual machine
     * @param vmCreate 
     */
    public vmCreateWithHttpInfo(vmCreate?: VmCreate, _options?: Configuration): Promise<HttpInfo<Vm>> {
        const result = this.api.vmCreateWithHttpInfo(vmCreate, _options);
        return result.toPromise();
    }

    /**
     * This method creates a virtual machine according to the specified parameters.  To create a virtual machine, follow these steps:  1. Select a data center using the `/v1/data-centers` endpoint. The data center determines the provider and location of the virtual machine.  2. Select an available hardware configuration for the virtual machine using the `/v1/vms-configs` endpoint.  3. Select an SSH key for the Linux virtual machine using the `/v1/ssh-keys` endpoint.  4. Select an operating system using the `/v1/operating-systems` endpoint.  5. Choose one of the cloud network types: _multi-cloud, isolated,_ or _default_. Choose the _multi-cloud_ network type if you need to connect compute instances from different providers.  You may choose not to specify a security group. In this case, the virtual machine will be added to the default security group. 
     * Create virtual machine
     * @param vmCreate 
     */
    public vmCreate(vmCreate?: VmCreate, _options?: Configuration): Promise<Vm> {
        const result = this.api.vmCreate(vmCreate, _options);
        return result.toPromise();
    }

    /**
     * This method deletes a virtual machine. 
     * Delete virtual machine
     * @param vmId ID of the virtual machine
     */
    public vmDeleteWithHttpInfo(vmId: number, _options?: Configuration): Promise<HttpInfo<Vm>> {
        const result = this.api.vmDeleteWithHttpInfo(vmId, _options);
        return result.toPromise();
    }

    /**
     * This method deletes a virtual machine. 
     * Delete virtual machine
     * @param vmId ID of the virtual machine
     */
    public vmDelete(vmId: number, _options?: Configuration): Promise<Vm> {
        const result = this.api.vmDelete(vmId, _options);
        return result.toPromise();
    }


}


