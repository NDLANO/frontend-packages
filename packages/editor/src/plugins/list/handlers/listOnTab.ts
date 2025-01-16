/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Transforms, Path } from "slate";
import { ReactEditor } from "slate-react";

import type { ShortcutHandler } from "../../../core";
import { hasNodeOfType } from "../../../queries/hasNodeOfType";
import { LIST_ELEMENT_TYPE, LIST_ITEM_ELEMENT_TYPE } from "../listTypes";
import { getCurrentBlock } from "../../../queries/getCurrentBlock";
import { PARAGRAPH_ELEMENT_TYPE } from "../../paragraph/paragraphTypes";
import { isElementOfType } from "../../../utils/isElementType";
import { defaultListBlock } from "../listBlocks";
import { isListElement, isListItemElement } from "../queries/listElementQueries";

export const listOnTab: ShortcutHandler = (editor, event) => {
  if (!editor.selection || !hasNodeOfType(editor, LIST_ELEMENT_TYPE)) return false;

  const listEntry = getCurrentBlock(editor, LIST_ELEMENT_TYPE);
  const listItemEntry = getCurrentBlock(editor, LIST_ITEM_ELEMENT_TYPE);

  if (!listEntry || !listItemEntry) return false;

  const [currentListNode, currentListPath] = listEntry;
  const [currentItemNode, currentItemPath] = listItemEntry;
  const [[currentTextBlockNode, currentTextBlockPath]] = editor.nodes({
    // TODO: Fix match text block
    match: (n) => isElementOfType(n, [PARAGRAPH_ELEMENT_TYPE]),
    mode: "lowest",
  });

  // selected text block node must be a direct child of list item.
  if (currentTextBlockNode && Path.isChild(currentTextBlockPath, currentItemPath)) {
    event.preventDefault();
  } else {
    return false;
  }

  if (
    !Path.isDescendant(editor.selection.anchor.path, currentItemPath) ||
    !Path.isDescendant(editor.selection.focus.path, currentItemPath)
  ) {
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
        if (isListElement(childList)) {
          if (childList.listType !== currentListNode.listType) {
            Transforms.setNodes(
              editor,
              { listType: currentListNode.listType },
              {
                at: [...currentItemPath, currentItemNode.children.length - 1],
              },
            );
          }
        }
        Transforms.liftNodes(editor, { at: currentItemPath });
        return true;
      }
      // Otherwise: It should exist a list item (targetPath) outside of the current list.
      // Try to move current list item there.
      const targetPath = Path.parent(Path.parent(currentItemPath));
      if (editor.hasPath(targetPath) && isListItemElement(editor.node(targetPath)[0])) {
        // If current item contains more than one block, they should be moved as well
        if (editor.hasPath(Path.next(currentItemPath))) {
          const anchor = editor.start(Path.next(currentItemPath));
          const focus = editor.end([...currentListPath, currentListNode.children.length - 1]);
          if (anchor && focus) {
            const childList = currentItemNode.children[currentItemNode.children.length - 1];
            if (isListElement(childList)) {
              // Child list will be changed to match current list type
              if (childList.listType !== currentListNode.listType) {
                Transforms.setNodes(
                  editor,
                  {
                    listType: currentListNode.listType,
                  },
                  {
                    at: [...currentItemPath, currentItemNode.children.length - 1],
                  },
                );
              }
              // move any following list-items of selected list to the child list.
              Transforms.moveNodes(editor, {
                match: (node) => isListItemElement(node),
                mode: "lowest",
                at: {
                  anchor,
                  focus,
                },
                to: [...currentItemPath, currentItemNode.children.length - 1, childList.children.length],
              });
            } else {
              // If a child list does not exist and following items exist, wrap following items in list and move it
              // inside selected item
              Transforms.wrapNodes(editor, defaultListBlock(currentListNode.listType), {
                match: (node) => {
                  if (!isListItemElement(node)) return false;
                  const nodePath = ReactEditor.findPath(editor, node);
                  return Path.equals(Path.parent(nodePath), Path.parent(currentItemPath));
                },
                at: {
                  anchor,
                  focus,
                },
              });
              Transforms.moveNodes(editor, {
                at: Path.next(currentItemPath),
                to: [...currentItemPath, currentItemNode.children.length],
              });
            }
          }
        }
        // If current list is followed by more blocks, move the blocks to the selected list item
        if (editor.hasPath(Path.next(currentListPath))) {
          Transforms.moveNodes(editor, {
            match: isListElement,
            at: {
              anchor: editor.start(Path.next(currentListPath)),
              focus: editor.end([...parentPath, parentNode.children.length - 1]),
            },
            to: [...currentItemPath, currentItemNode.children.length],
          });
        }

        // Move selected list item to correct index in upper list.
        Transforms.moveNodes(editor, {
          at: currentItemPath,
          to: Path.next(targetPath),
        });
        // Clean up old list node if it initally had one item only
        if (currentListNode.children.length === 1 || !Path.hasPrevious(currentItemPath)) {
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
        Transforms.moveNodes(editor, {
          at: currentItemPath,
          to: [...lastNodePath, lastNode.children.length],
        });
        return true;
        // Wrap current item inside a new list and move the new list to the previous list item.
      } else {
        Transforms.wrapNodes(editor, defaultListBlock(currentListNode.listType), {
          at: currentItemPath,
        });
        Transforms.moveNodes(editor, {
          at: currentItemPath,
          to: [...previousPath, previousNode.children.length],
        });
        return true;
      }
    }
  });
  return false;
};
