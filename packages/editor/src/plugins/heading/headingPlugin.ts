/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Node, Path, Text, Transforms } from "slate";
import { createPlugin } from "../../core/createPlugin";
import { HEADING_ELEMENT_TYPE } from "./headingTypes";
import { isHeadingElement } from "./queries/headingQueries";
import isHotkey from "is-hotkey";
import { headingOnEnter } from "./handlers/headingOnEnter";

export const headingPlugin = createPlugin({
  type: HEADING_ELEMENT_TYPE,
  name: HEADING_ELEMENT_TYPE,
  shortcuts: {
    // TODO: We used to have a backspace handler here that replaced empty headings with a paragraph. Do we want it?
    headingOnEnter: {
      keyCondition: isHotkey("enter"),
      handler: headingOnEnter,
    },
  },
  normalize: (editor, node, path, logger) => {
    if (!isHeadingElement(node)) return false;

    if (Node.string(node) === "" && editor.selection && !Path.isCommon(path, editor.selection.anchor.path)) {
      logger.log("Removing empty heading that is not selected");
      Transforms.unwrapNodes(editor, { at: path });
      return true;
    }

    const boldEntries = Array.from(editor.nodes({ match: (n) => Text.isText(n) && !!n.bold }), (n) => n);
    if (boldEntries.length) {
      logger.log("Removing bold from nodes within heading.");
      editor.withoutNormalizing(() => {
        boldEntries.forEach(([_, path]) => {
          Transforms.setNodes(editor, { bold: undefined }, { at: path });
        });
        return true;
      });
    }

    return false;
  },
});
