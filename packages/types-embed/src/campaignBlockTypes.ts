/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { ImageMetaInformationV3DTO } from "@ndla/types-backend/image-api";
import type { MetaData } from "./baseTypes";

export interface CampaignBlockEmbedData {
  resource: "campaign-block";
  title: string;
  description: string;
  headingLevel: "h1" | "h2" | "h3" | "h4" | "h5";
  background?: "brand1" | "neutral" | "brand3";
  url?: string;
  urlText?: string;
  imageId?: string;
  imageSide?: "left" | "right";
  alt?: string;
}

export interface CampaignBlockMeta {
  image?: ImageMetaInformationV3DTO;
}

export type CampaignBlockMetaData = MetaData<CampaignBlockEmbedData, CampaignBlockMeta>;
