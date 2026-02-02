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
import { LINK_ELEMENT_TYPE } from "./linkTypes";
import { isLinkElement } from "./queries/linkQueries";

export const linkSerializer = createSerializer({
  deserialize: (el, children) => {
    const tag = el.tagName.toLowerCase();
    if (tag !== "a") return;
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
  },
  serialize: (node, children) => {
    if (!isLinkElement(node)) return;
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
  },
});
