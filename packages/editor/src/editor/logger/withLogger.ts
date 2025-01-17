/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Editor } from "slate";
import { loggerManager, type LoggerManager } from "./Logger";

export const withLogger = (editor: Editor, logger: LoggerManager = loggerManager) => {
  editor.logger = logger;
  return editor;
};
