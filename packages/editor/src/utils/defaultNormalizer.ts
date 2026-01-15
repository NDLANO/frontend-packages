/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Editor, Element, Node, Path, type ElementType } from "slate";
import { jsx as slatejsx } from "slate-hyperscript";
import type { Logger } from "../core";
import { isElementOfType } from "./isElementType";

interface DefaultNodeRule {
  allowed: ElementType[];
  defaultType: ElementType;
}

interface ParentNodeRule {
  allowed: ElementType[];
  defaultType?: ElementType;
}

export interface NormalizerConfig {
  parent?: ParentNodeRule;
  previous?: DefaultNodeRule;
  next?: DefaultNodeRule;
  firstNode?: DefaultNodeRule;
  lastNode?: DefaultNodeRule;
  nodes?: DefaultNodeRule;
}

const createNode = (type: ElementType, attributes?: Partial<Element>) => slatejsx("element", { ...attributes, type });

const normalizeNodes = (
  editor: Editor,
  element: Element,
  path: Path,
  config: NormalizerConfig,
  logger?: Logger,
): boolean => {
  const children = element.children;

  if (children.length === 0) {
    const rule = config.firstNode || config.lastNode || config.nodes;
    if (rule?.defaultType) {
      logger?.log("Node has no children, inserting default type.");
      editor.insertNodes(createNode(rule.defaultType), { at: path.concat(0) });
      return true;
    }
  }

  for (const [index, child] of children.entries()) {
    // 1. If first node
    if (index === 0 && config.firstNode) {
      // a. Wrap text as default firstNode type
      if (Node.isText(child)) {
        logger?.log("First child is text, wrapping in default firstNode type.");
        editor.wrapNodes(createNode(config.firstNode.defaultType), { at: path.concat(0) });
        return true;
        // first node is wrong and must be changed
      } else if (!config.firstNode.allowed.includes(child.type)) {
        // b. If child is also an allowed lastNode. Insert default firstNode type before
        if (children.length === 1 && config.lastNode?.allowed.includes(child.type)) {
          logger?.log(
            "Node only has one child, and it is allowed as a lastNode. Inserting default firstNode type as first child.",
          );
          editor.insertNodes(createNode(config.firstNode.defaultType), { at: path.concat(0) });
          return true;
        }
        // c. If child is allowed nodes type. Insert default firstNode type before.
        else if (config.nodes?.allowed.includes(child.type)) {
          logger?.log(
            "First node is allowed as a child, but not as the first child. Inserting default firstNode type as first child.",
          );
          editor.insertNodes(createNode(config.firstNode.defaultType), { at: path.concat(0) });
          return true;
          // d. Else: Unwrap child
        } else {
          logger?.log("First node is incorrect, unwrapping.");
          editor.unwrapNodes({ at: path.concat(0) });
          return true;
        }
      }
    }
    // 2. If last node
    if (index === children.length - 1 && config.lastNode) {
      // a. Wrap text as default firstNode type
      if (Node.isText(child)) {
        logger?.log("Last child is text, wrapping in default lastNode type.");
        editor.wrapNodes(createNode(config.lastNode.defaultType), { at: path.concat(children.length - 1) });
        return true;
        // last node is wrong and must be changed
      } else if (!config.lastNode.allowed.includes(child.type)) {
        // b. If child is allowed firstNode type. Insert default firstNode type after
        if (children.length === 1 && config.firstNode?.allowed.includes(child.type)) {
          logger?.log(
            "Node only has one child, and it is allowed as a firstNode. Inserting default lastNode type as last child.",
          );
          editor.insertNode(createNode(config.lastNode.defaultType), { at: path.concat(children.length) });
          return true;
        }
        // c. If child is allowed nodes type. Insert default lastNode type after.
        else if (config.nodes?.allowed.includes(child.type)) {
          logger?.log("Last node is allowed as a child, but not as the last child. Inserting default lastNode type.");
          editor.insertNodes(createNode(config.lastNode.defaultType), { at: path.concat(children.length) });
          return true;
          // c. Else: Unwrap child
        } else {
          logger?.log("Last node is incorrect, unwrapping.");
          editor.unwrapNodes({ at: path.concat(children.length - 1) });
          return true;
        }
      }
    }

    // TODO: Make this prettier
    // 3. If node is valid first or last node, skip next step
    if (
      Node.isElement(child) &&
      ((index === 0 && config.firstNode?.allowed.includes(child.type)) ||
        (index === children.length - 1 && config.lastNode?.allowed.includes(child.type)))
    ) {
      continue;
    }

    // 4. Other nodes
    if (config.nodes) {
      // a. Wrap if text
      if (Node.isText(child)) {
        logger?.log("Child is text, wrapping in default nodes type.");
        editor.wrapNodes(createNode(config.nodes.defaultType), { at: path.concat(index) });
        return true;
        // b. Unwrap if incorrect
      } else if (!config.nodes.allowed.includes(child.type)) {
        logger?.log("Child is incorrect, unwrapping.");
        editor.unwrapNodes({ at: path.concat(index) });
        return true;
      }
    }
  }

  return false;
};

