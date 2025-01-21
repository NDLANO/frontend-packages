/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

//@ts-expect-error missing types
import escapeHtml from "escape-html";
import { Text } from "slate";
import { jsx as slatejsx } from "slate-hyperscript";
import type { SlateSerializer } from "../../types";
import { marks, type MarkType } from "./markTypes";
import { createHtmlTag } from "../../serialization/html/htmlSerializationHelpers";

export const markSerializer: SlateSerializer = {
  deserialize(el, children) {
    const mark = marks[el.tagName.toLowerCase() as MarkType];
    if (!mark) return;
    return children.map((child) => (Text.isText(child) ? slatejsx("text", { [mark]: true }, child) : child));
  },

  serialize(node) {
    if (!Text.isText(node)) return;
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
};
