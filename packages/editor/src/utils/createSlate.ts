/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { createEditor, Editor } from "slate";
import { withReact } from "slate-react";
import type { SlatePlugin } from "../core";
import { withHistory } from "slate-history";

interface Props {
  plugins?: SlatePlugin[];
}

export const createSlate = ({ plugins }: Props) => {
  const editor = withPlugins(withHistory(withReact(createEditor())), plugins);
  return editor;
};

const withPlugins = (editor: Editor, plugins?: SlatePlugin[]) => {
  if (plugins) {
    return plugins.reduce((editor, plugin) => plugin(editor), editor);
  }
  return editor;
};
