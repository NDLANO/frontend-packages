/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Element, Node, Path, Text, Transforms } from "slate";
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
  name: LIST_ELEMENT_TYPE,
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
  normalize: (editor, node, path, logger) => {
    if (isListItemElement(node)) {
      const [parentNode] = editor.node(Path.parent(path));
      if (Element.isElement(parentNode) && parentNode.type !== LIST_ELEMENT_TYPE) {
        logger.log("ListItem is not placed inside list, unwrapping.");
        Transforms.unwrapNodes(editor, { at: path });
        return true;
      }

      for (const [child, childPath] of Node.children(editor, path)) {
        if (Text.isText(child)) {
          logger.log("ListItem contains direct text, wrapping in paragraph.");
          Transforms.wrapNodes(editor, { type: PARAGRAPH_ELEMENT_TYPE, children: [{ text: "" }] }, { at: childPath });
          return true;
        }
      }

      const firstChild = node.children[0];
      // Some weird stuff here TODO: Fix
      if (Element.isElement(firstChild) && ![PARAGRAPH_ELEMENT_TYPE].includes(firstChild.type)) {
        logger.log("First child is not a text element, inserting default text element type");
        Transforms.insertNodes(
          editor,
          { type: PARAGRAPH_ELEMENT_TYPE, children: [{ text: "" }] },
          { at: [...path, 0] },
        );
        return true;
      }

      // TODO: Handle this, consider if we need changeTo
      if (node.changeTo) {
        const changeTo = node.changeTo;
        logger.log("Converting list items to new list type");
        editor.withoutNormalizing(() => {
          Transforms.unsetNodes(editor, ["changeTo"], { at: path });
          Transforms.wrapNodes(editor, defaultListBlock(changeTo), { at: path });
          Transforms.liftNodes(editor, { at: path });
        });
        return true;
      }
    }
    if (isListElement(node)) {
      if (node.children.length === 0 || (Text.isTextList(node.children) && Node.string(node) === "")) {
        logger.log("List is empty, removing.");
        Transforms.removeNodes(editor, { at: path });
        return true;
      }

      for (const [child, childPath] of Node.children(editor, path)) {
        if (!isListItemElement(child)) {
          logger.log("List contains illegal child type, wrapping in list-item");
          Transforms.wrapNodes(editor, { type: LIST_ITEM_ELEMENT_TYPE, children: [] }, { at: childPath });
          return true;
        }
      }

      if (Path.hasPrevious(path)) {
        const prevPath = Path.previous(path);
        if (editor.hasPath(prevPath)) {
          const [prevNode] = editor.node(prevPath);
          if (isListElement(prevNode) && node.listType === prevNode.listType) {
            logger.log("Current list and previous list are of same type, merging.");
            Transforms.mergeNodes(editor, { at: path });
            return true;
          }
        }
      }

      const nextPath = Path.next(path);
      if (editor.hasPath(nextPath)) {
        const [nextNode] = editor.node(nextPath);
        if (isListElement(nextNode) && node.listType === nextNode.listType && !!nextNode.children.length) {
          logger.log("Current list and next list are of same type, merging.");
          Transforms.mergeNodes(editor, { at: nextPath });
          return true;
        }
      }
    }
    return false;
  },
});
