/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { styled } from "@ndla/styled-system/jsx";

export const FooterBlock = styled("div", {
  base: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    // TODO: Not sure about this gap
    gap: "medium",
    background: "primary",
    color: "text.onAction",
    paddingBlock: "xxlarge",
    paddingInline: "small",
    tablet: {
      paddingInline: "medium",
      paddingBlock: "4xlarge",
    },
    "& a:focus-visible": {
      outlineColor: "surface.default",
    },
    wide: {
      paddingInline: "surface.3xsmall",
    },
    "& > *": {
      maxWidth: "1128px",
    },
  },
});
