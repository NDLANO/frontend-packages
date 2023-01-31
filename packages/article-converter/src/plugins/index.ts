/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { CopyParagraphPlugin } from './CopyParagraphPlugin';
import { PluginType } from './types';
import { OLPlugin } from './OLPlugin';
import { ParagraphPlugin } from './ParagraphPlugin';
import { SpanPlugin } from './SpanPlugin';
import { H3Plugin } from './H3Plugin';
import { MathPlugin } from './MathPlugin';
import { AnchorPlugin } from './oembed/AnchorPlugin';
import { DivPlugin } from './DivPlugin';
import { TablePlugin } from './TablePlugin';

export const basePlugins: Record<string, PluginType> = {
  h2: CopyParagraphPlugin,
  h3: H3Plugin,
  ol: OLPlugin,
  p: ParagraphPlugin,
  span: SpanPlugin,
  math: MathPlugin,
  div: DivPlugin,
  table: TablePlugin,
};

export const oembedPlugins: Record<string, PluginType> = {
  ...basePlugins,
  a: AnchorPlugin,
};
