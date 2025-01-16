/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Node } from "slate";
import { isElementOfType } from "../../../utils/isElementType";
import { LIST_ELEMENT_TYPE, LIST_ITEM_ELEMENT_TYPE } from "../listTypes";

export const isListItemElement = (node: Node) => isElementOfType(node, LIST_ITEM_ELEMENT_TYPE);

export const isListElement = (node: Node) => isElementOfType(node, LIST_ELEMENT_TYPE);
