/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ImageEmbedData, ImageMetaData } from './imageTypes';
import { AudioMetaData, AudioEmbedData } from './audioTypes';
import { IframeMetaData, IframeEmbedData } from './iframeTypes';

export type EmbedData =
  | AudioEmbedData
  | BrightcoveEmbedData
  | ContentLinkEmbedData
  | H5pEmbedData
  | ImageEmbedData
  | RelatedContentEmbedData
  | ConceptEmbedData
  | NRKEmbedData
  | IframeEmbedData
  | CodeEmbedData
  | FootnoteEmbedData
  | ConceptListEmbedData;

export type EmbedMetaData = ImageMetaData | AudioMetaData | IframeMetaData;
export type { ImageMetaData, AudioMetaData, IframeMetaData };
export type { AudioEmbedData, ImageEmbedData, IframeEmbedData };

interface MetaDataFailure<EmbedData> {
  embedData: EmbedData;
  status: 'error';
  seq: number;
  message?: string;
}

interface MetaDataSuccess<EmbedData, MetaData> {
  embedData: EmbedData;
  data: MetaData;
  seq: number;
  status: 'success';
}

export type MetaData<EmbedData, MetaData> = MetaDataFailure<EmbedData> | MetaDataSuccess<EmbedData, MetaData>;

export interface ContentLinkEmbedData {
  resource: 'content-link';
  contentId: string;
  linkText?: string;
  openIn?: string;
  contentType?: string;
}

export type ConceptEmbedData = {
  resource: 'concept';
  contentId: string;
  type: 'block' | 'inline';
  linkText: string;
};

export type ConceptListEmbedData = {
  resource: 'concept-list';
  tag: string;
  title: string;
  subjectId: string;
};

export interface CodeEmbedData {
  resource: 'code-block';
  codeFormat: string;
  codeContent: string;
  title?: string;
}

export type BrightcoveEmbedData = {
  resource: 'brightcove' | 'video';
  videoid: string;
  caption: string;
  url?: string;
  account: string;
  player: string;
  title: string;
  metaData?: any;
};

export interface FootnoteEmbedData {
  resource: 'footnote';
  title: string;
  type: string;
  year: string;
  edition: string;
  publisher: string;
  authors: string;
}

export interface H5pEmbedData {
  resource: 'h5p';
  path: string;
  url?: string;
  title?: string;
}

export interface RelatedContentEmbedData {
  resource: 'related-content';
  articleId?: string;
  url?: string;
  title?: string;
}

export interface NRKEmbedData {
  resource: 'nrk';
  nrkVideoId: string;
  url: string;
}
