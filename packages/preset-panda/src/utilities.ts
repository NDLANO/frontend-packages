/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { UtilityConfig } from "@pandacss/types";

export const utilities: UtilityConfig = {
  textDecoration: {
    transform(value: string) {
      if (value === "underline") {
        return {
          textDecoration: value,
          // thickness is overridden if you only specify `textDecoration: "underline"`.
          textDecorationThickness: "max(0.0625em, 1px)",
        };
      }
      return { textDecoration: value };
    },
  },
};
