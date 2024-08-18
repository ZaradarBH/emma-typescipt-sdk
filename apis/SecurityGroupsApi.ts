// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BadRequestError } from '../models/BadRequestError';
import { ConflictError } from '../models/ConflictError';
import { ForbiddenError } from '../models/ForbiddenError';
import { NotFoundError } from '../models/NotFoundError';
import { SecurityGroup } from '../models/SecurityGroup';
import { SecurityGroupInstanceAdd } from '../models/SecurityGroupInstanceAdd';
import { SecurityGroupRequest } from '../models/SecurityGroupRequest';
import { UnauthorizedError } from '../models/UnauthorizedError';
import { UnprocessableEntityError } from '../models/UnprocessableEntityError';
import { Vm } from '../models/Vm';

/**
 * no description
 */
export class SecurityGroupsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Returns a security groups by its ID.  A security group refers to a set of rules that determine what network traffic is allowed to enter or leave a particular compute instance. It acts as a virtual firewall, controlling inbound and outbound traffic based on predefined rules.  Security groups operate based on predefined rules that allow or deny traffic based on specified criteria, such as source IP address, destination IP address, port number, and protocol. 
     * Get security group by ID
     * @param securityGroupId ID of the security group
     */
    public async getSecurityGroup(securityGroupId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'securityGroupId' is not null or undefined
        if (securityGroupId === null || securityGroupId === undefined) {
            throw new RequiredError("SecurityGroupsApi", "getSecurityGroup", "securityGroupId");
        }


        // Path Params
        const localVarPath = '/v1/security-groups/{securityGroupId}'
            .replace('{' + 'securityGroupId' + '}', encodeURIComponent(String(securityGroupId)));

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
     * Returns a list of security groups. A security group refers to a set of rules that determine what network traffic is allowed to enter or leave a particular compute instance. It acts as a virtual firewall, controlling inbound and outbound traffic based on predefined rules. Security groups operate based on predefined rules that allow or deny traffic based on specified criteria, such as source IP address, destination IP address, port number, and protocol. 
     * Get list of security groups
     */
    public async getSecurityGroups(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v1/security-groups';

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
     * This method creates a security group.  A security group refers to a set of rules that determine what network traffic is allowed to enter or leave a particular compute instance. It acts as a virtual firewall, controlling inbound and outbound traffic based on predefined rules.  Security groups operate based on predefined rules that allow traffic based on specified criteria, such as source IP address, destination IP address, port number, and protocol.  When creating a security group, provide its name and a set of inbound and outbound rules. You can only define rules that allow traffic, not deny it. All traffic is denied except for explicitly allowed traffic.  Security groups control TCP, SCTP, GRE, ESP, AH, UDP, and ICMP protocols, or all the selected protocols at once.  After creating a security group, a set of default rules is added to the security group. These rules are immutable, and you can\'t edit or delete them.  All traffic in the selected protocol is allowed if the IP range in a rule is set to `0.0.0.0/0`. 
     * Create security group
     * @param securityGroupRequest 
     */
    public async securityGroupCreate(securityGroupRequest?: SecurityGroupRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/v1/security-groups';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(securityGroupRequest, "SecurityGroupRequest", ""),
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
     * This method deletes a security group.  A security group refers to a set of rules that determine what network traffic is allowed to enter or leave a particular compute instance. It acts as a virtual firewall, controlling inbound and outbound traffic based on predefined rules.  Security groups operate based on predefined rules that allow traffic based on specified criteria, such as source IP address, destination IP address, port number, and protocol.  You can\'t delete a security group if any compute instance is using this security group. To delete a security group, first remove a compute instance from the security group using this method: `POST /v1/security-groups/{securityGroupId}/instances` 
     * Delete security group
     * @param securityGroupId ID of the security group
     */
    public async securityGroupDelete(securityGroupId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'securityGroupId' is not null or undefined
        if (securityGroupId === null || securityGroupId === undefined) {
            throw new RequiredError("SecurityGroupsApi", "securityGroupDelete", "securityGroupId");
        }


        // Path Params
        const localVarPath = '/v1/security-groups/{securityGroupId}'
            .replace('{' + 'securityGroupId' + '}', encodeURIComponent(String(securityGroupId)));

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

    /**
     * This method adds a compute instance to the selected security group.  A security group refers to a set of rules that determine what network traffic is allowed to enter or leave a particular compute instance. It acts as a virtual firewall, controlling inbound and outbound traffic based on predefined rules.  Security groups operate based on predefined rules that allow traffic based on specified criteria, such as source IP address, destination IP address, port number, and protocol.  Any compute instance always uses some security group since its creation. Adding a compute instance to a security group effectively means moving it from one security group to another. When adding a compute instance to a new security group, it is automatically removed from the previous security group. 
     * Add instance to security group
     * @param securityGroupId ID of the security group
     * @param securityGroupInstanceAdd 
     */
    public async securityGroupInstanceAdd(securityGroupId: number, securityGroupInstanceAdd?: SecurityGroupInstanceAdd, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'securityGroupId' is not null or undefined
        if (securityGroupId === null || securityGroupId === undefined) {
            throw new RequiredError("SecurityGroupsApi", "securityGroupInstanceAdd", "securityGroupId");
        }



        // Path Params
        const localVarPath = '/v1/security-groups/{securityGroupId}/instances'
            .replace('{' + 'securityGroupId' + '}', encodeURIComponent(String(securityGroupId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(securityGroupInstanceAdd, "SecurityGroupInstanceAdd", ""),
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
     * Returns a list of compute instances using the selected security group.  A security group refers to a set of rules that determine what network traffic is allowed to enter or leave a particular compute instance. It acts as a virtual firewall, controlling inbound and outbound traffic based on predefined rules.  Security groups operate based on predefined rules that allow traffic based on specified criteria, such as source IP address, destination IP address, port number, and protocol. 
     * Get instances in security group
     * @param securityGroupId ID of the security group
     */
    public async securityGroupInstances(securityGroupId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'securityGroupId' is not null or undefined
        if (securityGroupId === null || securityGroupId === undefined) {
            throw new RequiredError("SecurityGroupsApi", "securityGroupInstances", "securityGroupId");
        }


        // Path Params
        const localVarPath = '/v1/security-groups/{securityGroupId}/instances'
            .replace('{' + 'securityGroupId' + '}', encodeURIComponent(String(securityGroupId)));

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
     * This method updates a security group.  A security group refers to a set of rules that determine what network traffic is allowed to enter or leave a particular compute instance. It acts as a virtual firewall, controlling inbound and outbound traffic based on predefined rules.  Security groups operate based on predefined rules that allow traffic based on specified criteria, such as source IP address, destination IP address, port number, and protocol.  When editing a security group, you can add and delete the inbound and outbound rules. You can only define rules that allow traffic, not deny it. All traffic is denied except for explicitly allowed traffic.  Security groups control TCP, SCTP, GRE, ESP, AH, UDP, and ICMP protocols, or all the selected protocols at once.  After creating a security group, a set of default rules is added to the security group. These rules are immutable, and you can\'t edit or delete them. When editing a security group, _you should provide the default rules along with any other rules._  All traffic in the selected protocol is allowed if the IP range in a rule is set to `0.0.0.0/0`. 
     * Update security group
     * @param securityGroupId ID of the security group
     * @param securityGroupRequest 
     */
    public async securityGroupUpdate(securityGroupId: number, securityGroupRequest?: SecurityGroupRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'securityGroupId' is not null or undefined
        if (securityGroupId === null || securityGroupId === undefined) {
            throw new RequiredError("SecurityGroupsApi", "securityGroupUpdate", "securityGroupId");
        }



        // Path Params
        const localVarPath = '/v1/security-groups/{securityGroupId}'
            .replace('{' + 'securityGroupId' + '}', encodeURIComponent(String(securityGroupId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(securityGroupRequest, "SecurityGroupRequest", ""),
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

}

export class SecurityGroupsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSecurityGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSecurityGroupWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SecurityGroup >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SecurityGroup = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SecurityGroup", ""
            ) as SecurityGroup;
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
            const body: SecurityGroup = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SecurityGroup", ""
            ) as SecurityGroup;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSecurityGroups
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSecurityGroupsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<SecurityGroup> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<SecurityGroup> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<SecurityGroup>", ""
            ) as Array<SecurityGroup>;
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
            const body: Array<SecurityGroup> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<SecurityGroup>", ""
            ) as Array<SecurityGroup>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to securityGroupCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async securityGroupCreateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SecurityGroup >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SecurityGroup = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SecurityGroup", ""
            ) as SecurityGroup;
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
            const body: SecurityGroup = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SecurityGroup", ""
            ) as SecurityGroup;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to securityGroupDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async securityGroupDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SecurityGroup >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SecurityGroup = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SecurityGroup", ""
            ) as SecurityGroup;
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
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: ConflictError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConflictError", ""
            ) as ConflictError;
            throw new ApiException<ConflictError>(response.httpStatusCode, "Conflict", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SecurityGroup = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SecurityGroup", ""
            ) as SecurityGroup;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to securityGroupInstanceAdd
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async securityGroupInstanceAddWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Vm >> {
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
            throw new ApiException<ForbiddenError>(response.httpStatusCode, "Forbidden", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NotFoundError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotFoundError", ""
            ) as NotFoundError;
            throw new ApiException<NotFoundError>(response.httpStatusCode, "Not found", body, response.headers);
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
     * @params response Response returned by the server for a request to securityGroupInstances
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async securityGroupInstancesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Vm> >> {
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
     * @params response Response returned by the server for a request to securityGroupUpdate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async securityGroupUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SecurityGroup >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SecurityGroup = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SecurityGroup", ""
            ) as SecurityGroup;
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
            throw new ApiException<ForbiddenError>(response.httpStatusCode, "Forbidden", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NotFoundError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotFoundError", ""
            ) as NotFoundError;
            throw new ApiException<NotFoundError>(response.httpStatusCode, "Not found", body, response.headers);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: ConflictError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConflictError", ""
            ) as ConflictError;
            throw new ApiException<ConflictError>(response.httpStatusCode, "Conflict", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SecurityGroup = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SecurityGroup", ""
            ) as SecurityGroup;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
