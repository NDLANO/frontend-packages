/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { createEditor, Transforms, type Editor } from "slate";
import type { SlatePlugin } from "../core";
import { LoggerManager } from "../editor/logger/Logger";
import { withHistory } from "slate-history";
import { withReact } from "slate-react";
import { withLogger } from "../editor/logger/withLogger";

export const withPlugins = (editor: Editor, plugins?: SlatePlugin[]) => {
  if (plugins) {
    return plugins.reduce((editor, plugin) => plugin(editor), editor);
  }
  return editor;
};

interface CreateSlate {
  plugins?: SlatePlugin[];
  logger?: LoggerManager;
}

const catchSlateFragment = /data-slate-fragment="(.+?)"/m;
export const getSlateFragmentAttribute = (dataTransfer: DataTransfer): string | void => {
  const htmlData = dataTransfer.getData("text/html");
  const [, fragment] = htmlData.match(catchSlateFragment) || [];
  return fragment;
};

export const createSlate = ({ plugins, logger = new LoggerManager({ debug: false }) }: CreateSlate) => {
  const editor = withPlugins(withHistory(withReact(withLogger(createEditor(), logger))), plugins);

  // There's currently a bug in slate that inserts the root node when copying and pasting a block node.
  // Discussion (and this solution) can be found here: https://github.com/ianstormtaylor/slate/issues/5151
  // You can also find discussions here: https://github.com/ianstormtaylor/slate/issues/4542
  editor.insertFragmentData = (data: DataTransfer): boolean => {
    /**
     * Checking copied fragment from application/x-slate-fragment or data-slate-fragment
     */
    const fragment = data.getData("application/x-slate-fragment") || getSlateFragmentAttribute(data);

    if (fragment) {
      const decoded = decodeURIComponent(window.atob(fragment));
      const parsed = JSON.parse(decoded);

      const focus = editor.selection?.focus;
      /*
       * Insert placeholder character to ensure node doesn't become empty during pasting. Note that insertFragment
       * below, will firstly delete content of current selection, which in case of empty block or selected whole
       * content of the block deletes whole block. After that content is inserted as new block and therefore it WILL
       * CHANGE ITS TYPE.
       */
      editor.insertText("#");
      // insert actual content of clipboard
      editor.insertFragment(parsed);

      // delete placeholder character
      Transforms.delete(editor, {
        at: focus,
      });

      return true;
    }
    return false;
  };
  return editor;
};
