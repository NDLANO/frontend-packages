/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { IImageMetaInformationV2 } from '@ndla/types-image-api';
import { MetaData } from '.';

export type BlogPostEmbedData = {
  resource: 'blog-post';
  imageId: number;
  language: string;
  title: string;
  size?: 'normal' | 'large';
  author: string;
  url: string;
};

export interface BlogPostMetaData {
  metaImage?: IImageMetaInformationV2;
}

export type BlogPostMeta = MetaData<BlogPostEmbedData, BlogPostMetaData>;
