/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { jsx as slatejsx } from "slate-hyperscript";
import { LIST_ELEMENT_TYPE, LIST_ITEM_ELEMENT_TYPE, type ListType } from "./listTypes";

export const defaultListBlock = (listType: ListType) => {
  return slatejsx("element", { type: LIST_ELEMENT_TYPE, listType, data: {} });
};

export const defaultListItemBlock = () => {
  return slatejsx("element", { type: LIST_ITEM_ELEMENT_TYPE });
};
