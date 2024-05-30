/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { defineTokens } from "@pandacss/dev";

export const boxShadows = defineTokens.shadows({
  xxsmall: { value: ["0px 1px 3px 0px rgba(0, 0, 0, 0.15)", "0px 0px 0.5px 0px rgba(0, 0, 0, 0.18)"] },
  xsmall: {
    value: [
      "0px 3px 8px 0px rgba(0, 0, 0, 0.10)",
      "0px 1px 3px 0px rgba(0, 0, 0, 0.10)",
      "0px 0px 0.5px 0px rgba(0, 0, 0, 0.18)",
    ],
  },
  medium: {
    value: [
      "0px 5px 12px 0px rgba(0, 0, 0, 0.13)",
      "0px 1px 3px 0px rgba(0, 0, 0, 0.10)",
      "0px 0px 0.5px 0px rgba(0, 0, 0, 0.15)",
    ],
  },
  large: {
    value: [
      "0px 10px 16px 0px rgba(0, 0, 0, 0.12)",
      "0px 2px 5px 0px rgba(0, 0, 0, 0.15)",
      "0px 0px 0.5px 0px rgba(0, 0, 0, 0.12)",
    ],
  },
  xlarge: {
    value: [
      "0px 10px 24px 0px rgba(0, 0, 0, 0.18)",
      "0px 2px 5px 0px rgba(0, 0, 0, 0.15)",
      "0px 0px 0.5px 0px rgba(0, 0, 0, 0.08)",
    ],
  },
});
