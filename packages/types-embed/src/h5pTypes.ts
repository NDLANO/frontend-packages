/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { MetaData, OembedProxyResponse } from ".";

export interface H5pEmbedData {
  resource: "h5p";
  path: string;
  url: string;
  title?: string;
  pageUrl?: string;
  alt?: string;
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

export interface H5pInfo {
  published: boolean;
  title: string;
  h5pLibrary: H5pLibraryInfo;
}

export interface H5pLibraryInfo {
  latestMajorVersion: number;
  latestMinorVersion: number;
  majorVersion: number;
  minorVersion: number;
  name: string;
  upgradable: boolean;
}

export interface OembedProxyData extends OembedProxyResponse {
  type: "proxy";
}

export interface H5pPreviewResponse {
  type: "preview";
  html?: string;
}

export type H5pOembedData = OembedProxyData | H5pPreviewResponse;

export interface H5pData {
  h5pLicenseInformation?: H5pLicenseInformation;
  h5pUrl: string;
  oembed?: H5pOembedData;
}

export type H5pMetaData = MetaData<H5pEmbedData, H5pData>;
