/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { KeyboardEventLike } from "is-hotkey";
import type { KeyboardEvent, JSX } from "react";
import type { Descendant, Editor, Node, Path, ElementType } from "slate";
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
  /**
   * Shorthand for setting `editor.isVoid` to true when encountering the type passed into `type`.
   */
  isVoid?: boolean;
  /**
   * Shorthand for setting `editor.isInline` to true when encountering the type passed into `type`.
   */
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
  /**
   * Plugin-specific options that are used throughout the plugin implementation / lifecycle.
   * Can be accessed through `editor.getPluginOptions`, or directly when calling `normalize`, `transform` or `shortcuts`.
   * For instance, use it to define valid blocks another block/inline can be nested in
   */
  options?: TOptions;
  normalizeInitialValue?: (editor: Editor) => void;
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

export interface PluginConfigurationConfigurationType<TType extends ElementType, TOptions> extends Omit<
  Partial<PluginConfiguration<TType, TOptions>>,
  "options"
> {
  options?: MappedConfigurationOption<TOptions>;
  /**
   * Specify whether the new configuration should entirely replace the existing configuration, or if it should be merged with the existing configuration.
   * By default, the new configuration will be merged with the existing configuration.
   */
  override?: {
    shortcuts?: boolean;
    normalize?: boolean;
    normalizeInitialValue?: boolean;
    transform?: boolean;
  };
}

export type SlatePlugin = (editor: Editor) => Editor;

export type PluginReturnType<TType extends ElementType, TOptions = undefined> = SlatePlugin & {
  /**
   * Allows consumers of plugins to further modify most aspects of the plugin.
   * Usually just used to modify the options passed into the plugin.
   */
  configure: (
    configuration: PluginConfigurationConfigurationType<TType, TOptions>,
  ) => PluginReturnType<TType, TOptions>;
  normalizeInitialValue: (editor: Editor) => void;
  options: TOptions;
};

export interface SlateSerializer<TOptions extends {} | undefined = undefined> {
  /**
   * A function that converts a HTML element to a Slate node
   */
  deserialize: (el: HTMLElement, children: Descendant[], options: TOptions) => Descendant | Descendant[] | undefined;
  /**
   * A function that converts a Slate node to a HTML element
   */
  serialize: (node: Descendant, children: string | undefined, options: TOptions) => string | undefined;
  /**
   * Node-specific options to modify the behavior of serialization/deserialization.
   */
  options?: TOptions;
}

export interface ConfigurableSlateSerializer<
  TOptions extends {} | undefined = undefined,
> extends SlateSerializer<TOptions> {
  /**
   * Allows consumers of serializers to modify the default options passed into the serializer.
   */
  configure: (options: MappedConfigurationOption<Partial<TOptions>>) => ConfigurableSlateSerializer<TOptions>;
}

export type SlateRenderer = (editor: Editor) => Editor;

export type ElementRenderer = (props: RenderElementProps) => JSX.Element | undefined;
export type LeafRenderer = (props: RenderLeafProps) => JSX.Element | undefined;

export type CreateSlateElementRenderer = (fn: ElementRenderer) => (editor: Editor) => Editor;
export type CreateSlateLeafRenderer = (fn: LeafRenderer) => (editor: Editor) => Editor;
