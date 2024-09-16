import { OperatingSystemsApi } from '../operatingSystemsApi';
import nock from 'nock';
import { OperatingSystem } from '../../model/operatingSystem';
import http from 'http';

describe('OperatingSystemsApi', () => {
    let api: OperatingSystemsApi;
    const basePath = 'https://api.emma.ms/external';
    const headers = { 'content-type': 'application/json' };
    const operatingSystemId = 1;
    const mockOperatingSystem: OperatingSystem = {
        id: 33,
        type: 'Linux',
        version: '18.04',
        architecture: 'x86_64',
    };
    const mockOperatingSystems: OperatingSystem[] = [
        { id: 1, type: 'Linux', version: '18.04', architecture: 'ARM' },
        { id: 2, type: 'Windows', version: '10', architecture: 'RISC' },
    ];

    beforeEach(() => {
        api = new OperatingSystemsApi();
        nock.cleanAll();
    });

    it('should fetch operating system by ID successfully', async () => {
        nock(basePath).get(`/v1/operating-systems/${operatingSystemId}`).reply(200, mockOperatingSystem, headers);

        const response = await api.getOperatingSystem(operatingSystemId);
        expect(response.body).toEqual(mockOperatingSystem);
    });

    it('should handle error in get operating system by ID', async () => {
        nock(basePath).get(`/v1/operating-systems/${operatingSystemId}`).replyWithError('Network Error');

        await expect(api.getOperatingSystem(operatingSystemId)).rejects.toThrow('Network Error');
    });

    it('should fetch list of operating systems successfully', async () => {
        nock(basePath).get('/v1/operating-systems').reply(200, mockOperatingSystems, headers);

        const response = await api.getOperatingSystems();
        expect(response.body).toEqual(mockOperatingSystems);
    });

    it('should handle error in get list of operating systems', async () => {
        nock(basePath).get('/v1/operating-systems').replyWithError('Network Error');

        await expect(api.getOperatingSystems()).rejects.toThrow('Network Error');
    });
});
