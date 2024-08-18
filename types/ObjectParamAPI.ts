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

import { ObservableAuthenticationApi } from "./ObservableAPI";
import { AuthenticationApiRequestFactory, AuthenticationApiResponseProcessor} from "../apis/AuthenticationApi";

export interface AuthenticationApiIssueTokenRequest {
    /**
     * 
     * @type Credentials
     * @memberof AuthenticationApiissueToken
     */
    credentials?: Credentials
}

export interface AuthenticationApiRefreshTokenRequest {
    /**
     * 
     * @type RefreshToken
     * @memberof AuthenticationApirefreshToken
     */
    refreshToken?: RefreshToken
}

export class ObjectAuthenticationApi {
    private api: ObservableAuthenticationApi

    public constructor(configuration: Configuration, requestFactory?: AuthenticationApiRequestFactory, responseProcessor?: AuthenticationApiResponseProcessor) {
        this.api = new ObservableAuthenticationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns an access token and a refresh token for this API. The bearer access token enables you to get access and send requests to the endpoints in this API.  To get the tokens, you need to send a Client ID and a Client Secret, which you can obtain from the Service application in your project. First, create a Service app in your project (Project -> Settings -> Service apps).  To manage access rights to the API, select an appropriate access level for your app when creating the service app - **Read**, **Operate,** or **Manage**.  The Bearer access token is a text string, included in the request header, for example:  ``` curl -X GET https://api.emma.ms/external/v1/locations -H \"Authorization: Bearer YOUR-ACCESS-TOKEN-HERE\" ``` 
     * Issue token
     * @param param the request object
     */
    public issueTokenWithHttpInfo(param: AuthenticationApiIssueTokenRequest = {}, options?: Configuration): Promise<HttpInfo<Token>> {
        return this.api.issueTokenWithHttpInfo(param.credentials,  options).toPromise();
    }

    /**
     * Returns an access token and a refresh token for this API. The bearer access token enables you to get access and send requests to the endpoints in this API.  To get the tokens, you need to send a Client ID and a Client Secret, which you can obtain from the Service application in your project. First, create a Service app in your project (Project -> Settings -> Service apps).  To manage access rights to the API, select an appropriate access level for your app when creating the service app - **Read**, **Operate,** or **Manage**.  The Bearer access token is a text string, included in the request header, for example:  ``` curl -X GET https://api.emma.ms/external/v1/locations -H \"Authorization: Bearer YOUR-ACCESS-TOKEN-HERE\" ``` 
     * Issue token
     * @param param the request object
     */
    public issueToken(param: AuthenticationApiIssueTokenRequest = {}, options?: Configuration): Promise<Token> {
        return this.api.issueToken(param.credentials,  options).toPromise();
    }

    /**
     * Returns an access token for this API using a refresh token. The refresh token enables you to get a new access token (when it is expired) without needing the Client ID and Client Secret. To get the access token, you need to send the refresh token in the payload. You can obtain the refresh token from the `/v1/issue-token` endpoint. 
     * Refresh token
     * @param param the request object
     */
    public refreshTokenWithHttpInfo(param: AuthenticationApiRefreshTokenRequest = {}, options?: Configuration): Promise<HttpInfo<Token>> {
        return this.api.refreshTokenWithHttpInfo(param.refreshToken,  options).toPromise();
    }

    /**
     * Returns an access token for this API using a refresh token. The refresh token enables you to get a new access token (when it is expired) without needing the Client ID and Client Secret. To get the access token, you need to send the refresh token in the payload. You can obtain the refresh token from the `/v1/issue-token` endpoint. 
     * Refresh token
     * @param param the request object
     */
    public refreshToken(param: AuthenticationApiRefreshTokenRequest = {}, options?: Configuration): Promise<Token> {
        return this.api.refreshToken(param.refreshToken,  options).toPromise();
    }

}

import { ObservableComputeInstancesConfigurationsApi } from "./ObservableAPI";
import { ComputeInstancesConfigurationsApiRequestFactory, ComputeInstancesConfigurationsApiResponseProcessor} from "../apis/ComputeInstancesConfigurationsApi";

export interface ComputeInstancesConfigurationsApiGetSpotConfigsRequest {
    /**
     * ID of the cloud provider
     * @type number
     * @memberof ComputeInstancesConfigurationsApigetSpotConfigs
     */
    providerId?: number
    /**
     * ID of the geographic location
     * @type number
     * @memberof ComputeInstancesConfigurationsApigetSpotConfigs
     */
    locationId?: number
    /**
     * ID of the cloud provider\&#39;s data center
     * @type string
     * @memberof ComputeInstancesConfigurationsApigetSpotConfigs
     */
    dataCenterId?: string
    /**
     * Type of cloud network
     * @type &#39;isolated&#39; | &#39;multi-cloud&#39; | &#39;default&#39;
     * @memberof ComputeInstancesConfigurationsApigetSpotConfigs
     */
    cloudNetworkType?: 'isolated' | 'multi-cloud' | 'default'
    /**
     * Type of vCPUs for the compute instance
     * @type &#39;shared&#39; | &#39;standard&#39; | &#39;hpc&#39;
     * @memberof ComputeInstancesConfigurationsApigetSpotConfigs
     */
    vCpuType?: 'shared' | 'standard' | 'hpc'
    /**
     * virtual Central Processing Units (vCPUs) for the compute instance
     * @type number
     * @memberof ComputeInstancesConfigurationsApigetSpotConfigs
     */
    vCpu?: number
    /**
     * Minimum number of vCPUs for the compute instance
     * @type number
     * @memberof ComputeInstancesConfigurationsApigetSpotConfigs
     */
    vCpuMin?: number
    /**
     * Maximum number of vCPUs for the compute instance
     * @type number
     * @memberof ComputeInstancesConfigurationsApigetSpotConfigs
     */
    vCpuMax?: number
    /**
     * RAM of the compute instance in gigabytes
     * @type number
     * @memberof ComputeInstancesConfigurationsApigetSpotConfigs
     */
    ramGb?: number
    /**
     * Minimum RAM of the compute instance in gigabytes
     * @type number
     * @memberof ComputeInstancesConfigurationsApigetSpotConfigs
     */
    ramGbMin?: number
    /**
     * Maximum RAM of the compute instance in gigabytes
     * @type number
     * @memberof ComputeInstancesConfigurationsApigetSpotConfigs
     */
    ramGbMax?: number
    /**
     * Volume size of the compute instance in gigabytes
     * @type number
     * @memberof ComputeInstancesConfigurationsApigetSpotConfigs
     */
    volumeGb?: number
    /**
     * Minimum volume size of the compute instance in gigabytes
     * @type number
     * @memberof ComputeInstancesConfigurationsApigetSpotConfigs
     */
    volumeGbMin?: number
    /**
     * Maximum volume size of the compute instance in gigabytes
     * @type number
     * @memberof ComputeInstancesConfigurationsApigetSpotConfigs
     */
    volumeGbMax?: number
    /**
     * Volume type of the compute instance
     * @type &#39;ssd&#39; | &#39;ssd-plus&#39;
     * @memberof ComputeInstancesConfigurationsApigetSpotConfigs
     */
    volumeType?: 'ssd' | 'ssd-plus'
    /**
     * Minimum price of the compute instance
     * @type number
     * @memberof ComputeInstancesConfigurationsApigetSpotConfigs
     */
    priceMin?: number
    /**
     * Maximum price of the compute instance
     * @type number
     * @memberof ComputeInstancesConfigurationsApigetSpotConfigs
     */
    priceMax?: number
    /**
     * Page number
     * @type number
     * @memberof ComputeInstancesConfigurationsApigetSpotConfigs
     */
    page?: number
    /**
     * Query size
     * @type number
     * @memberof ComputeInstancesConfigurationsApigetSpotConfigs
     */
    size?: number
}

export interface ComputeInstancesConfigurationsApiGetVmConfigsRequest {
    /**
     * ID of the cloud provider
     * @type number
     * @memberof ComputeInstancesConfigurationsApigetVmConfigs
     */
    providerId?: number
    /**
     * ID of the geographic location
     * @type number
     * @memberof ComputeInstancesConfigurationsApigetVmConfigs
     */
    locationId?: number
    /**
     * ID of the cloud provider\&#39;s data center
     * @type string
     * @memberof ComputeInstancesConfigurationsApigetVmConfigs
     */
    dataCenterId?: string
    /**
     * Type of cloud network
     * @type &#39;isolated&#39; | &#39;multi-cloud&#39; | &#39;default&#39;
     * @memberof ComputeInstancesConfigurationsApigetVmConfigs
     */
    cloudNetworkType?: 'isolated' | 'multi-cloud' | 'default'
    /**
     * Type of vCPUs for the compute instance
     * @type &#39;shared&#39; | &#39;standard&#39; | &#39;hpc&#39;
     * @memberof ComputeInstancesConfigurationsApigetVmConfigs
     */
    vCpuType?: 'shared' | 'standard' | 'hpc'
    /**
     * virtual Central Processing Units (vCPUs) for the compute instance
     * @type number
     * @memberof ComputeInstancesConfigurationsApigetVmConfigs
     */
    vCpu?: number
    /**
     * Minimum number of vCPUs for the compute instance
     * @type number
     * @memberof ComputeInstancesConfigurationsApigetVmConfigs
     */
    vCpuMin?: number
    /**
     * Maximum number of vCPUs for the compute instance
     * @type number
     * @memberof ComputeInstancesConfigurationsApigetVmConfigs
     */
    vCpuMax?: number
    /**
     * RAM of the compute instance in gigabytes
     * @type number
     * @memberof ComputeInstancesConfigurationsApigetVmConfigs
     */
    ramGb?: number
    /**
     * Minimum RAM of the compute instance in gigabytes
     * @type number
     * @memberof ComputeInstancesConfigurationsApigetVmConfigs
     */
    ramGbMin?: number
    /**
     * Maximum RAM of the compute instance in gigabytes
     * @type number
     * @memberof ComputeInstancesConfigurationsApigetVmConfigs
     */
    ramGbMax?: number
    /**
     * Volume size of the compute instance in gigabytes
     * @type number
     * @memberof ComputeInstancesConfigurationsApigetVmConfigs
     */
    volumeGb?: number
    /**
     * Minimum volume size of the compute instance in gigabytes
     * @type number
     * @memberof ComputeInstancesConfigurationsApigetVmConfigs
     */
    volumeGbMin?: number
    /**
     * Maximum volume size of the compute instance in gigabytes
     * @type number
     * @memberof ComputeInstancesConfigurationsApigetVmConfigs
     */
    volumeGbMax?: number
    /**
     * Volume type of the compute instance
     * @type &#39;ssd&#39; | &#39;ssd-plus&#39;
     * @memberof ComputeInstancesConfigurationsApigetVmConfigs
     */
    volumeType?: 'ssd' | 'ssd-plus'
    /**
     * Minimum price of the compute instance
     * @type number
     * @memberof ComputeInstancesConfigurationsApigetVmConfigs
     */
    priceMin?: number
    /**
     * Maximum price of the compute instance
     * @type number
     * @memberof ComputeInstancesConfigurationsApigetVmConfigs
     */
    priceMax?: number
    /**
     * Page number
     * @type number
     * @memberof ComputeInstancesConfigurationsApigetVmConfigs
     */
    page?: number
    /**
     * Query size
     * @type number
     * @memberof ComputeInstancesConfigurationsApigetVmConfigs
     */
    size?: number
}

export class ObjectComputeInstancesConfigurationsApi {
    private api: ObservableComputeInstancesConfigurationsApi

