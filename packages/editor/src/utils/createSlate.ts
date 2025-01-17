/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { createEditor, type Editor } from "slate";
import type { SlatePlugin } from "../core";
import { LoggerManager } from "../editor/logger/Logger";
import { withHistory } from "slate-history";
import { withReact } from "slate-react";
import { withLogger } from "../editor/logger/withLogger";

export const withPlugins = (editor: Editor, plugins?: SlatePlugin[]) => {
  if (plugins) {
    return plugins.reduce((editor, plugin) => plugin(editor), editor);
  }
  return editor;
};

interface CreateSlate {
  plugins?: SlatePlugin[];
  logger?: LoggerManager;
}

export const createSlate = ({ plugins, logger = new LoggerManager({ debug: false }) }: CreateSlate) => {
  const editor = withPlugins(withHistory(withReact(withLogger(createEditor(), logger))), plugins);
  return editor;
};
