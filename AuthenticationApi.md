# .AuthenticationApi

All URIs are relative to *https://api.emma.ms/external*

Method | HTTP request | Description
------------- | ------------- | -------------
[**issueToken**](AuthenticationApi.md#issueToken) | **POST** /v1/issue-token | Issue token
[**refreshToken**](AuthenticationApi.md#refreshToken) | **POST** /v1/refresh-token | Refresh token


# **issueToken**
> Token issueToken()

Returns an access token and a refresh token for this API. The bearer access token enables you to get access and send requests to the endpoints in this API.  To get the tokens, you need to send a Client ID and a Client Secret, which you can obtain from the Service application in your project. First, create a Service app in your project (Project -> Settings -> Service apps).  To manage access rights to the API, select an appropriate access level for your app when creating the service app - **Read**, **Operate,** or **Manage**.  The Bearer access token is a text string, included in the request header, for example:  ``` curl -X GET https://api.emma.ms/external/v1/locations -H \"Authorization: Bearer YOUR-ACCESS-TOKEN-HERE\" ``` 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthenticationApi(configuration);

let body:.AuthenticationApiIssueTokenRequest = {
  // Credentials (optional)
  credentials: {
    clientId: "ad6f8c5c-223f-4102-8664-8044b84864e2",
    clientSecret: "e0eb8a09-b7fe-4acc-a72b-79ce0dd26068",
  },
};

apiInstance.issueToken(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credentials** | **Credentials**|  |


### Return type

**Token**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **refreshToken**
> Token refreshToken()

Returns an access token for this API using a refresh token. The refresh token enables you to get a new access token (when it is expired) without needing the Client ID and Client Secret. To get the access token, you need to send the refresh token in the payload. You can obtain the refresh token from the `/v1/issue-token` endpoint. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthenticationApi(configuration);

let body:.AuthenticationApiRefreshTokenRequest = {
  // RefreshToken (optional)
  refreshToken: {
    refreshToken: "ad6f8c5js6dkj;s43dv3jljhf9fxej4236235tgdgrthreth8044b84864e2",
  },
};

apiInstance.refreshToken(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **refreshToken** | **RefreshToken**|  |


### Return type

**Token**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


