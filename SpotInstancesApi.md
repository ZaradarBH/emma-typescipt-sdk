# .SpotInstancesApi

All URIs are relative to *https://api.emma.ms/external*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSpot**](SpotInstancesApi.md#getSpot) | **GET** /v1/spot-instances/{spotInstanceId} | Get spot instance by id
[**getSpots**](SpotInstancesApi.md#getSpots) | **GET** /v1/spot-instances | Get list of spot instances
[**spotActions**](SpotInstancesApi.md#spotActions) | **POST** /v1/spot-instances/{spotInstanceId}/actions | Perform actions with a spot instance
[**spotCreate**](SpotInstancesApi.md#spotCreate) | **POST** /v1/spot-instances | Create spot instance
[**spotDelete**](SpotInstancesApi.md#spotDelete) | **DELETE** /v1/spot-instances/{spotInstanceId} | Delete spot instance


# **getSpot**
> Vm getSpot()

Returns a spot instance by its ID.  A Spot Instance is a specialized compute instance that allows you to access and utilize unused instance capacity at a steeply discounted rate.  Spot price is charged on an hourly basis. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SpotInstancesApi(configuration);

let body:.SpotInstancesApiGetSpotRequest = {
  // number | ID of the spot instance
  spotInstanceId: 1,
};

apiInstance.getSpot(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spotInstanceId** | [**number**] | ID of the spot instance | defaults to undefined


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

# **getSpots**
> Array<Vm> getSpots()

Returns a list of spot instances.  A Spot Instance is a specialized compute instance that allows you to access and utilize unused instance capacity at a steeply discounted rate.  Spot price is charged on an hourly basis. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SpotInstancesApi(configuration);

let body:any = {};

apiInstance.getSpots(body).then((data:any) => {
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

# **spotActions**
> Vm spotActions()

This endpoint reboots a spot instance. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SpotInstancesApi(configuration);

let body:.SpotInstancesApiSpotActionsRequest = {
  // number | ID of the spot instance
  spotInstanceId: 1,
  // SpotActionsRequest (optional)
  spotActionsRequest: null,
};

apiInstance.spotActions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spotActionsRequest** | **SpotActionsRequest**|  |
 **spotInstanceId** | [**number**] | ID of the spot instance | defaults to undefined


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

# **spotCreate**
> Vm spotCreate()

This method creates a spot instance according to the specified parameters.  A Spot Instance is a specialized compute instance that allows you to access and utilize unused instance capacity at a steeply discounted rate. Spot price is charged on an hourly basis.   To create a spot instance, follow these steps:  1. Select a data center using the `/v1/data-centers` endpoint. The data center determines the provider and location of the spot instance.  2. Select an available hardware configuration for the spot instance using the `/v1/spots-configs` endpoint.  3. Select an SSH key for the Linux spot instance using the `/v1/ssh-keys` endpoint.  4. Select an operating system using the `/v1/operating-systems` endpoint.  5. Choose one of the cloud network types: _multi-cloud, isolated,_ or _default_. Choose the _multi-cloud_ network type if you need to connect compute instances from different providers.  You may choose not to specify a security group. In this case, the spot instance will be added to the default security group.  A `price` field of a spot instance is not required.   The spot instance market operates on a bidding system. Your specified price acts as your bid in this market. If your bid is higher than the current spot price, your instance request will likely be fulfilled. However, if the market price exceeds your bid, your instance may not be launched or could be terminated if already running. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SpotInstancesApi(configuration);

let body:.SpotInstancesApiSpotCreateRequest = {
  // SpotCreate (optional)
  spotCreate: {
    name: "spot-default",
    dataCenterId: "aws-us-west-1",
    osId: 35,
    cloudNetworkType: "multi-cloud",
    vCpuType: "shared",
    vCpu: 4,
    ramGb: 1,
    volumeType: "ssd",
    volumeGb: 16,
    sshKeyId: 124,
    securityGroupId: 208,
    price: 0.002635,
  },
};

apiInstance.spotCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spotCreate** | **SpotCreate**|  |


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
**200** | Spot instance created |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden - Access is denied |  -  |
**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **spotDelete**
> Vm spotDelete()

This method deletes a spot instance. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SpotInstancesApi(configuration);

let body:.SpotInstancesApiSpotDeleteRequest = {
  // number | ID of the spot instance
  spotInstanceId: 1,
};

apiInstance.spotDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spotInstanceId** | [**number**] | ID of the spot instance | defaults to undefined


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


