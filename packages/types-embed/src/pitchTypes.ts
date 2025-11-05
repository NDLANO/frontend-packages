/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { ImageMetaInformationV3DTO } from "@ndla/types-backend/image-api";
import type { MetaData } from "./baseTypes";

export type PitchEmbedData = {
  resource: "pitch";
  imageId: string;
  title: string;
  description?: string;
  url: string;
  alt?: string;
};

export interface PitchMeta {
  metaImage?: ImageMetaInformationV3DTO;
}

export type PitchMetaData = MetaData<PitchEmbedData, PitchMeta>;
