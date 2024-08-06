/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { styled } from "@ndla/styled-system/jsx";

// TODO: Refactor this. It's a rewrite of our old layout.
export const PageContainer = styled("div", {
  base: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  defaultVariants: {
    backgroundWide: false,
  },
  variants: {
    backgroundWide: {
      true: {
        tablet: {
          backgroundColor: "#f8f8f8",
        },
      },
      false: {},
    },
  },
});

export default PageContainer;
