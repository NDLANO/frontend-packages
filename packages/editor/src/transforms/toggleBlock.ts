/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Element, Transforms, type BlockElementType, type Editor } from "slate";
import { PARAGRAPH_ELEMENT_TYPE } from "../plugins/paragraph/paragraphTypes";
import { isElementOfType } from "../utils/isElementType";

// TODO: This could be configurable
const defaultType = PARAGRAPH_ELEMENT_TYPE;

export const toggleBlock = <T extends BlockElementType>(
  editor: Editor,
  type: T,
  data: Partial<Extract<Element, { type: T }>>,
): boolean => {
  if (!editor.selection) return false;

  const [isActive] = editor.nodes({
    at: editor.selection,
    match: (n) => isElementOfType(n, type),
  });

  if (!!isActive && type === defaultType) return false;

  Transforms.setNodes(editor, { type: isActive ? defaultType : type, ...data }, { at: editor.selection });
  return true;
};
