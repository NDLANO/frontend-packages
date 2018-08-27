/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* eslint-env jest */

import 'isomorphic-fetch';
import nock from 'nock';
import ErrorReporter from '../index';

const state = {
  data: 'test state',
};
const errorReporter = ErrorReporter.getInstance({
  logglyApiKey: '1223',
  environment: 'unittest',
  componentName: 'ndla-frontend',
  store: { getState: () => state },
  ignoreUrls: [/https:\/\/.*\.hotjar.com.*/, 'https://example.com/script.js'],
});

test('ndla-error-reporter/ErrorReporter is singleton', () => {
  expect(errorReporter).toBe(ErrorReporter.getInstance());
});

test('ndla-error-reporter/ErrorReporter can capture message', () => {
  const apiMock = nock('http://loggly-mock-api')
    .post('/inputs/1223/', {
      level: 'info',
      text: 'Log message',
      sessionId: /.*/,
      appName: 'unittest/ndla-frontend',
      userAgent: /Mozilla.+/,
    })
    .reply(200);

  errorReporter.captureMessage('Log message');

  apiMock.done();
});

test('ndla-error-reporter/ErrorReporter can capture warning', () => {
  const apiMock = nock('http://loggly-mock-api')
    .post('/inputs/1223/', body => {
      expect(body).toMatchObject({
        level: 'warning',
        text: 'Error: Some generic warning',
        stackInfo: {
          name: 'Error',
        },
        appName: 'unittest/ndla-frontend',
      });
      return true;
    })
    .reply(200);

  errorReporter.captureWarning(new Error('Some generic warning'));

  apiMock.done();
});

test('ndla-error-reporter/ErrorReporter can capture error', () => {
  const apiMock = nock('http://loggly-mock-api')
    .post('/inputs/1223/', body => {
      expect(body).toMatchObject({
        level: 'error',
        text: 'Error: Some generic error',
        stackInfo: {
          name: 'Error',
        },
        appName: 'unittest/ndla-frontend',
      });
      return true;
    })
    .reply(200);

  errorReporter.captureError(new Error('Some generic error'));

  apiMock.done();
});

test('ndla-error-reporter/ErrorReporter can capture error with additional info', () => {
  const apiMock = nock('http://loggly-mock-api')
    .post('/inputs/1223/', body => {
      expect(body).toMatchObject({
        level: 'error',
        text: 'Error: Some other generic error',
        from: 'unittest',
      });
      return true;
    })
    .reply(200);

  errorReporter.captureError(new Error('Some other generic error'), {
    from: 'unittest',
  });

  apiMock.done();
});

test('ndla-error-reporter/ErrorReporter captures onerror calls and sends error to loggly', () => {
  const apiMock = nock('http://loggly-mock-api')
    .post('/inputs/1223/', body => {
      expect(body).toMatchObject({
        level: 'error',
        text: 'ReferenceError: someUndefinedFunction is not defined',
        stackInfo: {
          name: 'ReferenceError',
          message: 'someUndefinedFunction is not defined',
        },
        appName: 'unittest/ndla-frontend',
        state: { data: 'test state' },
      });
      return true;
    })
    .reply(200);

  // simmulate on error call
  try {
    someUndefinedFunction(); // eslint-disable-line no-undef
  } catch (e) {
    window.onerror.call(
      window,
      e.toString(),
      document.location.toString(),
      58,
      4,
      e,
    );
  }

  apiMock.done();
});

test('ndla-error-reporter/ErrorReporter should not send duplicate errors ', () => {
  const apiMock = nock('http://loggly-mock-api')
    .post('/inputs/1223/', body => {
      expect(body).toMatchObject({
        text: "TypeError: Cannot set property 'foo' of null",
      });
      return true;
    })
    .reply(200);

  // simmulate several duplicate on error calls
  try {
    const someVal = null;
    someVal.foo = 1;
  } catch (e) {
    window.onerror.call(
      window,
      e.toString(),
      document.location.toString(),
      58,
      4,
      e,
    );
    window.onerror.call(
      window,
      e.toString(),
      document.location.toString(),
      58,
      4,
      e,
    );
    window.onerror.call(
      window,
      e.toString(),
      document.location.toString(),
      58,
      4,
      e,
    );
  }

  apiMock.done();
});

test('ndla-error-reporter/ErrorReporter should not send more then 10 messages', () => {
  errorReporter.refresh();

  const apiMock = nock('http://loggly-mock-api')
    .post('/inputs/1223/', body => {
      expect(body).toMatchObject({
        text: 'Log message',
      });
      return true;
    })
    .times(10)
    .reply(200);

  for (let i = 0; i < 15; i += 1) {
    errorReporter.captureMessage('Log message');
  }

  apiMock.done();
  errorReporter.refresh();
});

test('ndla-error-reporter/ErrorReporter should ignore script errors', () => {
  const apiMock = nock('http://loggly-mock-api')
    .post('/inputs/1223/', () => true)
    .reply(200);

  window.onerror.call(
    window,
    'Script error.',
    document.location.toString(),
    0,
    0,
  );

  // hack to check that no api calls was made
  expect(apiMock.isDone()).toBe(false);
  nock.cleanAll();
});

test('ndla-error-reporter/ErrorReporter should ignore provided urls', () => {
  const apiMock = nock('http://loggly-mock-api')
    .post('/inputs/1223/', () => true)
    .reply(200);

  window.onerror.call(
    window,
    'Some error',
    'https://cdn.hotjar.com/some/path/to/script.js',
    0,
    0,
  );
  // hack to check that no api calls was made
  expect(apiMock.isDone()).toBe(false);

  window.onerror.call(
    window,
    'Some error',
    'https://example.com/script.js',
    0,
    0,
  );

  // hack to check that no api calls was made
  expect(apiMock.isDone()).toBe(false);
  nock.cleanAll();
});
