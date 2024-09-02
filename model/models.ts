import localVarRequest from 'request';

export * from './badRequestError';
export * from './conflictError';
export * from './costAnalysisQuery';
export * from './costAnalysisQueryFilters';
export * from './costAnalysisResponse';
export * from './credentials';
export * from './dataCenter';
export * from './forbiddenError';
export * from './getStatisticalData200Response';
export * from './getStatisticalDataRequest';
export * from './getVmConfigs200Response';
export * from './kubernetes';
export * from './kubernetesAutoscalingConfigsInner';
export * from './kubernetesAutoscalingConfigsInnerConfigurationPrioritiesInner';
export * from './kubernetesClusterChangingMetricsQuery';
export * from './kubernetesClusterChangingMetricsQueryFilters';
export * from './kubernetesClusterChangingMetricsResponse';
export * from './kubernetesClusterCurrentStateQuery';
export * from './kubernetesClusterCurrentStateQueryFilters';
export * from './kubernetesClusterCurrentStateResponse';
export * from './kubernetesClusterMetricsQuery';
export * from './kubernetesClusterMetricsQueryFilters';
export * from './kubernetesClusterMetricsResponse';
export * from './kubernetesClusterObjectStatesQuery';
export * from './kubernetesClusterObjectStatesQueryFilters';
export * from './kubernetesClusterObjectStatesResponse';
export * from './kubernetesClusterObjectsQuery';
export * from './kubernetesClusterObjectsResponse';
export * from './kubernetesCost';
export * from './kubernetesCreate';
export * from './kubernetesCreateAutoscalingConfigsInner';
export * from './kubernetesCreateAutoscalingConfigsInnerConfigurationPrioritiesInner';
export * from './kubernetesCreateWorkerNodesInner';
export * from './kubernetesNodeGroupsInner';
export * from './kubernetesNodeGroupsInnerNodesInner';
export * from './kubernetesNodeGroupsInnerNodesInnerCost';
export * from './kubernetesNodeGroupsInnerNodesInnerDataCenter';
export * from './kubernetesNodeGroupsInnerNodesInnerDisksInner';
export * from './kubernetesNodeGroupsInnerNodesInnerLocation';
export * from './kubernetesNodeGroupsInnerNodesInnerNetworksInner';
export * from './kubernetesNodeGroupsInnerNodesInnerOs';
export * from './kubernetesNodeGroupsInnerNodesInnerProvider';
export * from './kubernetesNodeGroupsInnerNodesInnerSecurityGroup';
export * from './kubernetesUpdate';
export * from './kubernetesUpdateWorkerNodesInner';
export * from './location';
export * from './notFoundError';
export * from './operatingSystem';
export * from './pageableObject';
export * from './paginatedResult';
export * from './productStatisticsQuery';
export * from './productStatisticsQueryFilters';
export * from './productStatisticsResponse';
export * from './projectSummaryQuery';
export * from './projectSummaryResponse';
export * from './provider';
export * from './refreshToken';
export * from './resourceAnalysisQuery';
export * from './resourceAnalysisQueryFilters';
export * from './resourceAnalysisResponse';
export * from './securityGroup';
export * from './securityGroupInstanceAdd';
export * from './securityGroupRequest';
export * from './securityGroupRule';
export * from './securityGroupRuleRequest';
export * from './sortObject';
export * from './spotActionsRequest';
export * from './spotCreate';
export * from './spotReboot';
export * from './sshKey';
export * from './sshKeyCreate';
export * from './sshKeyGenerated';
export * from './sshKeyImport';
export * from './sshKeyUpdate';
export * from './sshKeysCreateImport201Response';
export * from './sshKeysCreateImportRequest';
export * from './subnetwork';
export * from './subnetworkCreate';
export * from './subnetworkEdit';
export * from './subnetworkResources';
export * from './tag';
export * from './token';
export * from './unauthorizedError';
export * from './unprocessableEntityError';
export * from './vm';
export * from './vmActionsRequest';
export * from './vmAnalyticsQuery';
export * from './vmAnalyticsResponse';
export * from './vmClone';
export * from './vmConfiguration';
export * from './vmConfigurationCost';
export * from './vmCost';
export * from './vmCreate';
export * from './vmDataCenter';
export * from './vmEditHardware';
export * from './vmLocation';
export * from './vmMonitoringQuery';
export * from './vmMonitoringQueryFilters';
export * from './vmMonitoringResponse';
export * from './vmOs';
export * from './vmProvider';
export * from './vmReboot';
export * from './vmSecurityGroup';
export * from './vmShutdown';
export * from './vmStart';
export * from './vmSubnetwork';
export * from './vmTransfer';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { BadRequestError } from './badRequestError';
import { ConflictError } from './conflictError';
import { CostAnalysisQuery } from './costAnalysisQuery';
import { CostAnalysisQueryFilters } from './costAnalysisQueryFilters';
import { CostAnalysisResponse } from './costAnalysisResponse';
import { Credentials } from './credentials';
import { DataCenter } from './dataCenter';
import { ForbiddenError } from './forbiddenError';
import { GetStatisticalData200Response } from './getStatisticalData200Response';
import { GetStatisticalDataRequest } from './getStatisticalDataRequest';
import { GetVmConfigs200Response } from './getVmConfigs200Response';
import { Kubernetes } from './kubernetes';
import { KubernetesAutoscalingConfigsInner } from './kubernetesAutoscalingConfigsInner';
import { KubernetesAutoscalingConfigsInnerConfigurationPrioritiesInner } from './kubernetesAutoscalingConfigsInnerConfigurationPrioritiesInner';
import { KubernetesClusterChangingMetricsQuery } from './kubernetesClusterChangingMetricsQuery';
import { KubernetesClusterChangingMetricsQueryFilters } from './kubernetesClusterChangingMetricsQueryFilters';
import { KubernetesClusterChangingMetricsResponse } from './kubernetesClusterChangingMetricsResponse';
import { KubernetesClusterCurrentStateQuery } from './kubernetesClusterCurrentStateQuery';
import { KubernetesClusterCurrentStateQueryFilters } from './kubernetesClusterCurrentStateQueryFilters';
import { KubernetesClusterCurrentStateResponse } from './kubernetesClusterCurrentStateResponse';
import { KubernetesClusterMetricsQuery } from './kubernetesClusterMetricsQuery';
import { KubernetesClusterMetricsQueryFilters } from './kubernetesClusterMetricsQueryFilters';
import { KubernetesClusterMetricsResponse } from './kubernetesClusterMetricsResponse';
import { KubernetesClusterObjectStatesQuery } from './kubernetesClusterObjectStatesQuery';
import { KubernetesClusterObjectStatesQueryFilters } from './kubernetesClusterObjectStatesQueryFilters';
import { KubernetesClusterObjectStatesResponse } from './kubernetesClusterObjectStatesResponse';
import { KubernetesClusterObjectsQuery } from './kubernetesClusterObjectsQuery';
import { KubernetesClusterObjectsResponse } from './kubernetesClusterObjectsResponse';
import { KubernetesCost } from './kubernetesCost';
import { KubernetesCreate } from './kubernetesCreate';
import { KubernetesCreateAutoscalingConfigsInner } from './kubernetesCreateAutoscalingConfigsInner';
import { KubernetesCreateAutoscalingConfigsInnerConfigurationPrioritiesInner } from './kubernetesCreateAutoscalingConfigsInnerConfigurationPrioritiesInner';
import { KubernetesCreateWorkerNodesInner } from './kubernetesCreateWorkerNodesInner';
import { KubernetesNodeGroupsInner } from './kubernetesNodeGroupsInner';
import { KubernetesNodeGroupsInnerNodesInner } from './kubernetesNodeGroupsInnerNodesInner';
import { KubernetesNodeGroupsInnerNodesInnerCost } from './kubernetesNodeGroupsInnerNodesInnerCost';
import { KubernetesNodeGroupsInnerNodesInnerDataCenter } from './kubernetesNodeGroupsInnerNodesInnerDataCenter';
import { KubernetesNodeGroupsInnerNodesInnerDisksInner } from './kubernetesNodeGroupsInnerNodesInnerDisksInner';
import { KubernetesNodeGroupsInnerNodesInnerLocation } from './kubernetesNodeGroupsInnerNodesInnerLocation';
import { KubernetesNodeGroupsInnerNodesInnerNetworksInner } from './kubernetesNodeGroupsInnerNodesInnerNetworksInner';
import { KubernetesNodeGroupsInnerNodesInnerOs } from './kubernetesNodeGroupsInnerNodesInnerOs';
import { KubernetesNodeGroupsInnerNodesInnerProvider } from './kubernetesNodeGroupsInnerNodesInnerProvider';
import { KubernetesNodeGroupsInnerNodesInnerSecurityGroup } from './kubernetesNodeGroupsInnerNodesInnerSecurityGroup';
import { KubernetesUpdate } from './kubernetesUpdate';
import { KubernetesUpdateWorkerNodesInner } from './kubernetesUpdateWorkerNodesInner';
import { Location } from './location';
import { NotFoundError } from './notFoundError';
import { OperatingSystem } from './operatingSystem';
import { PageableObject } from './pageableObject';
import { PaginatedResult } from './paginatedResult';
import { ProductStatisticsQuery } from './productStatisticsQuery';
import { ProductStatisticsQueryFilters } from './productStatisticsQueryFilters';
import { ProductStatisticsResponse } from './productStatisticsResponse';
import { ProjectSummaryQuery } from './projectSummaryQuery';
import { ProjectSummaryResponse } from './projectSummaryResponse';
import { Provider } from './provider';
import { RefreshToken } from './refreshToken';
import { ResourceAnalysisQuery } from './resourceAnalysisQuery';
import { ResourceAnalysisQueryFilters } from './resourceAnalysisQueryFilters';
import { ResourceAnalysisResponse } from './resourceAnalysisResponse';
import { SecurityGroup } from './securityGroup';
import { SecurityGroupInstanceAdd } from './securityGroupInstanceAdd';
import { SecurityGroupRequest } from './securityGroupRequest';
import { SecurityGroupRule } from './securityGroupRule';
import { SecurityGroupRuleRequest } from './securityGroupRuleRequest';
import { SortObject } from './sortObject';
import { SpotActionsRequest } from './spotActionsRequest';
import { SpotCreate } from './spotCreate';
import { SpotReboot } from './spotReboot';
import { SshKey } from './sshKey';
import { SshKeyCreate } from './sshKeyCreate';
import { SshKeyGenerated } from './sshKeyGenerated';
import { SshKeyImport } from './sshKeyImport';
import { SshKeyUpdate } from './sshKeyUpdate';
import { SshKeysCreateImport201Response } from './sshKeysCreateImport201Response';
import { SshKeysCreateImportRequest } from './sshKeysCreateImportRequest';
import { Subnetwork } from './subnetwork';
import { SubnetworkCreate } from './subnetworkCreate';
import { SubnetworkEdit } from './subnetworkEdit';
import { SubnetworkResources } from './subnetworkResources';
import { Tag } from './tag';
import { Token } from './token';
import { UnauthorizedError } from './unauthorizedError';
import { UnprocessableEntityError } from './unprocessableEntityError';
import { Vm } from './vm';
import { VmActionsRequest } from './vmActionsRequest';
import { VmAnalyticsQuery } from './vmAnalyticsQuery';
import { VmAnalyticsResponse } from './vmAnalyticsResponse';
import { VmClone } from './vmClone';
import { VmConfiguration } from './vmConfiguration';
import { VmConfigurationCost } from './vmConfigurationCost';
import { VmCost } from './vmCost';
import { VmCreate } from './vmCreate';
import { VmDataCenter } from './vmDataCenter';
import { VmEditHardware } from './vmEditHardware';
import { VmLocation } from './vmLocation';
import { VmMonitoringQuery } from './vmMonitoringQuery';
import { VmMonitoringQueryFilters } from './vmMonitoringQueryFilters';
import { VmMonitoringResponse } from './vmMonitoringResponse';
import { VmOs } from './vmOs';
import { VmProvider } from './vmProvider';
import { VmReboot } from './vmReboot';
import { VmSecurityGroup } from './vmSecurityGroup';
import { VmShutdown } from './vmShutdown';
import { VmStart } from './vmStart';
import { VmSubnetwork } from './vmSubnetwork';
import { VmTransfer } from './vmTransfer';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "CostAnalysisQuery.DatasetNameEnum": CostAnalysisQuery.DatasetNameEnum,
        "CostAnalysisResponse.TypeEnum": CostAnalysisResponse.TypeEnum,
        "GetStatisticalDataRequest.DatasetNameEnum": GetStatisticalDataRequest.DatasetNameEnum,
        "Kubernetes.DeploymentLocationEnum": Kubernetes.DeploymentLocationEnum,
        "KubernetesAutoscalingConfigsInnerConfigurationPrioritiesInner.VCpuTypeEnum": KubernetesAutoscalingConfigsInnerConfigurationPrioritiesInner.VCpuTypeEnum,
        "KubernetesAutoscalingConfigsInnerConfigurationPrioritiesInner.VolumeTypeEnum": KubernetesAutoscalingConfigsInnerConfigurationPrioritiesInner.VolumeTypeEnum,
        "KubernetesAutoscalingConfigsInnerConfigurationPrioritiesInner.PriorityEnum": KubernetesAutoscalingConfigsInnerConfigurationPrioritiesInner.PriorityEnum,
        "KubernetesClusterChangingMetricsQuery.DatasetNameEnum": KubernetesClusterChangingMetricsQuery.DatasetNameEnum,
        "KubernetesClusterChangingMetricsQueryFilters.ObjectTypeEnum": KubernetesClusterChangingMetricsQueryFilters.ObjectTypeEnum,
        "KubernetesClusterChangingMetricsQueryFilters.BreakdownLevelEnum": KubernetesClusterChangingMetricsQueryFilters.BreakdownLevelEnum,
        "KubernetesClusterChangingMetricsQueryFilters.TimespanEnum": KubernetesClusterChangingMetricsQueryFilters.TimespanEnum,
        "KubernetesClusterChangingMetricsQueryFilters.CustomFilterAvgCpuRuleEnum": KubernetesClusterChangingMetricsQueryFilters.CustomFilterAvgCpuRuleEnum,
        "KubernetesClusterChangingMetricsQueryFilters.CustomFilterAvgMemoryRuleEnum": KubernetesClusterChangingMetricsQueryFilters.CustomFilterAvgMemoryRuleEnum,
        "KubernetesClusterChangingMetricsQueryFilters.CustomFilterAvgStorageRuleEnum": KubernetesClusterChangingMetricsQueryFilters.CustomFilterAvgStorageRuleEnum,
        "KubernetesClusterCurrentStateQuery.DatasetNameEnum": KubernetesClusterCurrentStateQuery.DatasetNameEnum,
        "KubernetesClusterCurrentStateQueryFilters.ObjectTypeEnum": KubernetesClusterCurrentStateQueryFilters.ObjectTypeEnum,
        "KubernetesClusterCurrentStateQueryFilters.BreakdownLevelEnum": KubernetesClusterCurrentStateQueryFilters.BreakdownLevelEnum,
        "KubernetesClusterCurrentStateQueryFilters.CustomFilterAvgCpuRuleEnum": KubernetesClusterCurrentStateQueryFilters.CustomFilterAvgCpuRuleEnum,
        "KubernetesClusterCurrentStateQueryFilters.CustomFilterAvgMemoryRuleEnum": KubernetesClusterCurrentStateQueryFilters.CustomFilterAvgMemoryRuleEnum,
        "KubernetesClusterCurrentStateQueryFilters.CustomFilterAvgStorageRuleEnum": KubernetesClusterCurrentStateQueryFilters.CustomFilterAvgStorageRuleEnum,
        "KubernetesClusterMetricsQuery.DatasetNameEnum": KubernetesClusterMetricsQuery.DatasetNameEnum,
        "KubernetesClusterMetricsQueryFilters.ObjectTypeEnum": KubernetesClusterMetricsQueryFilters.ObjectTypeEnum,
        "KubernetesClusterMetricsQueryFilters.BreakdownLevelEnum": KubernetesClusterMetricsQueryFilters.BreakdownLevelEnum,
        "KubernetesClusterObjectStatesQuery.DatasetNameEnum": KubernetesClusterObjectStatesQuery.DatasetNameEnum,
        "KubernetesClusterObjectStatesQueryFilters.ObjectTypeEnum": KubernetesClusterObjectStatesQueryFilters.ObjectTypeEnum,
        "KubernetesClusterObjectStatesQueryFilters.BreakdownLevelEnum": KubernetesClusterObjectStatesQueryFilters.BreakdownLevelEnum,
        "KubernetesClusterObjectsQuery.DatasetNameEnum": KubernetesClusterObjectsQuery.DatasetNameEnum,
        "KubernetesCreate.DeploymentLocationEnum": KubernetesCreate.DeploymentLocationEnum,
        "KubernetesCreateAutoscalingConfigsInnerConfigurationPrioritiesInner.VCpuTypeEnum": KubernetesCreateAutoscalingConfigsInnerConfigurationPrioritiesInner.VCpuTypeEnum,
        "KubernetesCreateAutoscalingConfigsInnerConfigurationPrioritiesInner.VolumeTypeEnum": KubernetesCreateAutoscalingConfigsInnerConfigurationPrioritiesInner.VolumeTypeEnum,
        "KubernetesCreateAutoscalingConfigsInnerConfigurationPrioritiesInner.PriorityEnum": KubernetesCreateAutoscalingConfigsInnerConfigurationPrioritiesInner.PriorityEnum,
        "KubernetesCreateWorkerNodesInner.VCpuTypeEnum": KubernetesCreateWorkerNodesInner.VCpuTypeEnum,
        "KubernetesCreateWorkerNodesInner.VolumeTypeEnum": KubernetesCreateWorkerNodesInner.VolumeTypeEnum,
        "KubernetesNodeGroupsInnerNodesInner.StatusEnum": KubernetesNodeGroupsInnerNodesInner.StatusEnum,
        "KubernetesNodeGroupsInnerNodesInner.VCpuTypeEnum": KubernetesNodeGroupsInnerNodesInner.VCpuTypeEnum,
        "KubernetesNodeGroupsInnerNodesInner.CloudNetworkTypeEnum": KubernetesNodeGroupsInnerNodesInner.CloudNetworkTypeEnum,
        "KubernetesUpdateWorkerNodesInner.VCpuTypeEnum": KubernetesUpdateWorkerNodesInner.VCpuTypeEnum,
        "KubernetesUpdateWorkerNodesInner.VolumeTypeEnum": KubernetesUpdateWorkerNodesInner.VolumeTypeEnum,
        "ProductStatisticsQuery.DatasetNameEnum": ProductStatisticsQuery.DatasetNameEnum,
        "ProductStatisticsQueryFilters.ServiceFilterEnum": ProductStatisticsQueryFilters.ServiceFilterEnum,
        "ProductStatisticsResponse.EmptyValueEnum": ProductStatisticsResponse.EmptyValueEnum,
        "ProjectSummaryQuery.DatasetNameEnum": ProjectSummaryQuery.DatasetNameEnum,
        "ResourceAnalysisQuery.DatasetNameEnum": ResourceAnalysisQuery.DatasetNameEnum,
        "ResourceAnalysisResponse.TypeEnum": ResourceAnalysisResponse.TypeEnum,
        "SecurityGroup.SynchronizationStatusEnum": SecurityGroup.SynchronizationStatusEnum,
        "SecurityGroup.RecomposingStatusEnum": SecurityGroup.RecomposingStatusEnum,
        "SecurityGroupRuleRequest.DirectionEnum": SecurityGroupRuleRequest.DirectionEnum,
        "SecurityGroupRuleRequest.ProtocolEnum": SecurityGroupRuleRequest.ProtocolEnum,
        "SpotActionsRequest.ActionEnum": SpotActionsRequest.ActionEnum,
        "SpotCreate.CloudNetworkTypeEnum": SpotCreate.CloudNetworkTypeEnum,
        "SpotCreate.VCpuTypeEnum": SpotCreate.VCpuTypeEnum,
        "SpotCreate.VolumeTypeEnum": SpotCreate.VolumeTypeEnum,
        "SpotReboot.ActionEnum": SpotReboot.ActionEnum,
        "SshKeyCreate.KeyTypeEnum": SshKeyCreate.KeyTypeEnum,
        "SshKeysCreateImportRequest.KeyTypeEnum": SshKeysCreateImportRequest.KeyTypeEnum,
        "Vm.StatusEnum": Vm.StatusEnum,
        "Vm.VCpuTypeEnum": Vm.VCpuTypeEnum,
        "Vm.CloudNetworkTypeEnum": Vm.CloudNetworkTypeEnum,
        "VmActionsRequest.ActionEnum": VmActionsRequest.ActionEnum,
        "VmActionsRequest.VCpuTypeEnum": VmActionsRequest.VCpuTypeEnum,
        "VmAnalyticsQuery.DatasetNameEnum": VmAnalyticsQuery.DatasetNameEnum,
        "VmAnalyticsResponse.TypeEnum": VmAnalyticsResponse.TypeEnum,
        "VmClone.ActionEnum": VmClone.ActionEnum,
        "VmCreate.CloudNetworkTypeEnum": VmCreate.CloudNetworkTypeEnum,
        "VmCreate.VCpuTypeEnum": VmCreate.VCpuTypeEnum,
        "VmCreate.VolumeTypeEnum": VmCreate.VolumeTypeEnum,
        "VmEditHardware.ActionEnum": VmEditHardware.ActionEnum,
        "VmEditHardware.VCpuTypeEnum": VmEditHardware.VCpuTypeEnum,
        "VmMonitoringQuery.DatasetNameEnum": VmMonitoringQuery.DatasetNameEnum,
        "VmMonitoringQueryFilters.PeriodEnum": VmMonitoringQueryFilters.PeriodEnum,
        "VmReboot.ActionEnum": VmReboot.ActionEnum,
        "VmShutdown.ActionEnum": VmShutdown.ActionEnum,
        "VmStart.ActionEnum": VmStart.ActionEnum,
        "VmTransfer.ActionEnum": VmTransfer.ActionEnum,
}

