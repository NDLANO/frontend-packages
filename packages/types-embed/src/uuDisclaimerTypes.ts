/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { MetaData } from ".";

export interface UuDisclaimerEmbedData {
  resource: "uu-disclaimer";
  disclaimer: string;
}

export interface UUDisclaimerData {
  transformedContent: string;
}

export type UuDisclaimerMetaData = MetaData<UuDisclaimerEmbedData, UUDisclaimerData>;