    public constructor(configuration: Configuration, requestFactory?: ComputeInstancesConfigurationsApiRequestFactory, responseProcessor?: ComputeInstancesConfigurationsApiResponseProcessor) {
        this.api = new ObservableComputeInstancesConfigurationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * When creating spot instances you need to provide the desired hardware configurations. These configurations include CPU, CPU type, RAM, volume size, and volume type. Different cloud providers offer various configurations in different data centers. Therefore, before creating any compute instance, you need to verify the available configurations.  Use this endpoint as a reference for available configurations for spot instances. You can search the available configurations by different parameters (provider, location, data center, cloud network type, CPU, CPU type, RAM, volume size, volume type, and price).  When you find an appropriate configuration, provide the hardware parameters in the endpoint for creating or editing a spot instance. 
     * Search available configurations for spot instance creation
     * @param param the request object
     */
    public getSpotConfigsWithHttpInfo(param: ComputeInstancesConfigurationsApiGetSpotConfigsRequest = {}, options?: Configuration): Promise<HttpInfo<GetVmConfigs200Response>> {
        return this.api.getSpotConfigsWithHttpInfo(param.providerId, param.locationId, param.dataCenterId, param.cloudNetworkType, param.vCpuType, param.vCpu, param.vCpuMin, param.vCpuMax, param.ramGb, param.ramGbMin, param.ramGbMax, param.volumeGb, param.volumeGbMin, param.volumeGbMax, param.volumeType, param.priceMin, param.priceMax, param.page, param.size,  options).toPromise();
    }

    /**
     * When creating spot instances you need to provide the desired hardware configurations. These configurations include CPU, CPU type, RAM, volume size, and volume type. Different cloud providers offer various configurations in different data centers. Therefore, before creating any compute instance, you need to verify the available configurations.  Use this endpoint as a reference for available configurations for spot instances. You can search the available configurations by different parameters (provider, location, data center, cloud network type, CPU, CPU type, RAM, volume size, volume type, and price).  When you find an appropriate configuration, provide the hardware parameters in the endpoint for creating or editing a spot instance. 
     * Search available configurations for spot instance creation
     * @param param the request object
     */
    public getSpotConfigs(param: ComputeInstancesConfigurationsApiGetSpotConfigsRequest = {}, options?: Configuration): Promise<GetVmConfigs200Response> {
        return this.api.getSpotConfigs(param.providerId, param.locationId, param.dataCenterId, param.cloudNetworkType, param.vCpuType, param.vCpu, param.vCpuMin, param.vCpuMax, param.ramGb, param.ramGbMin, param.ramGbMax, param.volumeGb, param.volumeGbMin, param.volumeGbMax, param.volumeType, param.priceMin, param.priceMax, param.page, param.size,  options).toPromise();
    }

    /**
     * When creating virtual machines you need to provide the desired hardware configurations. These configurations include CPU, CPU type, RAM, volume size, and volume type. Different cloud providers offer various configurations in different data centers. Therefore, before creating any compute instance, you need to verify the available configurations.  Use this endpoint as a reference for available configurations for virtual machines. You can search the available configurations by different parameters (provider, location, data center, cloud network type, CPU, CPU type, RAM, volume size, volume type, and price).  When you find an appropriate configuration, provide the hardware parameters in the endpoint for creating or editing a virtual machine. 
     * Search available configurations for virtual machine creation
     * @param param the request object
     */
    public getVmConfigsWithHttpInfo(param: ComputeInstancesConfigurationsApiGetVmConfigsRequest = {}, options?: Configuration): Promise<HttpInfo<GetVmConfigs200Response>> {
        return this.api.getVmConfigsWithHttpInfo(param.providerId, param.locationId, param.dataCenterId, param.cloudNetworkType, param.vCpuType, param.vCpu, param.vCpuMin, param.vCpuMax, param.ramGb, param.ramGbMin, param.ramGbMax, param.volumeGb, param.volumeGbMin, param.volumeGbMax, param.volumeType, param.priceMin, param.priceMax, param.page, param.size,  options).toPromise();
    }

    /**
     * When creating virtual machines you need to provide the desired hardware configurations. These configurations include CPU, CPU type, RAM, volume size, and volume type. Different cloud providers offer various configurations in different data centers. Therefore, before creating any compute instance, you need to verify the available configurations.  Use this endpoint as a reference for available configurations for virtual machines. You can search the available configurations by different parameters (provider, location, data center, cloud network type, CPU, CPU type, RAM, volume size, volume type, and price).  When you find an appropriate configuration, provide the hardware parameters in the endpoint for creating or editing a virtual machine. 
     * Search available configurations for virtual machine creation
     * @param param the request object
     */
    public getVmConfigs(param: ComputeInstancesConfigurationsApiGetVmConfigsRequest = {}, options?: Configuration): Promise<GetVmConfigs200Response> {
        return this.api.getVmConfigs(param.providerId, param.locationId, param.dataCenterId, param.cloudNetworkType, param.vCpuType, param.vCpu, param.vCpuMin, param.vCpuMax, param.ramGb, param.ramGbMin, param.ramGbMax, param.volumeGb, param.volumeGbMin, param.volumeGbMax, param.volumeType, param.priceMin, param.priceMax, param.page, param.size,  options).toPromise();
    }

}

import { ObservableDataCentersApi } from "./ObservableAPI";
import { DataCentersApiRequestFactory, DataCentersApiResponseProcessor} from "../apis/DataCentersApi";

export interface DataCentersApiGetDataCenterRequest {
    /**
     * ID of the cloud provider\&#39;s data center
     * @type string
     * @memberof DataCentersApigetDataCenter
     */
    dataCenterId: string
}

export interface DataCentersApiGetDataCentersRequest {
    /**
     * Name of the cloud provider\&#39;s data center
     * @type string
     * @memberof DataCentersApigetDataCenters
     */
    dataCenterName?: string
    /**
     * ID of the geographic location
     * @type number
     * @memberof DataCentersApigetDataCenters
     */
    locationId?: number
    /**
     * Name of the cloud provider
     * @type string
     * @memberof DataCentersApigetDataCenters
     */
    providerName?: string
}

export class ObjectDataCentersApi {
    private api: ObservableDataCentersApi

