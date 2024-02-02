/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { IConcept, IConceptSummary } from "@ndla/types-backend/concept-api";
import {
  AudioEmbedData,
  AudioMetaData,
  BrightcoveEmbedData,
  BrightcoveMetaData,
  IframeEmbedData,
  IframeMetaData,
  MetaData,
} from ".";
import { OembedEmbedData, OembedMetaData } from "./externalTypes";
import { H5pEmbedData, H5pMetaData } from "./h5pTypes";
import { ImageEmbedData, ImageMetaData } from "./imageTypes";

export interface ConceptEmbedData {
  resource: "concept";
  conceptType: "concept" | "gloss";
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
  concept: IConcept;
  visualElement?: ConceptVisualElementMeta;
}

export type ConceptMetaData = MetaData<ConceptEmbedData, ConceptData>;

export type ConceptListEmbedData = {
  resource: "concept-list";
  tag: string;
  title: string;
  subjectId: string;
};

export interface ConceptListData {
  concepts: {
    concept: IConceptSummary;
    visualElement?: ConceptVisualElementMeta;
  }[];
}

export type ConceptListMetaData = MetaData<ConceptListEmbedData, ConceptListData>;
