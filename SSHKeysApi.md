# .SSHKeysApi

All URIs are relative to *https://api.emma.ms/external*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSshKey**](SSHKeysApi.md#getSshKey) | **GET** /v1/ssh-keys/{sshKeyId} | Get SSH key by id
[**sshKeyDelete**](SSHKeysApi.md#sshKeyDelete) | **DELETE** /v1/ssh-keys/{sshKeyId} | Delete SSH keys
[**sshKeyUpdate**](SSHKeysApi.md#sshKeyUpdate) | **PUT** /v1/ssh-keys/{sshKeyId} | Update SSH keys
[**sshKeys**](SSHKeysApi.md#sshKeys) | **GET** /v1/ssh-keys | Get list of SSH keys
[**sshKeysCreateImport**](SSHKeysApi.md#sshKeysCreateImport) | **POST** /v1/ssh-keys | Create or import SSH key


# **getSshKey**
> SshKey getSshKey()

Returns an SSH key by ID for access to Linux compute instances. You can only retrieve the SSH keys created by the current Service application that you use to send a request. You can\'t retrieve SSH keys created by other users and applications. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SSHKeysApi(configuration);

let body:.SSHKeysApiGetSshKeyRequest = {
  // number | SSH key ID
  sshKeyId: 1,
};

apiInstance.getSshKey(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sshKeyId** | [**number**] | SSH key ID | defaults to undefined


### Return type

**SshKey**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **sshKeyDelete**
> void sshKeyDelete()

This method deletes a SSH key. You can only delete an SSH key created by the current Service application that you use to send a request. You can\'t delete SSH keys created by other users and applications. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SSHKeysApi(configuration);

let body:.SSHKeysApiSshKeyDeleteRequest = {
  // number | SSH key ID
  sshKeyId: 1,
};

apiInstance.sshKeyDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sshKeyId** | [**number**] | SSH key ID | defaults to undefined


### Return type

**void**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful operation |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **sshKeyUpdate**
> SshKey sshKeyUpdate()

This method updates a name of an existing SSH-key. You can only update an SSH key created by the current Service application that you use to send a request. You can\'t update SSH keys created by other users and applications. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SSHKeysApi(configuration);

let body:.SSHKeysApiSshKeyUpdateRequest = {
  // number | SSH key ID
  sshKeyId: 1,
  // SshKeyUpdate (optional)
  sshKeyUpdate: {
    name: "mykey",
  },
};

apiInstance.sshKeyUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sshKeyUpdate** | **SshKeyUpdate**|  |
 **sshKeyId** | [**number**] | SSH key ID | defaults to undefined


### Return type

**SshKey**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **sshKeys**
> Array<SshKey> sshKeys()

Returns a list of the SSH keys for access to Linux compute instances. You can use these keys to create compute instances.   The list only contains the SSH keys created by the current Service application that you use to send a request.   You can\'t retrieve a list of SSH keys created by other users and applications. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SSHKeysApi(configuration);

let body:any = {};

apiInstance.sshKeys(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<SshKey>**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **sshKeysCreateImport**
> SshKeysCreateImport201Response sshKeysCreateImport()

This method creates an SSH key that can be used for Linux compute instance creation. An SSH key can be created in two ways: generated by emma or imported by the user.  If you want to **generate** a key, specify two fields: name and keyType (RSA or ED25519). The key will be generated, and you will receive a private key in the response. The private key will be shown only once, so copy and save it to connect to the Linux compute instances.  If you want to **import** an existing SSH key, specify two fields: name and key. In the key field, insert your public SSH key as a string. It will be imported. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SSHKeysApi(configuration);

let body:.SSHKeysApiSshKeysCreateImportRequest = {
  // SshKeysCreateImportRequest (optional)
  sshKeysCreateImportRequest: null,
};

apiInstance.sshKeysCreateImport(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sshKeysCreateImportRequest** | **SshKeysCreateImportRequest**|  |


### Return type

**SshKeysCreateImport201Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful operation |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden - Access is denied |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


