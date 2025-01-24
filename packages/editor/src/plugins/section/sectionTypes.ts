/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Descendant } from "slate";
import type { ElementType } from "../../types";

export const SECTION_ELEMENT_TYPE = "section" as const;

export type SectionElementType = "section";

export interface SectionElement {
  type: "section";
  children: Descendant[];
}

export interface SectionPluginConfiguration {
  allowedFirstElements?: ElementType[];
}
