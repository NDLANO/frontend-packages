/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef, HTMLAttributes } from "react";
import styled from "@emotion/styled";
import { fonts } from "@ndla/core";

const StyledDT = styled.dt`
  font-weight: ${fonts.weight.bold};
  ${fonts.sizes("18px", "29px")};
`;

const DefinitionTerm = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(({ children, ...rest }, ref) => {
  return (
    <StyledDT ref={ref} {...rest}>
      {children}
    </StyledDT>
  );
});

export default DefinitionTerm;
