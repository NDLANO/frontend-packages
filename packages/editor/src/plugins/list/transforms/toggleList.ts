/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Editor, Location, Path, Range, Transforms } from "slate";
import { LIST_PLUGIN, type ListPluginOptions, type ListType } from "../listTypes";
import { isElementOfType } from "../../../utils/isElementType";
import { defaultListBlock, defaultListItemBlock } from "../listBlocks";
import { isListElement, isListItemElement } from "../queries/listElementQueries";

const isPathSelected = (editor: Editor, path: Path): boolean => {
  return !!editor.selection && Location.isRange(editor.selection) && Range.includes(editor.selection, path.concat(0));
};

const getListItemType = (editor: Editor, path: Path): ListType => {
  const [parentNode] = editor.node(Path.parent(path));
  return isListElement(parentNode) ? parentNode.listType : "numbered-list";
};

const hasListItem = (editor: Editor, type?: string) => {
  // For all selected list elements
  for (const [, path] of editor.nodes({ match: isListItemElement })) {
    const isSelected = isPathSelected(editor, path);
    if (!type && isSelected) return true;
    const itemListType = getListItemType(editor, path);
    if (type && isSelected && itemListType === type) return true;
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
      if (parentNode.listType !== type) return false;
      hasListItems = true;
    } else {
      return false;
    }
  }
  return hasListItems;
};

export const toggleList = (editor: Editor, listType: ListType, options?: ListPluginOptions) => {
  if (!editor.selection || !Location.isRange(editor.selection)) return;
  const pluginOptions = options ?? editor.getPluginOptions<ListPluginOptions>(LIST_PLUGIN);

  // If all selected list items are of type input by user, unwrap all of them by lifting them out.
  if (isSelectionOnlyOfType(editor, listType)) {
    // List normalizer removes empty list blocks afterwards.
    return Transforms.liftNodes(editor, {
      match: (node, path) => isListItemElement(node) && isPathSelected(editor, path),
      mode: "all",
    });
    // Selected list items are of mixed type.
  } else if (hasListItem(editor)) {
    // Mark list items for change. The actual change happens in list normalizer.
    // TODO: I want to rewrite this to not use `changeTo`
    Transforms.setNodes(
      editor,
      { changeTo: listType },
      {
        match: (node, path) => {
          if (!isListItemElement(node) || !isPathSelected(editor, path)) return false;
          const [parentNode] = editor.node(Path.parent(path));
          return isListElement(parentNode) && parentNode.listType !== listType;
        },
        mode: "all",
      },
    );
    // No list items are selected
  } else {
    // Wrap all regular text blocks. (paragraph, quote, blockquote)
    const nodes = Array.from(
      editor.nodes({
        match: (n) => isElementOfType(n, pluginOptions?.allowedListItemFirstChildTypes),
        at: editor.unhangRange(editor.selection),
      }),
    );
    // Find the highest level element that should be toggled.
    const targetPathLevel = nodes.reduce<number>((shortestPath, [, path]) => {
      const isTopLevel = !nodes.some(([, childPath]) => Path.isChild(childPath, path));
      return isTopLevel ? Math.min(shortestPath, path.length) : shortestPath;
    }, Infinity);

    editor.withoutNormalizing(() => {
      for (const [, path] of nodes) {
        if (path.length !== targetPathLevel) {
          continue;
        }
        Transforms.wrapNodes(editor, defaultListItemBlock(), { at: path });
        Transforms.wrapNodes(editor, defaultListBlock(listType), { at: path });
      }
    });
  }
};
