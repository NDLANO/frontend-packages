/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { styled } from "@ndla/styled-system/jsx";

// TODO: This is a rewrite of our old layout. Refactor this.
export const OneColumn = styled("div", {
  base: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    paddingLeft: "18px",
    paddingRight: "18px",
    mobileWide: {
      paddingLeft: "medium",
      paddingRight: "medium",
    },
    _after: {
      content: '""!',
      display: "block!",
      clear: "both!",
    },
  },
  defaultVariants: {
    wide: false,
  },
  variants: {
    wide: {
      true: {
        maxWidth: "1150px",
      },
      false: {
        maxWidth: "1024px",
      },
    },
  },
});

export default OneColumn;
