/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { PluginType } from '../types';
import { audioEmbedPlugin } from './audioEmbedPlugin';
import { externalEmbedPlugin } from './externalEmbedPlugin';
import { h5pEmbedPlugin } from './h5pEmbedPlugin';
import { iframeEmbedPlugin } from './iframeEmbedPlugin';
import { imageEmbedPlugin } from './imageEmbedPlugin';
import { footnoteEmbedPlugin } from './footnoteEmbedPlugin';
import { brightcoveEmbedPlugin } from './brightcoveEmbedPlugin';
import { relatedContentEmbedPlugin } from './relatedContentEmbedPlugin';
import { contentLinkEmbedPlugin } from './contentLinkEmbedPlugin';
import { conceptEmbedPlugin } from './conceptEmbedPlugin';
import { conceptListEmbedPlugin } from './conceptListEmbedPlugin';
import { fileEmbedPlugin } from './fileEmbedPlugin';
import { codeEmbedPlugin } from './codeEmbedPlugin';
import { blogPostEmbedPlugin } from './blogPostEmbedPlugin';
import { keyFigureEmbedPlugin } from './KeyFigureEmbedPlugin';
import { contactBlockEmbedPlugin } from './contactBlockEmbedPlugin';
import { campaignBlockPlugin } from './campaignBlockPlugin';
import { linkBlockPlugin } from './linkBlockEmbedPlugin';

export const embedPlugins: Record<string, PluginType> = {
  image: imageEmbedPlugin,
  audio: audioEmbedPlugin,
  h5p: h5pEmbedPlugin,
  'code-block': codeEmbedPlugin,
  external: externalEmbedPlugin,
  iframe: iframeEmbedPlugin,
  footnote: footnoteEmbedPlugin,
  brightcove: brightcoveEmbedPlugin,
  'related-content': relatedContentEmbedPlugin,
  'content-link': contentLinkEmbedPlugin,
  concept: conceptEmbedPlugin,
  'concept-list': conceptListEmbedPlugin,
  'blog-post': blogPostEmbedPlugin,
  file: fileEmbedPlugin,
  'key-figure': keyFigureEmbedPlugin,
  'contact-block': contactBlockEmbedPlugin,
  'campaign-block': campaignBlockPlugin,
  'link-block': linkBlockPlugin,
};
