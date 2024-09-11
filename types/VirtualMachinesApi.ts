import { VirtualMachinesApiRequestFactory, VirtualMachinesApiResponseProcessor } from '../apis/VirtualMachinesApi';
import { Configuration } from '../configuration';
import { HttpInfo, RequestContext, ResponseContext } from '../http/http';
import { Vm } from '../models/Vm';
import { VmActionsRequest } from '../models/VmActionsRequest';
import { VmCreate } from '../models/VmCreate';

export class VirtualMachinesApi {
    private requestFactory: VirtualMachinesApiRequestFactory;
    private responseProcessor: VirtualMachinesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: VirtualMachinesApiRequestFactory,
        responseProcessor?: VirtualMachinesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new VirtualMachinesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new VirtualMachinesApiResponseProcessor();
    }

    /**
     * This endpoint returns a virtual machine by ID.
     * Get virtual machine by id
     * @param vmId ID of the virtual machine
     * @param _options
     */
    public getVmWithHttpInfo(vmId: number, _options?: Configuration): Promise<HttpInfo<Vm>> {
        // build promise chain
        let middlewarePre = this.requestFactory.getVm(vmId, _options);
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
                return middlewarePost.then((rsp) => this.responseProcessor.getVmWithHttpInfo(rsp));
            });
    }

    /**
     * This endpoint returns a virtual machine by ID.
     * Get virtual machine by id
     * @param vmId ID of the virtual machine
     * @param _options
     */
    public getVm(vmId: number, _options?: Configuration): Promise<Vm> {
        return this.getVmWithHttpInfo(vmId, _options).then((apiResponse) => apiResponse.data);
    }

    /**
     * Returns a list of virtual machines within the project.
     * Get list of virtual machines
     */
    public getVmsWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<Vm>>> {
        // build promise chain
        let middlewarePre = this.requestFactory.getVms(_options);
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
                return middlewarePost.then((rsp) => this.responseProcessor.getVmsWithHttpInfo(rsp));
            });
    }

    /**
     * Returns a list of virtual machines within the project.
     * Get list of virtual machines
     */
    public getVms(_options?: Configuration): Promise<Array<Vm>> {
        return this.getVmsWithHttpInfo(_options).then((apiResponse) => apiResponse.data);
    }

    /**
     * This method performs several actions with a virtual machine:   - Start a virtual machine   - Shutdown a virtual machine   - Reboot a virtual machine   - Transfer a virtual machine   - Clone a virtual machine   - Edit hardware of a virtual machine
     * Perform actions with a virtual machine
     * @param vmId ID of the virtual machine
     * @param vmActionsRequest
     * @param _options
     */
    public vmActionsWithHttpInfo(
        vmId: number,
        vmActionsRequest?: VmActionsRequest,
        _options?: Configuration
    ): Promise<HttpInfo<Vm>> {
        // build promise chain
        let middlewarePre = this.requestFactory.vmActions(vmId, vmActionsRequest, _options);
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
                return middlewarePost.then((rsp) => this.responseProcessor.vmActionsWithHttpInfo(rsp));
            });
    }

    /**
     * This method performs several actions with a virtual machine:   - Start a virtual machine   - Shutdown a virtual machine   - Reboot a virtual machine   - Transfer a virtual machine   - Clone a virtual machine   - Edit hardware of a virtual machine
     * Perform actions with a virtual machine
     * @param vmId ID of the virtual machine
     * @param vmActionsRequest
     * @param _options
     */
    public vmActions(vmId: number, vmActionsRequest?: VmActionsRequest, _options?: Configuration): Promise<Vm> {
        return this.vmActionsWithHttpInfo(vmId, vmActionsRequest, _options).then((apiResponse) => apiResponse.data);
    }

    /**
     * This method creates a virtual machine according to the specified parameters.  To create a virtual machine, follow these steps:  1. Select a data center using the `/v1/data-centers` endpoint. The data center determines the provider and location of the virtual machine.  2. Select an available hardware configuration for the virtual machine using the `/v1/vms-configs` endpoint.  3. Select an SSH key for the Linux virtual machine using the `/v1/ssh-keys` endpoint.  4. Select an operating system using the `/v1/operating-systems` endpoint.  5. Choose one of the cloud network types: _multi-cloud, isolated,_ or _default_. Choose the _multi-cloud_ network type if you need to connect compute instances from different providers.  You may choose not to specify a security group. In this case, the virtual machine will be added to the default security group.
     * Create virtual machine
     * @param vmCreate
     * @param _options
     */
    public vmCreateWithHttpInfo(vmCreate?: VmCreate, _options?: Configuration): Promise<HttpInfo<Vm>> {
        // build promise chain
        let middlewarePre = this.requestFactory.vmCreate(vmCreate, _options);
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
                return middlewarePost.then((rsp) => this.responseProcessor.vmCreateWithHttpInfo(rsp));
            });
    }

    /**
     * This method creates a virtual machine according to the specified parameters.  To create a virtual machine, follow these steps:  1. Select a data center using the `/v1/data-centers` endpoint. The data center determines the provider and location of the virtual machine.  2. Select an available hardware configuration for the virtual machine using the `/v1/vms-configs` endpoint.  3. Select an SSH key for the Linux virtual machine using the `/v1/ssh-keys` endpoint.  4. Select an operating system using the `/v1/operating-systems` endpoint.  5. Choose one of the cloud network types: _multi-cloud, isolated,_ or _default_. Choose the _multi-cloud_ network type if you need to connect compute instances from different providers.  You may choose not to specify a security group. In this case, the virtual machine will be added to the default security group.
     * Create virtual machine
     * @param vmCreate
     * @param _options
     */
    public vmCreate(vmCreate?: VmCreate, _options?: Configuration): Promise<Vm> {
        return this.vmCreateWithHttpInfo(vmCreate, _options).then((apiResponse) => apiResponse.data);
    }

    /**
     * This method deletes a virtual machine.
     * Delete virtual machine
     * @param vmId ID of the virtual machine
     * @param _options
     */
    public vmDeleteWithHttpInfo(vmId: number, _options?: Configuration): Promise<HttpInfo<Vm>> {
        // build promise chain
        let middlewarePre = this.requestFactory.vmDelete(vmId, _options);
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
                return middlewarePost.then((rsp) => this.responseProcessor.vmDeleteWithHttpInfo(rsp));
            });
    }

    /**
     * This method deletes a virtual machine.
     * Delete virtual machine
     * @param vmId ID of the virtual machine
     * @param _options
     */
    public vmDelete(vmId: number, _options?: Configuration): Promise<Vm> {
        return this.vmDeleteWithHttpInfo(vmId, _options).then((apiResponse) => apiResponse.data);
    }
}
