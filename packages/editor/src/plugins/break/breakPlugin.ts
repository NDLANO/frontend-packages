/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Node, Range, Transforms } from "slate";
import { createPlugin } from "../../core/createPlugin";
import { PARAGRAPH_ELEMENT_TYPE } from "../paragraph/paragraphTypes";
import { BREAK_ELEMENT_TYPE } from "./breakTypes";
import { getCurrentBlock } from "../../queries/getCurrentBlock";

export const breakPlugin = createPlugin({
  type: BREAK_ELEMENT_TYPE,
  name: BREAK_ELEMENT_TYPE,
  isVoid: true,
  transform: (editor, logger) => {
    const { insertBreak } = editor;

    editor.insertBreak = () => {
      if (!editor.selection || !Range.isRange(editor.selection)) return false;
      // TODO: Should we consider void nodes here? We used to do that in the old implementation
      const entry = getCurrentBlock(editor, PARAGRAPH_ELEMENT_TYPE);

      if (entry && Node.string(entry[0]) === "") {
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
