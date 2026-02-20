/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Logger } from "../../core";

export interface LoggerOptions {
  debug?: boolean;
}

const DEFAULT_LOGGER = "default";

export class LoggerManager {
  #loggers: Map<string, Logger>;
  #debug: boolean;
  constructor(options?: LoggerOptions) {
    this.#loggers = new Map();
    this.#loggers.set(DEFAULT_LOGGER, this.createLogger(DEFAULT_LOGGER));
    this.#debug = !!options?.debug;
  }

  getLogger(pluginName: string = DEFAULT_LOGGER) {
    if (this.#loggers.has(pluginName)) {
      return this.#loggers.get(pluginName)!;
    }

    const logger = this.createLogger(pluginName);
    this.#loggers.set(pluginName, logger);
    return logger;
  }

  private createLogger(pluginName: string): Logger {
    return {
      // oxlint-disable-next-line no-console
      log: (...args: any[]) => this.#debug && console.log(`[${pluginName}]:`, ...args),
    };
  }
}

export const loggerManager = new LoggerManager();
