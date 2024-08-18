# .DataCentersApi

All URIs are relative to *https://api.emma.ms/external*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDataCenter**](DataCentersApi.md#getDataCenter) | **GET** /v1/data-centers/{dataCenterId} | Get data center by ID
[**getDataCenters**](DataCentersApi.md#getDataCenters) | **GET** /v1/data-centers | Get list of data centers


# **getDataCenter**
> DataCenter getDataCenter()

Returns a data center from a cloud provider by data center ID. Information on the data center includes its name, provider and location. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DataCentersApi(configuration);

let body:.DataCentersApiGetDataCenterRequest = {
  // string | ID of the cloud provider\'s data center
  dataCenterId: "aws-us-west-1",
};

apiInstance.getDataCenter(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataCenterId** | [**string**] | ID of the cloud provider\&#39;s data center | defaults to undefined


### Return type

**DataCenter**

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

# **getDataCenters**
> Array<DataCenter> getDataCenters()

Returns a list of data centers from cloud providers. All compute instances are created in data centers. The data center ID is necessary for creating any compute instance. Use this endpoint to find the provider\'s data centers. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DataCentersApi(configuration);

let body:.DataCentersApiGetDataCentersRequest = {
  // string | Name of the cloud provider\'s data center (optional)
  dataCenterName: "eu-north-1",
  // number | ID of the geographic location (optional)
  locationId: 6,
  // string | Name of the cloud provider (optional)
  providerName: "GCP",
};

apiInstance.getDataCenters(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataCenterName** | [**string**] | Name of the cloud provider\&#39;s data center | (optional) defaults to undefined
 **locationId** | [**number**] | ID of the geographic location | (optional) defaults to undefined
 **providerName** | [**string**] | Name of the cloud provider | (optional) defaults to undefined


### Return type

**Array<DataCenter>**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


