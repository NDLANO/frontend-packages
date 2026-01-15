/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Element, Node, type ElementType } from "slate";

export const isElementOfType = <TType extends ElementType>(
  node: Node | undefined,
  type: TType | TType[] | undefined,
): node is TType extends any[] ? Extract<Element, { type: TType[number] }>[] : Extract<Element, { type: TType }> => {
  if (!node || !Node.isElement(node)) {
    return false;
  }
  return Array.isArray(type) ? type.includes(node.type as TType) : node.type === type;
};
