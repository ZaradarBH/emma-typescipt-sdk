# .SubnetworksApi

All URIs are relative to *https://api.emma.ms/external*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1SubnetworksGet**](SubnetworksApi.md#v1SubnetworksGet) | **GET** /v1/subnetworks | Get list of subnetworks
[**v1SubnetworksPost**](SubnetworksApi.md#v1SubnetworksPost) | **POST** /v1/subnetworks | Create subnetwork
[**v1SubnetworksSubnetworkIdDelete**](SubnetworksApi.md#v1SubnetworksSubnetworkIdDelete) | **DELETE** /v1/subnetworks/{subnetworkId} | Delete subnetwork
[**v1SubnetworksSubnetworkIdGet**](SubnetworksApi.md#v1SubnetworksSubnetworkIdGet) | **GET** /v1/subnetworks/{subnetworkId} | Get subnetwork by ID
[**v1SubnetworksSubnetworkIdPut**](SubnetworksApi.md#v1SubnetworksSubnetworkIdPut) | **PUT** /v1/subnetworks/{subnetworkId} | Update subnetwork


# **v1SubnetworksGet**
> Array<Subnetwork> v1SubnetworksGet()

Returns a list of subnetworks within the project. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubnetworksApi(configuration);

let body:any = {};

apiInstance.v1SubnetworksGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<Subnetwork>**

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

# **v1SubnetworksPost**
> SubnetworkCreate v1SubnetworksPost()

This method creates a subnetwork. To create a subnetwork, consider the following parameters: 1. Select a data center using the `/v1/data-centers` endpoint. The data center determines the provider and location of the subnetwork. 2. Specify the IP address range (optional) and network size (required). Subnetwork prefix value must be in ranges: 10.0.0.0 - 10.255.255.255, 172.16.0.0 - 172.31.255.255, 192.168.0.0 - 192.168.255.255, network size must be /28-/16 for DigitalOcean and /24-/16 for Gcore. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubnetworksApi(configuration);

let body:.SubnetworksApiV1SubnetworksPostRequest = {
  // SubnetworkCreate (optional)
  subnetworkCreate: {
    name: "subnetwork-name",
    dataCenterId: "gcore-frankfurt",
    subnetworkPrefix: "192.168.0.0",
    subnetworkSize: 24,
  },
};

apiInstance.v1SubnetworksPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subnetworkCreate** | **SubnetworkCreate**|  |


### Return type

**SubnetworkCreate**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1SubnetworksSubnetworkIdDelete**
> Subnetwork v1SubnetworksSubnetworkIdDelete()

This method deletes a subnetwork. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubnetworksApi(configuration);

let body:.SubnetworksApiV1SubnetworksSubnetworkIdDeleteRequest = {
  // string | Subnetwork ID
  subnetworkId: "subnetworkId_example",
};

apiInstance.v1SubnetworksSubnetworkIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subnetworkId** | [**string**] | Subnetwork ID | defaults to undefined


### Return type

**Subnetwork**

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

# **v1SubnetworksSubnetworkIdGet**
> Subnetwork v1SubnetworksSubnetworkIdGet()

Returns a subnetwork by its ID. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubnetworksApi(configuration);

let body:.SubnetworksApiV1SubnetworksSubnetworkIdGetRequest = {
  // string | Subnetwork ID
  subnetworkId: "subnetworkId_example",
};

apiInstance.v1SubnetworksSubnetworkIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subnetworkId** | [**string**] | Subnetwork ID | defaults to undefined


### Return type

**Subnetwork**

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

# **v1SubnetworksSubnetworkIdPut**
> Subnetwork v1SubnetworksSubnetworkIdPut()

This method updates a subnetwork. Only the subnetwork name can be updated. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubnetworksApi(configuration);

let body:.SubnetworksApiV1SubnetworksSubnetworkIdPutRequest = {
  // string | Subnetwork ID
  subnetworkId: "subnetworkId_example",
  // SubnetworkEdit (optional)
  subnetworkEdit: {
    name: "subnetwork-name",
  },
};

apiInstance.v1SubnetworksSubnetworkIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subnetworkEdit** | **SubnetworkEdit**|  |
 **subnetworkId** | [**string**] | Subnetwork ID | defaults to undefined


### Return type

**Subnetwork**

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


