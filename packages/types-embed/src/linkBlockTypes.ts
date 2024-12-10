/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { MetaData } from ".";

export interface LinkBlockEmbedData {
  resource: "link-block";
  title: string;
  date: string;
  url: string;
}

export type LinkBlockMetaData = MetaData<LinkBlockEmbedData, null>;
