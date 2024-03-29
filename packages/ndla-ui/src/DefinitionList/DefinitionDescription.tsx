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

const StyledDD = styled.dd`
  font-weight: ${fonts.weight.normal};
  ${fonts.sizes("18px", "29px")};
`;

const DefinitionDescription = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(({ children, ...rest }, ref) => {
  return (
    <StyledDD ref={ref} {...rest}>
      {children}
    </StyledDD>
  );
});

export default DefinitionDescription;
