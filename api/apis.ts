export * from './authenticationApi';
import { AuthenticationApi } from './authenticationApi';
export * from './computeInstancesConfigurationsApi';
import { ComputeInstancesConfigurationsApi } from './computeInstancesConfigurationsApi';
export * from './dataCentersApi';
import { DataCentersApi } from './dataCentersApi';
export * from './kubernetesClustersApi';
import { KubernetesClustersApi } from './kubernetesClustersApi';
export * from './locationsApi';
import { LocationsApi } from './locationsApi';
export * from './operatingSystemsApi';
import { OperatingSystemsApi } from './operatingSystemsApi';
export * from './providersApi';
import { ProvidersApi } from './providersApi';
export * from './sSHKeysApi';
import { SSHKeysApi } from './sSHKeysApi';
export * from './securityGroupsApi';
import { SecurityGroupsApi } from './securityGroupsApi';
export * from './spotInstancesApi';
import { SpotInstancesApi } from './spotInstancesApi';
export * from './statisticsApi';
import { StatisticsApi } from './statisticsApi';
export * from './subnetworksApi';
import { SubnetworksApi } from './subnetworksApi';
export * from './virtualMachinesApi';
import { VirtualMachinesApi } from './virtualMachinesApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [AuthenticationApi, ComputeInstancesConfigurationsApi, DataCentersApi, KubernetesClustersApi, LocationsApi, OperatingSystemsApi, ProvidersApi, SSHKeysApi, SecurityGroupsApi, SpotInstancesApi, StatisticsApi, SubnetworksApi, VirtualMachinesApi];
