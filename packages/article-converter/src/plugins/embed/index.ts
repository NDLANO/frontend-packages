/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { type PluginType } from "../types";
import { audioEmbedPlugin } from "./audioEmbedPlugin";
import { brightcoveEmbedPlugin } from "./brightcoveEmbedPlugin";
import { campaignBlockPlugin } from "./campaignBlockPlugin";
import { codeEmbedPlugin } from "./codeEmbedPlugin";
import { conceptEmbedPlugin } from "./conceptEmbedPlugin";
import { contactBlockEmbedPlugin } from "./contactBlockEmbedPlugin";
import { contentLinkEmbedPlugin } from "./contentLinkEmbedPlugin";
import { copyrightEmbedPlugin } from "./copyrightEmbedPlugin";
import { externalEmbedPlugin } from "./externalEmbedPlugin";
import { fileEmbedPlugin } from "./fileEmbedPlugin";
import { footnoteEmbedPlugin } from "./footnoteEmbedPlugin";
import { h5pEmbedPlugin } from "./h5pEmbedPlugin";
import { iframeEmbedPlugin } from "./iframeEmbedPlugin";
import { imageEmbedPlugin } from "./imageEmbedPlugin";
import { keyFigureEmbedPlugin } from "./KeyFigureEmbedPlugin";
import { linkBlockPlugin } from "./linkBlockEmbedPlugin";
import { pitchEmbedPlugin } from "./pitchEmbedPlugin";
import { relatedContentEmbedPlugin } from "./relatedContentEmbedPlugin";
import { symbolEmbedPlugin } from "./symbolEmbedPlugin";
import { uuDisclaimerEmbedPlugin } from "./uuDisclaimerEmbedPlugin";

export const embedPlugins: Record<string, PluginType> = {
  image: imageEmbedPlugin,
  audio: audioEmbedPlugin,
  h5p: h5pEmbedPlugin,
  "code-block": codeEmbedPlugin,
  external: externalEmbedPlugin,
  iframe: iframeEmbedPlugin,
  footnote: footnoteEmbedPlugin,
  brightcove: brightcoveEmbedPlugin,
  "related-content": relatedContentEmbedPlugin,
  "content-link": contentLinkEmbedPlugin,
  concept: conceptEmbedPlugin,
  pitch: pitchEmbedPlugin,
  file: fileEmbedPlugin,
  "key-figure": keyFigureEmbedPlugin,
  "contact-block": contactBlockEmbedPlugin,
  "campaign-block": campaignBlockPlugin,
  "link-block": linkBlockPlugin,
  "uu-disclaimer": uuDisclaimerEmbedPlugin,
  copyright: copyrightEmbedPlugin,
  symbol: symbolEmbedPlugin,
};
