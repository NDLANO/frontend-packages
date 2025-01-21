/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { jsx as slatejsx } from "slate-hyperscript";
import type { SlateSerializer } from "../../types";
import { BREAK_ELEMENT_TYPE } from "./breakTypes";
import { isBreakElement } from "./queries/breakQueries";
import { createHtmlTag } from "../../serialization/html/htmlSerializationHelpers";

// TODO: This should be configurable
const allowedBreakContainers = [
  "section",
  "div",
  "aside",
  "li",
  "blockquote",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "summary",
  "pre",
];

export const breakSerializer: SlateSerializer = {
  deserialize(el) {
    if (el.tagName.toLowerCase() !== BREAK_ELEMENT_TYPE) return;

    if (el.parentElement && el.parentElement.tagName) {
      const tagName = el.parentElement.tagName.toLowerCase();
      if (allowedBreakContainers.includes(tagName)) {
        return slatejsx("element", { type: BREAK_ELEMENT_TYPE }, [{ text: "" }]);
      }
    }
    return slatejsx("text", { text: "\n" });
  },
  serialize(node) {
    if (!isBreakElement(node)) return;
    return createHtmlTag({ tag: "br", shorthand: true });
  },
};
