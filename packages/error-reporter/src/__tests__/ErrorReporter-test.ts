/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import nock from "nock";
import { ErrorReporter } from "../ErrorReporter";

const state = {
  data: "test state",
};
const errorReporter = ErrorReporter.getInstance({
  logglyApiKey: "1223",
  environment: "unittest",
  componentName: "ndla-frontend",
  store: { getState: () => state },
  ignoreUrls: ["https://example.com/script.js"],
});

test("error-reporter/ErrorReporter is singleton", () => {
  expect(errorReporter).toBe(ErrorReporter.getInstance());
});

test("error-reporter/ErrorReporter can capture message", async () => {
  const apiMock = nock("http://loggly-mock-api")
    .post("/inputs/1223/", {
      level: "info",
      text: "Log message",
      sessionId: /.*/,
      appName: "unittest/ndla-frontend",
      userAgent: /Mozilla.+/,
    })
    .reply(200);

  await errorReporter.captureMessage("Log message");

  apiMock.done();
});

test("error-reporter/ErrorReporter can capture warning", async () => {
  const apiMock = nock("http://loggly-mock-api")
    .post("/inputs/1223/", (body) => {
      expect(body).toMatchObject({
        level: "warning",
        text: "Error: Some generic warning",
        stackInfo: {
          name: "Error",
        },
        appName: "unittest/ndla-frontend",
      });
      return true;
    })
    .reply(200);

  await errorReporter.captureWarning(new Error("Some generic warning"));

  apiMock.done();
});

test("error-reporter/ErrorReporter can capture error", async () => {
  const apiMock = nock("http://loggly-mock-api")
    .post("/inputs/1223/", (body) => {
      expect(body).toMatchObject({
        level: "error",
        text: "Error: Some generic error",
        stackInfo: {
          name: "Error",
        },
        appName: "unittest/ndla-frontend",
      });
      return true;
    })
    .reply(200);

  await errorReporter.captureError(new Error("Some generic error"));

  apiMock.done();
});

test("error-reporter/ErrorReporter can capture error with additional info", async () => {
  const apiMock = nock("http://loggly-mock-api")
    .post("/inputs/1223/", (body) => {
      expect(body).toMatchObject({
        level: "error",
        text: "Error: Some other generic error",
        from: "unittest",
      });
      return true;
    })
    .reply(200);

  await errorReporter.captureError(new Error("Some other generic error"), {
    from: "unittest",
  });

  apiMock.done();
});

test("error-reporter/ErrorReporter captures onerror calls and sends error to loggly", async () => {
  nock("http://loggly-mock-api")
    .post("/inputs/1223/", (body) => {
      expect(body).toMatchObject({
        level: "error",
        text: "ReferenceError: someUndefinedFunction is not defined",
        stackInfo: {
          name: "ReferenceError",
          message: "someUndefinedFunction is not defined",
        },
        appName: "unittest/ndla-frontend",
        state: { data: "test state" },
      });
      return true;
    })
    .reply(200);

  // simmulate on error call
  try {
    //@ts-expect-error - The entire point is that it is undefined
    someUndefinedFunction();
  } catch (e: any) {
    await window.onerror?.call(window, e.toString(), document.location.toString(), 58, 4, e);
  }
});

test("error-reporter/ErrorReporter should not send duplicate errors ", async () => {
  const apiMock = nock("http://loggly-mock-api")
    .post("/inputs/1223/", (body) => {
      expect(body).toMatchObject({
        text: "TypeError: Cannot set properties of null (setting 'foo')",
      });
      return true;
    })
    .reply(200);

  // simmulate several duplicate on error calls
  try {
    const someVal = null;
    //@ts-expect-error - The entire point is that it will throw an error
    someVal.foo = 1;
  } catch (e: any) {
    window.onerror?.call(window, e.toString(), document.location.toString(), 58, 4, e);
    window.onerror?.call(window, e.toString(), document.location.toString(), 58, 4, e);
    window.onerror?.call(window, e.toString(), document.location.toString(), 58, 4, e);
  }

  expect(apiMock.pendingMocks()).toHaveLength(1);
});

test("error-reporter/ErrorReporter should not send more then 10 messages", async () => {
  errorReporter.refresh();

  const apiMock = nock("http://loggly-mock-api")
    .post("/inputs/1223/", (body) => {
      expect(body).toMatchObject({
        text: "Log message",
      });
      return true;
    })
    .times(10)
    .reply(200);

  for (let i = 0; i < 15; i += 1) {
    await errorReporter.captureMessage("Log message");
  }

  apiMock.done();
  errorReporter.refresh();
});

test("error-reporter/ErrorReporter should ignore script errors", async () => {
  const apiMock = nock("http://loggly-mock-api")
    .post("/inputs/1223/", () => true)
    .reply(200);

  await window.onerror?.call(window, "Script error.", document.location.toString(), 0, 0);

  // hack to check that no api calls was made
  expect(apiMock.isDone()).toBe(false);
  nock.cleanAll();
});

test("error-reporter/ErrorReporter should ignore resizeobserver errors", async () => {
  const apiMock = nock("http://loggly-mock-api")
    .post("/inputs/1223/", () => true)
    .reply(200);

  await window.onerror?.call(window, "ResizeObserver loop limit exceeded", document.location.toString(), 0, 0);

  // hack to check that no api calls was made
  expect(apiMock.isDone()).toBe(false);
  nock.cleanAll();
});

test("error-reporter/ErrorReporter should ignore provided urls", async () => {
  const apiMock = nock("http://loggly-mock-api")
    .post("/inputs/1223/", () => true)
    .reply(200);

  await window.onerror?.call(window, "Some error", "https://example.com/script.js", 0, 0);

  // hack to check that no api calls was made
  expect(apiMock.isDone()).toBe(false);
  nock.cleanAll();
});
