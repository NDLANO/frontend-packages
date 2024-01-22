/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { DisclaimerLink, MetaData } from '.';

export interface UuDisclaimerEmbedData {
  resource: 'uu-disclaimer';
  disclaimer: string;
  articleId?: number;
}

export interface UuDisclaimerData {
  disclaimerLink: DisclaimerLink;
}

export type UuDisclaimerMetaData = MetaData<UuDisclaimerEmbedData, UuDisclaimerData>;
