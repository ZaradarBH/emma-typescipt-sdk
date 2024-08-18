# .SecurityGroupsApi

All URIs are relative to *https://api.emma.ms/external*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSecurityGroup**](SecurityGroupsApi.md#getSecurityGroup) | **GET** /v1/security-groups/{securityGroupId} | Get security group by ID
[**getSecurityGroups**](SecurityGroupsApi.md#getSecurityGroups) | **GET** /v1/security-groups | Get list of security groups
[**securityGroupCreate**](SecurityGroupsApi.md#securityGroupCreate) | **POST** /v1/security-groups | Create security group
[**securityGroupDelete**](SecurityGroupsApi.md#securityGroupDelete) | **DELETE** /v1/security-groups/{securityGroupId} | Delete security group
[**securityGroupInstanceAdd**](SecurityGroupsApi.md#securityGroupInstanceAdd) | **POST** /v1/security-groups/{securityGroupId}/instances | Add instance to security group
[**securityGroupInstances**](SecurityGroupsApi.md#securityGroupInstances) | **GET** /v1/security-groups/{securityGroupId}/instances | Get instances in security group
[**securityGroupUpdate**](SecurityGroupsApi.md#securityGroupUpdate) | **PUT** /v1/security-groups/{securityGroupId} | Update security group


# **getSecurityGroup**
> SecurityGroup getSecurityGroup()

Returns a security groups by its ID.  A security group refers to a set of rules that determine what network traffic is allowed to enter or leave a particular compute instance. It acts as a virtual firewall, controlling inbound and outbound traffic based on predefined rules.  Security groups operate based on predefined rules that allow or deny traffic based on specified criteria, such as source IP address, destination IP address, port number, and protocol. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SecurityGroupsApi(configuration);

let body:.SecurityGroupsApiGetSecurityGroupRequest = {
  // number | ID of the security group
  securityGroupId: 1,
};

apiInstance.getSecurityGroup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **securityGroupId** | [**number**] | ID of the security group | defaults to undefined


### Return type

**SecurityGroup**

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

# **getSecurityGroups**
> Array<SecurityGroup> getSecurityGroups()

Returns a list of security groups. A security group refers to a set of rules that determine what network traffic is allowed to enter or leave a particular compute instance. It acts as a virtual firewall, controlling inbound and outbound traffic based on predefined rules. Security groups operate based on predefined rules that allow or deny traffic based on specified criteria, such as source IP address, destination IP address, port number, and protocol. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SecurityGroupsApi(configuration);

let body:any = {};

apiInstance.getSecurityGroups(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<SecurityGroup>**

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

# **securityGroupCreate**
> SecurityGroup securityGroupCreate()

This method creates a security group.  A security group refers to a set of rules that determine what network traffic is allowed to enter or leave a particular compute instance. It acts as a virtual firewall, controlling inbound and outbound traffic based on predefined rules.  Security groups operate based on predefined rules that allow traffic based on specified criteria, such as source IP address, destination IP address, port number, and protocol.  When creating a security group, provide its name and a set of inbound and outbound rules. You can only define rules that allow traffic, not deny it. All traffic is denied except for explicitly allowed traffic.  Security groups control TCP, SCTP, GRE, ESP, AH, UDP, and ICMP protocols, or all the selected protocols at once.  After creating a security group, a set of default rules is added to the security group. These rules are immutable, and you can\'t edit or delete them.  All traffic in the selected protocol is allowed if the IP range in a rule is set to `0.0.0.0/0`. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SecurityGroupsApi(configuration);

let body:.SecurityGroupsApiSecurityGroupCreateRequest = {
  // SecurityGroupRequest (optional)
  securityGroupRequest: {
    name: "new_default",
    rules: [
      {
        direction: "INBOUND",
        protocol: "TCP",
        ports: "1-30321",
        ipRange: "0.0.0.0/0",
      },
    ],
  },
};

apiInstance.securityGroupCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **securityGroupRequest** | **SecurityGroupRequest**|  |


### Return type

**SecurityGroup**

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

# **securityGroupDelete**
> SecurityGroup securityGroupDelete()

This method deletes a security group.  A security group refers to a set of rules that determine what network traffic is allowed to enter or leave a particular compute instance. It acts as a virtual firewall, controlling inbound and outbound traffic based on predefined rules.  Security groups operate based on predefined rules that allow traffic based on specified criteria, such as source IP address, destination IP address, port number, and protocol.  You can\'t delete a security group if any compute instance is using this security group. To delete a security group, first remove a compute instance from the security group using this method: `POST /v1/security-groups/{securityGroupId}/instances` 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SecurityGroupsApi(configuration);

let body:.SecurityGroupsApiSecurityGroupDeleteRequest = {
  // number | ID of the security group
  securityGroupId: 1,
};

apiInstance.securityGroupDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **securityGroupId** | [**number**] | ID of the security group | defaults to undefined


### Return type

**SecurityGroup**

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
**409** | Conflict |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **securityGroupInstanceAdd**
> Vm securityGroupInstanceAdd()

This method adds a compute instance to the selected security group.  A security group refers to a set of rules that determine what network traffic is allowed to enter or leave a particular compute instance. It acts as a virtual firewall, controlling inbound and outbound traffic based on predefined rules.  Security groups operate based on predefined rules that allow traffic based on specified criteria, such as source IP address, destination IP address, port number, and protocol.  Any compute instance always uses some security group since its creation. Adding a compute instance to a security group effectively means moving it from one security group to another. When adding a compute instance to a new security group, it is automatically removed from the previous security group. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SecurityGroupsApi(configuration);

let body:.SecurityGroupsApiSecurityGroupInstanceAddRequest = {
  // number | ID of the security group
  securityGroupId: 1,
  // SecurityGroupInstanceAdd (optional)
  securityGroupInstanceAdd: {
    instanceId: 8003,
  },
};

apiInstance.securityGroupInstanceAdd(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **securityGroupInstanceAdd** | **SecurityGroupInstanceAdd**|  |
 **securityGroupId** | [**number**] | ID of the security group | defaults to undefined


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
**403** | Forbidden |  -  |
**404** | Not found |  -  |
**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **securityGroupInstances**
> Array<Vm> securityGroupInstances()

Returns a list of compute instances using the selected security group.  A security group refers to a set of rules that determine what network traffic is allowed to enter or leave a particular compute instance. It acts as a virtual firewall, controlling inbound and outbound traffic based on predefined rules.  Security groups operate based on predefined rules that allow traffic based on specified criteria, such as source IP address, destination IP address, port number, and protocol. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SecurityGroupsApi(configuration);

let body:.SecurityGroupsApiSecurityGroupInstancesRequest = {
  // number | ID of the security group
  securityGroupId: 1,
};

apiInstance.securityGroupInstances(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **securityGroupId** | [**number**] | ID of the security group | defaults to undefined


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
**403** | Forbidden |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **securityGroupUpdate**
> SecurityGroup securityGroupUpdate()

This method updates a security group.  A security group refers to a set of rules that determine what network traffic is allowed to enter or leave a particular compute instance. It acts as a virtual firewall, controlling inbound and outbound traffic based on predefined rules.  Security groups operate based on predefined rules that allow traffic based on specified criteria, such as source IP address, destination IP address, port number, and protocol.  When editing a security group, you can add and delete the inbound and outbound rules. You can only define rules that allow traffic, not deny it. All traffic is denied except for explicitly allowed traffic.  Security groups control TCP, SCTP, GRE, ESP, AH, UDP, and ICMP protocols, or all the selected protocols at once.  After creating a security group, a set of default rules is added to the security group. These rules are immutable, and you can\'t edit or delete them. When editing a security group, _you should provide the default rules along with any other rules._  All traffic in the selected protocol is allowed if the IP range in a rule is set to `0.0.0.0/0`. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SecurityGroupsApi(configuration);

let body:.SecurityGroupsApiSecurityGroupUpdateRequest = {
  // number | ID of the security group
  securityGroupId: 1,
  // SecurityGroupRequest (optional)
  securityGroupRequest: {
    name: "new_default",
    rules: [
      {
        direction: "INBOUND",
        protocol: "TCP",
        ports: "1-30321",
        ipRange: "0.0.0.0/0",
      },
    ],
  },
};

apiInstance.securityGroupUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **securityGroupRequest** | **SecurityGroupRequest**|  |
 **securityGroupId** | [**number**] | ID of the security group | defaults to undefined


### Return type

**SecurityGroup**

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
**409** | Conflict |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


