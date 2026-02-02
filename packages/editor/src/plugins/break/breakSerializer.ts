/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { jsx as slatejsx } from "slate-hyperscript";
import { createSerializer } from "../../core/createSerializer";
import { createHtmlTag } from "../../serialization/html/htmlSerializationHelpers";
import { BREAK_ELEMENT_TYPE, type BreakSerializerOptions } from "./breakTypes";
import { isBreakElement } from "./queries/breakQueries";

export const breakSerializer = createSerializer<BreakSerializerOptions>({
  options: {
    allowedBreakContainers: ["section", "div", "aside", "li", "h1", "h2", "h3", "h4", "h5", "h6", "pre"],
  },
  deserialize: (el, _, options) => {
    if (el.tagName.toLowerCase() !== BREAK_ELEMENT_TYPE) return;

    if (el.parentElement && el.parentElement.tagName) {
      const tagName = el.parentElement.tagName.toLowerCase();
      if (options.allowedBreakContainers?.includes(tagName)) {
        return slatejsx("element", { type: BREAK_ELEMENT_TYPE }, [{ text: "" }]);
      }
    }
    return slatejsx("text", { text: "\n" });
  },
  serialize: (node) => {
    if (!isBreakElement(node)) return;
    return createHtmlTag({ tag: "br", shorthand: true });
  },
});
