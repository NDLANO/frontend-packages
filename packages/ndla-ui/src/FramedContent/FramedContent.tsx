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
  margin: ${spacing.large} 0;
  border: 1px solid ${colors.brand.tertiary};
  overflow: hidden;
`;

const FramedContent = forwardRef<HTMLDivElement, ComponentPropsWithRef<"div">>(({ children, ...rest }, ref) => (
  <StyledFramedContent {...rest} ref={ref}>
    {children}
  </StyledFramedContent>
));

export default FramedContent;
