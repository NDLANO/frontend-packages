/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { ShortcutHandler } from "../../../core";
import { LIST_ITEM_ELEMENT_TYPE } from "../listTypes";
import { Element, Node, Path, Point, Range, Transforms, type NodeEntry } from "slate";
import { defaultListItemBlock } from "../listBlocks";
import { isParagraphElement } from "../../paragraph/queries/paragraphElementQueries";
import { isListItemElement } from "../queries/listElementQueries";

export const listOnEnter: ShortcutHandler = (editor, event, logger) => {
  if (event.shiftKey || !editor.selection) return false;

  const ancestors = Node.ancestors(editor, editor.path(editor.selection.anchor.path), { reverse: true });
  const [firstEntry, secondEntry] = Array.from(ancestors).filter(
    (entry): entry is NodeEntry<Element> => Node.isElement(entry[0]) && entry[0].type !== "section",
  );

  const selectedDefinitionEntry = firstEntry[0]?.type === LIST_ITEM_ELEMENT_TYPE ? firstEntry : secondEntry;

  if (!selectedDefinitionEntry) {
    return false;
  }

  const [selectedDefinitionItem, selectedDefinitionItemPath] = selectedDefinitionEntry;

  // Check that list and paragraph are of correct type.
  if (selectedDefinitionItem.type !== LIST_ITEM_ELEMENT_TYPE) {
    return false;
  }
  event.preventDefault();

  if (Range.isExpanded(editor.selection)) {
    logger.log("Selection is expanded, deleting selected content.");
    editor.deleteFragment();
    // Selection should now be collapsed
  }

  if (Node.string(selectedDefinitionItem) === "" && selectedDefinitionItem.children.length === 1) {
    logger.log("List item is empty, removing list item and jumping out of list");
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
    logger.log("Enter at end of list item, inserting new list item.");
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
    logger.log("Enter at start of list item, inserting new list item.");
    Transforms.insertNodes(
      editor,
      // TODO: Update children
      { ...defaultListItemBlock(), children: [{ type: "paragraph", children: [{ text: "" }] }] },
      { at: selectedDefinitionItemPath },
    );
    return true;
  }

  logger.log("Enter in the middle of list item, splitting list item.");
  // Split current listItem at selection.
  Transforms.splitNodes(editor, { match: isListItemElement, mode: "lowest" });
  Transforms.select(editor, editor.start(Path.next(selectedDefinitionItemPath)));
  return true;
};
