# .VirtualMachinesApi

All URIs are relative to *https://api.emma.ms/external*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getVm**](VirtualMachinesApi.md#getVm) | **GET** /v1/vms/{vmId} | Get virtual machine by id
[**getVms**](VirtualMachinesApi.md#getVms) | **GET** /v1/vms | Get list of virtual machines
[**vmActions**](VirtualMachinesApi.md#vmActions) | **POST** /v1/vms/{vmId}/actions | Perform actions with a virtual machine
[**vmCreate**](VirtualMachinesApi.md#vmCreate) | **POST** /v1/vms | Create virtual machine
[**vmDelete**](VirtualMachinesApi.md#vmDelete) | **DELETE** /v1/vms/{vmId} | Delete virtual machine


# **getVm**
> Vm getVm()

This endpoint returns a virtual machine by ID. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VirtualMachinesApi(configuration);

let body:.VirtualMachinesApiGetVmRequest = {
  // number | ID of the virtual machine
  vmId: 1,
};

apiInstance.getVm(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | [**number**] | ID of the virtual machine | defaults to undefined


### Return type

**Vm**

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
**403** | Forbidden - Access is denied |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getVms**
> Array<Vm> getVms()

Returns a list of virtual machines within the project. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VirtualMachinesApi(configuration);

let body:any = {};

apiInstance.getVms(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<Vm>**

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
**403** | Forbidden - Access is denied |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **vmActions**
> Vm vmActions()

This method performs several actions with a virtual machine:   - Start a virtual machine   - Shutdown a virtual machine   - Reboot a virtual machine   - Transfer a virtual machine   - Clone a virtual machine   - Edit hardware of a virtual machine 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VirtualMachinesApi(configuration);

let body:.VirtualMachinesApiVmActionsRequest = {
  // number | ID of the virtual machine
  vmId: 1,
  // VmActionsRequest (optional)
  vmActionsRequest: null,
};

apiInstance.vmActions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmActionsRequest** | **VmActionsRequest**|  |
 **vmId** | [**number**] | ID of the virtual machine | defaults to undefined


### Return type

**Vm**

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
**403** | Forbidden - Access is denied |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **vmCreate**
> Vm vmCreate()

This method creates a virtual machine according to the specified parameters.  To create a virtual machine, follow these steps:  1. Select a data center using the `/v1/data-centers` endpoint. The data center determines the provider and location of the virtual machine.  2. Select an available hardware configuration for the virtual machine using the `/v1/vms-configs` endpoint.  3. Select an SSH key for the Linux virtual machine using the `/v1/ssh-keys` endpoint.  4. Select an operating system using the `/v1/operating-systems` endpoint.  5. Choose one of the cloud network types: _multi-cloud, isolated,_ or _default_. Choose the _multi-cloud_ network type if you need to connect compute instances from different providers.  You may choose not to specify a security group. In this case, the virtual machine will be added to the default security group. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VirtualMachinesApi(configuration);

let body:.VirtualMachinesApiVmCreateRequest = {
  // VmCreate (optional)
  vmCreate: {
    name: "vm-test1",
    dataCenterId: "aws-us-west-1",
    osId: 5,
    cloudNetworkType: "multi-cloud",
    vCpuType: "shared",
    vCpu: 2,
    ramGb: 1,
    volumeType: "ssd",
    volumeGb: 16,
    sshKeyId: 124,
    securityGroupId: 208,
    subnetworkId: "d6ffb3db-4940-4979-94f3-68b11a018d98",
    privateIp: "192.168.0.2",
  },
};

apiInstance.vmCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmCreate** | **VmCreate**|  |


### Return type

**Vm**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Virtual machine created |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden - Access is denied |  -  |
**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **vmDelete**
> Vm vmDelete()

This method deletes a virtual machine. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VirtualMachinesApi(configuration);

let body:.VirtualMachinesApiVmDeleteRequest = {
  // number | ID of the virtual machine
  vmId: 1,
};

apiInstance.vmDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | [**number**] | ID of the virtual machine | defaults to undefined


### Return type

**Vm**

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
**403** | Forbidden - Access is denied |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


