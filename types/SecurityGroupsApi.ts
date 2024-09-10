import { SecurityGroupsApiRequestFactory, SecurityGroupsApiResponseProcessor } from '../apis/SecurityGroupsApi';
import { Configuration } from '../configuration';
import { HttpInfo } from '../http/http';
import { SecurityGroup } from '../models/SecurityGroup';
import { SecurityGroupRequest } from '../models/SecurityGroupRequest';
import { SecurityGroupInstanceAdd } from '../models/SecurityGroupInstanceAdd';
import { Vm } from '../models/Vm';

export class SecurityGroupsApi {
    private requestFactory: SecurityGroupsApiRequestFactory;
    private responseProcessor: SecurityGroupsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SecurityGroupsApiRequestFactory,
        responseProcessor?: SecurityGroupsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SecurityGroupsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SecurityGroupsApiResponseProcessor();
    }

    /**
     * Returns a security groups by its ID.  A security group refers to a set of rules that determine what network traffic is allowed to enter or leave a particular compute instance. It acts as a virtual firewall, controlling inbound and outbound traffic based on predefined rules.  Security groups operate based on predefined rules that allow or deny traffic based on specified criteria, such as source IP address, destination IP address, port number, and protocol.
     * Get security group by ID
     * @param securityGroupId ID of the security group
     * @param _options
     */
    public getSecurityGroupWithHttpInfo(
        securityGroupId: number,
        _options?: Configuration
    ): Promise<HttpInfo<SecurityGroup>> {
        // build promise chain
        let middlewarePre = this.requestFactory.getSecurityGroup(securityGroupId, _options);
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
                return middlewarePost.then((rsp) => this.responseProcessor.getSecurityGroupWithHttpInfo(rsp));
            });
    }

    /**
     * Returns a security groups by its ID.  A security group refers to a set of rules that determine what network traffic is allowed to enter or leave a particular compute instance. It acts as a virtual firewall, controlling inbound and outbound traffic based on predefined rules.  Security groups operate based on predefined rules that allow or deny traffic based on specified criteria, such as source IP address, destination IP address, port number, and protocol.
     * Get security group by ID
     * @param securityGroupId ID of the security group
     * @param _options
     */
    public getSecurityGroup(securityGroupId: number, _options?: Configuration): Promise<SecurityGroup> {
        return this.getSecurityGroupWithHttpInfo(securityGroupId, _options).then((apiResponse) => apiResponse.data);
    }

    /**
     * Returns a list of security groups. A security group refers to a set of rules that determine what network traffic is allowed to enter or leave a particular compute instance. It acts as a virtual firewall, controlling inbound and outbound traffic based on predefined rules. Security groups operate based on predefined rules that allow or deny traffic based on specified criteria, such as source IP address, destination IP address, port number, and protocol.
     * Get list of security groups
     */
    public getSecurityGroupsWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<SecurityGroup>>> {
        // build promise chain
        let middlewarePre = this.requestFactory.getSecurityGroups(_options);
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
                return middlewarePost.then((rsp) => this.responseProcessor.getSecurityGroupsWithHttpInfo(rsp));
            });
    }

    /**
     * Returns a list of security groups. A security group refers to a set of rules that determine what network traffic is allowed to enter or leave a particular compute instance. It acts as a virtual firewall, controlling inbound and outbound traffic based on predefined rules. Security groups operate based on predefined rules that allow or deny traffic based on specified criteria, such as source IP address, destination IP address, port number, and protocol.
     * Get list of security groups
     */
    public getSecurityGroups(_options?: Configuration): Promise<Array<SecurityGroup>> {
        return this.getSecurityGroupsWithHttpInfo(_options).then((apiResponse) => apiResponse.data);
    }

    /**
     * This method creates a security group.  A security group refers to a set of rules that determine what network traffic is allowed to enter or leave a particular compute instance. It acts as a virtual firewall, controlling inbound and outbound traffic based on predefined rules.  Security groups operate based on predefined rules that allow traffic based on specified criteria, such as source IP address, destination IP address, port number, and protocol.  When creating a security group, provide its name and a set of inbound and outbound rules. You can only define rules that allow traffic, not deny it. All traffic is denied except for explicitly allowed traffic.  Security groups control TCP, SCTP, GRE, ESP, AH, UDP, and ICMP protocols, or all the selected protocols at once.  After creating a security group, a set of default rules is added to the security group. These rules are immutable, and you can\'t edit or delete them.  All traffic in the selected protocol is allowed if the IP range in a rule is set to `0.0.0.0/0`.
     * Create security group
     * @param securityGroupRequest
     * @param _options
     */
    public securityGroupCreateWithHttpInfo(
        securityGroupRequest?: SecurityGroupRequest,
        _options?: Configuration
    ): Promise<HttpInfo<SecurityGroup>> {
        // build promise chain
        let middlewarePre = this.requestFactory.securityGroupCreate(securityGroupRequest, _options);
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
                return middlewarePost.then((rsp) => this.responseProcessor.securityGroupCreateWithHttpInfo(rsp));
            });
    }

    /**
     * This method creates a security group.  A security group refers to a set of rules that determine what network traffic is allowed to enter or leave a particular compute instance. It acts as a virtual firewall, controlling inbound and outbound traffic based on predefined rules.  Security groups operate based on predefined rules that allow traffic based on specified criteria, such as source IP address, destination IP address, port number, and protocol.  When creating a security group, provide its name and a set of inbound and outbound rules. You can only define rules that allow traffic, not deny it. All traffic is denied except for explicitly allowed traffic.  Security groups control TCP, SCTP, GRE, ESP, AH, UDP, and ICMP protocols, or all the selected protocols at once.  After creating a security group, a set of default rules is added to the security group. These rules are immutable, and you can\'t edit or delete them.  All traffic in the selected protocol is allowed if the IP range in a rule is set to `0.0.0.0/0`.
     * Create security group
     * @param securityGroupRequest
     * @param _options
     */
    public securityGroupCreate(
        securityGroupRequest?: SecurityGroupRequest,
        _options?: Configuration
    ): Promise<SecurityGroup> {
        return this.securityGroupCreateWithHttpInfo(securityGroupRequest, _options).then(
            (apiResponse) => apiResponse.data
        );
    }

    /**
     * This method deletes a security group.  A security group refers to a set of rules that determine what network traffic is allowed to enter or leave a particular compute instance. It acts as a virtual firewall, controlling inbound and outbound traffic based on predefined rules.  Security groups operate based on predefined rules that allow traffic based on specified criteria, such as source IP address, destination IP address, port number, and protocol.  You can\'t delete a security group if any compute instance is using this security group. To delete a security group, first remove a compute instance from the security group using this method: `POST /v1/security-groups/{securityGroupId}/instances`
     * Delete security group
     * @param securityGroupId ID of the security group
     * @param _options
     */
    public securityGroupDeleteWithHttpInfo(
        securityGroupId: number,
        _options?: Configuration
    ): Promise<HttpInfo<SecurityGroup>> {
        // build promise chain
        let middlewarePre = this.requestFactory.securityGroupDelete(securityGroupId, _options);
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
                return middlewarePost.then((rsp) => this.responseProcessor.securityGroupDeleteWithHttpInfo(rsp));
            });
    }

    /**
     * This method deletes a security group.  A security group refers to a set of rules that determine what network traffic is allowed to enter or leave a particular compute instance. It acts as a virtual firewall, controlling inbound and outbound traffic based on predefined rules.  Security groups operate based on predefined rules that allow traffic based on specified criteria, such as source IP address, destination IP address, port number, and protocol.  You can\'t delete a security group if any compute instance is using this security group. To delete a security group, first remove a compute instance from the security group using this method: `POST /v1/security-groups/{securityGroupId}/instances`
     * Delete security group
     * @param securityGroupId ID of the security group
     * @param _options
     */
    public securityGroupDelete(securityGroupId: number, _options?: Configuration): Promise<SecurityGroup> {
        return this.securityGroupDeleteWithHttpInfo(securityGroupId, _options).then((apiResponse) => apiResponse.data);
    }

    /**
     * This method adds a compute instance to the selected security group.  A security group refers to a set of rules that determine what network traffic is allowed to enter or leave a particular compute instance. It acts as a virtual firewall, controlling inbound and outbound traffic based on predefined rules.  Security groups operate based on predefined rules that allow traffic based on specified criteria, such as source IP address, destination IP address, port number, and protocol.  Any compute instance always uses some security group since its creation. Adding a compute instance to a security group effectively means moving it from one security group to another. When adding a compute instance to a new security group, it is automatically removed from the previous security group.
     * Add instance to security group
     * @param securityGroupId ID of the security group
     * @param securityGroupInstanceAdd
     * @param _options
     */
    public securityGroupInstanceAddWithHttpInfo(
        securityGroupId: number,
        securityGroupInstanceAdd?: SecurityGroupInstanceAdd,
        _options?: Configuration
    ): Promise<HttpInfo<Vm>> {
        // build promise chain
        let middlewarePre = this.requestFactory.securityGroupInstanceAdd(
            securityGroupId,
            securityGroupInstanceAdd,
            _options
        );
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
                return middlewarePost.then((rsp) => this.responseProcessor.securityGroupInstanceAddWithHttpInfo(rsp));
            });
    }

    /**
     * This method adds a compute instance to the selected security group.  A security group refers to a set of rules that determine what network traffic is allowed to enter or leave a particular compute instance. It acts as a virtual firewall, controlling inbound and outbound traffic based on predefined rules.  Security groups operate based on predefined rules that allow traffic based on specified criteria, such as source IP address, destination IP address, port number, and protocol.  Any compute instance always uses some security group since its creation. Adding a compute instance to a security group effectively means moving it from one security group to another. When adding a compute instance to a new security group, it is automatically removed from the previous security group.
     * Add instance to security group
     * @param securityGroupId ID of the security group
     * @param securityGroupInstanceAdd
     * @param _options
     */
    public securityGroupInstanceAdd(
        securityGroupId: number,
        securityGroupInstanceAdd?: SecurityGroupInstanceAdd,
        _options?: Configuration
    ): Promise<Vm> {
        return this.securityGroupInstanceAddWithHttpInfo(securityGroupId, securityGroupInstanceAdd, _options).then(
            (apiResponse) => apiResponse.data
        );
    }

    /**
     * Returns a list of compute instances using the selected security group.  A security group refers to a set of rules that determine what network traffic is allowed to enter or leave a particular compute instance. It acts as a virtual firewall, controlling inbound and outbound traffic based on predefined rules.  Security groups operate based on predefined rules that allow traffic based on specified criteria, such as source IP address, destination IP address, port number, and protocol.
     * Get instances in security group
     * @param securityGroupId ID of the security group
     * @param _options
     */
    public securityGroupInstancesWithHttpInfo(
        securityGroupId: number,
        _options?: Configuration
    ): Promise<HttpInfo<Array<Vm>>> {
        // build promise chain
        let middlewarePre = this.requestFactory.securityGroupInstances(securityGroupId, _options);
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
                return middlewarePost.then((rsp) => this.responseProcessor.securityGroupInstancesWithHttpInfo(rsp));
            });
    }

    /**
     * Returns a list of compute instances using the selected security group.  A security group refers to a set of rules that determine what network traffic is allowed to enter or leave a particular compute instance. It acts as a virtual firewall, controlling inbound and outbound traffic based on predefined rules.  Security groups operate based on predefined rules that allow traffic based on specified criteria, such as source IP address, destination IP address, port number, and protocol.
     * Get instances in security group
     * @param securityGroupId ID of the security group
     * @param _options
     */
    public securityGroupInstances(securityGroupId: number, _options?: Configuration): Promise<Array<Vm>> {
        return this.securityGroupInstancesWithHttpInfo(securityGroupId, _options).then(
            (apiResponse) => apiResponse.data
        );
    }

    /**
     * This method updates a security group.  A security group refers to a set of rules that determine what network traffic is allowed to enter or leave a particular compute instance. It acts as a virtual firewall, controlling inbound and outbound traffic based on predefined rules.  Security groups operate based on predefined rules that allow traffic based on specified criteria, such as source IP address, destination IP address, port number, and protocol.  When editing a security group, you can add and delete the inbound and outbound rules. You can only define rules that allow traffic, not deny it. All traffic is denied except for explicitly allowed traffic.  Security groups control TCP, SCTP, GRE, ESP, AH, UDP, and ICMP protocols, or all the selected protocols at once.  After creating a security group, a set of default rules is added to the security group. These rules are immutable, and you can\'t edit or delete them. When editing a security group, _you should provide the default rules along with any other rules._  All traffic in the selected protocol is allowed if the IP range in a rule is set to `0.0.0.0/0`.
     * Update security group
     * @param securityGroupId ID of the security group
     * @param securityGroupRequest
     * @param _options
     */
    public securityGroupUpdateWithHttpInfo(
        securityGroupId: number,
        securityGroupRequest?: SecurityGroupRequest,
        _options?: Configuration
    ): Promise<HttpInfo<SecurityGroup>> {
        // build promise chain
        let middlewarePre = this.requestFactory.securityGroupUpdate(securityGroupId, securityGroupRequest, _options);
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
                return middlewarePost.then((rsp) => this.responseProcessor.securityGroupUpdateWithHttpInfo(rsp));
            });
    }

    /**
     * This method updates a security group.  A security group refers to a set of rules that determine what network traffic is allowed to enter or leave a particular compute instance. It acts as a virtual firewall, controlling inbound and outbound traffic based on predefined rules.  Security groups operate based on predefined rules that allow traffic based on specified criteria, such as source IP address, destination IP address, port number, and protocol.  When editing a security group, you can add and delete the inbound and outbound rules. You can only define rules that allow traffic, not deny it. All traffic is denied except for explicitly allowed traffic.  Security groups control TCP, SCTP, GRE, ESP, AH, UDP, and ICMP protocols, or all the selected protocols at once.  After creating a security group, a set of default rules is added to the security group. These rules are immutable, and you can\'t edit or delete them. When editing a security group, _you should provide the default rules along with any other rules._  All traffic in the selected protocol is allowed if the IP range in a rule is set to `0.0.0.0/0`.
     * Update security group
     * @param securityGroupId ID of the security group
     * @param securityGroupRequest
     * @param _options
     */
    public securityGroupUpdate(
        securityGroupId: number,
        securityGroupRequest?: SecurityGroupRequest,
        _options?: Configuration
    ): Promise<SecurityGroup> {
        return this.securityGroupUpdateWithHttpInfo(securityGroupId, securityGroupRequest, _options).then(
            (apiResponse) => apiResponse.data
        );
    }
}
