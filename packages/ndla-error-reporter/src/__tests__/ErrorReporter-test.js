/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

 /* eslint-env jest */

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
});

test('ndla-error-reporter/ErrorReporter is singleton', () => {
  expect(errorReporter).toBe(ErrorReporter.getInstance());
});

test('ndla-error-reporter/ErrorReporter can captureMessage', () => {
  const apiMock = nock('http://loggly-mock-api')
    .post('/inputs/1223/', {
      level: 'info',
      text: 'Log message',
      appName: 'unittest/ndla-frontend',
      userAgent: /Node\.js.+/,
    })
    .reply(200);

  errorReporter.captureMessage('Log message');

  apiMock.done();
});

test('ndla-error-reporter/ErrorReporter captures onerror calls and sends error to loggly', () => {
  const apiMock = nock('http://loggly-mock-api')
    .post('/inputs/1223/', {
      level: 'error',
      text: 'ReferenceError: someUndefinedFunction is not defined',
      stackInfo: {
        name: 'ReferenceError',
        message: 'someUndefinedFunction is not defined',
      },
      appName: 'unittest/ndla-frontend',
      userAgent: /Node\.js.+/,
      state: { data: 'test state' },
    })
    .reply(200);

  // simmulate on error call
  try {
    someUndefinedFunction(); // eslint-disable-line no-undef
  } catch (e) {
    window.onerror.call(window, e.toString(), document.location.toString(), 58, 4, e);
  }

  apiMock.done();
});

test('ndla-error-reporter/ErrorReporter should not send duplicate errors ', () => {
  const apiMock = nock('http://loggly-mock-api')
    .post('/inputs/1223/', {
      text: 'TypeError: Cannot set property \'foo\' of null',
    })
    .reply(200);

  // simmulate several duplicate on error calls
  try {
    const someVal = null;
    someVal.foo = 1;
  } catch (e) {
    window.onerror.call(window, e.toString(), document.location.toString(), 58, 4, e);
    window.onerror.call(window, e.toString(), document.location.toString(), 58, 4, e);
    window.onerror.call(window, e.toString(), document.location.toString(), 58, 4, e);
  }

  apiMock.done();
});

test('ndla-error-reporter/ErrorReporter should not send more then 10 messages', () => {
  errorReporter.refresh();

  const apiMock = nock('http://loggly-mock-api')
    .post('/inputs/1223/', { text: 'Log message' })
    .times(10)
    .reply(200);

  for (let i = 0; i < 15; i += 1) {
    errorReporter.captureMessage('Log message');
  }

  apiMock.done();
});
