/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { ImageMetaInformationV3DTO } from "@ndla/types-backend/image-api";
import type { MetaData } from "./baseTypes";

export interface IframeEmbedData {
  resource: "iframe";
  type: string;
  url: string;
  width?: string;
  height?: string;
  title?: string;
  caption?: string;
  alt?: string;
  imageid?: string;
}

export interface IframeData {
  iframeImage?: ImageMetaInformationV3DTO;
}

export type IframeMetaData = MetaData<IframeEmbedData, IframeData>;
