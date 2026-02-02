/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Transforms, Node } from "slate";
import { createPlugin } from "../../core/createPlugin";
import { isElementOfType } from "../../utils/isElementType";
import { HEADING_ELEMENT_TYPE } from "../heading/headingTypes";
import { PARAGRAPH_ELEMENT_TYPE } from "../paragraph/paragraphTypes";
import { isSectionElement } from "./queries/sectionQueries";
import {
  SECTION_ELEMENT_TYPE,
  SECTION_PLUGIN,
  type SectionElementType,
  type SectionPluginOptions,
} from "./sectionTypes";

export const sectionPlugin = createPlugin<SectionElementType, SectionPluginOptions>({
  type: SECTION_ELEMENT_TYPE,
  name: SECTION_PLUGIN,
  options: {
    allowedFirstElements: [PARAGRAPH_ELEMENT_TYPE, HEADING_ELEMENT_TYPE] as const,
  },
  normalize: (editor, node, path, logger, opts) => {
    if (!isSectionElement(node)) return false;

    for (const [child, childPath] of Node.children(editor, path)) {
      if (Node.isText(child)) {
        Transforms.wrapNodes(editor, { type: "paragraph", children: [] }, { at: childPath });
        return true;
      }
    }

    const textNodes = Array.from(node.children.entries()).filter((entry) => Node.isText(entry[1]));
    if (textNodes.length) {
      logger.log("Section contains text node, wrapping them in paragraphs");
      // TODO: this is somewhat ineffective, but I couldn't figure out a better way of doing it.
      // Also: This normalization check runs before the others because the others will insert redundant empty paragraphs.
      Transforms.wrapNodes(editor, { type: "paragraph", children: [] }, { at: path, match: (n) => Node.isText(n) });
      return true;
    }

    if (!isElementOfType(node.children[0], opts.allowedFirstElements)) {
      logger.log("First element is invalid, inserting paragraph", node.children[0]);
      Transforms.insertNodes(
        editor,
        { type: PARAGRAPH_ELEMENT_TYPE, children: [{ text: "" }] },
        { at: path.concat(0) },
      );
      return true;
    }

    if (!isElementOfType(node.children[node.children.length - 1], PARAGRAPH_ELEMENT_TYPE)) {
      logger.log("Last element is invalid, inserting paragraph");
      Transforms.insertNodes(
        editor,
        { type: PARAGRAPH_ELEMENT_TYPE, children: [{ text: "" }] },
        { at: path.concat(node.children.length) },
      );
      return true;
    }

    return false;
  },
  transform: (editor) => {
    const { getFragment } = editor;
    // section element should not be included in the fragment when copying content from the editor
    editor.getFragment = () => {
      const fragment = getFragment();
      return fragment.flatMap((node) => (isSectionElement(node) ? node.children : node));
    };
    return editor;
  },
});
