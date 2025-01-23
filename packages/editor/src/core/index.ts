/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Editor, Element, Node, Path } from "slate";
import type { KeyboardEventLike } from "is-hotkey";
import type { KeyboardEvent } from "react";

type KeyConditionFn = (event: KeyboardEventLike) => boolean;

export type ShortcutHandler = (editor: Editor, event: KeyboardEvent<HTMLDivElement>, logger: Logger) => boolean;

export type SlateExtensionFn = (editor: Editor) => Editor;

export interface Logger {
  log: (...args: any[]) => void;
}

export interface Shortcut {
  /**
   * The handler that should be called when the shortcut is triggered
   * By returning true, you can signal that the event has been handled, and that further processing should be skipped.
   */
  handler: ShortcutHandler;
  /**
   * A key condition that must be met for the handler to be called
   */
  keyCondition: KeyConditionFn | KeyConditionFn[];
}

interface SlateCreatePluginProps<TType extends Element["type"]> {
  /**
   * The name of the plugin. Used for logging
   */
  name: string;
  isVoid?: boolean;
  isInline?: boolean;
  /**
   * The type of the element that the plugin should handle
   * Used for detecting whether the element is void, block or inline
   */
  type?: TType;
  /**
   * A set of keyboard shortcuts that the plugin should handle
   */
  shortcuts?: Record<string, Shortcut>;
  /**
   * A simple wrapper around the Slate normalizeNode method.
   * By returning true, you can signal that the node has been normalized, and that further normalization should be skipped this iteration.
   */
  normalize?: (editor: Editor, node: Node, path: Path, logger: Logger) => boolean;
  /**
   * A function that further transforms the editor. Typically used for extending the editor with functionality not supported by `createPlugin`.
   */
  transform?: (editor: Editor, logger: Logger) => Editor;
}

export type SlatePlugin = (editor: Editor) => Editor;

export type SlatePluginFn = <TType extends Element["type"]>(
  props: SlateCreatePluginProps<TType>,
) => (editor: Editor) => Editor;
