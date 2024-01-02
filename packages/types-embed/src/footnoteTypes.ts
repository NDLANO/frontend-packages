/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { MetaData } from ".";

export interface FootnoteEmbedData {
  resource: "footnote";
  title: string;
  type: string;
  year: string;
  edition: string;
  publisher: string;
  authors: string;
}

export interface FootnoteData {
  entryNum: number;
  authors: string[];
  year: string;
}

export type FootnoteMetaData = MetaData<FootnoteEmbedData, FootnoteData>;
