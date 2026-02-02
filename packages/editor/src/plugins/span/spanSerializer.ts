/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { jsx as slatejsx } from "slate-hyperscript";
import { createSerializer } from "../../core/createSerializer";
import { createHtmlTag, parseElementAttributes } from "../../serialization/html/htmlSerializationHelpers";
import { isSpanElement } from "./spanQueries";
import { SPAN_ELEMENT_TYPE } from "./spanTypes";

export const spanSerializer = createSerializer({
  deserialize(el, children) {
    if (el.tagName.toLowerCase() !== "span") return;
    const attributes = parseElementAttributes(Array.from(el.attributes));

    if (!Object.keys(attributes).length) return;

    return slatejsx("element", { type: SPAN_ELEMENT_TYPE, data: attributes }, children);
  },
  serialize(node, children) {
    if (!isSpanElement(node)) return;
    if (!Object.keys(node.data ?? {}).length) {
      return children;
    }

    return createHtmlTag({ tag: SPAN_ELEMENT_TYPE, data: node.data, children });
  },
});
