/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentPropsWithRef, forwardRef } from "react";
import styled from "@emotion/styled";
import { colors, spacing } from "@ndla/core";

const StyledFramedContent = styled.div`
  padding: ${spacing.mediumlarge};
  border: 1px solid ${colors.brand.tertiary};
  overflow: hidden;

  .c-figure {
    width: 100% !important;
    left: auto !important;
    padding: 0;

    &.u-float-right,
    &.u-float-small-right {
      width: 50% !important;
      margin-right: 0;
    }

    &.u-float-left,
    &.u-float-small-left {
      width: 50% !important;
      margin-left: 0;
    }
  }

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const FramedContent = forwardRef<HTMLDivElement, ComponentPropsWithRef<"div">>(({ children, ...rest }, ref) => (
  <StyledFramedContent {...rest} ref={ref}>
    {children}
  </StyledFramedContent>
));

export default FramedContent;
