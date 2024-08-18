# .ComputeInstancesConfigurationsApi

All URIs are relative to *https://api.emma.ms/external*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSpotConfigs**](ComputeInstancesConfigurationsApi.md#getSpotConfigs) | **GET** /v1/spots-configs | Search available configurations for spot instance creation
[**getVmConfigs**](ComputeInstancesConfigurationsApi.md#getVmConfigs) | **GET** /v1/vms-configs | Search available configurations for virtual machine creation


# **getSpotConfigs**
> GetVmConfigs200Response getSpotConfigs()

When creating spot instances you need to provide the desired hardware configurations. These configurations include CPU, CPU type, RAM, volume size, and volume type. Different cloud providers offer various configurations in different data centers. Therefore, before creating any compute instance, you need to verify the available configurations.  Use this endpoint as a reference for available configurations for spot instances. You can search the available configurations by different parameters (provider, location, data center, cloud network type, CPU, CPU type, RAM, volume size, volume type, and price).  When you find an appropriate configuration, provide the hardware parameters in the endpoint for creating or editing a spot instance. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ComputeInstancesConfigurationsApi(configuration);

let body:.ComputeInstancesConfigurationsApiGetSpotConfigsRequest = {
  // number | ID of the cloud provider (optional)
  providerId: 5,
  // number | ID of the geographic location (optional)
  locationId: 6,
  // string | ID of the cloud provider\'s data center (optional)
  dataCenterId: "aws-us-west-1",
  // 'isolated' | 'multi-cloud' | 'default' | Type of cloud network (optional)
  cloudNetworkType: "multi-cloud",
  // 'shared' | 'standard' | 'hpc' | Type of vCPUs for the compute instance (optional)
  vCpuType: "Standard",
  // number | virtual Central Processing Units (vCPUs) for the compute instance (optional)
  vCpu: 4,
  // number | Minimum number of vCPUs for the compute instance (optional)
  vCpuMin: 1,
  // number | Maximum number of vCPUs for the compute instance (optional)
  vCpuMax: 8,
  // number | RAM of the compute instance in gigabytes (optional)
  ramGb: 16,
  // number | Minimum RAM of the compute instance in gigabytes (optional)
  ramGbMin: 8,
  // number | Maximum RAM of the compute instance in gigabytes (optional)
  ramGbMax: 32,
  // number | Volume size of the compute instance in gigabytes (optional)
  volumeGb: 500,
  // number | Minimum volume size of the compute instance in gigabytes (optional)
  volumeGbMin: 250,
  // number | Maximum volume size of the compute instance in gigabytes (optional)
  volumeGbMax: 1000,
  // 'ssd' | 'ssd-plus' | Volume type of the compute instance (optional)
  volumeType: "ssd",
  // number | Minimum price of the compute instance (optional)
  priceMin: 3.14,
  // number | Maximum price of the compute instance (optional)
  priceMax: 3.14,
  // number | Page number (optional)
  page: 0,
  // number | Query size (optional)
  size: 100,
};

apiInstance.getSpotConfigs(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **providerId** | [**number**] | ID of the cloud provider | (optional) defaults to undefined
 **locationId** | [**number**] | ID of the geographic location | (optional) defaults to undefined
 **dataCenterId** | [**string**] | ID of the cloud provider\&#39;s data center | (optional) defaults to undefined
 **cloudNetworkType** | [**&#39;isolated&#39; | &#39;multi-cloud&#39; | &#39;default&#39;**]**Array<&#39;isolated&#39; &#124; &#39;multi-cloud&#39; &#124; &#39;default&#39;>** | Type of cloud network | (optional) defaults to undefined
 **vCpuType** | [**&#39;shared&#39; | &#39;standard&#39; | &#39;hpc&#39;**]**Array<&#39;shared&#39; &#124; &#39;standard&#39; &#124; &#39;hpc&#39;>** | Type of vCPUs for the compute instance | (optional) defaults to undefined
 **vCpu** | [**number**] | virtual Central Processing Units (vCPUs) for the compute instance | (optional) defaults to undefined
 **vCpuMin** | [**number**] | Minimum number of vCPUs for the compute instance | (optional) defaults to undefined
 **vCpuMax** | [**number**] | Maximum number of vCPUs for the compute instance | (optional) defaults to undefined
 **ramGb** | [**number**] | RAM of the compute instance in gigabytes | (optional) defaults to undefined
 **ramGbMin** | [**number**] | Minimum RAM of the compute instance in gigabytes | (optional) defaults to undefined
 **ramGbMax** | [**number**] | Maximum RAM of the compute instance in gigabytes | (optional) defaults to undefined
 **volumeGb** | [**number**] | Volume size of the compute instance in gigabytes | (optional) defaults to undefined
 **volumeGbMin** | [**number**] | Minimum volume size of the compute instance in gigabytes | (optional) defaults to undefined
 **volumeGbMax** | [**number**] | Maximum volume size of the compute instance in gigabytes | (optional) defaults to undefined
 **volumeType** | [**&#39;ssd&#39; | &#39;ssd-plus&#39;**]**Array<&#39;ssd&#39; &#124; &#39;ssd-plus&#39;>** | Volume type of the compute instance | (optional) defaults to undefined
 **priceMin** | [**number**] | Minimum price of the compute instance | (optional) defaults to undefined
 **priceMax** | [**number**] | Maximum price of the compute instance | (optional) defaults to undefined
 **page** | [**number**] | Page number | (optional) defaults to undefined
 **size** | [**number**] | Query size | (optional) defaults to undefined


### Return type

**GetVmConfigs200Response**

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
**403** | Forbidden - Access is denied |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getVmConfigs**
> GetVmConfigs200Response getVmConfigs()

When creating virtual machines you need to provide the desired hardware configurations. These configurations include CPU, CPU type, RAM, volume size, and volume type. Different cloud providers offer various configurations in different data centers. Therefore, before creating any compute instance, you need to verify the available configurations.  Use this endpoint as a reference for available configurations for virtual machines. You can search the available configurations by different parameters (provider, location, data center, cloud network type, CPU, CPU type, RAM, volume size, volume type, and price).  When you find an appropriate configuration, provide the hardware parameters in the endpoint for creating or editing a virtual machine. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ComputeInstancesConfigurationsApi(configuration);

let body:.ComputeInstancesConfigurationsApiGetVmConfigsRequest = {
  // number | ID of the cloud provider (optional)
  providerId: 5,
  // number | ID of the geographic location (optional)
  locationId: 6,
  // string | ID of the cloud provider\'s data center (optional)
  dataCenterId: "aws-us-west-1",
  // 'isolated' | 'multi-cloud' | 'default' | Type of cloud network (optional)
  cloudNetworkType: "multi-cloud",
  // 'shared' | 'standard' | 'hpc' | Type of vCPUs for the compute instance (optional)
  vCpuType: "Standard",
  // number | virtual Central Processing Units (vCPUs) for the compute instance (optional)
  vCpu: 4,
  // number | Minimum number of vCPUs for the compute instance (optional)
  vCpuMin: 1,
  // number | Maximum number of vCPUs for the compute instance (optional)
  vCpuMax: 8,
  // number | RAM of the compute instance in gigabytes (optional)
  ramGb: 16,
  // number | Minimum RAM of the compute instance in gigabytes (optional)
  ramGbMin: 8,
  // number | Maximum RAM of the compute instance in gigabytes (optional)
  ramGbMax: 32,
  // number | Volume size of the compute instance in gigabytes (optional)
  volumeGb: 500,
  // number | Minimum volume size of the compute instance in gigabytes (optional)
  volumeGbMin: 250,
  // number | Maximum volume size of the compute instance in gigabytes (optional)
  volumeGbMax: 1000,
  // 'ssd' | 'ssd-plus' | Volume type of the compute instance (optional)
  volumeType: "ssd",
  // number | Minimum price of the compute instance (optional)
  priceMin: 3.14,
  // number | Maximum price of the compute instance (optional)
  priceMax: 3.14,
  // number | Page number (optional)
  page: 0,
  // number | Query size (optional)
  size: 100,
};

apiInstance.getVmConfigs(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **providerId** | [**number**] | ID of the cloud provider | (optional) defaults to undefined
 **locationId** | [**number**] | ID of the geographic location | (optional) defaults to undefined
 **dataCenterId** | [**string**] | ID of the cloud provider\&#39;s data center | (optional) defaults to undefined
 **cloudNetworkType** | [**&#39;isolated&#39; | &#39;multi-cloud&#39; | &#39;default&#39;**]**Array<&#39;isolated&#39; &#124; &#39;multi-cloud&#39; &#124; &#39;default&#39;>** | Type of cloud network | (optional) defaults to undefined
 **vCpuType** | [**&#39;shared&#39; | &#39;standard&#39; | &#39;hpc&#39;**]**Array<&#39;shared&#39; &#124; &#39;standard&#39; &#124; &#39;hpc&#39;>** | Type of vCPUs for the compute instance | (optional) defaults to undefined
 **vCpu** | [**number**] | virtual Central Processing Units (vCPUs) for the compute instance | (optional) defaults to undefined
 **vCpuMin** | [**number**] | Minimum number of vCPUs for the compute instance | (optional) defaults to undefined
 **vCpuMax** | [**number**] | Maximum number of vCPUs for the compute instance | (optional) defaults to undefined
 **ramGb** | [**number**] | RAM of the compute instance in gigabytes | (optional) defaults to undefined
 **ramGbMin** | [**number**] | Minimum RAM of the compute instance in gigabytes | (optional) defaults to undefined
 **ramGbMax** | [**number**] | Maximum RAM of the compute instance in gigabytes | (optional) defaults to undefined
 **volumeGb** | [**number**] | Volume size of the compute instance in gigabytes | (optional) defaults to undefined
 **volumeGbMin** | [**number**] | Minimum volume size of the compute instance in gigabytes | (optional) defaults to undefined
 **volumeGbMax** | [**number**] | Maximum volume size of the compute instance in gigabytes | (optional) defaults to undefined
 **volumeType** | [**&#39;ssd&#39; | &#39;ssd-plus&#39;**]**Array<&#39;ssd&#39; &#124; &#39;ssd-plus&#39;>** | Volume type of the compute instance | (optional) defaults to undefined
 **priceMin** | [**number**] | Minimum price of the compute instance | (optional) defaults to undefined
 **priceMax** | [**number**] | Maximum price of the compute instance | (optional) defaults to undefined
 **page** | [**number**] | Page number | (optional) defaults to undefined
 **size** | [**number**] | Query size | (optional) defaults to undefined


### Return type

**GetVmConfigs200Response**

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
**403** | Forbidden - Access is denied |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


