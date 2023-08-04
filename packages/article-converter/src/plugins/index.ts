/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { copyParagraphPlugin } from './copyParagraphPlugin';
import { PluginType } from './types';
import { olPlugin } from './olPlugin';
import { paragraphPlugin } from './paragraphPlugin';
import { spanPlugin } from './spanPlugin';
import { h3Plugin } from './h3Plugin';
import { mathPlugin } from './mathPlugin';
import { anchorPlugin } from './oembed/anchorPlugin';
import { divPlugin } from './divPlugin';
import { tablePlugin } from './tablePlugin';
import { asidePlugin } from './asidePlugin';
import { ulPlugin } from './ulPlugin';
import { ddPlugin } from './ddPlugin';
import { dtPlugin } from './dtPlugin';
import { navPlugin } from './navPlugin';

export const basePlugins: Record<string, PluginType> = {
  h2: copyParagraphPlugin,
  h3: h3Plugin,
  ol: olPlugin,
  p: paragraphPlugin,
  span: spanPlugin,
  math: mathPlugin,
  div: divPlugin,
  table: tablePlugin,
  aside: asidePlugin,
  ul: ulPlugin,
  dd: ddPlugin,
  dt: dtPlugin,
  nav: navPlugin,
};

export const oembedPlugins: Record<string, PluginType> = {
  ...basePlugins,
  a: anchorPlugin,
};
