/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import TraceKit from 'raven-js/vendor/TraceKit/tracekit';
import { uuid } from 'ndla-util';

import send from './logglyApi';

const ErrorReporter = (function Singleton() {
  let instance;
  let previousNotification;
  let messagesRemaining = 10;

  const sessionId = uuid();

  function sendToLoggly(data, config) {
    // Don't send to loggly if api key is undefined or no remaining messages
    if (!config.logglyApiKey || messagesRemaining < 1) {
      return;
    }

    messagesRemaining -= 1;

    const extendedData = {
      ...data,
      sessionId,
      userAgent: navigator.userAgent,
      appName: `${config.environment}/${config.componentName}`,
    };

    send(config.logglyApiKey, extendedData);
  }

  function getLogData(stackInfo, store, additionalInfo = {}) {
    const state = store ? store.getState() : undefined;
    return {
      level: 'error',
      text: `${stackInfo.name}: ${stackInfo.message}`,
      stackInfo,
      state,
      ...additionalInfo,
    };
  }

  function processStackInfo(stackInfo, config, additionalInfo) {
    // Don't send multiple copies of the same error. This fixes a problem when a client goes into an infinite loop
    const firstFrame = stackInfo.stack && stackInfo.stack[0] ? stackInfo.stack[0] : {};
    const deduplicate = [stackInfo.name, stackInfo.message, firstFrame.url, firstFrame.line, firstFrame.func].join('|');

    if (deduplicate !== previousNotification) {
      previousNotification = deduplicate;
      const data = getLogData(stackInfo, config.store, additionalInfo);
      sendToLoggly(data, config);
    }
  }

  function init(config) {
    // Suscribes to window.onerror
    TraceKit.report.subscribe((stackInfo) => {
      processStackInfo(stackInfo, config);
    });

    return {
      refresh() {
        messagesRemaining = 10;
      },
      captureMessage(msg) {
        sendToLoggly({ text: msg, level: 'info' }, config);
      },
      captureError(error, additionalInfo) {
        const stackInfo = TraceKit.computeStackTrace(error);
        processStackInfo(stackInfo, config, additionalInfo);
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
