/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

//@ts-expect-error missing types
import escapeHtml from "escape-html";
import { Node } from "slate";
import { jsx as slatejsx } from "slate-hyperscript";
import { createSerializer } from "../../core/createSerializer";
import { createHtmlTag } from "../../serialization/html/htmlSerializationHelpers";
import { marks, type MarkTagType } from "./markTypes";

export const markSerializer = createSerializer({
  deserialize(el, children) {
    const mark = marks[el.tagName.toLowerCase() as MarkTagType];
    if (!mark) return;
    return children.map((child) => (Node.isText(child) ? slatejsx("text", { [mark]: true }, child) : child));
  },

  serialize(node) {
    if (!Node.isText(node)) return;
    let ret;

    const escapedText: string = escapeHtml(node.text);
    const children = escapedText.split("\n").reduce((acc, curr, i) => {
      if (i !== 0) {
        acc = acc.concat(createHtmlTag({ tag: "br", shorthand: true }));
      }
      acc = acc.concat(curr);
      return acc;
    }, "");

    if (node.bold) {
      ret = createHtmlTag({ tag: "strong", children: ret || children });
    }
    if (node.italic) {
      ret = createHtmlTag({ tag: "em", children: ret || children });
    }
    if (node.underlined) {
      ret = createHtmlTag({ tag: "u", children: ret || children });
    }
    if (node.sup) {
      ret = createHtmlTag({ tag: "sup", children: ret || children });
    }
    if (node.sub) {
      ret = createHtmlTag({ tag: "sub", children: ret || children });
    }
    if (node.code) {
      ret = createHtmlTag({ tag: "code", children: ret || children });
    }
    if (ret) {
      return ret;
    }
    return children;
  },
});
