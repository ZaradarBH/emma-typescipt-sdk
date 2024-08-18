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
import { NotFoundError } from '../models/NotFoundError';
import { SpotActionsRequest } from '../models/SpotActionsRequest';
import { SpotCreate } from '../models/SpotCreate';
import { UnauthorizedError } from '../models/UnauthorizedError';
import { UnprocessableEntityError } from '../models/UnprocessableEntityError';
import { Vm } from '../models/Vm';

/**
 * no description
 */
export class SpotInstancesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Returns a spot instance by its ID.  A Spot Instance is a specialized compute instance that allows you to access and utilize unused instance capacity at a steeply discounted rate.  Spot price is charged on an hourly basis. 
     * Get spot instance by id
     * @param spotInstanceId ID of the spot instance
     */
    public async getSpot(spotInstanceId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'spotInstanceId' is not null or undefined
        if (spotInstanceId === null || spotInstanceId === undefined) {
            throw new RequiredError("SpotInstancesApi", "getSpot", "spotInstanceId");
        }


        // Path Params
        const localVarPath = '/v1/spot-instances/{spotInstanceId}'
            .replace('{' + 'spotInstanceId' + '}', encodeURIComponent(String(spotInstanceId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


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
     * Returns a list of spot instances.  A Spot Instance is a specialized compute instance that allows you to access and utilize unused instance capacity at a steeply discounted rate.  Spot price is charged on an hourly basis. 
     * Get list of spot instances
     */
    public async getSpots(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v1/spot-instances';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


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
     * This endpoint reboots a spot instance. 
     * Perform actions with a spot instance
     * @param spotInstanceId ID of the spot instance
     * @param spotActionsRequest 
     */
    public async spotActions(spotInstanceId: number, spotActionsRequest?: SpotActionsRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'spotInstanceId' is not null or undefined
        if (spotInstanceId === null || spotInstanceId === undefined) {
            throw new RequiredError("SpotInstancesApi", "spotActions", "spotInstanceId");
        }



        // Path Params
        const localVarPath = '/v1/spot-instances/{spotInstanceId}/actions'
            .replace('{' + 'spotInstanceId' + '}', encodeURIComponent(String(spotInstanceId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(spotActionsRequest, "SpotActionsRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

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
     * This method creates a spot instance according to the specified parameters.  A Spot Instance is a specialized compute instance that allows you to access and utilize unused instance capacity at a steeply discounted rate. Spot price is charged on an hourly basis.   To create a spot instance, follow these steps:  1. Select a data center using the `/v1/data-centers` endpoint. The data center determines the provider and location of the spot instance.  2. Select an available hardware configuration for the spot instance using the `/v1/spots-configs` endpoint.  3. Select an SSH key for the Linux spot instance using the `/v1/ssh-keys` endpoint.  4. Select an operating system using the `/v1/operating-systems` endpoint.  5. Choose one of the cloud network types: _multi-cloud, isolated,_ or _default_. Choose the _multi-cloud_ network type if you need to connect compute instances from different providers.  You may choose not to specify a security group. In this case, the spot instance will be added to the default security group.  A `price` field of a spot instance is not required.   The spot instance market operates on a bidding system. Your specified price acts as your bid in this market. If your bid is higher than the current spot price, your instance request will likely be fulfilled. However, if the market price exceeds your bid, your instance may not be launched or could be terminated if already running. 
     * Create spot instance
     * @param spotCreate 
     */
    public async spotCreate(spotCreate?: SpotCreate, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/v1/spot-instances';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(spotCreate, "SpotCreate", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

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
     * This method deletes a spot instance. 
     * Delete spot instance
     * @param spotInstanceId ID of the spot instance
     */
    public async spotDelete(spotInstanceId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'spotInstanceId' is not null or undefined
        if (spotInstanceId === null || spotInstanceId === undefined) {
            throw new RequiredError("SpotInstancesApi", "spotDelete", "spotInstanceId");
        }


        // Path Params
        const localVarPath = '/v1/spot-instances/{spotInstanceId}'
            .replace('{' + 'spotInstanceId' + '}', encodeURIComponent(String(spotInstanceId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


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

export class SpotInstancesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSpot
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSpotWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Vm >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Vm = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Vm", ""
            ) as Vm;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
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
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NotFoundError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotFoundError", ""
            ) as NotFoundError;
            throw new ApiException<NotFoundError>(response.httpStatusCode, "Not found", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Vm = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Vm", ""
            ) as Vm;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSpots
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSpotsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Vm> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Vm> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Vm>", ""
            ) as Array<Vm>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
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
            const body: Array<Vm> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Vm>", ""
            ) as Array<Vm>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to spotActions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async spotActionsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Vm >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Vm = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Vm", ""
            ) as Vm;
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
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NotFoundError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotFoundError", ""
            ) as NotFoundError;
            throw new ApiException<NotFoundError>(response.httpStatusCode, "Not found", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Vm = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Vm", ""
            ) as Vm;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to spotCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async spotCreateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Vm >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Vm = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Vm", ""
            ) as Vm;
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
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: UnprocessableEntityError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UnprocessableEntityError", ""
            ) as UnprocessableEntityError;
            throw new ApiException<UnprocessableEntityError>(response.httpStatusCode, "Unprocessable entity", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Vm = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Vm", ""
            ) as Vm;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to spotDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async spotDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Vm >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Vm = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Vm", ""
            ) as Vm;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
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
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NotFoundError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotFoundError", ""
            ) as NotFoundError;
            throw new ApiException<NotFoundError>(response.httpStatusCode, "Not found", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Vm = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Vm", ""
            ) as Vm;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
