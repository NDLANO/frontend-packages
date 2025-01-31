/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { jsx as slatejsx } from "slate-hyperscript";
import { PARAGRAPH_ELEMENT_TYPE } from "./paragraphTypes";
import { isParagraphElement } from "./queries/paragraphElementQueries";
import { Node, Text } from "slate";
import {
  createDataAttributes,
  createHtmlTag,
  parseElementAttributes,
} from "../../serialization/html/htmlSerializationHelpers";
import { createSerializer } from "../../core/createSerializer";

export const paragraphSerializer = createSerializer({
  deserialize(el, children) {
    if (el.tagName.toLowerCase() !== "p") return;

    const data = parseElementAttributes(Array.from(el.attributes), ["align", "data-align"]);

    return slatejsx(
      "element",
      {
        type: PARAGRAPH_ELEMENT_TYPE,
        ...(Object.keys(data).length > 0 ? { data } : {}),
      },
      children,
    );
  },
  serialize(node, children) {
    if (!isParagraphElement(node)) return;

    /**
      We insert empty p tag throughout the document to enable positioning the cursor
      between element with no spacing (i.e two images). We need to remove these element
      on seriaization.
     */

    if (Node.string(node) === "" && node.children.length === 1 && Text.isText(node.children[0])) return undefined;

    if (node.serializeAsText) {
      return children;
    }

    const data = createDataAttributes({ align: node.data?.align });
    return createHtmlTag({ tag: "p", data, children });
  },
});
