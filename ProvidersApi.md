# .ProvidersApi

All URIs are relative to *https://api.emma.ms/external*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getProvider**](ProvidersApi.md#getProvider) | **GET** /v1/providers/{providerId} | Get cloud provider by ID
[**getProviders**](ProvidersApi.md#getProviders) | **GET** /v1/providers | Get list of cloud providers


# **getProvider**
> Provider getProvider()

Returns a cloud provider by provider ID. Cloud service provider is a third-party company that provides scalable computing resources that users can access over emma platform. Provider is necessary when you select a data center for creating compute instances. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProvidersApi(configuration);

let body:.ProvidersApiGetProviderRequest = {
  // number | ID of the cloud provider
  providerId: 1,
};

apiInstance.getProvider(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **providerId** | [**number**] | ID of the cloud provider | defaults to undefined


### Return type

**Provider**

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

# **getProviders**
> Array<Provider> getProviders()

Returns a list of cloud providers. Cloud service provider is a third-party company that provides scalable computing resources that users can access over emma platform. When you create any computing resources in emma you create them in the provider\'s datacenters. Provider is necessary when you select a data center for creating compute instances. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProvidersApi(configuration);

let body:.ProvidersApiGetProvidersRequest = {
  // string | Name of the cloud provider (optional)
  providerName: "GCP",
};

apiInstance.getProviders(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **providerName** | [**string**] | Name of the cloud provider | (optional) defaults to undefined


### Return type

**Array<Provider>**

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


