/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { MetaData } from "./baseTypes";

export interface SymbolEmbedData {
  resource: "symbol";
}

export type SymbolMetaData = MetaData<SymbolEmbedData, null>;
