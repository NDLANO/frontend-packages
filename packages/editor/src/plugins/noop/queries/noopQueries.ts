/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Node } from "slate";
import { isElementOfType } from "../../../utils/isElementType";
import { NOOP_ELEMENT_TYPE } from "../noopTypes";

export const isNoopElement = (node: Node | undefined) => isElementOfType(node, NOOP_ELEMENT_TYPE);
