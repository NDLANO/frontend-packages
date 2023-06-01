/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { colors, fonts } from '@ndla/core';
import { forwardRef, HTMLAttributes } from 'react';

const StyledDT = styled.dt`
  color: ${colors.text.primary};
  font-weight: ${fonts.weight.bold};
  ${fonts.sizes('18px', '29px')};
`;

const DefinitionTerm = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(({ children, ...rest }, ref) => {
  return (
    <StyledDT ref={ref} {...rest}>
      {children}
    </StyledDT>
  );
});

export default DefinitionTerm;
