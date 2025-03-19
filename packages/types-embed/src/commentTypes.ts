/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { MetaData } from "./baseTypes";

export interface CommentEmbedData {
  resource: "comment";
  text: string;
  type: "block" | "inline";
}

export type CommentMetaData = MetaData<CommentEmbedData, undefined>;
