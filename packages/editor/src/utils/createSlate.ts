/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Editor } from "slate";
import type { SlatePlugin } from "../core";

export const withPlugins = (editor: Editor, plugins?: SlatePlugin[]) => {
  if (plugins) {
    return plugins.reduce((editor, plugin) => plugin(editor), editor);
  }
  return editor;
};
