/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { PluginType } from '../types';
import { AudioEmbedPlugin } from './AudioEmbedPlugin';
import { ExternalEmbedPlugin } from './ExternalEmbedPlugin';
import { H5pEmbedPlugin } from './H5pEmbedPlugin';
import { IframeEmbedPlugin } from './IframeEmbedPlugin';
import { ImageEmbedPlugin } from './ImageEmbedPlugin';
import { FootnoteEmbedPlugin } from './FootnoteEmbedPlugin';
import { BrightcoveEmbedPlugin } from './BrightcoveEmbedPlugin';
import { RelatedContentEmbedPlugin } from './RelatedContentEmbedPlugin';
import { ContentLinkEmbedPlugin } from './ContentLinkEmbedPlugin';
import { ConceptEmbedPlugin } from './ConceptEmbedPlugin';
import { ConceptListEmbedPlugin } from './ConceptListEmbedPlugin';
import { FileEmbedPlugin } from './FileEmbedPlugin';

export const embedPlugins: Record<string, PluginType> = {
  image: ImageEmbedPlugin,
  audio: AudioEmbedPlugin,
  h5p: H5pEmbedPlugin,
  external: ExternalEmbedPlugin,
  iframe: IframeEmbedPlugin,
  footnote: FootnoteEmbedPlugin,
  brightcove: BrightcoveEmbedPlugin,
  'related-content': RelatedContentEmbedPlugin,
  'content-link': ContentLinkEmbedPlugin,
  concept: ConceptEmbedPlugin,
  'concept-list': ConceptListEmbedPlugin,
  file: FileEmbedPlugin,
};
