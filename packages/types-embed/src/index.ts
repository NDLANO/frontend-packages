/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ImageEmbedData, ImageMetaData } from './imageTypes';
import { AudioMetaData, AudioEmbedData } from './audioTypes';
import { IframeMetaData, IframeEmbedData, IframeData } from './iframeTypes';
import {
  H5pMetaData,
  H5pEmbedData,
  OembedProxyData,
  H5pPreviewResponse,
  H5pOembedData,
  H5pLicenseInformation,
} from './h5pTypes';
import { OembedEmbedData, OembedMetaData, OembedData } from './externalTypes';
import { CodeEmbedData, CodeMetaData } from './codeTypes';
import { ContentLinkData, ContentLinkEmbedData, ContentLinkMetaData } from './contentLinkTypes';
import { FootnoteData, FootnoteEmbedData, FootnoteMetaData } from './footnoteTypes';

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
  | ConceptListEmbedData
  | OembedEmbedData;

export type EmbedMetaData =
  | AudioMetaData
  | ContentLinkMetaData
  | ImageMetaData
  | IframeMetaData
  | H5pMetaData
  | OembedMetaData
  | CodeMetaData
  | FootnoteMetaData;
export type {
  ImageMetaData,
  AudioMetaData,
  IframeMetaData,
  H5pMetaData,
  CodeMetaData,
  ContentLinkMetaData,
  FootnoteMetaData,
};
export type {
  AudioEmbedData,
  ImageEmbedData,
  IframeEmbedData,
  H5pEmbedData,
  CodeEmbedData,
  ContentLinkEmbedData,
  FootnoteEmbedData,
};
export type { OembedEmbedData, OembedData, OembedMetaData };
export type { IframeData };
export type { ContentLinkData };
export type { FootnoteData };

export type { OembedProxyData, H5pPreviewResponse, H5pOembedData, H5pLicenseInformation };

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

export interface OembedProxyResponse {
  type: string;
  version: string;
  title?: string;
  description?: string;
  authorName?: string;
  authorUrl?: string;
  providerName?: string;
  providerUrl?: string;
  cacheAge?: number;
  thumbnailUrl?: string;
  thumbnailWidth?: number;
  thumbnailHeight?: number;
  width?: number;
  height?: number;
  html?: string;
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
