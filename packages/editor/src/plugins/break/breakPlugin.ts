/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Location, Node, Transforms } from "slate";
import { createPlugin } from "../../core/createPlugin";
import { PARAGRAPH_ELEMENT_TYPE } from "../paragraph/paragraphTypes";
import { BREAK_ELEMENT_TYPE, BREAK_PLUGIN, type BreakElementType, type BreakPluginOptions } from "./breakTypes";
import { getCurrentBlock } from "../../queries/getCurrentBlock";
import { isElementOfType } from "../../utils/isElementType";
import { SECTION_ELEMENT_TYPE } from "../section/sectionTypes";

export const breakPlugin = createPlugin<BreakElementType, BreakPluginOptions>({
  type: BREAK_ELEMENT_TYPE,
  name: BREAK_PLUGIN,
  isVoid: true,
  options: {
    validBreakElements: [PARAGRAPH_ELEMENT_TYPE],
    validBreakParents: [SECTION_ELEMENT_TYPE],
  },
  transform: (editor, logger, options) => {
    const { insertBreak } = editor;

    editor.insertBreak = () => {
      if (!editor.selection || !Location.isRange(editor.selection)) return false;
      const entry = getCurrentBlock(editor, options.validBreakElements ?? PARAGRAPH_ELEMENT_TYPE);
      if (!entry) return insertBreak();
      const [node, path] = entry;
      if (!options.validBreakParents?.length || !isElementOfType(editor.parent(path)[0], options.validBreakParents)) {
        return insertBreak();
      }

      if (entry && Node.string(node) === "" && !editor.hasVoids(node)) {
        logger.log("Tried to insert new paragraph, but current paragraph is empty, inserting break instead");
        Transforms.insertNodes(editor, [
          { type: BREAK_ELEMENT_TYPE, children: [] },
          { type: PARAGRAPH_ELEMENT_TYPE, children: [{ text: "" }] },
        ]);
        return;
      }

      return insertBreak();
    };

    return editor;
  },
});
