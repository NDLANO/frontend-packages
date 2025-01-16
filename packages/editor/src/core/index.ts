/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { BaseEditor, Editor, Element, Node, Path } from "slate";
import type { KeyboardEventLike } from "is-hotkey";
import type { KeyboardEvent } from "react";

type KeyConditionFn = (event: KeyboardEventLike) => boolean;

export type ShortcutHandler = (editor: Editor, event: KeyboardEvent<HTMLDivElement>) => boolean;

export interface Shortcut {
  handler: ShortcutHandler;
  keyCondition: KeyConditionFn | KeyConditionFn[];
}

interface SlateCreatePluginProps<TType extends Element["type"]> {
  isVoid?: boolean;
  isInline?: boolean;
  type?: TType;
  shortcuts?: Record<string, Shortcut>;
  override?: Partial<Omit<BaseEditor, "children" | "selection" | "operations" | "marks">>;
  normalize?: (editor: Editor, node: Node, path: Path, options?: Parameters<BaseEditor["normalizeNode"]>[1]) => boolean;
}

export type SlatePlugin = (editor: Editor) => Editor;

export type SlatePluginFn = <TType extends Element["type"]>(
  props: SlateCreatePluginProps<TType>,
) => (editor: Editor) => Editor;
