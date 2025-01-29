/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { jsx as slatejsx } from "slate-hyperscript";
import { Element, Node, Text, type Descendant } from "slate";
import type { ElementType } from "../../types";
import { SECTION_ELEMENT_TYPE } from "../../plugins/section/sectionTypes";
import { PARAGRAPH_ELEMENT_TYPE, type ParagraphElement } from "../../plugins/paragraph/paragraphTypes";
import { commonSerializers, extendedSerializers } from "./htmlSerializers";
import type { SlateSerializer } from "../../core";
import { isElementOfType } from "../../../es/utils/isElementType";

// TODO: This entire file should be refactored and reconsidered. Our current deserialization is too complex.

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

interface DeserializeOptions {
  noop?: boolean;

  blocks: ElementType[];
  inlines: ElementType[];
}

export const deserializeFromHtml = (
  html: string,
  rules: SlateSerializer[],
  options: DeserializeOptions,
): Descendant[] => {
  if (!html) {
    return options.noop ? DEFAULT_NOOP : EMPTY_VALUE;
  }
  const deserialize = (el: HTMLElement | ChildNode): Descendant | Descendant[] => {
    if (el.nodeType === 3) {
      return { text: el.textContent || "" };
    } else if (el.nodeType !== 1) {
      return { text: "" };
    }

    let children = Array.from(el.childNodes).flatMap(deserialize);
    if (!children.length) {
      children = [{ text: "" }];
    }

    for (const rule of rules) {
      if (rule.deserialize) {
        // Already checked that nodeType === 1 -> el must be of type HTMLElement.
        const ret = rule.deserialize(el as HTMLElement, children, rule.options);
        if (ret === undefined) {
          continue;
        } else {
          return ret;
        }
      }
    }

    return children;
  };

  const document = new DOMParser().parseFromString(
    options.noop ? `<div data-noop="true">${html}</div>` : html,
    "text/html",
  );
  const nodes = Array.from(document.body.children).map(deserialize);

  const normalizedNodes = nodes
    .map((n) => {
      const node = Node.isNodeList(n) ? n[0] : n;
      return node ? wrapMixedChildren(node, options.blocks, options.inlines) : undefined;
    })
    .filter((n) => !!n);
  return normalizedNodes;
};

const addEmptyTextNodes = (node: Element) => {
  const { children } = node;

  node.children = children.reduce<Descendant[]>((acc, cur, index) => {
    if (!Text.isText(cur) && (!index || !Text.isText(acc[acc.length - 1]))) {
      acc.push({ text: "" });
    }
    acc.push(cur);
    return acc;
  }, []);
  if (!Text.isText(node.children[node.children.length - 1])) {
    node.children.push({ text: "" });
  }
};

const addEmptyParagraphs = (node: Element, blocks: ElementType[]) => {
  const { children } = node;

  node.children = children.reduce((acc, cur, index) => {
    if (isElementOfType(cur, blocks) && (!index || isElementOfType(acc[acc.length - 1], blocks))) {
      // this used to be defaultParagraphBlock
      acc.push({ type: "paragraph", children: [{ text: "" }] });
    }
    acc.push(cur);
    return acc;
  }, [] as Descendant[]);

  if (isElementOfType(node.children[node.children.length - 1], blocks)) {
    // this used to be defaultParagraphBlock
    node.children.push({ type: "paragraph", children: [{ text: "" }] });
  }
};

/**
 * Slate does not allow a block to contain both blocks and inline nodes, so this code checks if the original
 * html violates this constraint and wraps consecutive inline nodes in a paragraph.
 *
 * Code heavily 'inspired' from: https://github.com/Foundry376/Mailspring/blob/master/app/src/components/composer-editor/conversion.jsx#L172
 *
 */
const wrapMixedChildren = (node: Descendant, blocks: ElementType[], inlines: ElementType[]): Descendant => {
  if (!Element.isElement(node)) return node;
  const children = node.children;

  const blockChildren = children.filter((child) => Element.isElement(child) && !inlines.includes(child.type));
  const mixed = !!blockChildren.length && blockChildren.length !== children.length;
  if (!mixed) {
    node.children = children.map((child) => wrapMixedChildren(child, blocks, inlines));
    if (!blockChildren.length && !!children.length) {
      addEmptyTextNodes(node);
    } else {
      addEmptyParagraphs(node, blocks);
    }
    return node;
  }
  const cleanNodes = [];
  let openWrapperBlock;
  for (const child of children) {
    if (Text.isText(child) || isElementOfType(child, inlines)) {
      if (!Node.string(child).trim().length) continue;

      if (!openWrapperBlock) {
        openWrapperBlock = slatejsx("element", { type: "paragraph" }, []) as ParagraphElement;
        cleanNodes.push(openWrapperBlock);
      }
      openWrapperBlock.children.push(child);
    } else {
      openWrapperBlock = null;
      if (child.type === "paragraph" && child.children.length === 0) continue;
      cleanNodes.push(child);
    }
  }
  addEmptyParagraphs(node, blocks);

  node.children = cleanNodes.map((child) => wrapMixedChildren(child, blocks, inlines));
  return node;
};

export const inlineContentToEditorValue = (html: string, options: DeserializeOptions) => {
  return deserializeFromHtml(html, commonSerializers, options);
};

export const blockContentToEditorValue = (html: string, options: DeserializeOptions): Descendant[] => {
  return deserializeFromHtml(html, extendedSerializers, options);
};
