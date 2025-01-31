/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Transforms, type Editor } from "slate";
import { HEADING_ELEMENT_TYPE, type HeadingElement } from "../headingTypes";
import { isHeadingElement } from "../queries/headingQueries";

export const toggleHeading = (editor: Editor, level: HeadingElement["level"]) => {
  if (!editor.selection) return false;
  const headings = Array.from(editor.nodes({ match: isHeadingElement }));
  const identical = headings.every(([node]) => node.level === headings[0][0].level);

  // If all headings are identical and the current selection is a heading, convert it to a paragraph
  if (identical && headings?.[0]?.[0]?.level === level) {
    // TODO: This should be configurable
    Transforms.setNodes(editor, { type: "paragraph" }, { at: editor.selection });
  } else {
    Transforms.setNodes(editor, { type: HEADING_ELEMENT_TYPE, level }, { at: editor.selection });
  }
  return true;
};
