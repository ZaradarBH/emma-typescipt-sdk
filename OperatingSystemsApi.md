# .OperatingSystemsApi

All URIs are relative to *https://api.emma.ms/external*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOperatingSystem**](OperatingSystemsApi.md#getOperatingSystem) | **GET** /v1/operating-systems/{operatingSystemId} | Get operating system by ID
[**getOperatingSystems**](OperatingSystemsApi.md#getOperatingSystems) | **GET** /v1/operating-systems | Get list of operating systems


# **getOperatingSystem**
> OperatingSystem getOperatingSystem()

Returns an operating system (supported by the cloud providers) by its ID. The method provides detailed information about each operating system, including its family, type, version, and architecture. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OperatingSystemsApi(configuration);

let body:.OperatingSystemsApiGetOperatingSystemRequest = {
  // number | ID of the operating system
  operatingSystemId: 1,
};

apiInstance.getOperatingSystem(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **operatingSystemId** | [**number**] | ID of the operating system | defaults to undefined


### Return type

**OperatingSystem**

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

# **getOperatingSystems**
> Array<OperatingSystem> getOperatingSystems()

Returns a list of available operating systems of compute instances supported by the cloud providers. The method provides detailed information about each operating system, including its family, type, version, and architecture. Use this list of the operating systems to find an OS when you create any compute instance. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OperatingSystemsApi(configuration);

let body:.OperatingSystemsApiGetOperatingSystemsRequest = {
  // string | Type of the operating system (optional)
  type: "Ubuntu",
  // string | Architecture of the operating system (optional)
  architecture: "x86-64",
  // string | Version of the operating system (optional)
  version: "18.04",
};

apiInstance.getOperatingSystems(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | [**string**] | Type of the operating system | (optional) defaults to undefined
 **architecture** | [**string**] | Architecture of the operating system | (optional) defaults to undefined
 **version** | [**string**] | Version of the operating system | (optional) defaults to undefined


### Return type

**Array<OperatingSystem>**

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


