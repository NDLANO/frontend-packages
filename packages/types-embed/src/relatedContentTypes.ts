/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { ArticleV2DTO } from "@ndla/types-backend/article-api";
import type { ArticleDTO } from "@ndla/types-backend/draft-api";
import type { Node } from "@ndla/types-taxonomy";
import type { MetaData } from "./baseTypes";

export interface RelatedContentEmbedData {
  resource: "related-content";
  articleId?: string;
  url?: string;
  title?: string;
  // This is filled out in article-converter and does not need to be set anywhere else.
  urlDomain?: string;
}

export interface RelatedContentData {
  article: ArticleV2DTO | ArticleDTO;
  resource?: Node;
}

export type RelatedContentMetaData = MetaData<RelatedContentEmbedData, RelatedContentData | undefined>;
