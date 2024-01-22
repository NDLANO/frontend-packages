/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { AudioMetaData, AudioEmbedData, AudioMeta } from './audioTypes';
import { BlogPostEmbedData, BlogPostMetaData, BlogPostMeta } from './blogPostTypes';
import {
  BrightcoveData,
  BrightcoveEmbedData,
  BrightcoveMetaData,
  BrightcoveVideoSource,
  BrightcoveApiType,
  BrightcoveCopyright,
} from './brightcoveTypes';
import { CampaignBlockEmbedData, CampaignBlockMeta, CampaignBlockMetaData } from './campaignBlockTypes';
import { CodeEmbedData, CodeMetaData } from './codeTypes';
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
import { ContactBlockEmbedData, ContactBlockMetaData } from './contactBlockTypes';
import { ContentLinkData, ContentLinkEmbedData, ContentLinkMetaData } from './contentLinkTypes';
import { OembedEmbedData, OembedMetaData, OembedData } from './externalTypes';
import { FileEmbedData, FileMetaData } from './fileTypes';
import { FootnoteData, FootnoteEmbedData, FootnoteMetaData } from './footnoteTypes';
import {
  H5pMetaData,
  H5pEmbedData,
  OembedProxyData,
  H5pPreviewResponse,
  H5pOembedData,
  H5pLicenseInformation,
  H5pInfo,
  H5pData,
} from './h5pTypes';
import { IframeMetaData, IframeEmbedData, IframeData } from './iframeTypes';
import { ImageEmbedData, ImageMetaData } from './imageTypes';
import { KeyFigureEmbedData, KeyFigureMeta, KeyFigureMetaData } from './keyFigureTypes';
import { LinkBlockEmbedData, LinkBlockMetaData } from './linkBlockTypes';
import { RelatedContentData, RelatedContentEmbedData, RelatedContentMetaData } from './relatedContentTypes';
import { UuDisclaimerData, UuDisclaimerEmbedData, UuDisclaimerMetaData } from './uuDisclaimerTypes';

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
  | FileEmbedData
  | BlogPostEmbedData
  | KeyFigureEmbedData
  | ContactBlockEmbedData
  | CampaignBlockEmbedData
  | LinkBlockEmbedData
  | UuDisclaimerEmbedData;

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
  | FileMetaData
  | BlogPostMetaData
  | KeyFigureMetaData
  | ContactBlockMetaData
  | CampaignBlockMetaData
  | LinkBlockMetaData
  | UuDisclaimerMetaData;

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
  BlogPostMetaData,
  KeyFigureMetaData,
  ContactBlockMetaData,
  CampaignBlockMetaData,
  LinkBlockMetaData,
  UuDisclaimerMetaData,
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
  BlogPostEmbedData,
  KeyFigureEmbedData,
  ContactBlockEmbedData,
  CampaignBlockEmbedData,
  LinkBlockEmbedData,
  UuDisclaimerEmbedData,
};

export type { BlogPostMeta };
export type { KeyFigureMeta };
export type { OembedEmbedData, OembedData, OembedMetaData };
export type { IframeData };
export type { ContentLinkData };
export type { FootnoteData };
export type { BrightcoveData, BrightcoveApiType, BrightcoveVideoSource, BrightcoveCopyright };
export type { RelatedContentData };
export type { ConceptData, ConceptVisualElement, ConceptListData, ConceptVisualElementMeta };
export type { AudioMeta };
export type { H5pData };
export type { CampaignBlockMeta };
export type { OembedProxyData, H5pPreviewResponse, H5pOembedData, H5pLicenseInformation, H5pInfo };
export type { UuDisclaimerData };

interface MetaDataFailure<T extends EmbedData> {
  resource: T['resource'];
  embedData: T;
  status: 'error';
  message?: string;
}

interface MetaDataSuccess<T extends EmbedData, Data> {
  resource: T['resource'];
  embedData: T;
  data: Data;
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

export interface DisclaimerLink {
  text: string;
  href: string;
}
