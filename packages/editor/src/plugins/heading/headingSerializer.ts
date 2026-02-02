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
import { HEADING_ELEMENT_TYPE } from "./headingTypes";
import { isHeadingElement } from "./queries/headingQueries";

export const headingSerializer = createSerializer({
  deserialize: (el, children) => {
    const tag = el.tagName.toLowerCase();
    if (tag === "h1") {
      return slatejsx("element", { type: HEADING_ELEMENT_TYPE, level: 2 }, children);
    }
    if (tag === "h2") {
      return slatejsx("element", { type: HEADING_ELEMENT_TYPE, level: 2 }, children);
    }
    if (tag === "h3") {
      return slatejsx("element", { type: HEADING_ELEMENT_TYPE, level: 3 }, children);
    }
    if (tag === "h4") {
      return slatejsx("element", { type: HEADING_ELEMENT_TYPE, level: 4 }, children);
    }
    if (tag === "h5") {
      return slatejsx("element", { type: HEADING_ELEMENT_TYPE, level: 4 }, children);
    }
    if (tag === "h6") {
      return slatejsx("element", { type: HEADING_ELEMENT_TYPE, level: 4 }, children);
    }
  },
  serialize: (node, children) => {
    if (isHeadingElement(node)) {
      return createHtmlTag({ tag: `h${node.level}`, children });
    }
  },
});
