/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Descendant } from "slate";

export const PARAGRAPH_ELEMENT_TYPE = "paragraph";

export type ParagraphElementType = typeof PARAGRAPH_ELEMENT_TYPE;

export interface ParagraphElement {
  type: "paragraph";
  data?: {
    align?: string;
  };
  serializeAsText?: boolean;
  children: Descendant[];
}
