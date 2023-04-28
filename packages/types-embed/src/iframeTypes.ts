/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { IImageMetaInformationV2 } from '@ndla/types-backend/image-api';
import { MetaData } from '.';

export interface IframeEmbedData {
  resource: 'iframe';
  type: string;
  url: string;
  width?: string;
  height?: string;
  title?: string;
  caption?: string;
  imageid?: string;
}

export interface IframeData {
  iframeImage?: IImageMetaInformationV2;
}

export type IframeMetaData = MetaData<IframeEmbedData, IframeData>;
