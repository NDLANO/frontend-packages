/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactEditor } from "slate-react";
import type { ShortcutHandler } from "../../../core";
import { LIST_ITEM_ELEMENT_TYPE } from "../listTypes";
import { Node, Path, Point, Range, Transforms } from "slate";
import { getEditorAncestors } from "../../../queries/getEditorAncestors";
import { defaultListItemBlock } from "../listBlocks";
import { isParagraphElement } from "../../paragraph/queries/paragraphElementQueries";
import { isListItemElement } from "../queries/listElementQueries";

export const listOnEnter: ShortcutHandler = (editor, event) => {
  if (event.shiftKey || !editor.selection) return false;

  const [firstChild, secondChild] = getEditorAncestors(editor, true);
  const selectedDefinitionItem = firstChild.type === LIST_ITEM_ELEMENT_TYPE ? firstChild : secondChild;

  if (!selectedDefinitionItem) {
    return false;
  }

  const selectedDefinitionItemPath = ReactEditor.findPath(editor, selectedDefinitionItem);

  // Check that list and paragraph are of correct type.
  if (selectedDefinitionItem.type !== LIST_ITEM_ELEMENT_TYPE) {
    return false;
  }
  event.preventDefault();

  // If selection is expanded, delete selected content first.
  // Selection should now be collapsed
  if (Range.isExpanded(editor.selection)) {
    editor.deleteFragment();
  }

  // If list-item is empty, remove list item and jump out of list.
  if (Node.string(selectedDefinitionItem) === "" && selectedDefinitionItem.children.length === 1) {
    editor.withoutNormalizing(() => {
      Transforms.unwrapNodes(editor, {
        at: selectedDefinitionItemPath,
      });
      Transforms.liftNodes(editor, {
        at: selectedDefinitionItemPath,
      });
    });
    return true;
  }

  Transforms.unsetNodes(editor, "serializeAsText", {
    match: isParagraphElement,
    mode: "lowest",
  });

  // If at end of list-item, insert a new list item.
  const listItemEnd = editor.end(selectedDefinitionItemPath);
  if (Point.equals(listItemEnd, editor.selection.anchor)) {
    const nextPath = Path.next(selectedDefinitionItemPath);
    Transforms.insertNodes(
      editor,
      // TODO: Update children
      { ...defaultListItemBlock(), children: [{ type: "paragraph", children: [{ text: "" }] }] },
      { at: nextPath },
    );
    Transforms.select(editor, editor.start(nextPath));
    return true;
  }

  // If at the start of list-item, insert a new list item at current path
  const listItemStart = editor.start(selectedDefinitionItemPath);
  if (Point.equals(listItemStart, editor.selection.anchor)) {
    Transforms.insertNodes(
      editor,
      // TODO: Update children
      { ...defaultListItemBlock(), children: [{ type: "paragraph", children: [{ text: "" }] }] },
      { at: selectedDefinitionItemPath },
    );
    return true;
  }
  // Split current listItem at selection.
  Transforms.splitNodes(editor, { match: isListItemElement, mode: "lowest" });
  Transforms.select(editor, editor.start(Path.next(selectedDefinitionItemPath)));
  return true;
};
