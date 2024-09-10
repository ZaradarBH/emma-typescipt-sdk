import { createConfiguration } from '../../configuration';
import { IsomorphicFetchHttpLibrary } from '../../http/isomorphic-fetch';

export const extendJsonString = (str: string, data: object) => {
    const asJson = JSON.parse(str);
    return JSON.stringify({ ...asJson, ...data });
};

export const buildResponseBody = (data: Object) => ({
    text: () => Promise.resolve(JSON.stringify(data)),
    binary: () => Promise.resolve(new Blob()),
});

export const testApiHttpInfo = async (getWithHttp: Function, testBody: object, status: number = 200) => {
    const response = await getWithHttp();
    expect(response).toBeDefined();
    expect(response.httpStatusCode).toBe(status);
    const bodyText = await response.body.text();
    expect(bodyText).toEqual(JSON.stringify(testBody));
};

type Constructor<T = {}> = new (...args: any[]) => T;

export const testMiddleware = async (
    ApiConstructor: Constructor,
    functionName: string,
    testBody: object,
    preParams: object,
    postParams: object
) => {
    const sendSpy = jest.spyOn(IsomorphicFetchHttpLibrary.prototype, 'send');

    const preMock = jest.fn((ctx) => {
        ctx.body = preParams;
        return Promise.resolve(ctx);
    });
    const postMock = jest.fn((rsp) => {
        return rsp.body.text().then((bodyText: any) => {
            rsp.body = {
                text: async () => extendJsonString(bodyText, postParams),
            };
            return rsp;
        });
    });

    const apiWithMiddleware = new ApiConstructor(
        createConfiguration({ middleware: [{ pre: preMock, post: postMock }] })
    );

    // @ts-ignore
    const response = await apiWithMiddleware[functionName](1);

    expect(preMock).toHaveBeenCalled();
    expect(postMock).toHaveBeenCalled();
    expect(response).toEqual({ ...testBody, ...postParams });

    const callArgs = sendSpy.mock.calls[0][0];
    expect(callArgs.getBody()).toEqual(preParams);
};
