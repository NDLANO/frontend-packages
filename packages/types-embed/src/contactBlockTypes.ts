/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { IImageMetaInformationV3 } from '@ndla/types-backend/image-api';
import { MetaData } from '.';
export interface ContactBlockEmbedData {
  resource: 'contact-block';
  jobTitle: string;
  name: string;
  email: string;
  imageId: string;
  description: string;
  alt?: string;
  blobColor?: 'pink' | 'green';
  blob?: 'pointy' | 'round';
}
export interface ContactBlockData {
  image: IImageMetaInformationV3;
}

export type ContactBlockMetaData = MetaData<ContactBlockEmbedData, ContactBlockData>;
