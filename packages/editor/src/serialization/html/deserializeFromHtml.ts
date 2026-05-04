/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Element, Node, type Descendant, type ElementType } from "slate";
import { jsx as slatejsx } from "slate-hyperscript";
import type { SlateSerializer } from "../../core";
import { NOOP_ELEMENT_TYPE } from "../../plugins/noop/noopTypes";
import { PARAGRAPH_ELEMENT_TYPE, type ParagraphElement } from "../../plugins/paragraph/paragraphTypes";
import { SECTION_ELEMENT_TYPE } from "../../plugins/section/sectionTypes";
import { isElementOfType } from "../../utils/isElementType";

const createDefaultNoop = (): Descendant[] => {
  return [
    {
      type: NOOP_ELEMENT_TYPE,
      children: [{ type: PARAGRAPH_ELEMENT_TYPE, serializeAsText: true, children: [{ text: "" }] }],
    },
  ];
};

const createEmptyValue = (): Descendant[] => {
  return [
    {
      type: SECTION_ELEMENT_TYPE,
      children: [{ type: PARAGRAPH_ELEMENT_TYPE, children: [{ text: "" }] }],
    },
  ];
};

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
    return options.noop ? createDefaultNoop() : createEmptyValue();
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
        if (ret !== undefined) return ret;
      }
    }

    return children;
  };

  const document = new DOMParser().parseFromString(
    options.noop ? `<div data-noop="true">${html}</div>` : html,
    "text/html",
  );
  return Array.from(document.body.children).flatMap((el) => {
    const n = deserialize(el);
    const node = Node.isNodeList(n) ? n[0] : n;
    return node ? [wrapMixedChildren(node, options.blocks, options.inlines)] : [];
  });
};

const addEmptyTextNodes = (node: Element) => {
  const withTextNodes = node.children.reduce<Descendant[]>((acc, child) => {
    if (!Node.isText(child) && (acc.length === 0 || !Node.isText(acc[acc.length - 1]))) {
      acc.push({ text: "" });
    }
    acc.push(child);
    return acc;
  }, []);

  if (!Node.isText(withTextNodes[withTextNodes.length - 1])) {
    withTextNodes.push({ text: "" });
  }

  node.children = withTextNodes as Element["children"];
};

const addEmptyParagraphs = (node: Element, blocks: ElementType[]) => {
  const withParagraphs = node.children.reduce<Descendant[]>((acc, child) => {
    if (isElementOfType(child, blocks) && (acc.length === 0 || isElementOfType(acc[acc.length - 1], blocks))) {
      acc.push({ type: PARAGRAPH_ELEMENT_TYPE, children: [{ text: "" }] });
    }
    acc.push(child);
    return acc;
  }, []);

  if (isElementOfType(withParagraphs[withParagraphs.length - 1], blocks)) {
    withParagraphs.push({ type: PARAGRAPH_ELEMENT_TYPE, children: [{ text: "" }] });
  }

  node.children = withParagraphs as Element["children"];
};

const isBlockElement = (node: Descendant, inlines: ElementType[]) =>
  Node.isElement(node) && !inlines.includes(node.type);

const wrapMixedChildren = (node: Descendant, blocks: ElementType[], inlines: ElementType[]): Descendant => {
  if (!Node.isElement(node)) return node;
  const children = node.children;

  const hasBlockChildren = children.some((c) => isBlockElement(c, inlines));
  const mixed = hasBlockChildren && children.some((c) => !isBlockElement(c, inlines));
  if (!mixed) {
    node.children = children.map((child) => wrapMixedChildren(child, blocks, inlines));
    if (!hasBlockChildren && !!children.length) {
      addEmptyTextNodes(node);
    } else {
      addEmptyParagraphs(node, blocks);
    }
    return node;
  }

  // Handle mixed inline-block content
  const cleanNodes: Descendant[] = [];
  let openWrapperBlock: ParagraphElement | null = null;
  for (const child of children) {
    if (Node.isText(child) || (Node.isElement(child) && inlines.includes(child.type))) {
      if (Node.string(child).trim() === "") {
        continue;
      }
      if (!openWrapperBlock) {
        openWrapperBlock = slatejsx("element", { type: PARAGRAPH_ELEMENT_TYPE }, []) as ParagraphElement;
        cleanNodes.push(openWrapperBlock);
      }
      openWrapperBlock.children.push(child);
    } else {
      openWrapperBlock = null;
      if (child.type === PARAGRAPH_ELEMENT_TYPE && child.children.length === 0) continue;
      cleanNodes.push(child);
    }
  }

  // Process the cleaned-up nodes recursively
  node.children = cleanNodes.map((child) => wrapMixedChildren(child, blocks, inlines));
  return node;
};