    public constructor(configuration: Configuration, requestFactory?: DataCentersApiRequestFactory, responseProcessor?: DataCentersApiResponseProcessor) {
        this.api = new ObservableDataCentersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns a data center from a cloud provider by data center ID. Information on the data center includes its name, provider and location. 
     * Get data center by ID
     * @param param the request object
     */
    public getDataCenterWithHttpInfo(param: DataCentersApiGetDataCenterRequest, options?: Configuration): Promise<HttpInfo<DataCenter>> {
        return this.api.getDataCenterWithHttpInfo(param.dataCenterId,  options).toPromise();
    }

    /**
     * Returns a data center from a cloud provider by data center ID. Information on the data center includes its name, provider and location. 
     * Get data center by ID
     * @param param the request object
     */
    public getDataCenter(param: DataCentersApiGetDataCenterRequest, options?: Configuration): Promise<DataCenter> {
        return this.api.getDataCenter(param.dataCenterId,  options).toPromise();
    }

    /**
     * Returns a list of data centers from cloud providers. All compute instances are created in data centers. The data center ID is necessary for creating any compute instance. Use this endpoint to find the provider\'s data centers. 
     * Get list of data centers
     * @param param the request object
     */
    public getDataCentersWithHttpInfo(param: DataCentersApiGetDataCentersRequest = {}, options?: Configuration): Promise<HttpInfo<Array<DataCenter>>> {
        return this.api.getDataCentersWithHttpInfo(param.dataCenterName, param.locationId, param.providerName,  options).toPromise();
    }

    /**
     * Returns a list of data centers from cloud providers. All compute instances are created in data centers. The data center ID is necessary for creating any compute instance. Use this endpoint to find the provider\'s data centers. 
     * Get list of data centers
     * @param param the request object
     */
    public getDataCenters(param: DataCentersApiGetDataCentersRequest = {}, options?: Configuration): Promise<Array<DataCenter>> {
        return this.api.getDataCenters(param.dataCenterName, param.locationId, param.providerName,  options).toPromise();
    }

}

import { ObservableLocationsApi } from "./ObservableAPI";
import { LocationsApiRequestFactory, LocationsApiResponseProcessor} from "../apis/LocationsApi";

export interface LocationsApiGetLocationRequest {
    /**
     * ID of the geographic location
     * @type number
     * @memberof LocationsApigetLocation
     */
    locationId: number
}

export interface LocationsApiGetLocationsRequest {
    /**
     * Name of the geographic location
     * @type string
     * @memberof LocationsApigetLocations
     */
    name?: string
}

export class ObjectLocationsApi {
    private api: ObservableLocationsApi

