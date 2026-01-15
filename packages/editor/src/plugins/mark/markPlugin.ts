/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Node, Transforms } from "slate";
import { createPlugin } from "../../core/createPlugin";
import { MARK_PLUGIN, type MarkPluginOptions, type MarkType } from "./markTypes";

export const markPlugin = createPlugin<any, MarkPluginOptions>({
  name: MARK_PLUGIN,
  options: {
    supportedMarks: ["bold", "code", "italic", "underlined", "sup", "sub"],
  },
  normalize: (editor, node, path, logger) => {
    if (!Node.isText(node)) return false;
    const marks = Object.keys(node).filter((key) => key !== "text") as MarkType[];
    const invalidMarks = marks.filter((mark) => !editor.supportsMark(mark));
    if (invalidMarks.length) {
      logger.log(`Invalid marks found: ${invalidMarks}. Removing`);
      Transforms.unsetNodes(editor, invalidMarks, { at: path });
      return true;
    }
    if (node.text !== "") return false;
    if (node.bold || node.code || node.italic || node.sub || node.sup || node.underlined) {
      logger.log("Empty text node with marks found, removing all marks.");
      Transforms.unsetNodes(editor, ["bold", "code", "italic", "sub", "sup", "underlined"], {
        at: path,
      });
      return true;
    }
    return false;
  },
  transform: (editor, _, opts) => {
    editor.supportsMark = (mark) => {
      const marks = Array.isArray(mark) ? mark : [mark];
      if (!opts.supportedMarks?.length) return false;
      return marks.every((m) => opts.supportedMarks?.includes(m));
    };

    return editor;
  },
});
