import { SubnetworksApi } from '../subnetworksApi';
import nock from 'nock';

describe('SubnetworksApi', () => {
    let api: SubnetworksApi;
    const basePath = 'https://api.emma.ms/external';
    const headers = { 'content-type': 'application/json' };
    const subnetworkId = '1';
    const mockSubnetwork = { id: '1', name: 'Test Subnetwork' };
    const mockSubnetworkCreate = {
        name: 'Test name',
        dataCenterId: 'string ids are fine',
        subnetworkPrefix: 'prefix',
        subnetworkSize: 512,
    };
    const mockSubnetworkEdit = { name: 'Updated Subnetwork' };

    beforeEach(() => {
        api = new SubnetworksApi();
        nock.cleanAll();
    });

    it('should fetch list of subnetworks successfully', async () => {
        nock(basePath).get('/v1/subnetworks').reply(200, [mockSubnetwork], headers);

        const response = await api.v1SubnetworksGet();
        expect(response.body).toEqual([mockSubnetwork]);
    });

    it('should handle error in fetch list of subnetworks', async () => {
        nock(basePath).get('/v1/subnetworks').replyWithError('Network Error');

        await expect(api.v1SubnetworksGet()).rejects.toThrow('Network Error');
    });

    it('should create subnetwork successfully', async () => {
        nock(basePath).post('/v1/subnetworks').reply(201, mockSubnetwork, headers);

        const response = await api.v1SubnetworksPost(mockSubnetworkCreate);
        expect(response.body).toEqual(mockSubnetwork);
    });

    it('should handle error in create subnetwork', async () => {
        nock(basePath).post('/v1/subnetworks').replyWithError('Network Error');

        await expect(api.v1SubnetworksPost(mockSubnetworkCreate)).rejects.toThrow('Network Error');
    });

    it('should fetch subnetwork by ID successfully', async () => {
        nock(basePath).get(`/v1/subnetworks/${subnetworkId}`).reply(200, mockSubnetwork, headers);

        const response = await api.v1SubnetworksSubnetworkIdGet(subnetworkId);
        expect(response.body).toEqual(mockSubnetwork);
    });

    it('should handle error in fetch subnetwork by ID', async () => {
        nock(basePath).get(`/v1/subnetworks/${subnetworkId}`).replyWithError('Network Error');

        await expect(api.v1SubnetworksSubnetworkIdGet(subnetworkId)).rejects.toThrow('Network Error');
    });

    it('should update subnetwork successfully', async () => {
        nock(basePath).put(`/v1/subnetworks/${subnetworkId}`).reply(200, mockSubnetwork, headers);

        const response = await api.v1SubnetworksSubnetworkIdPut(subnetworkId, mockSubnetworkEdit);
        expect(response.body).toEqual(mockSubnetwork);
    });

    it('should handle error in update subnetwork', async () => {
        nock(basePath).put(`/v1/subnetworks/${subnetworkId}`).replyWithError('Network Error');

        await expect(api.v1SubnetworksSubnetworkIdPut(subnetworkId, mockSubnetworkEdit)).rejects.toThrow(
            'Network Error'
        );
    });

    it('should delete subnetwork successfully', async () => {
        nock(basePath).delete(`/v1/subnetworks/${subnetworkId}`).reply(204, {}, headers);

        const response = await api.v1SubnetworksSubnetworkIdDelete(subnetworkId);
        expect(response.response.statusCode).toBe(204);
    });

    it('should handle error in delete subnetwork', async () => {
        nock(basePath).delete(`/v1/subnetworks/${subnetworkId}`).replyWithError('Network Error');

        await expect(api.v1SubnetworksSubnetworkIdDelete(subnetworkId)).rejects.toThrow('Network Error');
    });
});
