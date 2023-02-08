/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { MetaData, OembedProxyResponse } from '.';

export interface H5pEmbedData {
  resource: 'h5p';
  path: string;
  url: string;
  title?: string;
}

export interface H5pLicenseInformation {
  h5p: {
    title: string;
    source?: string | null;
    license?: string | null;
    licenseVersion?: string | null;
    licenseExtras?: string | null;
    thumbnail?: string | null;
    authors: {
      name: string;
      role: string;
    }[];
    assets?: {
      thumbnail?: string | null;
    }[];
  };
}

export interface OembedProxyData extends OembedProxyResponse {
  type: 'proxy';
}

export interface H5pPreviewResponse {
  type: 'preview';
  html?: string;
}

export type H5pOembedData = OembedProxyData | H5pPreviewResponse;

export interface H5pData {
  h5pLicenseInformation?: H5pLicenseInformation;
  h5pUrl: string;
  oembed?: H5pOembedData;
}

export type H5pMetaData = MetaData<H5pEmbedData, H5pData>;
