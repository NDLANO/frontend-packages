/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Descendant } from "slate";

export const LINK_ELEMENT_TYPE = "link";
export type LinkElementType = typeof LINK_ELEMENT_TYPE;

export type LinkEmbedData = {
  href: string;
  target?: string;
  title?: string;
  rel?: string;
};

export interface LinkElement {
  type: "link";
  data: LinkEmbedData;
  children: Descendant[];
  isFirstEdit?: boolean;
}
