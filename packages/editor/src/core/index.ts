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
  handler: ShortcutHandler;
  keyCondition: KeyConditionFn | KeyConditionFn[];
}

interface SlateCreatePluginProps<TType extends Element["type"]> {
  name: string;
  isVoid?: boolean;
  isInline?: boolean;
  type?: TType;
  shortcuts?: Record<string, Shortcut>;
  normalize?: (editor: Editor, node: Node, path: Path, logger: Logger) => boolean;
  transform?: (editor: Editor) => Editor;
}

export type SlatePlugin = (editor: Editor) => Editor;

export type SlatePluginFn = <TType extends Element["type"]>(
  props: SlateCreatePluginProps<TType>,
) => (editor: Editor) => Editor;