const normalizePrevious = (editor: Editor, path: Path, config: DefaultNodeRule, logger?: Logger): boolean => {
  if (Path.hasPrevious(path)) {
    const [previousNode] = editor.node(Path.previous(path));

    // 1. If previous element is incorrect, insert default element
    if (!isElementOfType(previousNode, config.allowed)) {
      logger?.log("Previous sibling is incorrect, inserting default type.");
      editor.insertNodes(createNode(config.defaultType), { at: path });
      return true;
    }
    // 2. If previous element does not exist, insert default element
  } else {
    logger?.log("Previous sibling does not exist, inserting default type.");
    editor.insertNodes(createNode(config.defaultType), { at: path });
    return true;
  }

  return false;
};

const normalizeNext = (editor: Editor, path: Path, config: DefaultNodeRule, logger?: Logger): boolean => {
  const nextPath = Path.next(path);

  // 1. If next element is incorrect, insert default element
  if (editor.hasPath(nextPath)) {
    const [nextNode] = editor.node(nextPath);

    if (!isElementOfType(nextNode, config.allowed)) {
      logger?.log("Next sibling is incorrect, inserting default type.");
      editor.insertNodes(createNode(config.defaultType), { at: nextPath });
      return true;
    }
    // 2. If next element does not exist, insert default element
  } else {
    logger?.log("Next sibling does not exist, inserting default type.");
    editor.insertNodes(createNode(config.defaultType), { at: nextPath });
    return true;
  }

  return false;
};

const normalizeParent = (editor: Editor, path: Path, config: ParentNodeRule, logger?: Logger): boolean => {
  const [parent] = editor.node(Path.parent(path));

  // 1. If parent element is incorrect, change current node to default element
  if (!isElementOfType(parent, config.allowed)) {
    if (config.defaultType) {
      logger?.log("Parent element is incorrect, changing to default type");
      editor.setNodes<Element>(createNode(config.defaultType), { at: path });
    } else {
      logger?.log("Parent element is incorrect, but no default type is set. Unwrapping");
      editor.unwrapNodes({ at: path });
    }
    return true;
  }

  return false;
};

export const defaultNormalizer = (
  editor: Editor,
  node: Element,
  path: Path,
  config: NormalizerConfig,
  logger?: Logger,
): boolean => {
  if (config.firstNode || config.nodes || config.lastNode) {
    if (normalizeNodes(editor, node, path, config, logger)) {
      return true;
    }
  }
  if (config.parent && normalizeParent(editor, path, config.parent, logger)) {
    return true;
  }
  if (config.previous && normalizePrevious(editor, path, config.previous, logger)) {
    return true;
  }
  if (config.next && normalizeNext(editor, path, config.next, logger)) {
    return true;
  }

  return false;
};
