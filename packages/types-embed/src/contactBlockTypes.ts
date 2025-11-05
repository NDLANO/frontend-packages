/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { ImageMetaInformationV3DTO } from "@ndla/types-backend/image-api";
import type { MetaData } from "./baseTypes";

export interface ContactBlockEmbedData {
  resource: "contact-block";
  jobTitle: string;
  name: string;
  email: string;
  imageId: string;
  description: string;
  alt?: string;
  background?: string;
}
export interface ContactBlockData {
  image: ImageMetaInformationV3DTO;
}

export type ContactBlockMetaData = MetaData<ContactBlockEmbedData, ContactBlockData>;
