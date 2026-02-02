/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { isKeyHotkey } from "is-hotkey";
import { Node, Path, Transforms } from "slate";
import { createPlugin } from "../../core/createPlugin";
import { HEADING_ELEMENT_TYPE } from "../heading/headingTypes";
import { PARAGRAPH_ELEMENT_TYPE } from "../paragraph/paragraphTypes";
import { listOnBackspace } from "./handlers/listOnBackspace";
import { listOnEnter } from "./handlers/listOnEnter";
import { listOnTab } from "./handlers/listOnTab";
import { defaultListBlock } from "./listBlocks";
import {
  LIST_ELEMENT_TYPE,
  LIST_ITEM_ELEMENT_TYPE,
  LIST_PLUGIN,
  type ListElementType,
  type ListPluginOptions,
} from "./listTypes";
import { isListElement, isListItemElement } from "./queries/listElementQueries";

export const listPluginDefaultOptions: ListPluginOptions = {
  allowedListItemFirstChildTypes: [PARAGRAPH_ELEMENT_TYPE, HEADING_ELEMENT_TYPE] as const,
};

export const listPlugin = createPlugin<ListElementType, ListPluginOptions>({
  name: LIST_PLUGIN,
  type: LIST_ELEMENT_TYPE,
  options: listPluginDefaultOptions,
  shortcuts: {
    dentList: { keyCondition: isKeyHotkey("shift?+tab"), handler: listOnTab },
    listItemInsertion: { keyCondition: isKeyHotkey("enter"), handler: listOnEnter },
    listItemDeletion: { keyCondition: isKeyHotkey("backspace"), handler: listOnBackspace },
  },
  normalize: (editor, node, path, logger, options) => {
    if (isListItemElement(node)) {
      const [parentNode] = editor.node(Path.parent(path));
      if (Node.isElement(parentNode) && parentNode.type !== LIST_ELEMENT_TYPE) {
        logger.log("ListItem is not placed inside list, unwrapping.");
        Transforms.unwrapNodes(editor, { at: path });
        return true;
      }

      for (const [child, childPath] of Node.children(editor, path)) {
        if (Node.isText(child)) {
          logger.log("ListItem contains direct text, wrapping in paragraph.");
          Transforms.wrapNodes(editor, { type: PARAGRAPH_ELEMENT_TYPE, children: [{ text: "" }] }, { at: childPath });
          return true;
        }
      }

      const firstChild = node.children[0];
      if (Node.isElement(firstChild) && !options.allowedListItemFirstChildTypes?.includes(firstChild.type)) {
        logger.log("First child is not an allowed element, inserting default text element type");
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
      if (
        node.children.length === 0 ||
        (node.children.every((node) => Node.isText(node)) && Node.string(node) === "")
      ) {
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
  transform: (editor) => {
    const { supportsElement } = editor;
    editor.supportsElement = (element) => {
      if (element.type === LIST_ITEM_ELEMENT_TYPE) {
        return true;
      }
      return supportsElement?.(element);
    };

    return editor;
  },
});
