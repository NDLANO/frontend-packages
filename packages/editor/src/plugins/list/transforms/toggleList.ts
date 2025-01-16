/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Editor, Element, Path, Range, Transforms } from "slate";
import { LIST_ELEMENT_TYPE, type ListType } from "../listTypes";
import { isElementOfType } from "../../../utils/isElementType";
import { PARAGRAPH_ELEMENT_TYPE } from "../../paragraph/paragraphTypes";
import { defaultListBlock, defaultListItemBlock } from "../listBlocks";
import { isListElement, isListItemElement } from "../queries/listElementQueries";

const isPathSelected = (editor: Editor, path: Path) => {
  return Range.isRange(editor.selection) && Range.includes(editor.selection, path.concat(0));
};

const getListItemType = (editor: Editor, path: Path) => {
  const [parentNode] = editor.node(Path.parent(path));

  if (isListElement(parentNode)) {
    return parentNode.listType;
  }
  return "numbered-list";
};

const hasListItem = (editor: Editor, type?: string) => {
  // For all selected list elements
  for (const [, path] of editor.nodes({ match: isListItemElement })) {
    if (type) {
      const itemListType = getListItemType(editor, path);

      if (itemListType === type && isPathSelected(editor, path)) {
        return true;
      }
    } else if (isPathSelected(editor, path)) {
      return true;
    }
  }
  return false;
};

const isSelectionOnlyOfType = (editor: Editor, type: ListType) => {
  let hasListItems = false;

  // For all selected list elements
  for (const [, path] of editor.nodes({
    match: (node, path) => isListItemElement(node) && isPathSelected(editor, path),
  })) {
    const [parentNode] = editor.parent(path);
    if (isListElement(parentNode)) {
      if (parentNode.listType !== type) {
        return false;
      } else if (parentNode.listType === type) {
        hasListItems = true;
        continue;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  return hasListItems;
};

export const toggleList = (editor: Editor, listType: ListType) => {
  if (!Range.isRange(editor.selection)) return;

  // If all selected list items are of type input by user, unwrap all of them by lifting them out.
  if (isSelectionOnlyOfType(editor, listType)) {
    // List normalizer removes empty list blocks afterwards.
    return Transforms.liftNodes(editor, {
      match: (node, path) => isListItemElement(node) && isPathSelected(editor, path),
      mode: "all",
    });
    // Selected list items are of mixed type.
  } else if (hasListItem(editor)) {
    // Transforms.setNodes(editor, { listType }, { match: isListElement });
    // editor.withoutNormalizing(() => {
    //   // const listNodes = editor.nodes({
    //   //   match: isListElement,
    //   // });
    // });
    // Mark list items for change. The actual change happens in list normalizer.
    // TODO: I want to rewrite this to not use `changeTo`
    Transforms.setNodes(
      editor,
      { changeTo: listType },
      {
        match: (node, path) => {
          if (!isListItemElement(node) || !isPathSelected(editor, path)) return false;
          const [parentNode] = editor.node(Path.parent(path));
          const shouldChange =
            Element.isElement(parentNode) && parentNode.type === LIST_ELEMENT_TYPE && parentNode.listType !== listType;
          return shouldChange;
        },
        mode: "all",
      },
    );
    // No list items are selected
  } else {
    // Wrap all regular text blocks. (paragraph, quote, blockquote)

    const nodes = Array.from(
      editor.nodes({
        // TODO: Text match stuff
        match: (n) => isElementOfType(n, [PARAGRAPH_ELEMENT_TYPE]),
        at: editor.unhangRange(editor.selection),
      }),
    );
    // Find the highest level element that should be toggled.
    const targetPathLevel = nodes.reduce<number>((shortestPath, [, path]) => {
      if (path.length < shortestPath && !nodes.find(([, childPath]) => Path.isChild(childPath, path))) {
        return path.length;
      }
      return shortestPath;
    }, Infinity);

    editor.withoutNormalizing(() => {
      for (const [, path] of nodes) {
        if (path.length !== targetPathLevel) {
          continue;
        }
        Transforms.wrapNodes(editor, defaultListItemBlock(), {
          at: path,
        });
        Transforms.wrapNodes(editor, defaultListBlock(listType), {
          at: path,
        });
      }
    });
  }
};
