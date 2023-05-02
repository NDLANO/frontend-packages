/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { MetaData } from '.';

export interface CodeEmbedData {
  resource: 'code-block';
  codeFormat: string;
  codeContent: string;
  title?: string;
}

export interface CodeData {
  decodedContent: string;
}

export type CodeMetaData = MetaData<CodeEmbedData, CodeData>;
