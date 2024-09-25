/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentPropsWithRef, forwardRef } from "react";
import { styled } from "@ndla/styled-system/jsx";

const StyledGridParallaxItem = styled("div", {
  base: {
    position: "relative",
    "& > div": {
      top: "var(--masthead-height, 0px)",
      position: "sticky",
    },
  },
});

export const GridParallaxItem = forwardRef<HTMLDivElement, ComponentPropsWithRef<"div">>(
  ({ children, ...rest }, ref) => (
    <StyledGridParallaxItem {...rest} data-embed-type="grid-parallax" ref={ref}>
      <div>{children}</div>
    </StyledGridParallaxItem>
  ),
);
