/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { createEditor, Element, type Editor } from "slate";
import type { ElementRenderer, LeafRenderer, SlatePlugin, SlateRenderer } from "../core";
import { LoggerManager } from "../editor/logger/Logger";
import { withHistory } from "slate-history";
import { withReact } from "slate-react";
import { withLogger } from "../editor/logger/withLogger";
import { createElementRenderer, createLeafRenderer } from "../core/createRenderer";

export const withPlugins = (editor: Editor, plugins?: SlatePlugin[]) => {
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
  plugins?: SlatePlugin[];
  logger?: LoggerManager;
  elementRenderers?: ElementRenderer[];
  leafRenderers?: LeafRenderer[];
}

export const createSlate = ({
  plugins,
  elementRenderers,
  leafRenderers,
  logger = new LoggerManager({ debug: false }),
}: CreateSlate): Editor => {
  const editor = withRenderers(
    withRenderers(
      withPlugins(withReact(withHistory(withLogger(createEditor(), logger))), plugins),
      elementRenderers?.map(createElementRenderer),
    ),
    leafRenderers?.map(createLeafRenderer),
  );

  editor.hasVoids = (element) => element.children.some((n) => Element.isElement(n) && editor.isVoid(n));

  return editor;
};
