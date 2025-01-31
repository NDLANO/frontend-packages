/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Descendant, Editor, Node, Path } from "slate";
import type { KeyboardEventLike } from "is-hotkey";
import type { KeyboardEvent, JSX } from "react";
import type { ElementType } from "../types";
import type { RenderElementProps, RenderLeafProps } from "slate-react";

type KeyConditionFn = (event: KeyboardEventLike) => boolean;

export type ShortcutHandler<TOptions = undefined> = TOptions extends undefined
  ? (editor: Editor, event: KeyboardEvent<HTMLDivElement>, logger: Logger) => boolean
  : (editor: Editor, event: KeyboardEvent<HTMLDivElement>, logger: Logger, options?: TOptions) => boolean;

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

export interface PluginConfiguration<TType extends ElementType, TOptions = undefined> {
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
  options?: TOptions;
}

export interface ConfigurationOption<T> {
  value: T;
  override: true;
}

export type MappedConfigurationOption<T> = {
  [K in keyof T]: T[K] extends any[] | undefined
    ? ConfigurationOption<T[K]> | T[K]
    : T[K] extends object | undefined
      ? MappedConfigurationOption<T[K]>
      : T[K];
};

export interface PluginConfigurationWithConfiguration<TType extends ElementType, TOptions>
  extends PluginConfiguration<TType, TOptions> {
  configuration?: Omit<Partial<PluginConfiguration<TType, TOptions>>, "options"> & {
    options?: MappedConfigurationOption<TOptions>;
  };
  override?: {
    shortcuts?: boolean;
    normalize?: boolean;
    transform?: boolean;
  };
}

export type SlatePlugin = (editor: Editor) => Editor;

export type PluginReturnType<TType extends ElementType, TOptions = undefined> = SlatePlugin & {
  configure: (
    configuration: Omit<Partial<PluginConfiguration<TType, TOptions>>, "options"> & {
      options?: MappedConfigurationOption<TOptions>;
    },
  ) => SlatePlugin;
  options: TOptions;
};

export interface SlateSerializer<TOptions extends {} | undefined = undefined> {
  deserialize: (el: HTMLElement, children: Descendant[], options: TOptions) => Descendant | Descendant[] | undefined;
  serialize: (node: Descendant, children: string | undefined, options: TOptions) => string | undefined;
  options?: TOptions;
}

export interface ConfigurableSlateSerializer<TOptions extends {} | undefined = undefined>
  extends SlateSerializer<TOptions> {
  configure: (options: MappedConfigurationOption<TOptions>) => ConfigurableSlateSerializer<TOptions>;
}

export type SlateRenderer = (editor: Editor) => Editor;

export type ElementRenderer = (props: RenderElementProps) => JSX.Element | undefined;
export type LeafRenderer = (props: RenderLeafProps) => JSX.Element | undefined;

export type CreateSlateElementRenderer = (fn: ElementRenderer) => (editor: Editor) => Editor;
export type CreateSlateLeafRenderer = (fn: LeafRenderer) => (editor: Editor) => Editor;
