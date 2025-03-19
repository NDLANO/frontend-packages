/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { IConceptDTO } from "@ndla/types-backend/concept-api";
import type { MetaData } from "./baseTypes";
import type { OembedEmbedData, OembedMetaData } from "./externalTypes";
import type { H5pEmbedData, H5pMetaData } from "./h5pTypes";
import type { ImageEmbedData, ImageMetaData } from "./imageTypes";
import type { BrightcoveEmbedData, BrightcoveMetaData } from "./brightcoveTypes";
import type { IframeEmbedData, IframeMetaData } from "./iframeTypes";
import type { AudioEmbedData, AudioMetaData } from "./audioTypes";

export interface ConceptEmbedData {
  resource: "concept";
  contentId: string;
  type: "block" | "inline" | "notion";
  linkText: string;
  pageUrl?: string;
  exampleIds?: string;
  exampleLangs?: string;
}

export type ConceptVisualElement =
  | ImageEmbedData
  | H5pEmbedData
  | OembedEmbedData
  | BrightcoveEmbedData
  | IframeEmbedData
  | AudioEmbedData;
export type ConceptVisualElementMeta =
  | ImageMetaData
  | H5pMetaData
  | OembedMetaData
  | BrightcoveMetaData
  | IframeMetaData
  | AudioMetaData;

export interface ConceptData {
  concept: IConceptDTO;
  visualElement?: ConceptVisualElementMeta;
}

export type ConceptMetaData = MetaData<ConceptEmbedData, ConceptData>;
