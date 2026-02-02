/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Transforms, Path, Range } from "slate";
import type { ShortcutHandler } from "../../../core";
import { getCurrentBlock } from "../../../queries/getCurrentBlock";
import { hasNodeOfType } from "../../../queries/hasNodeOfType";
import { isElementOfType } from "../../../utils/isElementType";
import { defaultListBlock } from "../listBlocks";
import { LIST_ELEMENT_TYPE, LIST_ITEM_ELEMENT_TYPE, LIST_PLUGIN, type ListPluginOptions } from "../listTypes";
import { isListElement, isListItemElement } from "../queries/listElementQueries";

export const listOnTab: ShortcutHandler<ListPluginOptions> = (editor, event, logger, options) => {
  if (!editor.selection || !hasNodeOfType(editor, LIST_ELEMENT_TYPE)) return false;

  const listEntry = getCurrentBlock(editor, LIST_ELEMENT_TYPE);
  const listItemEntry = getCurrentBlock(editor, LIST_ITEM_ELEMENT_TYPE);

  const listOptions = options ?? editor.getPluginOptions<ListPluginOptions>(LIST_PLUGIN);
  if (!listOptions) {
    logger.log("Tried to retrieve options, but did not find any");
  }

  if (!listEntry || !listItemEntry) return false;

  const [currentListNode, currentListPath] = listEntry;
  const [currentItemNode, currentItemPath] = listItemEntry;
  const [[currentTextBlockNode, currentTextBlockPath]] = editor.nodes({
    match: (n) => isElementOfType(n, listOptions?.allowedListItemFirstChildTypes),
    mode: "lowest",
  });

  // selected text block node must be a direct child of list item.
  if (currentTextBlockNode && Path.isChild(currentTextBlockPath, currentItemPath)) {
    event.preventDefault();
  } else {
    return false;
  }

  if (!Range.includes(editor.selection, currentItemPath)) {
    return false;
  }

  editor.withoutNormalizing(() => {
    // Move list-elements up (left)
    if (event.shiftKey) {
      const [parentNode, parentPath] = editor.node(Path.parent(currentListPath));
      // If item at highest level in list => Lift entire list element out of current list.
      // The list element will be unwrapped in list normalizer.
      if (!isListItemElement(parentNode)) {
        const childList = currentItemNode.children[currentItemNode.children.length - 1];
        if (isListElement(childList) && childList.listType !== currentListNode.listType) {
          logger.log("List has sublist with different type, changing type to match parent list");
          Transforms.setNodes(
            editor,
            { listType: currentListNode.listType },
            { at: [...currentItemPath, currentItemNode.children.length - 1] },
          );
        }
        logger.log("List is a top level list, lifting list items out of list");
        Transforms.liftNodes(editor, { at: currentItemPath });
        return true;
      }
      // Otherwise: It should exist a list item (targetPath) outside of the current list.
      // Try to move current list item there.
      const targetPath = Path.parent(Path.parent(currentItemPath));
      if (editor.hasPath(targetPath) && isListItemElement(editor.node(targetPath)[0])) {
        // If current item contains more than one block, they should be moved as well
        const nextPath = Path.next(currentItemPath);
        if (editor.hasPath(nextPath)) {
          const anchor = editor.start(nextPath);
          const focus = editor.end([...currentListPath, currentListNode.children.length - 1]);
          if (anchor && focus) {
            const childList = currentItemNode.children[currentItemNode.children.length - 1];
            if (isListElement(childList)) {
              if (childList.listType !== currentListNode.listType) {
                logger.log("Sublist has different type, changing type to match parent list");
                Transforms.setNodes(
                  editor,
                  { listType: currentListNode.listType },
                  { at: [...currentItemPath, currentItemNode.children.length - 1] },
                );
              }
              logger.log("Moving following list items to sublist of selected list item");
              Transforms.moveNodes(editor, {
                match: (node) => isListItemElement(node),
                mode: "lowest",
                at: { anchor, focus },
                to: [...currentItemPath, currentItemNode.children.length - 1, childList.children.length],
              });
            } else {
              logger.log(
                "No sublist exists, wrapping following list items in new list and moving it to selected list item",
              );
              Transforms.wrapNodes(editor, defaultListBlock(currentListNode.listType), {
                match: (n, p) => isListItemElement(n) && Path.equals(Path.parent(p), Path.parent(currentItemPath)),
                at: { anchor, focus },
              });
              Transforms.moveNodes(editor, {
                at: Path.next(currentItemPath),
                to: [...currentItemPath, currentItemNode.children.length],
              });
            }
          }
        }

        const nextListPath = Path.next(currentListPath);
        if (editor.hasPath(nextListPath)) {
          logger.log("Current list is followed by more blocks, moving them to selected list item");
          Transforms.moveNodes(editor, {
            match: isListElement,
            at: {
              anchor: editor.start(nextListPath),
              focus: editor.end([...parentPath, parentNode.children.length - 1]),
            },
            to: [...currentItemPath, currentItemNode.children.length],
          });
        }

        // Move selected list item to correct index in upper list.
        Transforms.moveNodes(editor, { at: currentItemPath, to: Path.next(targetPath) });
        // Clean up old list node if it initally had one item only
        if (currentListNode.children.length === 1) {
          logger.log("List contains exactly one item, removing it");
          Transforms.removeNodes(editor, { at: currentListPath });
        }
        return true;
      }
    }
    // Move list item down only if it is not the first sibling.
    else if (Path.hasPrevious(currentItemPath)) {
      const previousPath = Path.previous(currentItemPath);
      const [previousNode] = editor.node(previousPath);

      if (!isListItemElement(previousNode)) return false;
      const [lastNode, lastNodePath] = editor.node([...previousPath, previousNode.children.length - 1]);
      // If previous list item has a sublist, move current item inside it.
      if (isListElement(lastNode)) {
        logger.log("Moving current list item into sublist of previous list item");
        Transforms.moveNodes(editor, { at: currentItemPath, to: [...lastNodePath, lastNode.children.length] });
        // Wrap current item inside a new list and move the new list to the previous list item.
      } else {
        logger.log("Wrapping current list item inside a new list and moving it to the previous list item");
        Transforms.wrapNodes(editor, defaultListBlock(currentListNode.listType), { at: currentItemPath });
        Transforms.moveNodes(editor, { at: currentItemPath, to: [...previousPath, previousNode.children.length] });
      }
      return true;
    }
  });
  return false;
};
