/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { MetaData } from '.';

export type BrightcoveEmbedData = {
  resource: 'brightcove';
  videoid: string;
  caption: string;
  url?: string;
  account: string;
  player: string;
  title: string;
  metaData?: any;
};

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
  custom_fields: Record<string, string>;
  name?: string;
  link?: {
    text: string;
  };
}

export interface BrightcoveData extends BrightcoveApiType {
  sources: BrightcoveVideoSource[];
}

export type BrightcoveMetaData = MetaData<BrightcoveEmbedData, BrightcoveData>;