    public constructor(configuration: Configuration, requestFactory?: LocationsApiRequestFactory, responseProcessor?: LocationsApiResponseProcessor) {
        this.api = new ObservableLocationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns a geographic location by its ID. Locations are cities or states (in the case of the USA) where providers have data centers. 
     * Get location by ID
     * @param param the request object
     */
    public getLocationWithHttpInfo(param: LocationsApiGetLocationRequest, options?: Configuration): Promise<HttpInfo<Location>> {
        return this.api.getLocationWithHttpInfo(param.locationId,  options).toPromise();
    }

    /**
     * Returns a geographic location by its ID. Locations are cities or states (in the case of the USA) where providers have data centers. 
     * Get location by ID
     * @param param the request object
     */
    public getLocation(param: LocationsApiGetLocationRequest, options?: Configuration): Promise<Location> {
        return this.api.getLocation(param.locationId,  options).toPromise();
    }

    /**
     * Returns a list of geographic locations of the provider\'s data centers. Locations are cities or states (in the case of the USA). When creating any compute instance, you need to specify a data center. This method helps you find locations with data centers. 
     * Get list of locations
     * @param param the request object
     */
    public getLocationsWithHttpInfo(param: LocationsApiGetLocationsRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Location>>> {
        return this.api.getLocationsWithHttpInfo(param.name,  options).toPromise();
    }

    /**
     * Returns a list of geographic locations of the provider\'s data centers. Locations are cities or states (in the case of the USA). When creating any compute instance, you need to specify a data center. This method helps you find locations with data centers. 
     * Get list of locations
     * @param param the request object
     */
    public getLocations(param: LocationsApiGetLocationsRequest = {}, options?: Configuration): Promise<Array<Location>> {
        return this.api.getLocations(param.name,  options).toPromise();
    }

}

import { ObservableOperatingSystemsApi } from "./ObservableAPI";
import { OperatingSystemsApiRequestFactory, OperatingSystemsApiResponseProcessor} from "../apis/OperatingSystemsApi";

export interface OperatingSystemsApiGetOperatingSystemRequest {
    /**
     * ID of the operating system
     * @type number
     * @memberof OperatingSystemsApigetOperatingSystem
     */
    operatingSystemId: number
}

export interface OperatingSystemsApiGetOperatingSystemsRequest {
    /**
     * Type of the operating system
     * @type string
     * @memberof OperatingSystemsApigetOperatingSystems
     */
    type?: string
    /**
     * Architecture of the operating system
     * @type string
     * @memberof OperatingSystemsApigetOperatingSystems
     */
    architecture?: string
    /**
     * Version of the operating system
     * @type string
     * @memberof OperatingSystemsApigetOperatingSystems
     */
    version?: string
}

export class ObjectOperatingSystemsApi {
    private api: ObservableOperatingSystemsApi

    public constructor(configuration: Configuration, requestFactory?: OperatingSystemsApiRequestFactory, responseProcessor?: OperatingSystemsApiResponseProcessor) {
        this.api = new ObservableOperatingSystemsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns an operating system (supported by the cloud providers) by its ID. The method provides detailed information about each operating system, including its family, type, version, and architecture. 
     * Get operating system by ID
     * @param param the request object
     */
    public getOperatingSystemWithHttpInfo(param: OperatingSystemsApiGetOperatingSystemRequest, options?: Configuration): Promise<HttpInfo<OperatingSystem>> {
        return this.api.getOperatingSystemWithHttpInfo(param.operatingSystemId,  options).toPromise();
    }

    /**
     * Returns an operating system (supported by the cloud providers) by its ID. The method provides detailed information about each operating system, including its family, type, version, and architecture. 
     * Get operating system by ID
     * @param param the request object
     */
    public getOperatingSystem(param: OperatingSystemsApiGetOperatingSystemRequest, options?: Configuration): Promise<OperatingSystem> {
        return this.api.getOperatingSystem(param.operatingSystemId,  options).toPromise();
    }

    /**
     * Returns a list of available operating systems of compute instances supported by the cloud providers. The method provides detailed information about each operating system, including its family, type, version, and architecture. Use this list of the operating systems to find an OS when you create any compute instance. 
     * Get list of operating systems
     * @param param the request object
     */
    public getOperatingSystemsWithHttpInfo(param: OperatingSystemsApiGetOperatingSystemsRequest = {}, options?: Configuration): Promise<HttpInfo<Array<OperatingSystem>>> {
        return this.api.getOperatingSystemsWithHttpInfo(param.type, param.architecture, param.version,  options).toPromise();
    }

    /**
     * Returns a list of available operating systems of compute instances supported by the cloud providers. The method provides detailed information about each operating system, including its family, type, version, and architecture. Use this list of the operating systems to find an OS when you create any compute instance. 
     * Get list of operating systems
     * @param param the request object
     */
    public getOperatingSystems(param: OperatingSystemsApiGetOperatingSystemsRequest = {}, options?: Configuration): Promise<Array<OperatingSystem>> {
        return this.api.getOperatingSystems(param.type, param.architecture, param.version,  options).toPromise();
    }

}

import { ObservableProvidersApi } from "./ObservableAPI";
import { ProvidersApiRequestFactory, ProvidersApiResponseProcessor} from "../apis/ProvidersApi";

export interface ProvidersApiGetProviderRequest {
    /**
     * ID of the cloud provider
     * @type number
     * @memberof ProvidersApigetProvider
     */
    providerId: number
}

export interface ProvidersApiGetProvidersRequest {
    /**
     * Name of the cloud provider
     * @type string
     * @memberof ProvidersApigetProviders
     */
    providerName?: string
}

export class ObjectProvidersApi {
    private api: ObservableProvidersApi

    public constructor(configuration: Configuration, requestFactory?: ProvidersApiRequestFactory, responseProcessor?: ProvidersApiResponseProcessor) {
        this.api = new ObservableProvidersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns a cloud provider by provider ID. Cloud service provider is a third-party company that provides scalable computing resources that users can access over emma platform. Provider is necessary when you select a data center for creating compute instances. 
     * Get cloud provider by ID
     * @param param the request object
     */
    public getProviderWithHttpInfo(param: ProvidersApiGetProviderRequest, options?: Configuration): Promise<HttpInfo<Provider>> {
        return this.api.getProviderWithHttpInfo(param.providerId,  options).toPromise();
    }

    /**
     * Returns a cloud provider by provider ID. Cloud service provider is a third-party company that provides scalable computing resources that users can access over emma platform. Provider is necessary when you select a data center for creating compute instances. 
     * Get cloud provider by ID
     * @param param the request object
     */
    public getProvider(param: ProvidersApiGetProviderRequest, options?: Configuration): Promise<Provider> {
        return this.api.getProvider(param.providerId,  options).toPromise();
    }

    /**
     * Returns a list of cloud providers. Cloud service provider is a third-party company that provides scalable computing resources that users can access over emma platform. When you create any computing resources in emma you create them in the provider\'s datacenters. Provider is necessary when you select a data center for creating compute instances. 
     * Get list of cloud providers
     * @param param the request object
     */
    public getProvidersWithHttpInfo(param: ProvidersApiGetProvidersRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Provider>>> {
        return this.api.getProvidersWithHttpInfo(param.providerName,  options).toPromise();
    }

    /**
     * Returns a list of cloud providers. Cloud service provider is a third-party company that provides scalable computing resources that users can access over emma platform. When you create any computing resources in emma you create them in the provider\'s datacenters. Provider is necessary when you select a data center for creating compute instances. 
     * Get list of cloud providers
     * @param param the request object
     */
    public getProviders(param: ProvidersApiGetProvidersRequest = {}, options?: Configuration): Promise<Array<Provider>> {
        return this.api.getProviders(param.providerName,  options).toPromise();
    }

}

import { ObservableSSHKeysApi } from "./ObservableAPI";
import { SSHKeysApiRequestFactory, SSHKeysApiResponseProcessor} from "../apis/SSHKeysApi";

export interface SSHKeysApiGetSshKeyRequest {
    /**
     * SSH key ID
     * @type number
     * @memberof SSHKeysApigetSshKey
     */
    sshKeyId: number
}

export interface SSHKeysApiSshKeyDeleteRequest {
    /**
     * SSH key ID
     * @type number
     * @memberof SSHKeysApisshKeyDelete
     */
    sshKeyId: number
}

export interface SSHKeysApiSshKeyUpdateRequest {
    /**
     * SSH key ID
     * @type number
     * @memberof SSHKeysApisshKeyUpdate
     */
    sshKeyId: number
    /**
     * 
     * @type SshKeyUpdate
     * @memberof SSHKeysApisshKeyUpdate
     */
    sshKeyUpdate?: SshKeyUpdate
}

export interface SSHKeysApiSshKeysRequest {
}

export interface SSHKeysApiSshKeysCreateImportRequest {
    /**
     * 
     * @type SshKeysCreateImportRequest
     * @memberof SSHKeysApisshKeysCreateImport
     */
    sshKeysCreateImportRequest?: SshKeysCreateImportRequest
}

export class ObjectSSHKeysApi {
    private api: ObservableSSHKeysApi

    public constructor(configuration: Configuration, requestFactory?: SSHKeysApiRequestFactory, responseProcessor?: SSHKeysApiResponseProcessor) {
        this.api = new ObservableSSHKeysApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns an SSH key by ID for access to Linux compute instances. You can only retrieve the SSH keys created by the current Service application that you use to send a request. You can\'t retrieve SSH keys created by other users and applications. 
     * Get SSH key by id
     * @param param the request object
     */
    public getSshKeyWithHttpInfo(param: SSHKeysApiGetSshKeyRequest, options?: Configuration): Promise<HttpInfo<SshKey>> {
        return this.api.getSshKeyWithHttpInfo(param.sshKeyId,  options).toPromise();
    }

    /**
     * Returns an SSH key by ID for access to Linux compute instances. You can only retrieve the SSH keys created by the current Service application that you use to send a request. You can\'t retrieve SSH keys created by other users and applications. 
     * Get SSH key by id
     * @param param the request object
     */
    public getSshKey(param: SSHKeysApiGetSshKeyRequest, options?: Configuration): Promise<SshKey> {
        return this.api.getSshKey(param.sshKeyId,  options).toPromise();
    }

    /**
     * This method deletes a SSH key. You can only delete an SSH key created by the current Service application that you use to send a request. You can\'t delete SSH keys created by other users and applications. 
     * Delete SSH keys
     * @param param the request object
     */
    public sshKeyDeleteWithHttpInfo(param: SSHKeysApiSshKeyDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.sshKeyDeleteWithHttpInfo(param.sshKeyId,  options).toPromise();
    }

    /**
     * This method deletes a SSH key. You can only delete an SSH key created by the current Service application that you use to send a request. You can\'t delete SSH keys created by other users and applications. 
     * Delete SSH keys
     * @param param the request object
     */
    public sshKeyDelete(param: SSHKeysApiSshKeyDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.sshKeyDelete(param.sshKeyId,  options).toPromise();
    }

    /**
     * This method updates a name of an existing SSH-key. You can only update an SSH key created by the current Service application that you use to send a request. You can\'t update SSH keys created by other users and applications. 
     * Update SSH keys
     * @param param the request object
     */
    public sshKeyUpdateWithHttpInfo(param: SSHKeysApiSshKeyUpdateRequest, options?: Configuration): Promise<HttpInfo<SshKey>> {
        return this.api.sshKeyUpdateWithHttpInfo(param.sshKeyId, param.sshKeyUpdate,  options).toPromise();
    }

    /**
     * This method updates a name of an existing SSH-key. You can only update an SSH key created by the current Service application that you use to send a request. You can\'t update SSH keys created by other users and applications. 
     * Update SSH keys
     * @param param the request object
     */
    public sshKeyUpdate(param: SSHKeysApiSshKeyUpdateRequest, options?: Configuration): Promise<SshKey> {
        return this.api.sshKeyUpdate(param.sshKeyId, param.sshKeyUpdate,  options).toPromise();
    }

    /**
     * Returns a list of the SSH keys for access to Linux compute instances. You can use these keys to create compute instances.   The list only contains the SSH keys created by the current Service application that you use to send a request.   You can\'t retrieve a list of SSH keys created by other users and applications. 
     * Get list of SSH keys
     * @param param the request object
     */
    public sshKeysWithHttpInfo(param: SSHKeysApiSshKeysRequest = {}, options?: Configuration): Promise<HttpInfo<Array<SshKey>>> {
        return this.api.sshKeysWithHttpInfo( options).toPromise();
    }

    /**
     * Returns a list of the SSH keys for access to Linux compute instances. You can use these keys to create compute instances.   The list only contains the SSH keys created by the current Service application that you use to send a request.   You can\'t retrieve a list of SSH keys created by other users and applications. 
     * Get list of SSH keys
     * @param param the request object
     */
    public sshKeys(param: SSHKeysApiSshKeysRequest = {}, options?: Configuration): Promise<Array<SshKey>> {
        return this.api.sshKeys( options).toPromise();
    }

    /**
     * This method creates an SSH key that can be used for Linux compute instance creation. An SSH key can be created in two ways: generated by emma or imported by the user.  If you want to **generate** a key, specify two fields: name and keyType (RSA or ED25519). The key will be generated, and you will receive a private key in the response. The private key will be shown only once, so copy and save it to connect to the Linux compute instances.  If you want to **import** an existing SSH key, specify two fields: name and key. In the key field, insert your public SSH key as a string. It will be imported. 
     * Create or import SSH key
     * @param param the request object
     */
    public sshKeysCreateImportWithHttpInfo(param: SSHKeysApiSshKeysCreateImportRequest = {}, options?: Configuration): Promise<HttpInfo<SshKeysCreateImport201Response>> {
        return this.api.sshKeysCreateImportWithHttpInfo(param.sshKeysCreateImportRequest,  options).toPromise();
    }

    /**
     * This method creates an SSH key that can be used for Linux compute instance creation. An SSH key can be created in two ways: generated by emma or imported by the user.  If you want to **generate** a key, specify two fields: name and keyType (RSA or ED25519). The key will be generated, and you will receive a private key in the response. The private key will be shown only once, so copy and save it to connect to the Linux compute instances.  If you want to **import** an existing SSH key, specify two fields: name and key. In the key field, insert your public SSH key as a string. It will be imported. 
     * Create or import SSH key
     * @param param the request object
     */
    public sshKeysCreateImport(param: SSHKeysApiSshKeysCreateImportRequest = {}, options?: Configuration): Promise<SshKeysCreateImport201Response> {
        return this.api.sshKeysCreateImport(param.sshKeysCreateImportRequest,  options).toPromise();
    }

}

import { ObservableSecurityGroupsApi } from "./ObservableAPI";
import { SecurityGroupsApiRequestFactory, SecurityGroupsApiResponseProcessor} from "../apis/SecurityGroupsApi";

export interface SecurityGroupsApiGetSecurityGroupRequest {
    /**
     * ID of the security group
     * @type number
     * @memberof SecurityGroupsApigetSecurityGroup
     */
    securityGroupId: number
}

export interface SecurityGroupsApiGetSecurityGroupsRequest {
}

export interface SecurityGroupsApiSecurityGroupCreateRequest {
    /**
     * 
     * @type SecurityGroupRequest
     * @memberof SecurityGroupsApisecurityGroupCreate
     */
    securityGroupRequest?: SecurityGroupRequest
}

export interface SecurityGroupsApiSecurityGroupDeleteRequest {
    /**
     * ID of the security group
     * @type number
     * @memberof SecurityGroupsApisecurityGroupDelete
     */
    securityGroupId: number
}

export interface SecurityGroupsApiSecurityGroupInstanceAddRequest {
    /**
     * ID of the security group
     * @type number
     * @memberof SecurityGroupsApisecurityGroupInstanceAdd
     */
    securityGroupId: number
    /**
     * 
     * @type SecurityGroupInstanceAdd
     * @memberof SecurityGroupsApisecurityGroupInstanceAdd
     */
    securityGroupInstanceAdd?: SecurityGroupInstanceAdd
}

export interface SecurityGroupsApiSecurityGroupInstancesRequest {
    /**
     * ID of the security group
     * @type number
     * @memberof SecurityGroupsApisecurityGroupInstances
     */
    securityGroupId: number
}

export interface SecurityGroupsApiSecurityGroupUpdateRequest {
    /**
     * ID of the security group
     * @type number
     * @memberof SecurityGroupsApisecurityGroupUpdate
     */
    securityGroupId: number
    /**
     * 
     * @type SecurityGroupRequest
     * @memberof SecurityGroupsApisecurityGroupUpdate
     */
    securityGroupRequest?: SecurityGroupRequest
}

export class ObjectSecurityGroupsApi {
    private api: ObservableSecurityGroupsApi

    public constructor(configuration: Configuration, requestFactory?: SecurityGroupsApiRequestFactory, responseProcessor?: SecurityGroupsApiResponseProcessor) {
        this.api = new ObservableSecurityGroupsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns a security groups by its ID.  A security group refers to a set of rules that determine what network traffic is allowed to enter or leave a particular compute instance. It acts as a virtual firewall, controlling inbound and outbound traffic based on predefined rules.  Security groups operate based on predefined rules that allow or deny traffic based on specified criteria, such as source IP address, destination IP address, port number, and protocol. 
     * Get security group by ID
     * @param param the request object
     */
    public getSecurityGroupWithHttpInfo(param: SecurityGroupsApiGetSecurityGroupRequest, options?: Configuration): Promise<HttpInfo<SecurityGroup>> {
        return this.api.getSecurityGroupWithHttpInfo(param.securityGroupId,  options).toPromise();
    }

    /**
     * Returns a security groups by its ID.  A security group refers to a set of rules that determine what network traffic is allowed to enter or leave a particular compute instance. It acts as a virtual firewall, controlling inbound and outbound traffic based on predefined rules.  Security groups operate based on predefined rules that allow or deny traffic based on specified criteria, such as source IP address, destination IP address, port number, and protocol. 
     * Get security group by ID
     * @param param the request object
     */
    public getSecurityGroup(param: SecurityGroupsApiGetSecurityGroupRequest, options?: Configuration): Promise<SecurityGroup> {
        return this.api.getSecurityGroup(param.securityGroupId,  options).toPromise();
    }

    /**
     * Returns a list of security groups. A security group refers to a set of rules that determine what network traffic is allowed to enter or leave a particular compute instance. It acts as a virtual firewall, controlling inbound and outbound traffic based on predefined rules. Security groups operate based on predefined rules that allow or deny traffic based on specified criteria, such as source IP address, destination IP address, port number, and protocol. 
     * Get list of security groups
     * @param param the request object
     */
    public getSecurityGroupsWithHttpInfo(param: SecurityGroupsApiGetSecurityGroupsRequest = {}, options?: Configuration): Promise<HttpInfo<Array<SecurityGroup>>> {
        return this.api.getSecurityGroupsWithHttpInfo( options).toPromise();
    }

    /**
     * Returns a list of security groups. A security group refers to a set of rules that determine what network traffic is allowed to enter or leave a particular compute instance. It acts as a virtual firewall, controlling inbound and outbound traffic based on predefined rules. Security groups operate based on predefined rules that allow or deny traffic based on specified criteria, such as source IP address, destination IP address, port number, and protocol. 
     * Get list of security groups
     * @param param the request object
     */
    public getSecurityGroups(param: SecurityGroupsApiGetSecurityGroupsRequest = {}, options?: Configuration): Promise<Array<SecurityGroup>> {
        return this.api.getSecurityGroups( options).toPromise();
    }

    /**
     * This method creates a security group.  A security group refers to a set of rules that determine what network traffic is allowed to enter or leave a particular compute instance. It acts as a virtual firewall, controlling inbound and outbound traffic based on predefined rules.  Security groups operate based on predefined rules that allow traffic based on specified criteria, such as source IP address, destination IP address, port number, and protocol.  When creating a security group, provide its name and a set of inbound and outbound rules. You can only define rules that allow traffic, not deny it. All traffic is denied except for explicitly allowed traffic.  Security groups control TCP, SCTP, GRE, ESP, AH, UDP, and ICMP protocols, or all the selected protocols at once.  After creating a security group, a set of default rules is added to the security group. These rules are immutable, and you can\'t edit or delete them.  All traffic in the selected protocol is allowed if the IP range in a rule is set to `0.0.0.0/0`. 
     * Create security group
     * @param param the request object
     */
    public securityGroupCreateWithHttpInfo(param: SecurityGroupsApiSecurityGroupCreateRequest = {}, options?: Configuration): Promise<HttpInfo<SecurityGroup>> {
        return this.api.securityGroupCreateWithHttpInfo(param.securityGroupRequest,  options).toPromise();
    }

    /**
     * This method creates a security group.  A security group refers to a set of rules that determine what network traffic is allowed to enter or leave a particular compute instance. It acts as a virtual firewall, controlling inbound and outbound traffic based on predefined rules.  Security groups operate based on predefined rules that allow traffic based on specified criteria, such as source IP address, destination IP address, port number, and protocol.  When creating a security group, provide its name and a set of inbound and outbound rules. You can only define rules that allow traffic, not deny it. All traffic is denied except for explicitly allowed traffic.  Security groups control TCP, SCTP, GRE, ESP, AH, UDP, and ICMP protocols, or all the selected protocols at once.  After creating a security group, a set of default rules is added to the security group. These rules are immutable, and you can\'t edit or delete them.  All traffic in the selected protocol is allowed if the IP range in a rule is set to `0.0.0.0/0`. 
     * Create security group
     * @param param the request object
     */
    public securityGroupCreate(param: SecurityGroupsApiSecurityGroupCreateRequest = {}, options?: Configuration): Promise<SecurityGroup> {
        return this.api.securityGroupCreate(param.securityGroupRequest,  options).toPromise();
    }

    /**
     * This method deletes a security group.  A security group refers to a set of rules that determine what network traffic is allowed to enter or leave a particular compute instance. It acts as a virtual firewall, controlling inbound and outbound traffic based on predefined rules.  Security groups operate based on predefined rules that allow traffic based on specified criteria, such as source IP address, destination IP address, port number, and protocol.  You can\'t delete a security group if any compute instance is using this security group. To delete a security group, first remove a compute instance from the security group using this method: `POST /v1/security-groups/{securityGroupId}/instances` 
     * Delete security group
     * @param param the request object
     */
    public securityGroupDeleteWithHttpInfo(param: SecurityGroupsApiSecurityGroupDeleteRequest, options?: Configuration): Promise<HttpInfo<SecurityGroup>> {
        return this.api.securityGroupDeleteWithHttpInfo(param.securityGroupId,  options).toPromise();
    }

    /**
     * This method deletes a security group.  A security group refers to a set of rules that determine what network traffic is allowed to enter or leave a particular compute instance. It acts as a virtual firewall, controlling inbound and outbound traffic based on predefined rules.  Security groups operate based on predefined rules that allow traffic based on specified criteria, such as source IP address, destination IP address, port number, and protocol.  You can\'t delete a security group if any compute instance is using this security group. To delete a security group, first remove a compute instance from the security group using this method: `POST /v1/security-groups/{securityGroupId}/instances` 
     * Delete security group
     * @param param the request object
     */
    public securityGroupDelete(param: SecurityGroupsApiSecurityGroupDeleteRequest, options?: Configuration): Promise<SecurityGroup> {
        return this.api.securityGroupDelete(param.securityGroupId,  options).toPromise();
    }

    /**
     * This method adds a compute instance to the selected security group.  A security group refers to a set of rules that determine what network traffic is allowed to enter or leave a particular compute instance. It acts as a virtual firewall, controlling inbound and outbound traffic based on predefined rules.  Security groups operate based on predefined rules that allow traffic based on specified criteria, such as source IP address, destination IP address, port number, and protocol.  Any compute instance always uses some security group since its creation. Adding a compute instance to a security group effectively means moving it from one security group to another. When adding a compute instance to a new security group, it is automatically removed from the previous security group. 
     * Add instance to security group
     * @param param the request object
     */
    public securityGroupInstanceAddWithHttpInfo(param: SecurityGroupsApiSecurityGroupInstanceAddRequest, options?: Configuration): Promise<HttpInfo<Vm>> {
        return this.api.securityGroupInstanceAddWithHttpInfo(param.securityGroupId, param.securityGroupInstanceAdd,  options).toPromise();
    }

    /**
     * This method adds a compute instance to the selected security group.  A security group refers to a set of rules that determine what network traffic is allowed to enter or leave a particular compute instance. It acts as a virtual firewall, controlling inbound and outbound traffic based on predefined rules.  Security groups operate based on predefined rules that allow traffic based on specified criteria, such as source IP address, destination IP address, port number, and protocol.  Any compute instance always uses some security group since its creation. Adding a compute instance to a security group effectively means moving it from one security group to another. When adding a compute instance to a new security group, it is automatically removed from the previous security group. 
     * Add instance to security group
     * @param param the request object
     */
    public securityGroupInstanceAdd(param: SecurityGroupsApiSecurityGroupInstanceAddRequest, options?: Configuration): Promise<Vm> {
        return this.api.securityGroupInstanceAdd(param.securityGroupId, param.securityGroupInstanceAdd,  options).toPromise();
    }

    /**
     * Returns a list of compute instances using the selected security group.  A security group refers to a set of rules that determine what network traffic is allowed to enter or leave a particular compute instance. It acts as a virtual firewall, controlling inbound and outbound traffic based on predefined rules.  Security groups operate based on predefined rules that allow traffic based on specified criteria, such as source IP address, destination IP address, port number, and protocol. 
     * Get instances in security group
     * @param param the request object
     */
    public securityGroupInstancesWithHttpInfo(param: SecurityGroupsApiSecurityGroupInstancesRequest, options?: Configuration): Promise<HttpInfo<Array<Vm>>> {
        return this.api.securityGroupInstancesWithHttpInfo(param.securityGroupId,  options).toPromise();
    }

    /**
     * Returns a list of compute instances using the selected security group.  A security group refers to a set of rules that determine what network traffic is allowed to enter or leave a particular compute instance. It acts as a virtual firewall, controlling inbound and outbound traffic based on predefined rules.  Security groups operate based on predefined rules that allow traffic based on specified criteria, such as source IP address, destination IP address, port number, and protocol. 
     * Get instances in security group
     * @param param the request object
     */
    public securityGroupInstances(param: SecurityGroupsApiSecurityGroupInstancesRequest, options?: Configuration): Promise<Array<Vm>> {
        return this.api.securityGroupInstances(param.securityGroupId,  options).toPromise();
    }

    /**
     * This method updates a security group.  A security group refers to a set of rules that determine what network traffic is allowed to enter or leave a particular compute instance. It acts as a virtual firewall, controlling inbound and outbound traffic based on predefined rules.  Security groups operate based on predefined rules that allow traffic based on specified criteria, such as source IP address, destination IP address, port number, and protocol.  When editing a security group, you can add and delete the inbound and outbound rules. You can only define rules that allow traffic, not deny it. All traffic is denied except for explicitly allowed traffic.  Security groups control TCP, SCTP, GRE, ESP, AH, UDP, and ICMP protocols, or all the selected protocols at once.  After creating a security group, a set of default rules is added to the security group. These rules are immutable, and you can\'t edit or delete them. When editing a security group, _you should provide the default rules along with any other rules._  All traffic in the selected protocol is allowed if the IP range in a rule is set to `0.0.0.0/0`. 
     * Update security group
     * @param param the request object
     */
    public securityGroupUpdateWithHttpInfo(param: SecurityGroupsApiSecurityGroupUpdateRequest, options?: Configuration): Promise<HttpInfo<SecurityGroup>> {
        return this.api.securityGroupUpdateWithHttpInfo(param.securityGroupId, param.securityGroupRequest,  options).toPromise();
    }

    /**
     * This method updates a security group.  A security group refers to a set of rules that determine what network traffic is allowed to enter or leave a particular compute instance. It acts as a virtual firewall, controlling inbound and outbound traffic based on predefined rules.  Security groups operate based on predefined rules that allow traffic based on specified criteria, such as source IP address, destination IP address, port number, and protocol.  When editing a security group, you can add and delete the inbound and outbound rules. You can only define rules that allow traffic, not deny it. All traffic is denied except for explicitly allowed traffic.  Security groups control TCP, SCTP, GRE, ESP, AH, UDP, and ICMP protocols, or all the selected protocols at once.  After creating a security group, a set of default rules is added to the security group. These rules are immutable, and you can\'t edit or delete them. When editing a security group, _you should provide the default rules along with any other rules._  All traffic in the selected protocol is allowed if the IP range in a rule is set to `0.0.0.0/0`. 
     * Update security group
     * @param param the request object
     */
    public securityGroupUpdate(param: SecurityGroupsApiSecurityGroupUpdateRequest, options?: Configuration): Promise<SecurityGroup> {
        return this.api.securityGroupUpdate(param.securityGroupId, param.securityGroupRequest,  options).toPromise();
    }

}

import { ObservableSpotInstancesApi } from "./ObservableAPI";
import { SpotInstancesApiRequestFactory, SpotInstancesApiResponseProcessor} from "../apis/SpotInstancesApi";

export interface SpotInstancesApiGetSpotRequest {
    /**
     * ID of the spot instance
     * @type number
     * @memberof SpotInstancesApigetSpot
     */
    spotInstanceId: number
}

export interface SpotInstancesApiGetSpotsRequest {
}

export interface SpotInstancesApiSpotActionsRequest {
    /**
     * ID of the spot instance
     * @type number
     * @memberof SpotInstancesApispotActions
     */
    spotInstanceId: number
    /**
     * 
     * @type SpotActionsRequest
     * @memberof SpotInstancesApispotActions
     */
    spotActionsRequest?: SpotActionsRequest
}

export interface SpotInstancesApiSpotCreateRequest {
    /**
     * 
     * @type SpotCreate
     * @memberof SpotInstancesApispotCreate
     */
    spotCreate?: SpotCreate
}

export interface SpotInstancesApiSpotDeleteRequest {
    /**
     * ID of the spot instance
     * @type number
     * @memberof SpotInstancesApispotDelete
     */
    spotInstanceId: number
}

export class ObjectSpotInstancesApi {
    private api: ObservableSpotInstancesApi

    public constructor(configuration: Configuration, requestFactory?: SpotInstancesApiRequestFactory, responseProcessor?: SpotInstancesApiResponseProcessor) {
        this.api = new ObservableSpotInstancesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns a spot instance by its ID.  A Spot Instance is a specialized compute instance that allows you to access and utilize unused instance capacity at a steeply discounted rate.  Spot price is charged on an hourly basis. 
     * Get spot instance by id
     * @param param the request object
     */
    public getSpotWithHttpInfo(param: SpotInstancesApiGetSpotRequest, options?: Configuration): Promise<HttpInfo<Vm>> {
        return this.api.getSpotWithHttpInfo(param.spotInstanceId,  options).toPromise();
    }

    /**
     * Returns a spot instance by its ID.  A Spot Instance is a specialized compute instance that allows you to access and utilize unused instance capacity at a steeply discounted rate.  Spot price is charged on an hourly basis. 
     * Get spot instance by id
     * @param param the request object
     */
    public getSpot(param: SpotInstancesApiGetSpotRequest, options?: Configuration): Promise<Vm> {
        return this.api.getSpot(param.spotInstanceId,  options).toPromise();
    }

    /**
     * Returns a list of spot instances.  A Spot Instance is a specialized compute instance that allows you to access and utilize unused instance capacity at a steeply discounted rate.  Spot price is charged on an hourly basis. 
     * Get list of spot instances
     * @param param the request object
     */
    public getSpotsWithHttpInfo(param: SpotInstancesApiGetSpotsRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Vm>>> {
        return this.api.getSpotsWithHttpInfo( options).toPromise();
    }

    /**
     * Returns a list of spot instances.  A Spot Instance is a specialized compute instance that allows you to access and utilize unused instance capacity at a steeply discounted rate.  Spot price is charged on an hourly basis. 
     * Get list of spot instances
     * @param param the request object
     */
    public getSpots(param: SpotInstancesApiGetSpotsRequest = {}, options?: Configuration): Promise<Array<Vm>> {
        return this.api.getSpots( options).toPromise();
    }

    /**
     * This endpoint reboots a spot instance. 
     * Perform actions with a spot instance
     * @param param the request object
     */
    public spotActionsWithHttpInfo(param: SpotInstancesApiSpotActionsRequest, options?: Configuration): Promise<HttpInfo<Vm>> {
        return this.api.spotActionsWithHttpInfo(param.spotInstanceId, param.spotActionsRequest,  options).toPromise();
    }

    /**
     * This endpoint reboots a spot instance. 
     * Perform actions with a spot instance
     * @param param the request object
     */
    public spotActions(param: SpotInstancesApiSpotActionsRequest, options?: Configuration): Promise<Vm> {
        return this.api.spotActions(param.spotInstanceId, param.spotActionsRequest,  options).toPromise();
    }

    /**
     * This method creates a spot instance according to the specified parameters.  A Spot Instance is a specialized compute instance that allows you to access and utilize unused instance capacity at a steeply discounted rate. Spot price is charged on an hourly basis.   To create a spot instance, follow these steps:  1. Select a data center using the `/v1/data-centers` endpoint. The data center determines the provider and location of the spot instance.  2. Select an available hardware configuration for the spot instance using the `/v1/spots-configs` endpoint.  3. Select an SSH key for the Linux spot instance using the `/v1/ssh-keys` endpoint.  4. Select an operating system using the `/v1/operating-systems` endpoint.  5. Choose one of the cloud network types: _multi-cloud, isolated,_ or _default_. Choose the _multi-cloud_ network type if you need to connect compute instances from different providers.  You may choose not to specify a security group. In this case, the spot instance will be added to the default security group.  A `price` field of a spot instance is not required.   The spot instance market operates on a bidding system. Your specified price acts as your bid in this market. If your bid is higher than the current spot price, your instance request will likely be fulfilled. However, if the market price exceeds your bid, your instance may not be launched or could be terminated if already running. 
     * Create spot instance
     * @param param the request object
     */
    public spotCreateWithHttpInfo(param: SpotInstancesApiSpotCreateRequest = {}, options?: Configuration): Promise<HttpInfo<Vm>> {
        return this.api.spotCreateWithHttpInfo(param.spotCreate,  options).toPromise();
    }

    /**
     * This method creates a spot instance according to the specified parameters.  A Spot Instance is a specialized compute instance that allows you to access and utilize unused instance capacity at a steeply discounted rate. Spot price is charged on an hourly basis.   To create a spot instance, follow these steps:  1. Select a data center using the `/v1/data-centers` endpoint. The data center determines the provider and location of the spot instance.  2. Select an available hardware configuration for the spot instance using the `/v1/spots-configs` endpoint.  3. Select an SSH key for the Linux spot instance using the `/v1/ssh-keys` endpoint.  4. Select an operating system using the `/v1/operating-systems` endpoint.  5. Choose one of the cloud network types: _multi-cloud, isolated,_ or _default_. Choose the _multi-cloud_ network type if you need to connect compute instances from different providers.  You may choose not to specify a security group. In this case, the spot instance will be added to the default security group.  A `price` field of a spot instance is not required.   The spot instance market operates on a bidding system. Your specified price acts as your bid in this market. If your bid is higher than the current spot price, your instance request will likely be fulfilled. However, if the market price exceeds your bid, your instance may not be launched or could be terminated if already running. 
     * Create spot instance
     * @param param the request object
     */
    public spotCreate(param: SpotInstancesApiSpotCreateRequest = {}, options?: Configuration): Promise<Vm> {
        return this.api.spotCreate(param.spotCreate,  options).toPromise();
    }

    /**
     * This method deletes a spot instance. 
     * Delete spot instance
     * @param param the request object
     */
    public spotDeleteWithHttpInfo(param: SpotInstancesApiSpotDeleteRequest, options?: Configuration): Promise<HttpInfo<Vm>> {
        return this.api.spotDeleteWithHttpInfo(param.spotInstanceId,  options).toPromise();
    }

    /**
     * This method deletes a spot instance. 
     * Delete spot instance
     * @param param the request object
     */
    public spotDelete(param: SpotInstancesApiSpotDeleteRequest, options?: Configuration): Promise<Vm> {
        return this.api.spotDelete(param.spotInstanceId,  options).toPromise();
    }

}

import { ObservableSubnetworksApi } from "./ObservableAPI";
import { SubnetworksApiRequestFactory, SubnetworksApiResponseProcessor} from "../apis/SubnetworksApi";

export interface SubnetworksApiV1SubnetworksGetRequest {
}

export interface SubnetworksApiV1SubnetworksPostRequest {
    /**
     * 
     * @type SubnetworkCreate
     * @memberof SubnetworksApiv1SubnetworksPost
     */
    subnetworkCreate?: SubnetworkCreate
}

export interface SubnetworksApiV1SubnetworksSubnetworkIdDeleteRequest {
    /**
     * Subnetwork ID
     * @type string
     * @memberof SubnetworksApiv1SubnetworksSubnetworkIdDelete
     */
    subnetworkId: string
}

export interface SubnetworksApiV1SubnetworksSubnetworkIdGetRequest {
    /**
     * Subnetwork ID
     * @type string
     * @memberof SubnetworksApiv1SubnetworksSubnetworkIdGet
     */
    subnetworkId: string
}

export interface SubnetworksApiV1SubnetworksSubnetworkIdPutRequest {
    /**
     * Subnetwork ID
     * @type string
     * @memberof SubnetworksApiv1SubnetworksSubnetworkIdPut
     */
    subnetworkId: string
    /**
     * 
     * @type SubnetworkEdit
     * @memberof SubnetworksApiv1SubnetworksSubnetworkIdPut
     */
    subnetworkEdit?: SubnetworkEdit
}

export class ObjectSubnetworksApi {
    private api: ObservableSubnetworksApi

    public constructor(configuration: Configuration, requestFactory?: SubnetworksApiRequestFactory, responseProcessor?: SubnetworksApiResponseProcessor) {
        this.api = new ObservableSubnetworksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns a list of subnetworks within the project. 
     * Get list of subnetworks
     * @param param the request object
     */
    public v1SubnetworksGetWithHttpInfo(param: SubnetworksApiV1SubnetworksGetRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Subnetwork>>> {
        return this.api.v1SubnetworksGetWithHttpInfo( options).toPromise();
    }

    /**
     * Returns a list of subnetworks within the project. 
     * Get list of subnetworks
     * @param param the request object
     */
    public v1SubnetworksGet(param: SubnetworksApiV1SubnetworksGetRequest = {}, options?: Configuration): Promise<Array<Subnetwork>> {
        return this.api.v1SubnetworksGet( options).toPromise();
    }

    /**
     * This method creates a subnetwork. To create a subnetwork, consider the following parameters: 1. Select a data center using the `/v1/data-centers` endpoint. The data center determines the provider and location of the subnetwork. 2. Specify the IP address range (optional) and network size (required). Subnetwork prefix value must be in ranges: 10.0.0.0 - 10.255.255.255, 172.16.0.0 - 172.31.255.255, 192.168.0.0 - 192.168.255.255, network size must be /28-/16 for DigitalOcean and /24-/16 for Gcore. 
     * Create subnetwork
     * @param param the request object
     */
    public v1SubnetworksPostWithHttpInfo(param: SubnetworksApiV1SubnetworksPostRequest = {}, options?: Configuration): Promise<HttpInfo<SubnetworkCreate>> {
        return this.api.v1SubnetworksPostWithHttpInfo(param.subnetworkCreate,  options).toPromise();
    }

    /**
     * This method creates a subnetwork. To create a subnetwork, consider the following parameters: 1. Select a data center using the `/v1/data-centers` endpoint. The data center determines the provider and location of the subnetwork. 2. Specify the IP address range (optional) and network size (required). Subnetwork prefix value must be in ranges: 10.0.0.0 - 10.255.255.255, 172.16.0.0 - 172.31.255.255, 192.168.0.0 - 192.168.255.255, network size must be /28-/16 for DigitalOcean and /24-/16 for Gcore. 
     * Create subnetwork
     * @param param the request object
     */
    public v1SubnetworksPost(param: SubnetworksApiV1SubnetworksPostRequest = {}, options?: Configuration): Promise<SubnetworkCreate> {
        return this.api.v1SubnetworksPost(param.subnetworkCreate,  options).toPromise();
    }

    /**
     * This method deletes a subnetwork. 
     * Delete subnetwork
     * @param param the request object
     */
    public v1SubnetworksSubnetworkIdDeleteWithHttpInfo(param: SubnetworksApiV1SubnetworksSubnetworkIdDeleteRequest, options?: Configuration): Promise<HttpInfo<Subnetwork>> {
        return this.api.v1SubnetworksSubnetworkIdDeleteWithHttpInfo(param.subnetworkId,  options).toPromise();
    }

    /**
     * This method deletes a subnetwork. 
     * Delete subnetwork
     * @param param the request object
     */
    public v1SubnetworksSubnetworkIdDelete(param: SubnetworksApiV1SubnetworksSubnetworkIdDeleteRequest, options?: Configuration): Promise<Subnetwork> {
        return this.api.v1SubnetworksSubnetworkIdDelete(param.subnetworkId,  options).toPromise();
    }

    /**
     * Returns a subnetwork by its ID. 
     * Get subnetwork by ID
     * @param param the request object
     */
    public v1SubnetworksSubnetworkIdGetWithHttpInfo(param: SubnetworksApiV1SubnetworksSubnetworkIdGetRequest, options?: Configuration): Promise<HttpInfo<Subnetwork>> {
        return this.api.v1SubnetworksSubnetworkIdGetWithHttpInfo(param.subnetworkId,  options).toPromise();
    }

    /**
     * Returns a subnetwork by its ID. 
     * Get subnetwork by ID
     * @param param the request object
     */
    public v1SubnetworksSubnetworkIdGet(param: SubnetworksApiV1SubnetworksSubnetworkIdGetRequest, options?: Configuration): Promise<Subnetwork> {
        return this.api.v1SubnetworksSubnetworkIdGet(param.subnetworkId,  options).toPromise();
    }

    /**
     * This method updates a subnetwork. Only the subnetwork name can be updated. 
     * Update subnetwork
     * @param param the request object
     */
    public v1SubnetworksSubnetworkIdPutWithHttpInfo(param: SubnetworksApiV1SubnetworksSubnetworkIdPutRequest, options?: Configuration): Promise<HttpInfo<Subnetwork>> {
        return this.api.v1SubnetworksSubnetworkIdPutWithHttpInfo(param.subnetworkId, param.subnetworkEdit,  options).toPromise();
    }

    /**
     * This method updates a subnetwork. Only the subnetwork name can be updated. 
     * Update subnetwork
     * @param param the request object
     */
    public v1SubnetworksSubnetworkIdPut(param: SubnetworksApiV1SubnetworksSubnetworkIdPutRequest, options?: Configuration): Promise<Subnetwork> {
        return this.api.v1SubnetworksSubnetworkIdPut(param.subnetworkId, param.subnetworkEdit,  options).toPromise();
    }

}

import { ObservableVirtualMachinesApi } from "./ObservableAPI";
import { VirtualMachinesApiRequestFactory, VirtualMachinesApiResponseProcessor} from "../apis/VirtualMachinesApi";

export interface VirtualMachinesApiGetVmRequest {
    /**
     * ID of the virtual machine
     * @type number
     * @memberof VirtualMachinesApigetVm
     */
    vmId: number
}

export interface VirtualMachinesApiGetVmsRequest {
}

export interface VirtualMachinesApiVmActionsRequest {
    /**
     * ID of the virtual machine
     * @type number
     * @memberof VirtualMachinesApivmActions
     */
    vmId: number
    /**
     * 
     * @type VmActionsRequest
     * @memberof VirtualMachinesApivmActions
     */
    vmActionsRequest?: VmActionsRequest
}

export interface VirtualMachinesApiVmCreateRequest {
    /**
     * 
     * @type VmCreate
     * @memberof VirtualMachinesApivmCreate
     */
    vmCreate?: VmCreate
}

export interface VirtualMachinesApiVmDeleteRequest {
    /**
     * ID of the virtual machine
     * @type number
     * @memberof VirtualMachinesApivmDelete
     */
    vmId: number
}

export class ObjectVirtualMachinesApi {
    private api: ObservableVirtualMachinesApi

    public constructor(configuration: Configuration, requestFactory?: VirtualMachinesApiRequestFactory, responseProcessor?: VirtualMachinesApiResponseProcessor) {
        this.api = new ObservableVirtualMachinesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint returns a virtual machine by ID. 
     * Get virtual machine by id
     * @param param the request object
     */
    public getVmWithHttpInfo(param: VirtualMachinesApiGetVmRequest, options?: Configuration): Promise<HttpInfo<Vm>> {
        return this.api.getVmWithHttpInfo(param.vmId,  options).toPromise();
    }

    /**
     * This endpoint returns a virtual machine by ID. 
     * Get virtual machine by id
     * @param param the request object
     */
    public getVm(param: VirtualMachinesApiGetVmRequest, options?: Configuration): Promise<Vm> {
        return this.api.getVm(param.vmId,  options).toPromise();
    }

    /**
     * Returns a list of virtual machines within the project. 
     * Get list of virtual machines
     * @param param the request object
     */
    public getVmsWithHttpInfo(param: VirtualMachinesApiGetVmsRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Vm>>> {
        return this.api.getVmsWithHttpInfo( options).toPromise();
    }

    /**
     * Returns a list of virtual machines within the project. 
     * Get list of virtual machines
     * @param param the request object
     */
    public getVms(param: VirtualMachinesApiGetVmsRequest = {}, options?: Configuration): Promise<Array<Vm>> {
        return this.api.getVms( options).toPromise();
    }

    /**
     * This method performs several actions with a virtual machine:   - Start a virtual machine   - Shutdown a virtual machine   - Reboot a virtual machine   - Transfer a virtual machine   - Clone a virtual machine   - Edit hardware of a virtual machine 
     * Perform actions with a virtual machine
     * @param param the request object
     */
    public vmActionsWithHttpInfo(param: VirtualMachinesApiVmActionsRequest, options?: Configuration): Promise<HttpInfo<Vm>> {
        return this.api.vmActionsWithHttpInfo(param.vmId, param.vmActionsRequest,  options).toPromise();
    }

    /**
     * This method performs several actions with a virtual machine:   - Start a virtual machine   - Shutdown a virtual machine   - Reboot a virtual machine   - Transfer a virtual machine   - Clone a virtual machine   - Edit hardware of a virtual machine 
     * Perform actions with a virtual machine
     * @param param the request object
     */
    public vmActions(param: VirtualMachinesApiVmActionsRequest, options?: Configuration): Promise<Vm> {
        return this.api.vmActions(param.vmId, param.vmActionsRequest,  options).toPromise();
    }

    /**
     * This method creates a virtual machine according to the specified parameters.  To create a virtual machine, follow these steps:  1. Select a data center using the `/v1/data-centers` endpoint. The data center determines the provider and location of the virtual machine.  2. Select an available hardware configuration for the virtual machine using the `/v1/vms-configs` endpoint.  3. Select an SSH key for the Linux virtual machine using the `/v1/ssh-keys` endpoint.  4. Select an operating system using the `/v1/operating-systems` endpoint.  5. Choose one of the cloud network types: _multi-cloud, isolated,_ or _default_. Choose the _multi-cloud_ network type if you need to connect compute instances from different providers.  You may choose not to specify a security group. In this case, the virtual machine will be added to the default security group. 
     * Create virtual machine
     * @param param the request object
     */
    public vmCreateWithHttpInfo(param: VirtualMachinesApiVmCreateRequest = {}, options?: Configuration): Promise<HttpInfo<Vm>> {
        return this.api.vmCreateWithHttpInfo(param.vmCreate,  options).toPromise();
    }

    /**
     * This method creates a virtual machine according to the specified parameters.  To create a virtual machine, follow these steps:  1. Select a data center using the `/v1/data-centers` endpoint. The data center determines the provider and location of the virtual machine.  2. Select an available hardware configuration for the virtual machine using the `/v1/vms-configs` endpoint.  3. Select an SSH key for the Linux virtual machine using the `/v1/ssh-keys` endpoint.  4. Select an operating system using the `/v1/operating-systems` endpoint.  5. Choose one of the cloud network types: _multi-cloud, isolated,_ or _default_. Choose the _multi-cloud_ network type if you need to connect compute instances from different providers.  You may choose not to specify a security group. In this case, the virtual machine will be added to the default security group. 
     * Create virtual machine
     * @param param the request object
     */
    public vmCreate(param: VirtualMachinesApiVmCreateRequest = {}, options?: Configuration): Promise<Vm> {
        return this.api.vmCreate(param.vmCreate,  options).toPromise();
    }

    /**
     * This method deletes a virtual machine. 
     * Delete virtual machine
     * @param param the request object
     */
    public vmDeleteWithHttpInfo(param: VirtualMachinesApiVmDeleteRequest, options?: Configuration): Promise<HttpInfo<Vm>> {
        return this.api.vmDeleteWithHttpInfo(param.vmId,  options).toPromise();
    }

    /**
     * This method deletes a virtual machine. 
     * Delete virtual machine
     * @param param the request object
     */
    public vmDelete(param: VirtualMachinesApiVmDeleteRequest, options?: Configuration): Promise<Vm> {
        return this.api.vmDelete(param.vmId,  options).toPromise();
    }

}
