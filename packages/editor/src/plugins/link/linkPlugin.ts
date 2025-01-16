/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Node, Text, Transforms } from "slate";
import { jsx as slatejsx } from "slate-hyperscript";
import { createPlugin } from "../../core/createPlugin";
import { LINK_ELEMENT_TYPE } from "./linkTypes";
import type { SlateSerializer } from "../../types";
import { isElementOfType } from "../../utils/isElementType";
import { createHtmlTag } from "../../utils/serializationHelpers";

export const linkSerializer: SlateSerializer = {
  deserialize: (el, children) => {
    const tag = el.tagName.toLowerCase();
    if (tag === "a") {
      const a = el as HTMLLinkElement;
      return slatejsx(
        "element",
        {
          type: LINK_ELEMENT_TYPE,
          data: {
            href: a.href ?? "#",
            target: a.target !== "" ? a.target : undefined,
            title: a.title !== "" ? a.title : undefined,
            rel: a.rel !== "" ? a.rel : undefined,
          },
        },
        children,
      );
    }
    return;
  },
  serialize: (node, children) => {
    if (isElementOfType(node, LINK_ELEMENT_TYPE)) {
      return createHtmlTag({
        tag: "a",
        data: {
          href: node.data?.href,
          target: node.data?.target,
          title: node.data?.title,
          rel: node.data?.rel,
        },
        children,
      });
    }
  },
};

export const linkPlugin = createPlugin({
  type: LINK_ELEMENT_TYPE,
  isInline: true,
  normalize: (editor, node, path) => {
    if (!isElementOfType(node, LINK_ELEMENT_TYPE)) return false;
    for (const [index, child] of node.children.entries()) {
      if (!Text.isText(child)) {
        Transforms.unwrapNodes(editor, { at: [...path, index] });
        return true;
      }
    }
    if (Node.string(node) === "") {
      Transforms.removeNodes(editor, { at: path });
      return true;
    }
    return false;
  },
});
