/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { LINK_ELEMENT_TYPE } from "../plugins/link/linkTypes";
import { blockContentToEditorValue, inlineContentToEditorValue } from "../serialization/html/deserializeFromHtml";

export const inlines = [
  // TYPE_CONCEPT_INLINE,
  // TYPE_FOOTNOTE,
  LINK_ELEMENT_TYPE,
  // TYPE_CONTENT_LINK,
  // TYPE_MATHML,
  // TYPE_SPAN,
  // TYPE_COMMENT_INLINE,
];

export const blocks = [
  // TYPE_ASIDE,
  // TYPE_FRAMED_CONTENT,
  // TYPE_CODEBLOCK,
  // TYPE_DETAILS,
  // TYPE_AUDIO,
  // TYPE_EMBED_BRIGHTCOVE,
  // TYPE_EMBED_ERROR,
  // TYPE_EXTERNAL,
  // TYPE_H5P,
  // TYPE_IMAGE,
  // TYPE_FILE,
  // TYPE_RELATED,
  // TYPE_TABLE,
  // TYPE_PITCH,
  // TYPE_GRID,
  // TYPE_KEY_FIGURE,
  // TYPE_CAMPAIGN_BLOCK,
];

export const testBlockContentToEditorValue = (content: string, noop?: boolean) => {
  return blockContentToEditorValue(content, { inlines: inlines, blocks: blocks, noop });
};

export const testInlineContentToEditorValue = (content: string, noop?: boolean) => {
  return inlineContentToEditorValue(content, { inlines: inlines, blocks: blocks, noop });
};
