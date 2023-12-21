/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { IImageMetaInformationV3 } from '@ndla/types-backend/image-api';
import { MetaData } from '.';

export interface CampaignBlockEmbedData {
  resource: 'campaign-block';
  title: string;
  titleLanguage: string;
  description: string;
  descriptionLanguage: string;
  headingLevel: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  url?: string;
  urlText?: string;
  imageId?: string;
  imageSide?: 'left' | 'right';
  alt?: string;
}

export interface CampaignBlockMeta {
  image?: IImageMetaInformationV3;
}

export type CampaignBlockMetaData = MetaData<CampaignBlockEmbedData, CampaignBlockMeta>;
