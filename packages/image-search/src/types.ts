/**
 * Copyright (c) 2026-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { PaginationRootProps } from "@ndla/primitives";

export interface PreviewTranslations {
  creatorsLabel: string;
  license: string;
  caption: string;
  altText: string;
  modelRelease: string;
  tags: string;
  close: string;
  checkboxLabel?: string;
  missingTitleFallback?: string;
  useImageTitle: string;
}

export interface ImageSearchTranslations {
  searchPlaceholder: string;
  searchButtonTitle: string;
  imagePreview: PreviewTranslations;
  paginationTranslations: PaginationRootProps["translations"];
}
