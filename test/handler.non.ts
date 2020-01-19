import { handler } from '../src';
import { expect } from 'chai';
import * as sinon from 'sinon';
import 'mocha';
import moment from 'moment';

describe('handler', () => {
  let dummyEvent = {
    headers: {},
    body: null,
    multiValueHeaders: {},
    httpMethod: 'GET',
    isBase64Encoded: false,
    path: 'xx',
    pathParameters: null,
    queryStringParameters: null,
    multiValueQueryStringParameters: null,
    stageVariables: null,
    requestContext: {
      accountId: '',
      apiId: '',
      connectedAt: 100,
      httpMethod: 'GET',
      identity: {
        accessKey: null,
        accountId: null,
        apiKey: null,
        apiKeyId: null,
        caller: null,
        cognitoAuthenticationProvider: null,
        cognitoAuthenticationType: null,
        cognitoIdentityId: null,
        cognitoIdentityPoolId: null,
        sourceIp: '10.10.10.10',
        user: null,
        userAgent: null,
        userArn: null,
      },
      path: 'xx',
      stage: 'test',
      requestId: 'id',
      requestTimeEpoch: 123,
      resourceId: 'a',
      resourcePath: 'xxx',
    },
    resource: '',
  };

  before(function() {
    this.clock = sinon.useFakeTimers(new Date(2012, 1, 10).getTime());
  });

  after(function() {
    this.clock.restore();
  });

  it('should return 200 always!', async () => {
    const result = await handler(dummyEvent);
    expect(result).to.be.deep.equal({
      statusCode: 200,
      body: moment()
        .utc()
        .toISOString(),
    });

    // handler(null, null, (error: Error, result: any) => {

    // });
  });
});
