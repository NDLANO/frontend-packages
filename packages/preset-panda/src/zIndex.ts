/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { defineTokens } from "@pandacss/dev";

export const zIndex = defineTokens.zIndex({
  hide: {
    value: -1,
  },
  base: {
    value: 0,
  },
  docked: {
    value: 10,
  },
  dropdown: {
    value: 1000,
  },
  sticky: {
    value: 1100,
  },
  banner: {
    value: 1200,
  },
  overlay: {
    value: 1300,
  },
  modal: {
    value: 1400,
  },
  alertModalOverlay: {
    value: 1500,
  },
  alertModal: {
    value: 1600,
  },
  popover: {
    value: 1700,
  },
  skipLink: {
    value: 1800,
  },
  toast: {
    value: 1900,
  },
  tooltip: {
    value: 2000,
  },
});
