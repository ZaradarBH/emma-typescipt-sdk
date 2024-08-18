// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BadRequestError } from '../models/BadRequestError';
import { ForbiddenError } from '../models/ForbiddenError';
import { GetVmConfigs200Response } from '../models/GetVmConfigs200Response';
import { UnauthorizedError } from '../models/UnauthorizedError';

/**
 * no description
 */
export class ComputeInstancesConfigurationsApiRequestFactory extends BaseAPIRequestFactory {

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
    public async getSpotConfigs(providerId?: number, locationId?: number, dataCenterId?: string, cloudNetworkType?: 'isolated' | 'multi-cloud' | 'default', vCpuType?: 'shared' | 'standard' | 'hpc', vCpu?: number, vCpuMin?: number, vCpuMax?: number, ramGb?: number, ramGbMin?: number, ramGbMax?: number, volumeGb?: number, volumeGbMin?: number, volumeGbMax?: number, volumeType?: 'ssd' | 'ssd-plus', priceMin?: number, priceMax?: number, page?: number, size?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;




















        // Path Params
        const localVarPath = '/v1/spots-configs';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (providerId !== undefined) {
            requestContext.setQueryParam("providerId", ObjectSerializer.serialize(providerId, "number", ""));
        }

        // Query Params
        if (locationId !== undefined) {
            requestContext.setQueryParam("locationId", ObjectSerializer.serialize(locationId, "number", ""));
        }

        // Query Params
        if (dataCenterId !== undefined) {
            requestContext.setQueryParam("dataCenterId", ObjectSerializer.serialize(dataCenterId, "string", ""));
        }

        // Query Params
        if (cloudNetworkType !== undefined) {
            requestContext.setQueryParam("cloudNetworkType", ObjectSerializer.serialize(cloudNetworkType, "'isolated' | 'multi-cloud' | 'default'", ""));
        }

        // Query Params
        if (vCpuType !== undefined) {
            requestContext.setQueryParam("vCpuType", ObjectSerializer.serialize(vCpuType, "'shared' | 'standard' | 'hpc'", ""));
        }

        // Query Params
        if (vCpu !== undefined) {
            requestContext.setQueryParam("vCpu", ObjectSerializer.serialize(vCpu, "number", ""));
        }

        // Query Params
        if (vCpuMin !== undefined) {
            requestContext.setQueryParam("vCpuMin", ObjectSerializer.serialize(vCpuMin, "number", ""));
        }

        // Query Params
        if (vCpuMax !== undefined) {
            requestContext.setQueryParam("vCpuMax", ObjectSerializer.serialize(vCpuMax, "number", ""));
        }

        // Query Params
        if (ramGb !== undefined) {
            requestContext.setQueryParam("ramGb", ObjectSerializer.serialize(ramGb, "number", ""));
        }

        // Query Params
        if (ramGbMin !== undefined) {
            requestContext.setQueryParam("ramGbMin", ObjectSerializer.serialize(ramGbMin, "number", ""));
        }

        // Query Params
        if (ramGbMax !== undefined) {
            requestContext.setQueryParam("ramGbMax", ObjectSerializer.serialize(ramGbMax, "number", ""));
        }

        // Query Params
        if (volumeGb !== undefined) {
            requestContext.setQueryParam("volumeGb", ObjectSerializer.serialize(volumeGb, "number", ""));
        }

        // Query Params
        if (volumeGbMin !== undefined) {
            requestContext.setQueryParam("volumeGbMin", ObjectSerializer.serialize(volumeGbMin, "number", ""));
        }

        // Query Params
        if (volumeGbMax !== undefined) {
            requestContext.setQueryParam("volumeGbMax", ObjectSerializer.serialize(volumeGbMax, "number", ""));
        }

        // Query Params
        if (volumeType !== undefined) {
            requestContext.setQueryParam("volumeType", ObjectSerializer.serialize(volumeType, "'ssd' | 'ssd-plus'", ""));
        }

        // Query Params
        if (priceMin !== undefined) {
            requestContext.setQueryParam("priceMin", ObjectSerializer.serialize(priceMin, "number", ""));
        }

        // Query Params
        if (priceMax !== undefined) {
            requestContext.setQueryParam("priceMax", ObjectSerializer.serialize(priceMax, "number", ""));
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }

        // Query Params
        if (size !== undefined) {
            requestContext.setQueryParam("size", ObjectSerializer.serialize(size, "number", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async getVmConfigs(providerId?: number, locationId?: number, dataCenterId?: string, cloudNetworkType?: 'isolated' | 'multi-cloud' | 'default', vCpuType?: 'shared' | 'standard' | 'hpc', vCpu?: number, vCpuMin?: number, vCpuMax?: number, ramGb?: number, ramGbMin?: number, ramGbMax?: number, volumeGb?: number, volumeGbMin?: number, volumeGbMax?: number, volumeType?: 'ssd' | 'ssd-plus', priceMin?: number, priceMax?: number, page?: number, size?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;




















        // Path Params
        const localVarPath = '/v1/vms-configs';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (providerId !== undefined) {
            requestContext.setQueryParam("providerId", ObjectSerializer.serialize(providerId, "number", ""));
        }

        // Query Params
        if (locationId !== undefined) {
            requestContext.setQueryParam("locationId", ObjectSerializer.serialize(locationId, "number", ""));
        }

        // Query Params
        if (dataCenterId !== undefined) {
            requestContext.setQueryParam("dataCenterId", ObjectSerializer.serialize(dataCenterId, "string", ""));
        }

        // Query Params
        if (cloudNetworkType !== undefined) {
            requestContext.setQueryParam("cloudNetworkType", ObjectSerializer.serialize(cloudNetworkType, "'isolated' | 'multi-cloud' | 'default'", ""));
        }

        // Query Params
        if (vCpuType !== undefined) {
            requestContext.setQueryParam("vCpuType", ObjectSerializer.serialize(vCpuType, "'shared' | 'standard' | 'hpc'", ""));
        }

        // Query Params
        if (vCpu !== undefined) {
            requestContext.setQueryParam("vCpu", ObjectSerializer.serialize(vCpu, "number", ""));
        }

        // Query Params
        if (vCpuMin !== undefined) {
            requestContext.setQueryParam("vCpuMin", ObjectSerializer.serialize(vCpuMin, "number", ""));
        }

        // Query Params
        if (vCpuMax !== undefined) {
            requestContext.setQueryParam("vCpuMax", ObjectSerializer.serialize(vCpuMax, "number", ""));
        }

        // Query Params
        if (ramGb !== undefined) {
            requestContext.setQueryParam("ramGb", ObjectSerializer.serialize(ramGb, "number", ""));
        }

        // Query Params
        if (ramGbMin !== undefined) {
            requestContext.setQueryParam("ramGbMin", ObjectSerializer.serialize(ramGbMin, "number", ""));
        }

        // Query Params
        if (ramGbMax !== undefined) {
            requestContext.setQueryParam("ramGbMax", ObjectSerializer.serialize(ramGbMax, "number", ""));
        }

        // Query Params
        if (volumeGb !== undefined) {
            requestContext.setQueryParam("volumeGb", ObjectSerializer.serialize(volumeGb, "number", ""));
        }

        // Query Params
        if (volumeGbMin !== undefined) {
            requestContext.setQueryParam("volumeGbMin", ObjectSerializer.serialize(volumeGbMin, "number", ""));
        }

        // Query Params
        if (volumeGbMax !== undefined) {
            requestContext.setQueryParam("volumeGbMax", ObjectSerializer.serialize(volumeGbMax, "number", ""));
        }

        // Query Params
        if (volumeType !== undefined) {
            requestContext.setQueryParam("volumeType", ObjectSerializer.serialize(volumeType, "'ssd' | 'ssd-plus'", ""));
        }

        // Query Params
        if (priceMin !== undefined) {
            requestContext.setQueryParam("priceMin", ObjectSerializer.serialize(priceMin, "number", ""));
        }

        // Query Params
        if (priceMax !== undefined) {
            requestContext.setQueryParam("priceMax", ObjectSerializer.serialize(priceMax, "number", ""));
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }

        // Query Params
        if (size !== undefined) {
            requestContext.setQueryParam("size", ObjectSerializer.serialize(size, "number", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class ComputeInstancesConfigurationsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSpotConfigs
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSpotConfigsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetVmConfigs200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetVmConfigs200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetVmConfigs200Response", ""
            ) as GetVmConfigs200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: BadRequestError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BadRequestError", ""
            ) as BadRequestError;
            throw new ApiException<BadRequestError>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: UnauthorizedError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UnauthorizedError", ""
            ) as UnauthorizedError;
            throw new ApiException<UnauthorizedError>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ForbiddenError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ForbiddenError", ""
            ) as ForbiddenError;
            throw new ApiException<ForbiddenError>(response.httpStatusCode, "Forbidden - Access is denied", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetVmConfigs200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetVmConfigs200Response", ""
            ) as GetVmConfigs200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getVmConfigs
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getVmConfigsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetVmConfigs200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetVmConfigs200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetVmConfigs200Response", ""
            ) as GetVmConfigs200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: BadRequestError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BadRequestError", ""
            ) as BadRequestError;
            throw new ApiException<BadRequestError>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: UnauthorizedError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UnauthorizedError", ""
            ) as UnauthorizedError;
            throw new ApiException<UnauthorizedError>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ForbiddenError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ForbiddenError", ""
            ) as ForbiddenError;
            throw new ApiException<ForbiddenError>(response.httpStatusCode, "Forbidden - Access is denied", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetVmConfigs200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetVmConfigs200Response", ""
            ) as GetVmConfigs200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
