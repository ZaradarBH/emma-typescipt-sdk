# .LocationsApi

All URIs are relative to *https://api.emma.ms/external*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLocation**](LocationsApi.md#getLocation) | **GET** /v1/locations/{locationId} | Get location by ID
[**getLocations**](LocationsApi.md#getLocations) | **GET** /v1/locations | Get list of locations


# **getLocation**
> Location getLocation()

Returns a geographic location by its ID. Locations are cities or states (in the case of the USA) where providers have data centers. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LocationsApi(configuration);

let body:.LocationsApiGetLocationRequest = {
  // number | ID of the geographic location
  locationId: 1,
};

apiInstance.getLocation(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | [**number**] | ID of the geographic location | defaults to undefined


### Return type

**Location**

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

# **getLocations**
> Array<Location> getLocations()

Returns a list of geographic locations of the provider\'s data centers. Locations are cities or states (in the case of the USA). When creating any compute instance, you need to specify a data center. This method helps you find locations with data centers. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LocationsApi(configuration);

let body:.LocationsApiGetLocationsRequest = {
  // string | Name of the geographic location (optional)
  name: "Stockholm",
};

apiInstance.getLocations(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | Name of the geographic location | (optional) defaults to undefined


### Return type

**Array<Location>**

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


