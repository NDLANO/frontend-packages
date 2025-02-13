/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Element, Node, type NodeEntry } from "slate";
import type { ElementType } from "../types";

export const isElementOfType = <TType extends ElementType>(
  node: Node | undefined,
  type: TType | TType[] | undefined,
): node is TType extends any[] ? Extract<Element, { type: TType[number] }>[] : Extract<Element, { type: TType }> => {
  if (!Element.isElement(node)) {
    return false;
  }
  return Array.isArray(type) ? type.includes(node.type as TType) : node.type === type;
};

export const isEntryOfType = <TType extends ElementType>(
  entry: NodeEntry | undefined,
  type: TType | TType[] | undefined,
): entry is NodeEntry<
  TType extends any[] ? Extract<Element, { type: TType[number] }>[] : Extract<Element, { type: TType }>
> => {
  const node = entry?.[0];
  if (!Element.isElement(node)) {
    return false;
  }
  return Array.isArray(type) ? type.includes(node.type as TType) : node.type === type;
};
