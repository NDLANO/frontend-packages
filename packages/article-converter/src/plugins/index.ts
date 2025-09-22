/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { anchorPlugin } from "./anchorPlugin";
import { asidePlugin } from "./asidePlugin";
import { blockquotePlugin } from "./blockquotePlugin";
import { copyParagraphPlugin } from "./copyParagraphPlugin";
import { detailsPlugin } from "./detailsPlugin";
import { divPlugin } from "./divPlugin";
import { dlPlugin } from "./dlPlugin";
import { h3Plugin } from "./h3Plugin";
import { mathPlugin } from "./mathPlugin";
import { navPlugin } from "./navPlugin";
import { olPlugin } from "./olPlugin";
import { paragraphPlugin } from "./paragraphPlugin";
import { summaryPlugin } from "./summaryPlugin";
import { tablePlugin } from "./tablePlugin";
import { type PluginType } from "./types";
import { ulPlugin } from "./ulPlugin";

export const plugins: Record<string, PluginType> = {
  h2: copyParagraphPlugin,
  h3: h3Plugin,
  ol: olPlugin,
  p: paragraphPlugin,
  math: mathPlugin,
  div: divPlugin,
  table: tablePlugin,
  aside: asidePlugin,
  ul: ulPlugin,
  nav: navPlugin,
  a: anchorPlugin,
  summary: summaryPlugin,
  details: detailsPlugin,
  dl: dlPlugin,
  blockquote: blockquotePlugin,
};
