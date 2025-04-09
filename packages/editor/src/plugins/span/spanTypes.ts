/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Descendant, ElementType } from "slate";

export const SPAN_ELEMENT_TYPE = "span" as const;
export const SPAN_PLUGIN = "span" as const;

export interface SpanElement {
  type: "span";
  data: {
    lang?: string;
    dir?: string;
  };
  children: Descendant[];
}

export interface SpanPluginOptions {
  allowedParents: ElementType[];
}
