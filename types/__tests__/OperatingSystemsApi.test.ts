import { OperatingSystemsApi } from '../OperatingSystemsApi';
import { createConfiguration } from '../../configuration';
import { IsomorphicFetchHttpLibrary, ResponseContext } from '../../http/http';
import { testMiddleware, buildResponseBody, testApiHttpInfo } from '../utils/testHelper';

describe('OperatingSystemsApi', () => {
    let operatingSystemsApi = new OperatingSystemsApi(createConfiguration());
    const headers = { 'content-type': 'application/json' };
    const operatingSystemId = 1;
    const mockOperatingSystem = { id: operatingSystemId, family: 'Simpsons', architecture: 'ARM' };
    const mockOperatingSystems = [{ id: 12 }, { id: 13 }];

    beforeEach(() => {
        jest.clearAllMocks();
        jest.restoreAllMocks();

        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementation(() => {
            const headers = { 'content-type': 'application/json' };
            return Promise.resolve(new ResponseContext(200, headers, buildResponseBody(mockOperatingSystem)));
        });
    });

    it('should get operating system by ID', async () => {
        const response = await operatingSystemsApi.getOperatingSystem(operatingSystemId);
        expect(response).toEqual(mockOperatingSystem);
    });

    it('should get operating system with http info by ID', async () => {
        await testApiHttpInfo(
            () => operatingSystemsApi.getOperatingSystemWithHttpInfo(operatingSystemId),
            mockOperatingSystem
        );
    });

    it('should get list of operating systems', async () => {
        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementation(() => {
            return Promise.resolve(new ResponseContext(200, headers, buildResponseBody(mockOperatingSystems)));
        });

        const response = await operatingSystemsApi.getOperatingSystems();
        expect(response).toEqual(mockOperatingSystems);
    });

    it('should get list of operating systems with http info', async () => {
        jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send').mockImplementation(() => {
            return Promise.resolve(new ResponseContext(200, headers, buildResponseBody(mockOperatingSystems)));
        });

        await testApiHttpInfo(() => operatingSystemsApi.getOperatingSystemsWithHttpInfo(), mockOperatingSystems);
    });

    it('should call middleware pre and post functions', async () => {
        const preMock = jest.fn((ctx) => Promise.resolve(ctx));
        const postMock = jest.fn((rsp) => Promise.resolve(rsp));
        const apiWithMiddleware = new OperatingSystemsApi(
            createConfiguration({ middleware: [{ pre: preMock, post: postMock }] })
        );

        await apiWithMiddleware.getOperatingSystem(operatingSystemId);

        expect(preMock).toHaveBeenCalled();
        expect(postMock).toHaveBeenCalled();
    });

    it('should modify request and response in middleware', async () => {
        const preParams = { type: 'Movie' };
        const postParams = { version: '18.04' };

        await testMiddleware(OperatingSystemsApi, 'getOperatingSystem', mockOperatingSystem, preParams, postParams);
    });
});
