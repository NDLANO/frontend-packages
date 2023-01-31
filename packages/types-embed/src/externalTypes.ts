/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { IImageMetaInformationV2 } from '@ndla/types-image-api';
import { MetaData, OembedProxyResponse } from '.';

export interface OembedEmbedData {
  resource: 'external';
  url: string;
  type?: string;
  metaData?: any;
  caption?: string;
  title?: string;
  height?: string;
  imageid?: string;
}

export interface OembedData {
  oembed: OembedProxyResponse;
  iframeImage?: IImageMetaInformationV2;
}

export type OembedMetaData = MetaData<OembedEmbedData, OembedData>;
