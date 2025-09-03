/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { isHotkey } from "is-hotkey";
import { createPlugin } from "../../core/createPlugin";
import { Transforms } from "slate";
import { SOFT_BREAK_PLUGIN } from "./breakTypes";

export const softBreakPlugin = createPlugin({
  name: SOFT_BREAK_PLUGIN,
  shortcuts: {
    "soft-break": {
      keyCondition: isHotkey("shift+enter"),
      handler: (editor, event) => {
        event.preventDefault();
        event.stopPropagation();
        Transforms.insertText(editor, "\n");
        return true;
      },
    },
  },
});
