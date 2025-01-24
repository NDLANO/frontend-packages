/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Editor, Node, Path } from "slate";
import type { KeyboardEventLike } from "is-hotkey";
import type { KeyboardEvent } from "react";
import type { ElementType } from "../types";

type KeyConditionFn = (event: KeyboardEventLike) => boolean;

export type ShortcutHandler<TOptions = undefined> = (
  editor: Editor,
  event: KeyboardEvent<HTMLDivElement>,
  logger: Logger,
  configuration: TOptions,
) => boolean;

export type SlateExtensionFn<TOptions = undefined> = (
  editor: Editor,
  logger: Logger,
  configuration: TOptions,
) => Editor;

export interface Logger {
  log: (...args: any[]) => void;
}

export interface Shortcut<TOptions = undefined> {
  /**
   * The handler that should be called when the shortcut is triggered
   * By returning true, you can signal that the event has been handled, and that further processing should be skipped.
   */
  handler: ShortcutHandler<TOptions>;
  /**
   * A key condition that must be met for the handler to be called
   */
  keyCondition: KeyConditionFn | KeyConditionFn[];
}

interface Configuration<TOptions = undefined> {
  shortcuts?: Record<string, Shortcut<TOptions>>;
  transform?: SlateExtensionFn<TOptions>;
  options?: TOptions;
}

export interface SlateCreatePluginProps<TType extends ElementType, TOptions = undefined> {
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
  shortcuts?: Record<string, Shortcut<TOptions>>;
  /**
   * A simple wrapper around the Slate normalizeNode method.
   * By returning true, you can signal that the node has been normalized, and that further normalization should be skipped this iteration.
   */
  normalize?: (editor: Editor, node: Node, path: Path, logger: Logger, options: TOptions) => boolean;
  /**
   * A function that further transforms the editor. Typically used for extending the editor with functionality not supported by `createPlugin`.
   */
  transform?: (editor: Editor, logger: Logger, options: TOptions) => Editor;
  configuration?: Configuration<TOptions>;
}

export type SlatePlugin = (editor: Editor) => Editor;

export type SlatePluginFn = <TType extends ElementType, TOptions = undefined>(
  props: SlateCreatePluginProps<TType, TOptions>,
) => PluginReturnType<TOptions>;

export type PluginReturnType<TOptions = undefined> = SlatePlugin & {
  configure: (configuration: Configuration<TOptions>) => SlatePlugin;
};
