/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { IImageMetaInformationV3 } from '@ndla/types-backend/image-api';
import { MetaData } from '.';

export type KeyFigureEmbedData = {
  resource: 'key-figure';
  imageId: string;
  language: string;
  title: string;
  subtitle: string;
};

export interface KeyFigureMeta {
  metaImage?: IImageMetaInformationV3;
}

export type KeyFigureMetaData = MetaData<KeyFigureEmbedData, KeyFigureMeta>;
