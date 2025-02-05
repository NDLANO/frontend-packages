/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { styled } from "@ndla/styled-system/jsx";

/**
 *
 * Necessary component for handling keyboard navigation in and out of inline elements.
 * https://github.com/ianstormtaylor/slate/blob/d271c4be543027be2197f353d7ea61b51e9c48c6/site/examples/inlines.tsx#L77-L82
 *
 */
export const InlineBugfix = styled(
  "span",
  {
    base: {
      fontSize: "unset",
      lineHeight: "unset",
    },
  },
  { defaultProps: { contentEditable: false } },
);
