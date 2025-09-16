/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

// TODO: We might be able to get rid of some of these. See conditions.d.ts

export const conditions = {
  chinese: "&:where([lang='zh'], [lang='zh-Hans'], [lang='zh-Hant']):not([data-pinyin])",
  ariaInvalid: "&:has([aria-invalid='true']), &[aria-invalid='true']",
  disabled: "&:is(:disabled, [disabled], [data-disabled], [aria-disabled='true'])",
  on: '&:is([data-state="on"])',
};
