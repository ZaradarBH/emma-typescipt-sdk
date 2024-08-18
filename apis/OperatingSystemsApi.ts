// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ForbiddenError } from '../models/ForbiddenError';
import { NotFoundError } from '../models/NotFoundError';
import { OperatingSystem } from '../models/OperatingSystem';
import { UnauthorizedError } from '../models/UnauthorizedError';

/**
 * no description
 */
export class OperatingSystemsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Returns an operating system (supported by the cloud providers) by its ID. The method provides detailed information about each operating system, including its family, type, version, and architecture. 
     * Get operating system by ID
     * @param operatingSystemId ID of the operating system
     */
    public async getOperatingSystem(operatingSystemId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'operatingSystemId' is not null or undefined
        if (operatingSystemId === null || operatingSystemId === undefined) {
            throw new RequiredError("OperatingSystemsApi", "getOperatingSystem", "operatingSystemId");
        }


        // Path Params
        const localVarPath = '/v1/operating-systems/{operatingSystemId}'
            .replace('{' + 'operatingSystemId' + '}', encodeURIComponent(String(operatingSystemId)));

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
     * Returns a list of available operating systems of compute instances supported by the cloud providers. The method provides detailed information about each operating system, including its family, type, version, and architecture. Use this list of the operating systems to find an OS when you create any compute instance. 
     * Get list of operating systems
     * @param type Type of the operating system
     * @param architecture Architecture of the operating system
     * @param version Version of the operating system
     */
    public async getOperatingSystems(type?: string, architecture?: string, version?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;




        // Path Params
        const localVarPath = '/v1/operating-systems';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (type !== undefined) {
            requestContext.setQueryParam("type", ObjectSerializer.serialize(type, "string", ""));
        }

        // Query Params
        if (architecture !== undefined) {
            requestContext.setQueryParam("architecture", ObjectSerializer.serialize(architecture, "string", ""));
        }

        // Query Params
        if (version !== undefined) {
            requestContext.setQueryParam("version", ObjectSerializer.serialize(version, "string", ""));
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

export class OperatingSystemsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOperatingSystem
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getOperatingSystemWithHttpInfo(response: ResponseContext): Promise<HttpInfo<OperatingSystem >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OperatingSystem = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OperatingSystem", ""
            ) as OperatingSystem;
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
            throw new ApiException<ForbiddenError>(response.httpStatusCode, "Forbidden", body, response.headers);
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
            const body: OperatingSystem = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OperatingSystem", ""
            ) as OperatingSystem;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOperatingSystems
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getOperatingSystemsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<OperatingSystem> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<OperatingSystem> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<OperatingSystem>", ""
            ) as Array<OperatingSystem>;
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
            throw new ApiException<ForbiddenError>(response.httpStatusCode, "Forbidden", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<OperatingSystem> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<OperatingSystem>", ""
            ) as Array<OperatingSystem>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
