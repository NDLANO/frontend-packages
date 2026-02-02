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
import { hasNodeOfType } from "../../../queries/hasNodeOfType";
import { LIST_ELEMENT_TYPE, LIST_ITEM_ELEMENT_TYPE } from "../listTypes";

// This function only has one purpose: to remove a list item when the user presses backspace at the start of a list item.
// Can probably be simplified further.
export const listOnBackspace: ShortcutHandler = (editor, event, logger) => {
  if (!editor.selection || !Range.isCollapsed(editor.selection) || !hasNodeOfType(editor, LIST_ELEMENT_TYPE))
    return false;

  const entry = getCurrentBlock(editor, LIST_ITEM_ELEMENT_TYPE);
  if (!entry) return false;

  const [, currentItemPath] = entry;
  // Check that cursor is not expanded.
  // If cursor is placed at start of first item child
  if (Point.equals(Range.start(editor.selection), editor.start(currentItemPath.concat(0)))) {
    event.preventDefault();
    logger.log("Backspace at start of list item, lifting.");
    Transforms.liftNodes(editor, { at: currentItemPath });
    return true;
  }
  return false;
};
