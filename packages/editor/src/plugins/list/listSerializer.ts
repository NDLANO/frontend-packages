/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Node, type Descendant } from "slate";
import { jsx as slatejsx } from "slate-hyperscript";
import { createSerializer } from "../../core/createSerializer";
import { createHtmlTag } from "../../serialization/html/htmlSerializationHelpers";
import { isElementOfType } from "../../utils/isElementType";
import { BREAK_ELEMENT_TYPE } from "../break/breakTypes";
import { LINK_ELEMENT_TYPE } from "../link/linkTypes";
import { PARAGRAPH_ELEMENT_TYPE } from "../paragraph/paragraphTypes";
import { LIST_ELEMENT_TYPE, LIST_ITEM_ELEMENT_TYPE, type ListSerializerOptions } from "./listTypes";

export const listSerializer = createSerializer<ListSerializerOptions>({
  options: {
    inlineTypes: [
      // TYPE_CONCEPT_INLINE,
      // TYPE_FOOTNOTE,
      LINK_ELEMENT_TYPE,
      // TYPE_CONTENT_LINK,
      // TYPE_MATHML,
      // TYPE_COMMENT_INLINE
    ],
    allowedListTags: ["ol", "ul"],
  },
  deserialize(el, children, options) {
    const tag = el.tagName.toLowerCase();

    // TODO: I don't really like this deserialization. It relies on too many other plugins indirectly. Maybe we could make it configurable?
    // Transform children into a new array with all subsequent text/inlines wrapped into a paragraph with serializeAsText
    // Assures text/inlines in <li> will be parsed back to html without <p>-tag
    children = children.reduce((acc, cur) => {
      const lastElement = acc[acc.length - 1];
      if (!cur) {
        return acc;
      } else if (Node.isElement(cur) && !options.inlineTypes.includes(cur.type)) {
        if (cur.type === BREAK_ELEMENT_TYPE) {
          if (isElementOfType(lastElement, PARAGRAPH_ELEMENT_TYPE) && lastElement.serializeAsText) {
            lastElement.children.push({ text: "\n" });
          } else {
            acc.push(slatejsx("element", { type: PARAGRAPH_ELEMENT_TYPE, serializeAsText: true }, { text: "\n" }));
          }
        } else {
          acc.push(cur);
        }
        return acc;
      } else if (Node.isText(cur) || isElementOfType(cur, options.inlineTypes)) {
        if (isElementOfType(lastElement, PARAGRAPH_ELEMENT_TYPE) && lastElement.serializeAsText) {
          lastElement.children.push(cur);
          return acc;
        } else {
          acc.push(slatejsx("element", { type: PARAGRAPH_ELEMENT_TYPE, serializeAsText: true }, cur));
          return acc;
        }
      }
      acc.push(cur);
      return acc;
    }, [] as Descendant[]);

    if (tag === "ul") {
      return slatejsx("element", { type: LIST_ELEMENT_TYPE, listType: "bulleted-list", data: {} }, children);
    }
    if (tag === "ol") {
      const start = parseInt(el.getAttribute("start") ?? "");
      if (el.getAttribute("data-type") === "letters") {
        return slatejsx(
          "element",
          {
            type: LIST_ELEMENT_TYPE,
            listType: "letter-list",
            data: { start: start ? start : undefined },
          },
          children,
        );
      }
      // Default to numbered list if no type is set.
      else {
        return slatejsx(
          "element",
          {
            type: LIST_ELEMENT_TYPE,
            listType: "numbered-list",
            data: { start: start ? start : undefined },
          },
          children,
        );
      }
    }
    if (tag === "li") {
      return slatejsx("element", { type: LIST_ITEM_ELEMENT_TYPE }, children);
    }
  },
  serialize(node, children, options) {
    if (!Node.isElement(node)) return;

    if (node.type === LIST_ELEMENT_TYPE) {
      if (node.listType === "bulleted-list") {
        return createHtmlTag({ tag: "ul", children });
      }
      if (node.listType === "numbered-list") {
        const { start } = node.data;
        return createHtmlTag({ tag: "ol", data: { start }, children });
      }
      if (node.listType === "letter-list") {
        const { start } = node.data;
        return createHtmlTag({ tag: "ol", data: { start, "data-type": "letters" }, children });
      }
    }
    if (node.type === LIST_ITEM_ELEMENT_TYPE) {
      // If first child of list-item is a list, it means that an empty paragraph has been removed by
      // paragraph serializer. This should not be removed, therefore inserting it when serializing.
      const firstChild = node.children[0];
      const illegalFirstElement = !Node.isElement(firstChild) || options.allowedListTags.includes(firstChild.type);
      return createHtmlTag({ tag: "li", children: illegalFirstElement ? `<p></p>${children}` : children });
    }
  },
});
