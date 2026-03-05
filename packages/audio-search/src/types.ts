/**
 * Copyright (c) 2026-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export interface QueryObject {
  query?: string;
  audioType?: string;
  page: number;
  pageSize: number;
  locale: string;
  fallback?: boolean;
}
