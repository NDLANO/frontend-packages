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
import { isElementOfType } from "../../utils/isElementType";

export const linkPlugin = createPlugin({
  type: LINK_ELEMENT_TYPE,
  name: LINK_ELEMENT_TYPE,
  isInline: true,
  normalize: (editor, node, path) => {
    if (!isElementOfType(node, LINK_ELEMENT_TYPE)) return false;
    if (Node.string(node) === "") {
      Transforms.removeNodes(editor, { at: path });
      return true;
    }
    for (const [index, child] of node.children.entries()) {
      if (!Text.isText(child)) {
        Transforms.unwrapNodes(editor, { at: [...path, index] });
        return true;
      }
    }
    return false;
  },
});
