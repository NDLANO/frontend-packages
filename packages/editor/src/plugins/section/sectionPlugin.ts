/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Text, Transforms, Element } from "slate";
import { createPlugin } from "../../core/createPlugin";
import { isSectionElement } from "./queries/sectionQueries";
import { SECTION_ELEMENT_TYPE } from "./sectionTypes";
import { PARAGRAPH_ELEMENT_TYPE } from "../paragraph/paragraphTypes";
import { isElementOfType } from "../../utils/isElementType";

const ALLOWED_FIRST_ELEMENTS: Element["type"][] = [PARAGRAPH_ELEMENT_TYPE] as const;

export const sectionPlugin = createPlugin({
  type: SECTION_ELEMENT_TYPE,
  name: SECTION_ELEMENT_TYPE,
  // TODO: This is inherited from ED. I don't really know if we want to do it?
  // shortcuts: {
  //   "disable-enter": {
  //     keyCondition: isKeyHotkey("tab"),
  //     handler: (_, event) => {
  //       event.preventDefault();
  //       return true;
  //     },
  //   },
  // },
  normalize: (editor, node, path, logger) => {
    if (!isSectionElement(node)) return false;

    // TODO: Do we actually need empty paragraphs?
    if (!isElementOfType(node.children[0], ALLOWED_FIRST_ELEMENTS)) {
      logger.log("First element is invalid, inserting paragraph");
      Transforms.insertNodes(
        editor,
        { type: PARAGRAPH_ELEMENT_TYPE, children: [{ text: "" }] },
        { at: path.concat(0) },
      );
      return true;
    }

    // TODO: Do we actually need empty paragraphs?
    if (!isElementOfType(node.children[node.children.length - 1], PARAGRAPH_ELEMENT_TYPE)) {
      logger.log("Last element is invalid, inserting paragraph");
      Transforms.insertNodes(
        editor,
        { type: PARAGRAPH_ELEMENT_TYPE, children: [{ text: "" }] },
        { at: path.concat(node.children.length) },
      );
      return true;
    }

    editor.withoutNormalizing(() => {
      let modifiedChildren = false;
      for (const [i, child] of node.children.entries()) {
        if (Text.isText(child)) {
          logger.log("Section contains text node, wrapping in paragraph");
          Transforms.wrapNodes(
            editor,
            { type: PARAGRAPH_ELEMENT_TYPE, children: [{ text: "" }] },
            { at: path.concat(i) },
          );
          modifiedChildren = true;
        }
      }
      if (modifiedChildren) {
        return true;
      }
    });

    return false;
  },
});
