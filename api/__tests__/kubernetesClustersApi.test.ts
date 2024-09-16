import { KubernetesClustersApi } from '../kubernetesClustersApi';
import nock from 'nock';
import { Kubernetes } from '../../model/kubernetes';
import DeploymentLocationEnum = Kubernetes.DeploymentLocationEnum;
import { KubernetesAutoscalingConfigsInnerConfigurationPrioritiesInner } from '../../model/kubernetesAutoscalingConfigsInnerConfigurationPrioritiesInner';
import VolumeTypeEnum = KubernetesAutoscalingConfigsInnerConfigurationPrioritiesInner.VolumeTypeEnum;
import { KubernetesCreateAutoscalingConfigsInnerConfigurationPrioritiesInner } from '../../model/kubernetesCreateAutoscalingConfigsInnerConfigurationPrioritiesInner';
import VCpuTypeEnum = KubernetesCreateAutoscalingConfigsInnerConfigurationPrioritiesInner.VCpuTypeEnum;

describe('KubernetesClustersApi', () => {
    let api: KubernetesClustersApi;
    const basePath = 'https://api.emma.ms/external';
    const headers = { 'content-type': 'application/json' };
    const kubernetesId = 123;
    const mockKubernetesCluster = { id: 123, name: 'Test Kubernetes Cluster' };
    const mockKubernetesClusters = [
        { id: 123, name: 'Test Kubernetes Cluster 1' },
        { id: 456, name: 'Test Kubernetes Cluster 2' },
    ];

    const workerNodes = [
        {
            id: 1,
            name: 'Worker Node 1',
            dataCenterId: 'dc1',
            vCpuType: VCpuTypeEnum.Standard,
            vCpu: 4,
            ramGb: 16,
            volumeGb: 100,
            volumeType: VolumeTypeEnum.SsdPlus,
        },
    ];

    const kubernetesCreate = {
        name: 'New Kubernetes Cluster',
        deploymentLocation: DeploymentLocationEnum.Eu,
        workerNodes,
    };

    beforeEach(() => {
        api = new KubernetesClustersApi();
        nock.cleanAll();
    });

    it('should fetch Kubernetes cluster by ID successfully', async () => {
        nock(basePath).get(`/v1/kubernetes/${kubernetesId}`).reply(200, mockKubernetesCluster, headers);

        const response = await api.getKubernetesCluster(kubernetesId);
        expect(response.body).toEqual(mockKubernetesCluster);
    });

    it('should handle error in get Kubernetes cluster by ID', async () => {
        nock(basePath).get(`/v1/kubernetes/${kubernetesId}`).replyWithError('Network Error');

        await expect(api.getKubernetesCluster(kubernetesId)).rejects.toThrow('Network Error');
    });

    it('should fetch list of Kubernetes clusters successfully', async () => {
        nock(basePath).get('/v1/kubernetes').reply(200, mockKubernetesClusters, headers);

        const response = await api.getKubernetesClusters();
        expect(response.body).toEqual(mockKubernetesClusters);
    });

    it('should handle error in get list of Kubernetes clusters', async () => {
        nock(basePath).get('/v1/kubernetes').replyWithError('Network Error');

        await expect(api.getKubernetesClusters()).rejects.toThrow('Network Error');
    });

    it('should create a Kubernetes cluster successfully', async () => {
        const expectedResponse = [
            {
                id: 123,
                name: 'Test Kubernetes Cluster',
            },
        ];
        nock(basePath).post('/v1/kubernetes').reply(201, expectedResponse, headers);

        const response = await api.createKubernetesCluster(kubernetesCreate);
        expect(response.body).toEqual(expectedResponse);
    });

    it('should handle error in create Kubernetes cluster', async () => {
        nock(basePath).post('/v1/kubernetes').replyWithError('Network Error');

        await expect(api.createKubernetesCluster(kubernetesCreate)).rejects.toThrow('Network Error');
    });

    it('should delete a Kubernetes cluster successfully', async () => {
        nock(basePath).delete(`/v1/kubernetes/${kubernetesId}`).reply(200, mockKubernetesCluster, headers);

        const response = await api.deleteKubernetesCluster(kubernetesId);
        expect(response.body).toEqual(mockKubernetesCluster);
    });

    it('should handle error in delete Kubernetes cluster', async () => {
        nock(basePath).delete(`/v1/kubernetes/${kubernetesId}`).replyWithError('Network Error');

        await expect(api.deleteKubernetesCluster(kubernetesId)).rejects.toThrow('Network Error');
    });

    it('should edit a Kubernetes cluster successfully', async () => {
        const kubernetesUpdate = {
            name: 'Updated Kubernetes Cluster',
            workerNodes,
        };
        nock(basePath).put(`/v1/kubernetes/${kubernetesId}`).reply(200, mockKubernetesCluster, headers);

        const response = await api.editKubernetesCluster(kubernetesId, kubernetesUpdate);
        expect(response.body).toEqual(mockKubernetesCluster);
    });

    it('should handle error in edit Kubernetes cluster', async () => {
        const kubernetesUpdate = {
            name: 'Updated Kubernetes Cluster',
            workerNodes,
        };
        nock(basePath).put(`/v1/kubernetes/${kubernetesId}`).replyWithError('Network Error');

        await expect(api.editKubernetesCluster(kubernetesId, kubernetesUpdate)).rejects.toThrow('Network Error');
    });
});
