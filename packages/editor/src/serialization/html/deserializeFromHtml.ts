/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Node, type Descendant } from "slate";
import type { SlateSerializer } from "../../types";
import { SECTION_ELEMENT_TYPE } from "../../plugins/section/sectionTypes";
import { PARAGRAPH_ELEMENT_TYPE } from "../../plugins/paragraph/paragraphTypes";
import { commonSerializers, extendedSerializers } from "./htmlSerializers";

// TODO: This should be of noop type
const DEFAULT_NOOP: Descendant[] = [{ type: "paragraph", children: [{ text: "" }] }];

const EMPTY_VALUE: Descendant[] = [
  {
    type: SECTION_ELEMENT_TYPE,
    children: [
      {
        type: PARAGRAPH_ELEMENT_TYPE,
        children: [
          {
            text: "",
          },
        ],
      },
    ],
  },
];

export const deserializeFromHtml = (html: string, rules: SlateSerializer[], noop?: boolean): Descendant[] => {
  if (!html) {
    return noop ? DEFAULT_NOOP : EMPTY_VALUE;
  }
  const deserialize = (el: HTMLElement | ChildNode): Descendant | Descendant[] => {
    if (el.nodeType === 3) {
      return { text: el.textContent || "" };
    } else if (el.nodeType !== 1) {
      return { text: "" };
    }

    let children = Array.from(el.childNodes).flatMap(deserialize);
    if (children.length === 0) {
      children = [{ text: "" }];
    }

    for (const rule of rules) {
      if (!rule.deserialize) {
        continue;
      }
      // Already checked that nodeType === 1 -> el must be of type HTMLElement.
      const ret = rule.deserialize(el as HTMLElement, children);
      if (ret === undefined) {
        continue;
      } else {
        return ret;
      }
    }

    return children;
  };

  const document = new DOMParser().parseFromString(noop ? `<div data-noop="true">${html}</div>` : html, "text/html");
  const nodes = Array.from(document.body.children).map(deserialize);
  const normalizedNodes = nodes.map((n) => (Node.isNodeList(n) ? n[0] : n)).filter((n) => !!n);
  return normalizedNodes;
};

// /**
//  * Slate does not allow a block to contain both blocks and inline nodes, so this code checks if the original
//  * html violates this constraint and wraps consecutive inline nodes in a paragraph.
//  *
//  * Code heavily 'inspired' from: https://github.com/Foundry376/Mailspring/blob/master/app/src/components/composer-editor/conversion.jsx#L172
//  *
//  */
//
// const addEmptyTextNodes = (node: Element) => {
//   const { children } = node;
//
//   node.children = children.reduce((acc, cur, index) => {
//     if (!Text.isText(cur)) {
//       if (index === 0) {
//         acc.push({ text: "" });
//       } else if (!Text.isText(acc[acc.length - 1])) {
//         acc.push({ text: "" });
//       }
//     }
//
//     acc.push(cur);
//     return acc;
//   }, [] as Descendant[]);
//   if (!Text.isText(node.children[node.children.length - 1])) {
//     node.children.push({ text: "" });
//   }
// };
//
// const addEmptyParagraphs = (node: Element) => {
//   const { children } = node;
//
//   node.children = children.reduce((acc, cur, index) => {
//     if (Element.isElement(cur)) {
//       if (blocks.includes(cur.type)) {
//         if (index === 0) {
//           acc.push(defaultParagraphBlock());
//         } else {
//           const lastNode = acc[acc.length - 1];
//           if (Element.isElement(lastNode) && blocks.includes(lastNode.type)) {
//             acc.push(defaultParagraphBlock());
//           }
//         }
//       }
//     }
//
//     acc.push(cur);
//     return acc;
//   }, [] as Descendant[]);
//   const lastNode = node.children[node.children.length - 1];
//   if (Element.isElement(lastNode) && blocks.includes(lastNode.type)) {
//     node.children.push(defaultParagraphBlock());
//   }
// };
//
// const wrapMixedChildren = (node: Descendant): Descendant => {
//   if (!Element.isElement(node)) return node;
//   const children = node.children;
//
//   const blockChildren = children.filter((child) => Element.isElement(child) && !inlines.includes(child.type));
//   const mixed = blockChildren.length > 0 && blockChildren.length !== children.length;
//   if (!mixed) {
//     node.children = children.map(wrapMixedChildren);
//     if (blockChildren.length === 0 && children.length > 0) {
//       addEmptyTextNodes(node);
//     } else {
//       addEmptyParagraphs(node);
//     }
//     return node;
//   }
//   const cleanNodes = [];
//   let openWrapperBlock;
//   for (const child of children) {
//     if (Text.isText(child) || (Element.isElement(child) && inlines.includes(child.type))) {
//       if (!Node.string(child).trim()) {
//         continue;
//       }
//       if (!openWrapperBlock) {
//         openWrapperBlock = slatejsx("element", { type: "paragraph" }, []) as ParagraphElement;
//         cleanNodes.push(openWrapperBlock);
//       }
//       openWrapperBlock.children.push(child);
//     } else {
//       openWrapperBlock = null;
//       if (child.type === "paragraph" && child.children.length === 0) {
//         continue;
//       }
//       cleanNodes.push(child);
//     }
//   }
//   addEmptyParagraphs(node);
//
//   node.children = cleanNodes.map(wrapMixedChildren);
//   return node;
// };

export const inlineContentToEditorValue = (html: string, noop?: boolean) => {
  return deserializeFromHtml(html, commonSerializers, noop);
};

export const blockContentToEditorValue = (html: string): Descendant[] => {
  return deserializeFromHtml(html, extendedSerializers);
};
