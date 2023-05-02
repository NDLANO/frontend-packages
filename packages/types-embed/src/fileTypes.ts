/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { MetaData } from '.';

export interface FileEmbedData {
  resource: 'file';
  path: string;
  display?: 'block' | 'inline';
  title: string;
  type: string;
  url: string;
}

export interface FileData {
  exists?: boolean;
}

export type FileMetaData = MetaData<FileEmbedData, FileData>;
