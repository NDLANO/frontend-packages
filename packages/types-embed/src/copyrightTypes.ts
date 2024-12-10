/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { ICopyright } from "@ndla/types-backend/article-api";
import type { MetaData } from ".";

export interface CopyrightEmbedData {
  resource: "copyright";
  title?: string;
  copyright: ICopyright;
}

export type CopyrightMetaData = MetaData<CopyrightEmbedData, undefined>;
