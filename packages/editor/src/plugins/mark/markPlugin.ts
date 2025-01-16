/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { Transforms } from "slate";
import { createPlugin } from "../../core/createPlugin";
import { isEmptyTextNode } from "../../utils/isEmptyTextNode";
import { isKeyHotkey } from "is-hotkey";
import { toggleMark } from "./toggleMark";
import { marks } from "./markTypes";

export const markPlugin = createPlugin({
  normalize: (editor, node, path) => {
    if (!isEmptyTextNode(node)) return false;
    if (node.bold || node.code || node.italic || node.sub || node.sup || node.underlined) {
      Transforms.unsetNodes(editor, ["bold", "code", "italic", "sub", "sup", "underlined"], {
        at: path,
      });
      return true;
    }
    return false;
  },
  shortcuts: {
    toggleBold: {
      keyCondition: isKeyHotkey("mod+b"),
      handler: (editor, event) => {
        event.preventDefault();
        toggleMark(editor, marks.strong);
        return false;
      },
    },
    toggleItalic: {
      keyCondition: isKeyHotkey("mod+i"),
      handler: (editor, event) => {
        event.preventDefault();
        toggleMark(editor, marks.em);
        return false;
      },
    },
  },
});
