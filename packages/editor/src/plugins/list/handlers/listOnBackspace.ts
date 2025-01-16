/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Point, Range, Transforms } from "slate";
import type { ShortcutHandler } from "../../../core";
import { LIST_ELEMENT_TYPE } from "../listTypes";
import { hasNodeOfType } from "../../../queries/hasNodeOfType";
import { getCurrentBlock } from "../../../queries/getCurrentBlock";
import { isListItemElement } from "../queries/listElementQueries";

export const listOnBackspace: ShortcutHandler = (editor, event) => {
  if (!editor.selection || !hasNodeOfType(editor, LIST_ELEMENT_TYPE)) return false;

  const entry = getCurrentBlock(editor, LIST_ELEMENT_TYPE);
  if (!entry) return false;

  const [currentItemNode, currentItemPath] = entry;
  if (isListItemElement(currentItemNode) && Range.isCollapsed(editor.selection)) {
    // Check that cursor is not expanded.
    const [, firstItemNodePath] = editor.node([...currentItemPath, 0]);
    // If cursor is placed at start of first item child
    if (Point.equals(Range.start(editor.selection), editor.start(firstItemNodePath))) {
      event.preventDefault();
      Transforms.liftNodes(editor, { at: currentItemPath });
      return true;
    }
  }
  return false;
};
