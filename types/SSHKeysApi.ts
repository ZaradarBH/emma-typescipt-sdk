import { SSHKeysApiRequestFactory, SSHKeysApiResponseProcessor } from '../apis/SSHKeysApi';
import { Configuration } from '../configuration';
import { HttpInfo, RequestContext, ResponseContext } from '../http/http';
import { SshKey } from '../models/SshKey';
import { SshKeyUpdate } from '../models/SshKeyUpdate';
import { SshKeysCreateImportRequest } from '../models/SshKeysCreateImportRequest';
import { SshKeysCreateImport201Response } from '../models/SshKeysCreateImport201Response';

export class SSHKeysApi {
    private requestFactory: SSHKeysApiRequestFactory;
    private responseProcessor: SSHKeysApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SSHKeysApiRequestFactory,
        responseProcessor?: SSHKeysApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SSHKeysApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SSHKeysApiResponseProcessor();
    }

    /**
     * Returns an SSH key by ID for access to Linux compute instances. You can only retrieve the SSH keys created by the current Service application that you use to send a request. You can\'t retrieve SSH keys created by other users and applications.
     * Get SSH key by id
     * @param sshKeyId SSH key ID
     * @param _options
     */
    public getSshKeyWithHttpInfo(sshKeyId: number, _options?: Configuration): Promise<HttpInfo<SshKey>> {
        // build promise chain
        let middlewarePre = this.requestFactory.getSshKey(sshKeyId, _options);
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
                return middlewarePost.then((rsp) => this.responseProcessor.getSshKeyWithHttpInfo(rsp));
            });
    }

    /**
     * Returns an SSH key by ID for access to Linux compute instances. You can only retrieve the SSH keys created by the current Service application that you use to send a request. You can\'t retrieve SSH keys created by other users and applications.
     * Get SSH key by id
     * @param sshKeyId SSH key ID
     * @param _options
     */
    public getSshKey(sshKeyId: number, _options?: Configuration): Promise<SshKey> {
        return this.getSshKeyWithHttpInfo(sshKeyId, _options).then((apiResponse) => apiResponse.data);
    }

    /**
     * This method deletes a SSH key. You can only delete an SSH key created by the current Service application that you use to send a request. You can\'t delete SSH keys created by other users and applications.
     * Delete SSH keys
     * @param sshKeyId SSH key ID
     * @param _options
     */
    public sshKeyDeleteWithHttpInfo(sshKeyId: number, _options?: Configuration): Promise<HttpInfo<void>> {
        // build promise chain
        let middlewarePre = this.requestFactory.sshKeyDelete(sshKeyId, _options);
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
                return middlewarePost.then((rsp) => this.responseProcessor.sshKeyDeleteWithHttpInfo(rsp));
            });
    }

    /**
     * This method deletes a SSH key. You can only delete an SSH key created by the current Service application that you use to send a request. You can\'t delete SSH keys created by other users and applications.
     * Delete SSH keys
     * @param sshKeyId SSH key ID
     * @param _options
     */
    public sshKeyDelete(sshKeyId: number, _options?: Configuration): Promise<void> {
        return this.sshKeyDeleteWithHttpInfo(sshKeyId, _options).then((apiResponse) => apiResponse.data);
    }

    /**
     * This method updates a name of an existing SSH-key. You can only update an SSH key created by the current Service application that you use to send a request. You can\'t update SSH keys created by other users and applications.
     * Update SSH keys
     * @param sshKeyId SSH key ID
     * @param sshKeyUpdate
     * @param _options
     */
    public sshKeyUpdateWithHttpInfo(
        sshKeyId: number,
        sshKeyUpdate?: SshKeyUpdate,
        _options?: Configuration
    ): Promise<HttpInfo<SshKey>> {
        // build promise chain
        let middlewarePre = this.requestFactory.sshKeyUpdate(sshKeyId, sshKeyUpdate, _options);
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
                return middlewarePost.then((rsp) => this.responseProcessor.sshKeyUpdateWithHttpInfo(rsp));
            });
    }

    /**
     * This method updates a name of an existing SSH-key. You can only update an SSH key created by the current Service application that you use to send a request. You can\'t update SSH keys created by other users and applications.
     * Update SSH keys
     * @param sshKeyId SSH key ID
     * @param sshKeyUpdate
     * @param _options
     */
    public sshKeyUpdate(sshKeyId: number, sshKeyUpdate?: SshKeyUpdate, _options?: Configuration): Promise<SshKey> {
        return this.sshKeyUpdateWithHttpInfo(sshKeyId, sshKeyUpdate, _options).then((apiResponse) => apiResponse.data);
    }

    /**
     * Returns a list of the SSH keys for access to Linux compute instances. You can use these keys to create compute instances.   The list only contains the SSH keys created by the current Service application that you use to send a request.   You can\'t retrieve a list of SSH keys created by other users and applications.
     * Get list of SSH keys
     */
    public sshKeysWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<SshKey>>> {
        // build promise chain
        let middlewarePre = this.requestFactory.sshKeys(_options);
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
                return middlewarePost.then((rsp) => this.responseProcessor.sshKeysWithHttpInfo(rsp));
            });
    }

    /**
     * Returns a list of the SSH keys for access to Linux compute instances. You can use these keys to create compute instances.   The list only contains the SSH keys created by the current Service application that you use to send a request.   You can\'t retrieve a list of SSH keys created by other users and applications.
     * Get list of SSH keys
     */
    public sshKeys(_options?: Configuration): Promise<Array<SshKey>> {
        return this.sshKeysWithHttpInfo(_options).then((apiResponse) => apiResponse.data);
    }

    /**
     * This method creates an SSH key that can be used for Linux compute instance creation. An SSH key can be created in two ways: generated by emma or imported by the user.  If you want to **generate** a key, specify two fields: name and keyType (RSA or ED25519). The key will be generated, and you will receive a private key in the response. The private key will be shown only once, so copy and save it to connect to the Linux compute instances.  If you want to **import** an existing SSH key, specify two fields: name and key. In the key field, insert your public SSH key as a string. It will be imported.
     * Create or import SSH key
     * @param sshKeysCreateImportRequest
     * @param _options
     */
    public sshKeysCreateImportWithHttpInfo(
        sshKeysCreateImportRequest?: SshKeysCreateImportRequest,
        _options?: Configuration
    ): Promise<HttpInfo<SshKeysCreateImport201Response>> {
        // build promise chain
        let middlewarePre = this.requestFactory.sshKeysCreateImport(sshKeysCreateImportRequest, _options);
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
                return middlewarePost.then((rsp) => this.responseProcessor.sshKeysCreateImportWithHttpInfo(rsp));
            });
    }

    /**
     * This method creates an SSH key that can be used for Linux compute instance creation. An SSH key can be created in two ways: generated by emma or imported by the user.  If you want to **generate** a key, specify two fields: name and keyType (RSA or ED25519). The key will be generated, and you will receive a private key in the response. The private key will be shown only once, so copy and save it to connect to the Linux compute instances.  If you want to **import** an existing SSH key, specify two fields: name and key. In the key field, insert your public SSH key as a string. It will be imported.
     * Create or import SSH key
     * @param sshKeysCreateImportRequest
     * @param _options
     */
    public sshKeysCreateImport(
        sshKeysCreateImportRequest?: SshKeysCreateImportRequest,
        _options?: Configuration
    ): Promise<SshKeysCreateImport201Response> {
        return this.sshKeysCreateImportWithHttpInfo(sshKeysCreateImportRequest, _options).then(
            (apiResponse) => apiResponse.data
        );
    }
}
