/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Node, Text, Transforms } from "slate";
import { createPlugin } from "../../core/createPlugin";
import { LINK_ELEMENT_TYPE } from "./linkTypes";
import { isLinkElement } from "./queries/linkQueries";

export const linkPlugin = createPlugin({
  type: LINK_ELEMENT_TYPE,
  name: LINK_ELEMENT_TYPE,
  isInline: true,
  isVoid: false,
  normalize: (editor, node, path, logger) => {
    if (!isLinkElement(node)) return false;
    if (Node.string(node) === "") {
      logger.log("Link element is empty, removing it");
      Transforms.removeNodes(editor, { at: path });
      return true;
    }
    const nonTextEntries = Array.from(node.children.entries()).filter(([_, child]) => !Text.isText(child));
    if (nonTextEntries.length) {
      logger.log("Link element contains non-text children, unwrapping them");
      editor.withoutNormalizing(() => {
        for (const [index] of nonTextEntries) {
          Transforms.unwrapNodes(editor, { at: path.concat(index) });
        }
        return true;
      });
    }
    return false;
  },
});