let typeMap: {[index: string]: any} = {
    "BadRequestError": BadRequestError,
    "ConflictError": ConflictError,
    "CostAnalysisQuery": CostAnalysisQuery,
    "CostAnalysisQueryFilters": CostAnalysisQueryFilters,
    "CostAnalysisResponse": CostAnalysisResponse,
    "Credentials": Credentials,
    "DataCenter": DataCenter,
    "ForbiddenError": ForbiddenError,
    "GetStatisticalData200Response": GetStatisticalData200Response,
    "GetStatisticalDataRequest": GetStatisticalDataRequest,
    "GetVmConfigs200Response": GetVmConfigs200Response,
    "Kubernetes": Kubernetes,
    "KubernetesAutoscalingConfigsInner": KubernetesAutoscalingConfigsInner,
    "KubernetesAutoscalingConfigsInnerConfigurationPrioritiesInner": KubernetesAutoscalingConfigsInnerConfigurationPrioritiesInner,
    "KubernetesClusterChangingMetricsQuery": KubernetesClusterChangingMetricsQuery,
    "KubernetesClusterChangingMetricsQueryFilters": KubernetesClusterChangingMetricsQueryFilters,
    "KubernetesClusterChangingMetricsResponse": KubernetesClusterChangingMetricsResponse,
    "KubernetesClusterCurrentStateQuery": KubernetesClusterCurrentStateQuery,
    "KubernetesClusterCurrentStateQueryFilters": KubernetesClusterCurrentStateQueryFilters,
    "KubernetesClusterCurrentStateResponse": KubernetesClusterCurrentStateResponse,
    "KubernetesClusterMetricsQuery": KubernetesClusterMetricsQuery,
    "KubernetesClusterMetricsQueryFilters": KubernetesClusterMetricsQueryFilters,
    "KubernetesClusterMetricsResponse": KubernetesClusterMetricsResponse,
    "KubernetesClusterObjectStatesQuery": KubernetesClusterObjectStatesQuery,
    "KubernetesClusterObjectStatesQueryFilters": KubernetesClusterObjectStatesQueryFilters,
    "KubernetesClusterObjectStatesResponse": KubernetesClusterObjectStatesResponse,
    "KubernetesClusterObjectsQuery": KubernetesClusterObjectsQuery,
    "KubernetesClusterObjectsResponse": KubernetesClusterObjectsResponse,
    "KubernetesCost": KubernetesCost,
    "KubernetesCreate": KubernetesCreate,
    "KubernetesCreateAutoscalingConfigsInner": KubernetesCreateAutoscalingConfigsInner,
    "KubernetesCreateAutoscalingConfigsInnerConfigurationPrioritiesInner": KubernetesCreateAutoscalingConfigsInnerConfigurationPrioritiesInner,
    "KubernetesCreateWorkerNodesInner": KubernetesCreateWorkerNodesInner,
    "KubernetesNodeGroupsInner": KubernetesNodeGroupsInner,
    "KubernetesNodeGroupsInnerNodesInner": KubernetesNodeGroupsInnerNodesInner,
    "KubernetesNodeGroupsInnerNodesInnerCost": KubernetesNodeGroupsInnerNodesInnerCost,
    "KubernetesNodeGroupsInnerNodesInnerDataCenter": KubernetesNodeGroupsInnerNodesInnerDataCenter,
    "KubernetesNodeGroupsInnerNodesInnerDisksInner": KubernetesNodeGroupsInnerNodesInnerDisksInner,
    "KubernetesNodeGroupsInnerNodesInnerLocation": KubernetesNodeGroupsInnerNodesInnerLocation,
    "KubernetesNodeGroupsInnerNodesInnerNetworksInner": KubernetesNodeGroupsInnerNodesInnerNetworksInner,
    "KubernetesNodeGroupsInnerNodesInnerOs": KubernetesNodeGroupsInnerNodesInnerOs,
    "KubernetesNodeGroupsInnerNodesInnerProvider": KubernetesNodeGroupsInnerNodesInnerProvider,
    "KubernetesNodeGroupsInnerNodesInnerSecurityGroup": KubernetesNodeGroupsInnerNodesInnerSecurityGroup,
    "KubernetesUpdate": KubernetesUpdate,
    "KubernetesUpdateWorkerNodesInner": KubernetesUpdateWorkerNodesInner,
    "Location": Location,
    "NotFoundError": NotFoundError,
    "OperatingSystem": OperatingSystem,
    "PageableObject": PageableObject,
    "PaginatedResult": PaginatedResult,
    "ProductStatisticsQuery": ProductStatisticsQuery,
    "ProductStatisticsQueryFilters": ProductStatisticsQueryFilters,
    "ProductStatisticsResponse": ProductStatisticsResponse,
    "ProjectSummaryQuery": ProjectSummaryQuery,
    "ProjectSummaryResponse": ProjectSummaryResponse,
    "Provider": Provider,
    "RefreshToken": RefreshToken,
    "ResourceAnalysisQuery": ResourceAnalysisQuery,
    "ResourceAnalysisQueryFilters": ResourceAnalysisQueryFilters,
    "ResourceAnalysisResponse": ResourceAnalysisResponse,
    "SecurityGroup": SecurityGroup,
    "SecurityGroupInstanceAdd": SecurityGroupInstanceAdd,
    "SecurityGroupRequest": SecurityGroupRequest,
    "SecurityGroupRule": SecurityGroupRule,
    "SecurityGroupRuleRequest": SecurityGroupRuleRequest,
    "SortObject": SortObject,
    "SpotActionsRequest": SpotActionsRequest,
    "SpotCreate": SpotCreate,
    "SpotReboot": SpotReboot,
    "SshKey": SshKey,
    "SshKeyCreate": SshKeyCreate,
    "SshKeyGenerated": SshKeyGenerated,
    "SshKeyImport": SshKeyImport,
    "SshKeyUpdate": SshKeyUpdate,
    "SshKeysCreateImport201Response": SshKeysCreateImport201Response,
    "SshKeysCreateImportRequest": SshKeysCreateImportRequest,
    "Subnetwork": Subnetwork,
    "SubnetworkCreate": SubnetworkCreate,
    "SubnetworkEdit": SubnetworkEdit,
    "SubnetworkResources": SubnetworkResources,
    "Tag": Tag,
    "Token": Token,
    "UnauthorizedError": UnauthorizedError,
    "UnprocessableEntityError": UnprocessableEntityError,
    "Vm": Vm,
    "VmActionsRequest": VmActionsRequest,
    "VmAnalyticsQuery": VmAnalyticsQuery,
    "VmAnalyticsResponse": VmAnalyticsResponse,
    "VmClone": VmClone,
    "VmConfiguration": VmConfiguration,
    "VmConfigurationCost": VmConfigurationCost,
    "VmCost": VmCost,
    "VmCreate": VmCreate,
    "VmDataCenter": VmDataCenter,
    "VmEditHardware": VmEditHardware,
    "VmLocation": VmLocation,
    "VmMonitoringQuery": VmMonitoringQuery,
    "VmMonitoringQueryFilters": VmMonitoringQueryFilters,
    "VmMonitoringResponse": VmMonitoringResponse,
    "VmOs": VmOs,
    "VmProvider": VmProvider,
    "VmReboot": VmReboot,
    "VmSecurityGroup": VmSecurityGroup,
    "VmShutdown": VmShutdown,
    "VmStart": VmStart,
    "VmSubnetwork": VmSubnetwork,
    "VmTransfer": VmTransfer,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
