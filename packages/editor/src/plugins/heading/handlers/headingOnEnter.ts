/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Point, Range, Transforms } from "slate";
import type { ShortcutHandler } from "../../../core";
import { getCurrentBlock } from "../../../queries/getCurrentBlock";
import { HEADING_ELEMENT_TYPE } from "../headingTypes";

export const headingOnEnter: ShortcutHandler = (editor, event, logger) => {
  if (!editor.selection || !Range.isRange(editor.selection)) return false;

  const entry = getCurrentBlock(editor, HEADING_ELEMENT_TYPE);
  if (!entry) return false;

  event.preventDefault();

  const [, path] = entry;

  if (Point.equals(editor.start(path), editor.selection.anchor)) {
    logger.log("Enter at start of heading, inserting paragraph");
    Transforms.insertNodes(editor, { type: "paragraph", children: [{ text: "" }] }, { at: path });
  } else if (Point.equals(editor.end(path), editor.selection.anchor)) {
    logger.log("Enter at end of heading, inserting paragraph after");
    Transforms.insertNodes(editor, { type: "paragraph", children: [{ text: "" }] });
  } else {
    logger.log("Enter in middle of heading, splitting nodes");
    Transforms.splitNodes(editor);
  }
  return true;
};
