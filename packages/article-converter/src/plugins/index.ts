/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { anchorPlugin } from "./anchorPlugin";
import { asidePlugin } from "./asidePlugin";
import { copyParagraphPlugin } from "./copyParagraphPlugin";
import { ddPlugin } from "./ddPlugin";
import { divPlugin } from "./divPlugin";
import { dtPlugin } from "./dtPlugin";
import { h3Plugin } from "./h3Plugin";
import { mathPlugin } from "./mathPlugin";
import { navPlugin } from "./navPlugin";
import { anchorPlugin as oembedAnchorPlugin } from "./oembed/anchorPlugin";
import { olPlugin } from "./olPlugin";
import { paragraphPlugin } from "./paragraphPlugin";
import { spanPlugin } from "./spanPlugin";
import { tablePlugin } from "./tablePlugin";
import { PluginType } from "./types";
import { ulPlugin } from "./ulPlugin";

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
  a: anchorPlugin,
};

export const oembedPlugins: Record<string, PluginType> = {
  ...basePlugins,
  a: oembedAnchorPlugin,
};
