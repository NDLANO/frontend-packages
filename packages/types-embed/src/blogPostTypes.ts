/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { IImageMetaInformationV3 } from '@ndla/types-backend/image-api';
import { MetaData } from '.';

export type BlogPostEmbedData = {
  resource: 'blog-post';
  imageId: string;
  language: string;
  title: string;
  size?: 'normal' | 'large';
  author?: string;
  url: string;
  alt?: string;
};

export interface BlogPostMeta {
  metaImage?: IImageMetaInformationV3;
}

export type BlogPostMetaData = MetaData<BlogPostEmbedData, BlogPostMeta>;
