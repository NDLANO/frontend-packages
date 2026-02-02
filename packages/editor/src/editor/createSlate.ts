/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useState } from "react";
import { createEditor, Node, type Descendant, type Editor } from "slate";
import { withHistory } from "slate-history";
import { withReact } from "slate-react";
import type { ElementRenderer, LeafRenderer, PluginReturnType, SlatePlugin, SlateRenderer } from "../core";
import { createElementRenderer, createLeafRenderer } from "../core/createRenderer";
import { LoggerManager } from "../editor/logger/Logger";
import { withLogger } from "../editor/logger/withLogger";

export const withPlugins = (editor: Editor, plugins?: (SlatePlugin | PluginReturnType<any, any>)[]) => {
  // base case
  editor.supportsElement = (_) => {
    return false;
  };
  editor.getPluginOptions = <T>(pluginName: string) => editor.pluginOptions.get(pluginName) as T | undefined;
  if (plugins) {
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

export const useCreateSlate = (opts: CreateSlate): Editor => {
  const [editor] = useState(() => createSlate(opts));
  return editor;
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

  editor.reinitialize = ({ value, shouldNormalize, onInitialNormalized }: ReinitializeOptions) => {
    initializeEditor({ editor, plugins, shouldNormalize, value, onInitialNormalized });
  };

  editor.hasVoids = (element) => element.children.some((n) => Node.isElement(n) && editor.isVoid(n));

  return editor;
};
