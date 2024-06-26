/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ICopyright, IImageMetaInformationV3 } from "@ndla/types-backend/image-api";
import { MetaData } from ".";

export interface ImageEmbedData {
  resource: "image";
  resourceId: string;
  size?: string;
  align?: string;
  alt: string;
  caption?: string;
  url?: string;
  focalX?: string;
  focalY?: string;
  lowerRightY?: string;
  lowerRightX?: string;
  upperLeftY?: string;
  upperLeftX?: string;
  metaData?: any;
  pageUrl?: string;
  border?: string;
  isDecorative?: string;
  hideByline?: string;
  hideCaption?: string;
}

export interface ImageData {
  title: string;
  altText: string;
  copyright: ICopyright;
  src: string;
  copyText: string;
}

export type ImageMetaData = MetaData<ImageEmbedData, IImageMetaInformationV3>;
