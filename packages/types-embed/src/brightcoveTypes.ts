/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { MetaData } from "./baseTypes";

export type BrightcoveEmbedData = {
  resource: "brightcove";
  videoid: string;
  caption: string;
  url?: string;
  account: string;
  player: string;
  title: string;
  metaData?: any;
  alt?: string;
  pageUrl?: string;
};

interface Author {
  name: string;
  type: string;
}

export interface BrightcoveCopyright {
  license: {
    license: string;
    description?: string;
    url?: string;
  };
  origin?: string;
  creators: Author[];
  processors: Author[];
  rightsholders: Author[];
}

export interface BrightcoveVideoSource {
  container?: string;
  size?: number;
  width?: number;
  height?: number;
  src: string;
}

export interface BrightcoveApiType {
  id: string;
  account_id?: string | null;
  published_at?: string | null;
  images?: {
    poster?: {
      src?: string;
    };
    thumbnail?: {
      src?: string;
    };
  };
  projection?: string;
  long_description?: string | null;
  description?: string | null;
  custom_fields: Record<string, string>;
  name?: string;
  link?: {
    text: string;
    url: string;
  };
}

export interface BrightcoveData extends BrightcoveApiType {
  sources: BrightcoveVideoSource[];
  copyright?: BrightcoveCopyright;
}

export type BrightcoveMetaData = MetaData<BrightcoveEmbedData, BrightcoveData>;
