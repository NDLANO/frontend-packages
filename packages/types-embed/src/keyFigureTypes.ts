/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { IImageMetaInformationV3DTO } from "@ndla/types-backend/image-api";
import type { MetaData } from ".";

export type KeyFigureEmbedData = {
  resource: "key-figure";
  imageId?: string;
  title: string;
  subtitle: string;
  alt?: string;
};

export interface KeyFigureMeta {
  metaImage?: IImageMetaInformationV3DTO;
}

export type KeyFigureMetaData = MetaData<KeyFigureEmbedData, KeyFigureMeta>;
