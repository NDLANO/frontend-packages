/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { IConcept, IConceptSummary } from '@ndla/types-concept-api';
import { BrightcoveEmbedData, BrightcoveMetaData, MetaData } from '.';
import { OembedEmbedData, OembedMetaData } from './externalTypes';
import { H5pEmbedData, H5pMetaData } from './h5pTypes';
import { ImageEmbedData, ImageMetaData } from './imageTypes';

export interface ConceptEmbedData {
  resource: 'concept';
  contentId: string;
  type: 'block' | 'inline';
  linkText: string;
}

export type ConceptVisualElement = ImageEmbedData | H5pEmbedData | OembedEmbedData | BrightcoveEmbedData;
export type ConceptVisualElementMeta = ImageMetaData | H5pMetaData | OembedMetaData | BrightcoveMetaData;

export interface ConceptData {
  concept: IConcept;
  visualElement?: ConceptVisualElementMeta;
}

export type ConceptMetaData = MetaData<ConceptEmbedData, ConceptData>;

export type ConceptListEmbedData = {
  resource: 'concept-list';
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
