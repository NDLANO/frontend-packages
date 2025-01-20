/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Element, Node, Transforms } from "slate";
import { createPlugin } from "../../core/createPlugin";
import { PARAGRAPH_ELEMENT_TYPE } from "./paragraphTypes";
import { isParagraphElement } from "./queries/paragraphElementQueries";

export const paragraphPlugin = createPlugin({
  type: PARAGRAPH_ELEMENT_TYPE,
  name: PARAGRAPH_ELEMENT_TYPE,
  normalize: (editor, node, path, logger) => {
    if (!isParagraphElement(node)) return false;

    // Unwrap block element children. Only text allowed.
    for (const [child, childPath] of Node.children(editor, path)) {
      if (Element.isElement(child) && !editor.isInline(child)) {
        logger.log("Paragraph contains block element, unwrapping.");
        Transforms.unwrapNodes(editor, { at: childPath });
        return true;
      }
    }

    return false;
  },
  // override: {
  //   normalizeNode: (entry) => (editor) => {},
  // },
});
