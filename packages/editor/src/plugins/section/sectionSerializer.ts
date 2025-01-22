/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Text } from "slate";
import { jsx as slatejsx } from "slate-hyperscript";
import type { SlateSerializer } from "../../types";
import { SECTION_ELEMENT_TYPE } from "./sectionTypes";
import { createHtmlTag } from "../../serialization/html/htmlSerializationHelpers";
import { isElementOfType } from "../../utils/isElementType";

export const sectionSerializer: SlateSerializer = {
  deserialize(el, children) {
    const tag = el.tagName.toLowerCase();
    if (tag === SECTION_ELEMENT_TYPE) {
      // Wrap single text node in section in a paragraph
      if (children.length === 1 && Text.isText(children[0])) {
        children = [slatejsx("element", { type: "paragraph" }, children)];
      }
      return slatejsx("element", { type: SECTION_ELEMENT_TYPE }, children);
    }
    return;
  },
  serialize(node, children) {
    if (isElementOfType(node, SECTION_ELEMENT_TYPE)) {
      return createHtmlTag({ tag: SECTION_ELEMENT_TYPE, children });
    }
  },
};
