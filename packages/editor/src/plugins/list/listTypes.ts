/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Descendant } from "slate";
import type { ElementType } from "../../types";

export const LIST_ELEMENT_TYPE = "list" as const;
export const LIST_ITEM_ELEMENT_TYPE = "list-item" as const;

export type ListElementType = "list";
export type ListItemElementType = "list-item";

export const LIST_TYPES = ["letter-list", "bulleted-list", "numbered-list"] as const;

export type ListType = (typeof LIST_TYPES)[number];

export interface ListElement {
  type: "list";
  listType: ListType;
  data: {
    start?: number;
  };
  children: Descendant[];
}

export interface ListItemElement {
  type: "list-item";
  changeTo?: string;
  children: Descendant[];
}

export interface ListPluginConfiguration {
  allowedListItemFirstChildTypes?: ElementType[];
}
