/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { createEditor, Element, Node, Path, Range, Transforms, type Descendant, type Editor } from "slate";
import type { ElementRenderer, LeafRenderer, PluginReturnType, SlatePlugin, SlateRenderer } from "../core";
import { LoggerManager } from "../editor/logger/Logger";
import { withHistory } from "slate-history";
import { ReactEditor, withReact } from "slate-react";
import { withLogger } from "../editor/logger/withLogger";
import { createElementRenderer, createLeafRenderer } from "../core/createRenderer";

export const withPlugins = (editor: Editor, plugins?: (SlatePlugin | PluginReturnType<any, any>)[]) => {
  if (plugins) {
    editor.getPluginOptions = <T>(pluginName: string) => editor.pluginOptions.get(pluginName) as T | undefined;
    return plugins.reduce((editor, plugin) => plugin(editor), editor);
  }

  return editor;
};

export const withRenderers = (editor: Editor, renderers?: SlateRenderer[]) => {
  if (renderers) {
    return renderers.reduce((editor, renderer) => renderer(editor), editor);
  }

  return editor;
};

interface CreateSlate {
  plugins?: (SlatePlugin | PluginReturnType<any, any>)[];
  logger?: LoggerManager;
  elementRenderers?: ElementRenderer[];
  leafRenderers?: LeafRenderer[];
  /**
   * Whether to normalize the initial value of the editor.
   */
  shouldNormalize?: boolean;
  /**
   * Callback function to be called when the initial value has been normalized.
   */
  onInitialNormalized?: (value: Descendant[]) => void;
  value?: Descendant[];
}

interface BaseInitializeOptions {
  shouldNormalize?: boolean;
  onInitialNormalized?: (value: Descendant[]) => void;
  value?: Descendant[];
}

interface InitializeOptions extends BaseInitializeOptions {
  editor: Editor;
  plugins?: (SlatePlugin | PluginReturnType<any, any>)[];
}

export interface ReinitializeOptions extends BaseInitializeOptions {
  value: Descendant[];
  restoreSelection?: boolean;
}

const initializeEditor = ({ value, editor, plugins, shouldNormalize, onInitialNormalized }: InitializeOptions) => {
  if (value) {
    editor.children = value;
  }

  if (editor.children.length) {
    plugins?.forEach((plugin) => {
      // plugins are either functions or a proxy wrapping a function. If the plugin is a function, this call will return undefined.
      // If the plugin is a proxy, it will run the function if it exists.
      (plugin as PluginReturnType<any, any>).normalizeInitialValue?.(editor);
    });
  }

  if (shouldNormalize) {
    editor.normalize({ force: true });
    editor.history = { redos: [], undos: [] };
    const children = editor.children;
    onInitialNormalized?.(children);
  }
};

// At the time of writing, Slate is able to restore selection to void elements on its own when reinitializing, but keyboard navigation doesn't work unless a big setTimeout is used.
// This is a workaround to restore selection to the next path, allowing users to edit instantly after the editor has been reinitialized.
const getSelection = (editor: Editor): Range | null => {
  if (!editor.selection || !Range.isCollapsed(editor.selection)) return null;
  const [entry] = editor.nodes({ mode: "lowest", at: editor.selection });
  if (!entry || !Element.isElement(entry[0])) return null;

  const nextPath = Path.next(entry[1]);
  if (editor.hasPath(nextPath)) {
    console.log("is element", editor.selection);
    return { anchor: { path: nextPath, offset: 0 }, focus: { path: nextPath, offset: 0 } };
  } else {
    return null;
  }
};

export const createSlate = ({
  plugins,
  elementRenderers,
  leafRenderers,
  logger = new LoggerManager({ debug: false }),
  shouldNormalize,
  onInitialNormalized,
  value,
}: CreateSlate): Editor => {
  const editor = withRenderers(
    withRenderers(
      withPlugins(withReact(withHistory(withLogger(createEditor(), logger))), plugins),
      elementRenderers?.map(createElementRenderer),
    ),
    leafRenderers?.map(createLeafRenderer),
  );

  initializeEditor({ plugins, shouldNormalize, value, editor, onInitialNormalized });

  editor.reinitialize = ({ value, shouldNormalize, onInitialNormalized, restoreSelection }: ReinitializeOptions) => {
    const range = restoreSelection ? getSelection(editor) : null;
    initializeEditor({ editor, plugins, shouldNormalize, value, onInitialNormalized });
    if (range) {
      Transforms.select(editor, range);
    }
  };

  editor.hasVoids = (element) => element.children.some((n) => Element.isElement(n) && editor.isVoid(n));

  return editor;
};
