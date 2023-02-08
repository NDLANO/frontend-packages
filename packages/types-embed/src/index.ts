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
import {
  BrightcoveData,
  BrightcoveEmbedData,
  BrightcoveMetaData,
  BrightcoveVideoSource,
  BrightcoveApiType,
  BrightcoveCopyright,
} from './brightcoveTypes';
import { RelatedContentData, RelatedContentEmbedData, RelatedContentMetaData, NodeType } from './relatedContentTypes';
import {
  ConceptListData,
  ConceptData,
  ConceptEmbedData,
  ConceptListEmbedData,
  ConceptListMetaData,
  ConceptMetaData,
  ConceptVisualElement,
  ConceptVisualElementMeta,
} from './conceptTypes';
import { FileEmbedData, FileMetaData } from './fileTypes';

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
  | OembedEmbedData
  | FileEmbedData;

export type EmbedMetaData =
  | AudioMetaData
  | BrightcoveMetaData
  | ContentLinkMetaData
  | ImageMetaData
  | RelatedContentMetaData
  | ConceptMetaData
  | IframeMetaData
  | H5pMetaData
  | ConceptListMetaData
  | OembedMetaData
  | CodeMetaData
  | FootnoteMetaData
  | FileMetaData;
export type {
  ConceptMetaData,
  ImageMetaData,
  RelatedContentMetaData,
  BrightcoveMetaData,
  AudioMetaData,
  IframeMetaData,
  H5pMetaData,
  CodeMetaData,
  ContentLinkMetaData,
  FootnoteMetaData,
  ConceptListMetaData,
  FileMetaData,
};
export type {
  ConceptEmbedData,
  BrightcoveEmbedData,
  RelatedContentEmbedData,
  AudioEmbedData,
  ImageEmbedData,
  IframeEmbedData,
  H5pEmbedData,
  CodeEmbedData,
  ContentLinkEmbedData,
  FootnoteEmbedData,
  ConceptListEmbedData,
  FileEmbedData,
};
export type { OembedEmbedData, OembedData, OembedMetaData };
export type { IframeData };
export type { ContentLinkData };
export type { FootnoteData };
export type { BrightcoveData, BrightcoveApiType, BrightcoveVideoSource, BrightcoveCopyright };
export type { RelatedContentData, NodeType };
export type { ConceptData, ConceptVisualElement, ConceptListData, ConceptVisualElementMeta };

export type { OembedProxyData, H5pPreviewResponse, H5pOembedData, H5pLicenseInformation };

interface MetaDataFailure<T extends EmbedData> {
  resource: T['resource'];
  embedData: T;
  status: 'error';
  seq: number;
  message?: string;
}

interface MetaDataSuccess<T extends EmbedData, Data> {
  resource: T['resource'];
  embedData: T;
  data: Data;
  seq: number;
  status: 'success';
}

export type MetaData<Embed extends EmbedData, Data> = MetaDataFailure<Embed> | MetaDataSuccess<Embed, Data>;

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

export interface NRKEmbedData {
  resource: 'nrk';
  nrkVideoId: string;
  url: string;
}
