/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import TraceKit from 'tracekit';
import { uuid } from 'ndla-util';

import send from './logglyApi';

const ErrorReporter = (function Singleton() {
  let instance;
  let previousNotification;

  const sessionId = uuid();

  function sendToLoggly(data, config) {
    // Don't send to loggly if environment is undefined
    if (!config.environment) {
      return;
    }

    const extendedData = {
      ...data,
      sessionId,
      userAgent: navigator.userAgent,
      appName: `${config.environment}/${config.componentName}`,
    };

    send(config.logglyApiKey, extendedData);
  }

  function getLogData(stackInfo, store) {
    const state = store ? store.getState() : undefined;
    return {
      level: 'error',
      text: `${stackInfo.name}: ${stackInfo.message}`,
      stackInfo,
      state,
    };
  }

  function init(config) {
    // Suscribes to window.onerror
    TraceKit.report.subscribe((stackInfo) => {
      const data = getLogData(stackInfo, config.store);

      // Don't send multiple copies of the same error. This fixes a problem when a client goes into an infinite loop
      const firstFrame = stackInfo.stack[0] ? stackInfo.stack[0] : {};
      const deduplicate = [stackInfo.name, stackInfo.message, firstFrame.url, firstFrame.line, firstFrame.func].join('|');

      if (deduplicate === previousNotification) {
        return;
      }
      previousNotification = deduplicate;

      sendToLoggly(data, config);
    });

    return {
      captureMessage(msg) {
        sendToLoggly({ text: msg, level: 'info' }, config);
      },
    };
  }

  return {
    getInstance(config) {
      if (!instance) {
        instance = init(config);
      }

      return instance;
    },
  };
}());

export default ErrorReporter;
