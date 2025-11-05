/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { ImageMetaInformationV3DTO } from "@ndla/types-backend/image-api";
import type { MetaData } from "./baseTypes";
import type { OembedProxyResponse } from "./oembedTypes";

export interface OembedEmbedData {
  resource: "external";
  url: string;
  type?: string;
  metaData?: any;
  caption?: string;
  title?: string;
  height?: string;
  imageid?: string;
  alt?: string;
}

export interface OembedData {
  oembed: OembedProxyResponse;
  iframeImage?: ImageMetaInformationV3DTO;
}

export type OembedMetaData = MetaData<OembedEmbedData, OembedData>;
