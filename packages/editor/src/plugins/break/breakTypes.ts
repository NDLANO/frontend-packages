/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Descendant } from "slate";

export const BREAK_ELEMENT_TYPE = "br" as const;

export type BreakElementType = typeof BREAK_ELEMENT_TYPE;

export interface BreakElement {
  type: "br";
  children: Descendant[];
}
