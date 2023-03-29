/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { IImageMetaInformationV2 } from '@ndla/types-image-api';
import { MetaData } from '.';
export interface ContactBlockEmbedData {
  resource: 'contact-block';
  title: string;
  name: string;
  email: string;
  imageId: string;
  summary: string;
  color?: 'pink' | 'green';
}
export interface ContactBlockData {
  image: IImageMetaInformationV2;
}

export type ContactBlockMetaData = MetaData<ContactBlockEmbedData, ContactBlockData>;
