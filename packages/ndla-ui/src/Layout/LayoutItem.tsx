/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { styled } from "@ndla/styled-system/jsx";

// TODO: Refactor this. This is a copy of our old layout.
export const LayoutItem = styled("section", {
  defaultVariants: {
    layout: "center",
  },
  variants: {
    layout: {
      center: {
        position: "relative!",
        width: "83.333%",
        right: "auto !important",
        left: "8.333%",
      },
      extend: {
        tablet: {
          position: "relative!",
          width: "83.333%",
          right: "auto!",
          left: "8.333%",
        },
      },
    },
  },
});

export default LayoutItem;
