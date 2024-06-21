/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { defineTokens } from "@pandacss/dev";

export const radii = defineTokens.radii({
  sharp: { value: "0px" },
  xsmall: { value: "{spacing.4xsmall}" },
  small: { value: "{spacing.xxsmall}" },
  medium: { value: "{spacing.xsmall}" },
  large: { value: "{spacing.medium}" },
  full: { value: "100%" },
});
