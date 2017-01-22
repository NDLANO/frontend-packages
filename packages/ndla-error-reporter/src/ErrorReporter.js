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
    return {
      level: 'error',
      text: `${stackInfo.name}: ${stackInfo.message}`,
      userAgent: navigator.userAgent,
      stackInfo,
      state: store.getState(),
    };
  }

  function init(config) {
    // Suscribes to window.onerror
    TraceKit.report.subscribe((stackInfo) => {
      const data = getLogData(stackInfo, config.store);
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
