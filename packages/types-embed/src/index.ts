/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { AudioMetaData, AudioEmbedData, AudioMeta } from "./audioTypes";
import type {
  BrightcoveData,
  BrightcoveEmbedData,
  BrightcoveMetaData,
  BrightcoveVideoSource,
  BrightcoveApiType,
  BrightcoveCopyright,
} from "./brightcoveTypes";
import type { CampaignBlockEmbedData, CampaignBlockMeta, CampaignBlockMetaData } from "./campaignBlockTypes";
import type { CodeEmbedData, CodeMetaData } from "./codeTypes";
import type { CommentEmbedData, CommentMetaData } from "./commentTypes";
import type {
  ConceptData,
  ConceptEmbedData,
  ConceptMetaData,
  ConceptVisualElement,
  ConceptVisualElementMeta,
} from "./conceptTypes";
import type { ContactBlockEmbedData, ContactBlockMetaData } from "./contactBlockTypes";
import type { ContentLinkData, ContentLinkEmbedData, ContentLinkMetaData } from "./contentLinkTypes";
import type { CopyrightEmbedData, CopyrightMetaData } from "./copyrightTypes";
import type { OembedEmbedData, OembedMetaData, OembedData } from "./externalTypes";
import type { FileEmbedData, FileMetaData } from "./fileTypes";
import type { FootnoteData, FootnoteEmbedData, FootnoteMetaData } from "./footnoteTypes";
import type {
  H5pMetaData,
  H5pEmbedData,
  OembedProxyData,
  H5pPreviewResponse,
  H5pOembedData,
  H5pLicenseInformation,
  H5pInfo,
  H5pData,
} from "./h5pTypes";
import type { IframeMetaData, IframeEmbedData, IframeData } from "./iframeTypes";
import type { ImageEmbedData, ImageMetaData } from "./imageTypes";
import type { KeyFigureEmbedData, KeyFigureMeta, KeyFigureMetaData } from "./keyFigureTypes";
import type { LinkBlockEmbedData, LinkBlockMetaData } from "./linkBlockTypes";
import type { PitchEmbedData, PitchMetaData, PitchMeta } from "./pitchTypes";
import type { RelatedContentData, RelatedContentEmbedData, RelatedContentMetaData } from "./relatedContentTypes";
import type { SymbolEmbedData, SymbolMetaData } from "./symbolTypes";
import type { UUDisclaimerData, UuDisclaimerEmbedData, UuDisclaimerMetaData } from "./uuDisclaimerTypes";

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
  | OembedEmbedData
  | FileEmbedData
  | PitchEmbedData
  | KeyFigureEmbedData
  | ContactBlockEmbedData
  | CampaignBlockEmbedData
  | LinkBlockEmbedData
  | UuDisclaimerEmbedData
  | CopyrightEmbedData
  | CommentEmbedData
  | SymbolEmbedData;

export type EmbedMetaData =
  | AudioMetaData
  | BrightcoveMetaData
  | ContentLinkMetaData
  | ImageMetaData
  | RelatedContentMetaData
  | ConceptMetaData
  | IframeMetaData
  | H5pMetaData
  | OembedMetaData
  | CodeMetaData
  | FootnoteMetaData
  | FileMetaData
  | PitchMetaData
  | KeyFigureMetaData
  | ContactBlockMetaData
  | CampaignBlockMetaData
  | LinkBlockMetaData
  | UuDisclaimerMetaData
  | CopyrightMetaData
  | CommentMetaData
  | SymbolMetaData;

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
  FileMetaData,
  PitchMetaData,
  KeyFigureMetaData,
  ContactBlockMetaData,
  CampaignBlockMetaData,
  LinkBlockMetaData,
  UuDisclaimerMetaData,
  CopyrightMetaData,
  CommentMetaData,
  SymbolMetaData,
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
  FileEmbedData,
  PitchEmbedData,
  KeyFigureEmbedData,
  ContactBlockEmbedData,
  CampaignBlockEmbedData,
  LinkBlockEmbedData,
  UuDisclaimerEmbedData,
  CopyrightEmbedData,
  CommentEmbedData,
  SymbolEmbedData,
};

export type { PitchMeta };
export type { KeyFigureMeta };
export type { OembedEmbedData, OembedData, OembedMetaData };
export type { IframeData };
export type { ContentLinkData };
export type { FootnoteData };
export type { BrightcoveData, BrightcoveApiType, BrightcoveVideoSource, BrightcoveCopyright };
export type { RelatedContentData };
export type { ConceptData, ConceptVisualElement, ConceptVisualElementMeta };
export type { AudioMeta };
export type { H5pData };
export type { CampaignBlockMeta };
export type { OembedProxyData, H5pPreviewResponse, H5pOembedData, H5pLicenseInformation, H5pInfo };
export type { UUDisclaimerData };
export type { MetaData } from "./baseTypes";
export type { OembedProxyResponse } from "./oembedTypes";

export interface NRKEmbedData {
  resource: "nrk";
  nrkVideoId: string;
  url: string;
}
