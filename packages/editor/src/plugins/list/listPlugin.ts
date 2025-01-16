/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Editor, Element, Node, Path, Text, Transforms } from "slate";
import { createPlugin } from "../../core/createPlugin";
import { LIST_ELEMENT_TYPE, LIST_ITEM_ELEMENT_TYPE } from "./listTypes";
import { PARAGRAPH_ELEMENT_TYPE } from "../paragraph/paragraphTypes";
import { isKeyHotkey } from "is-hotkey";
import { toggleList } from "./transforms/toggleList";
import { listOnTab } from "./handlers/listOnTab";
import { listOnEnter } from "./handlers/listOnEnter";
import { listOnBackspace } from "./handlers/listOnBackspace";
import { isListElement, isListItemElement } from "./queries/listElementQueries";
import { defaultListBlock } from "./listBlocks";

export const listPlugin = createPlugin({
  type: LIST_ELEMENT_TYPE,
  shortcuts: {
    toggleNumberedList: {
      keyCondition: isKeyHotkey("mod+o"),
      handler: (editor, event) => {
        event.preventDefault();
        toggleList(editor, "numbered-list");
        return true;
      },
    },
    toggleBulletedList: {
      keyCondition: isKeyHotkey("mod+l"),
      handler: (editor, event) => {
        event.preventDefault();
        toggleList(editor, "bulleted-list");
        return true;
      },
    },
    dentList: { keyCondition: isKeyHotkey("shift?+tab"), handler: listOnTab },
    listItemInsertion: { keyCondition: isKeyHotkey("enter"), handler: listOnEnter },
    listItemDeletion: { keyCondition: isKeyHotkey("backspace"), handler: listOnBackspace },
  },
  normalize: (editor, node, path) => {
    if (isListItemElement(node)) {
      // If listItem is not placed insine list, unwrap it.
      const [parentNode] = editor.node(Path.parent(path));
      if (Element.isElement(parentNode) && parentNode.type !== LIST_ELEMENT_TYPE) {
        Transforms.unwrapNodes(editor, { at: path });
        return true;
      }

      // If listItem contains text, wrap it in paragraph.
      for (const [child, childPath] of Node.children(editor, path)) {
        if (Text.isText(child)) {
          Transforms.wrapNodes(
            editor,
            {
              type: PARAGRAPH_ELEMENT_TYPE,
              children: [{ text: "" }],
            },
            { at: childPath },
          );
          return true;
        }
      }

      // If first child is not a paragraph, heading or quote, insert an empty paragraph
      const firstChild = node.children[0];
      if (Element.isElement(firstChild)) {
        // Some weird stuff here TODO: Fix
        if (![PARAGRAPH_ELEMENT_TYPE].includes(firstChild.type)) {
          Transforms.insertNodes(
            editor,
            {
              type: PARAGRAPH_ELEMENT_TYPE,
              children: [{ text: "" }],
            },
            { at: [...path, 0] },
          );
          return true;
        }
      }

      // TODO: Handle this, consider if we need changeTo
      // Handle changing list-items marked for listType change
      if (node.changeTo) {
        const changeTo = node.changeTo;
        Editor.withoutNormalizing(editor, () => {
          Transforms.unsetNodes(editor, ["changeTo"], { at: path });
          Transforms.wrapNodes(editor, defaultListBlock(changeTo), {
            at: path,
          });
          Transforms.liftNodes(editor, { at: path });
        });
        return true;
      }
    }
    if (isListElement(node)) {
      // If list is empty or zero-length text element, remove it
      if (node.children.length === 0 || (Text.isTextList(node.children) && Node.string(node) === "")) {
        Transforms.removeNodes(editor, { at: path });
        return true;
      }

      // If list contains elements of other type than list-item, wrap it
      for (const [child, childPath] of Node.children(editor, path)) {
        if (!Element.isElement(child) || child.type !== LIST_ITEM_ELEMENT_TYPE) {
          Transforms.wrapNodes(
            editor,
            {
              type: LIST_ITEM_ELEMENT_TYPE,
              children: [],
            },
            { at: childPath },
          );
          return true;
        }
      }

      // Merge list with previous list if identical type
      if (Path.hasPrevious(path)) {
        const prevPath = Path.previous(path);
        if (Editor.hasPath(editor, prevPath)) {
          const [prevNode] = Editor.node(editor, prevPath);

          if (Element.isElement(prevNode) && prevNode.type === LIST_ELEMENT_TYPE) {
            if (node.listType === prevNode.listType) {
              Transforms.mergeNodes(editor, { at: path });
              return true;
            }
          }
        }
      }

      // Merge list with next list if identical type
      const nextPath = Path.next(path);
      if (Editor.hasPath(editor, nextPath)) {
        const [nextNode] = Editor.node(editor, nextPath);

        if (Element.isElement(nextNode) && nextNode.type === LIST_ELEMENT_TYPE) {
          if (node.listType === nextNode.listType && nextNode.children.length > 0) {
            Transforms.mergeNodes(editor, { at: nextPath });
            return true;
          }
        }
      }
    }
    return false;
  },
});
