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

// Taken from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
function escapeRegExp(string) {
  return string.replace(/([.*+?^${}()|[\]\\])/g, '\\$1');
}

function hasMatch(str, patterns) {
  // can be strings or ReqExp
  const validPatterns = patterns.map(pattern => {
    if (Object.prototype.toString.call(pattern) === '[object String]') {
      return new RegExp(escapeRegExp(pattern));
    }
    return pattern;
  });

  return validPatterns.findIndex(pattern => pattern.test(str)) !== -1;
}

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

  function getLogData(stackInfo, level = 'error', store, additionalInfo = {}) {
    const state = store ? store.getState() : undefined;
    return {
      level,
      text: `${stackInfo.name}: ${stackInfo.message}`,
      stackInfo,
      state,
      ...additionalInfo,
    };
  }

  function processStackInfo(stackInfo, level, config, additionalInfo) {
    // "Script error." is hard coded into browsers for errors that it can't read.
    // this is the result of a script being pulled in from an external domain and CORS.
    const globalIgnoreErrors = [
      /^Script error\.?$/,
      /^Javascript error: Script error\.? on line 0$/,
    ];

    const ignoreErrors = config.ignoreErrors.concat(globalIgnoreErrors);
    if (hasMatch(stackInfo.message, ignoreErrors)) {
      return;
    }

    // Don't send multiple copies of the same error. This fixes a problem when a client goes into an infinite loop
    const firstFrame =
      stackInfo.stack && stackInfo.stack[0] ? stackInfo.stack[0] : {};
    const deduplicate = [
      stackInfo.name,
      stackInfo.message,
      firstFrame.url,
      firstFrame.line,
      firstFrame.func,
    ].join('|');

    if (deduplicate === previousNotification) {
      return;
    }

    // Ignore errors from provided urls
    const url = firstFrame.url || stackInfo.url;
    if (config.ignoreUrls && hasMatch(url, config.ignoreUrls)) {
      return;
    }

    // Remember last
    previousNotification = deduplicate;
    const data = getLogData(stackInfo, level, config.store, additionalInfo);
    sendToLoggly(data, config);
  }

  function init(config) {
    // Suscribes to window.onerror
    TraceKit.report.subscribe(stackInfo => {
      processStackInfo(stackInfo, 'error', config);
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
        processStackInfo(stackInfo, 'error', config, additionalInfo);
      },
      captureWarning(error, additionalInfo) {
        const stackInfo = TraceKit.computeStackTrace(error);
        processStackInfo(stackInfo, 'warning', config, additionalInfo);
      },
    };
  }

  return {
    getInstance(config) {
      const defaultConfig = {
        ignoreUrls: [],
        ignoreErrors: [],
      };
      if (!instance) {
        instance = init({ ...defaultConfig, ...config });
      }

      return instance;
    },
  };
})();

export default ErrorReporter;
