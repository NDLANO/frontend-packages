/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { IArticleV2 } from '@ndla/types-backend/article-api';
import { MetaData } from '.';

export interface RelatedContentEmbedData {
  resource: 'related-content';
  articleId?: string;
  url?: string;
  title?: string;
}

export interface NodeType {
  nodeType: 'RESOURCE' | 'TOPIC' | 'SUBJECT' | 'NODE';
  contentUri?: string;
  id: string;
  metadata: TaxonomyMetadata;
  name: string;
  path: string;
  paths: string[];
  relevanceId?: string;
  supportedLanguages: string[];
  translations: TaxonomyTranslation[];
  resourceTypes: {
    id: string;
    name: string;
    parentId?: string;
    translations: { name: string; language: string }[];
    supportedLanguages: string[];
    connectionId: string;
  }[];
}

interface TaxonomyTranslation {
  name: string;
  language: string;
}

interface TaxonomyMetadata {
  customFields: Record<string, string>;
  grepCodes: string[];
  visible: boolean;
}

export interface RelatedContentData {
  article: IArticleV2;
  resource: NodeType;
}

export type RelatedContentMetaData = MetaData<RelatedContentEmbedData, RelatedContentData | undefined>;
