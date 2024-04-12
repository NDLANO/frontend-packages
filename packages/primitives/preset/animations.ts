/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { defineTokens } from "@pandacss/dev";

export const animations = defineTokens.animations({});

export const easings = defineTokens.easings({
  default: { value: "cubic-bezier(0.17, 0.04, 0.03, 0.94)" },
});

export const durations = defineTokens.durations({
  superFast: { value: "100ms" },
  fast: { value: "200ms" },
  normal: { value: "400ms" },
  slow: { value: "600ms" },
});
