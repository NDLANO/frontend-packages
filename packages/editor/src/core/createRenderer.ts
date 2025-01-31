/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { CreateSlateElementRenderer, CreateSlateLeafRenderer } from ".";

export const createElementRenderer: CreateSlateElementRenderer = (renderFn) => (editor) => {
  const { renderElement } = editor;

  editor.renderElement = (props) => {
    const ret = renderFn(props);
    if (ret) {
      return ret;
    } else return renderElement?.(props);
  };

  return editor;
};

export const createLeafRenderer: CreateSlateLeafRenderer = (renderFn) => (editor) => {
  const { renderLeaf } = editor;

  editor.renderLeaf = (props) => {
    const ret = renderFn(props);
    if (ret) {
      return ret;
    } else return renderLeaf?.(props);
  };
  return editor;
};
