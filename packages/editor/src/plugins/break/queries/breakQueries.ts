/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Descendant } from "slate";
import { isElementOfType } from "../../../utils/isElementType";
import { BREAK_ELEMENT_TYPE } from "../breakTypes";

export const isBreakElement = (node: Descendant) => isElementOfType(node, BREAK_ELEMENT_TYPE);
