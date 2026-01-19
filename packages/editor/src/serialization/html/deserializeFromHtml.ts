/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { jsx as slatejsx } from "slate-hyperscript";
import { Element, Node, type Descendant, type ElementType } from "slate";
import { SECTION_ELEMENT_TYPE } from "../../plugins/section/sectionTypes";
import { PARAGRAPH_ELEMENT_TYPE, type ParagraphElement } from "../../plugins/paragraph/paragraphTypes";
import type { SlateSerializer } from "../../core";
import { isElementOfType } from "../../utils/isElementType";
import { NOOP_ELEMENT_TYPE } from "../../plugins/noop/noopTypes";

// TODO: This entire file should be refactored and reconsidered. Our current deserialization is too complex.

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
  const children = node.children;
  let lastWasText = false;

  // Iterating in reverse ensures that we add empty text nodes only when necessary
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    const currentIsText = Node.isText(child);

    if (!currentIsText && !lastWasText) {
      children.splice(i, 0, { text: "" });
      i++; // Skip next iteration since we inserted a new child
    }
    lastWasText = currentIsText;
  }

  // Ensure the last child is a text node
  if (!Node.isText(children[children.length - 1])) {
    children.push({ text: "" });
  }
};

const addEmptyParagraphs = (node: Element, blocks: ElementType[]) => {
  const children = node.children;
  let lastWasBlock = false;

  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    const currentIsBlock = isElementOfType(child, blocks);

    if (currentIsBlock && (i === 0 || lastWasBlock)) {
      children.splice(i, 0, { type: "paragraph", children: [{ text: "" }] });
      i++; // Skip next iteration since we inserted a new paragraph
    }

    lastWasBlock = currentIsBlock;
  }

  // Ensure the last child is a paragraph if needed
  if (isElementOfType(children[children.length - 1], blocks)) {
    children.push({ type: "paragraph", children: [{ text: "" }] });
  }
};

const wrapMixedChildren = (node: Descendant, blocks: ElementType[], inlines: ElementType[]): Descendant => {
  if (!Node.isElement(node)) return node;
  const children = node.children;

  const blockChildren = children.filter((child) => Node.isElement(child) && !inlines.includes(child.type));
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

  // Handle mixed inline-block content
  const cleanNodes: Descendant[] = [];
  let openWrapperBlock: ParagraphElement | null = null;
  for (const child of children) {
    if (Node.isText(child) || (Node.isElement(child) && inlines.includes(child.type))) {
      // TODO: Consider trimming
      if (Node.string(child) === "" || Node.string(child) === " ") {
        continue;
      }
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

  // Process the cleaned-up nodes recursively
  node.children = cleanNodes.map((child) => wrapMixedChildren(child, blocks, inlines));
  return node;
};
