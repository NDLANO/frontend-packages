/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Editor, Element, NodeEntry } from "slate";
import { isElementOfType } from "../utils/isElementType";
import type { ElementType } from "../types";

export const getCurrentBlock = <T extends ElementType>(
  editor: Editor,
  type: T | T[],
): NodeEntry<Extract<Element, { type: T }>> | undefined => {
  const [match] = editor.nodes<Extract<Element, { type: T }>>({
    match: (n) => isElementOfType(n, type),
    mode: "lowest",
  });
  return match;
};
