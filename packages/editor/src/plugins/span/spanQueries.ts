/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Node } from "slate";
import { isElementOfType } from "../../utils/isElementType";
import { SPAN_ELEMENT_TYPE } from "./spanTypes";

export const isSpanElement = (node: Node | undefined) => isElementOfType(node, SPAN_ELEMENT_TYPE);
