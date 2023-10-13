/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { IArticleV2 } from '@ndla/types-backend/article-api';
import { IArticle } from '@ndla/types-backend/draft-api';
import { Node } from '@ndla/types-taxonomy';
import { MetaData } from '.';

export interface RelatedContentEmbedData {
  resource: 'related-content';
  articleId?: string;
  url?: string;
  title?: string;
}

export interface RelatedContentData {
  article: IArticleV2 | IArticle;
  resource: Node;
}

export type RelatedContentMetaData = MetaData<RelatedContentEmbedData, RelatedContentData | undefined>;
