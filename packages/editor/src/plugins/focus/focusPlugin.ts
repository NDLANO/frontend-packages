/**
 * Copyright (c) 2026-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactEditor } from "slate-react";
import { createPlugin } from "../../core/createPlugin";
import { FOCUS_PLUGIN } from "./focusTypes";

export const focusPlugin = createPlugin({
  name: FOCUS_PLUGIN,
  transform: (editor) => {
    editor.focus = () => ReactEditor.focus(editor);
    return editor;
  },
});
