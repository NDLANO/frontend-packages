/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Node, Transforms } from "slate";
import { jsx as slatejsx } from "slate-hyperscript";
import { createPlugin } from "../../core/createPlugin";
import { isElementOfType } from "../../utils/isElementType";
import { PARAGRAPH_ELEMENT_TYPE } from "../paragraph/paragraphTypes";
import { isParagraphElement } from "../paragraph/queries/paragraphElementQueries";
import { NOOP_ELEMENT_TYPE, NOOP_PLUGIN, type NoopElementType, type NoopPluginOptions } from "./noopTypes";
import { isNoopElement } from "./queries/noopQueries";

export const noopPlugin = createPlugin<NoopElementType, NoopPluginOptions>({
  name: NOOP_PLUGIN,
  type: NOOP_ELEMENT_TYPE,
  options: {
    inlineBlocks: [],
  },
  normalize: (editor, node, path, logger, opts) => {
    if (!isNoopElement(node)) return false;

    if (node.children.length === 1) {
      const child = node.children[0];
      if (Node.isText(child)) {
        logger.log("Noop contains only text, wrapping in paragraph.");
        Transforms.wrapNodes(
          editor,
          slatejsx("element", { type: PARAGRAPH_ELEMENT_TYPE, serializeAsText: true }, child),
          {
            at: [...path, 0],
          },
        );
        return true;
      }

      if (!isParagraphElement(child)) return false;

      const containsInlineBlock = child.children.some((child) => isElementOfType(child, opts.inlineBlocks));

      if (!child.serializeAsText && !containsInlineBlock) {
        logger.log("Noop contains paragraph with no inline blocks, setting serializeAsText.");
        Transforms.setNodes(
          editor,
          { type: PARAGRAPH_ELEMENT_TYPE, serializeAsText: true },
          { at: path, match: isParagraphElement },
        );
        return true;
      }

      if (child.serializeAsText && containsInlineBlock) {
        logger.log("Noop contains paragraph with inline blocks, unsetting serializeAsText.");
        Transforms.setNodes(
          editor,
          { type: PARAGRAPH_ELEMENT_TYPE, serializeAsText: false },
          { at: path, match: isParagraphElement },
        );
        return true;
      }
    }

    // If multiple blocks serialize as paragraphs
    if (node?.children.length > 1) {
      logger.log("Noop contains multiple blocks, setting serializeAsText.");
      Transforms.setNodes(
        editor,
        { type: PARAGRAPH_ELEMENT_TYPE, serializeAsText: false },
        { at: path, match: isParagraphElement },
      );
      return true;
    }

    return false;
  },
});
