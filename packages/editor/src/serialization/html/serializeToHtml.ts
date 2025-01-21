/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Element, type Descendant } from "slate";
import type { SlateSerializer } from "../../types";
import { commonSerializers, extendedSerializers } from "./htmlSerializers";

const serialize = (node: Descendant, rules: SlateSerializer[]): string | undefined => {
  const children = Element.isElement(node)
    ? node.children
        .map((n) => serialize(n, rules))
        .filter((n) => !!n)
        .join("")
    : "";

  for (const rule of rules) {
    if (!rule.serialize) {
      continue;
    }

    const ret = rule.serialize(node, children);
    if (ret === undefined) {
      continue;
    } else if (ret === null) {
      return undefined;
    } else return ret;
  }

  return children;
};

const DELETE_REGEXP = /<deleteme><\/deleteme>/g;

export const serializeToHtml = (value: Descendant[], rules: SlateSerializer[]) => {
  const elements = value
    .map((descendant) => serialize(descendant, rules))
    .filter((n) => !!n)
    .join("");

  return elements.replace(DELETE_REGEXP, "");
};

export const inlineContentToHTML = (value: Descendant[]) => {
  return serializeToHtml(value, commonSerializers);
};

export const blockContentToHTML = (value: Descendant[]) => {
  return serializeToHtml(value, extendedSerializers);
};
