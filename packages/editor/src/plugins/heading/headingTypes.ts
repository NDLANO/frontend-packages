/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Descendant } from "slate";

export const HEADING_ELEMENT_TYPE = "heading" as const;
export type HeadingElementType = typeof HEADING_ELEMENT_TYPE;

export interface HeadingElement {
  type: "heading";
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: Descendant[];
}
