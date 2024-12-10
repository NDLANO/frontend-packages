/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { MetaData } from ".";

export interface ContentLinkEmbedData {
  resource: "content-link";
  contentId: string;
  openIn?: string;
  contentType?: string;
}

export interface ContentLinkData {
  path: string;
}

export type ContentLinkMetaData = MetaData<ContentLinkEmbedData, ContentLinkData>;
