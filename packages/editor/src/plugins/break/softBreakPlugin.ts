/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import isHotkey from "is-hotkey";
import { createPlugin } from "../../core/createPlugin";
import { Transforms } from "slate";

export const softBreakPlugin = createPlugin({
  name: "soft-break",
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
