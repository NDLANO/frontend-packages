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

const StyledDD = styled.dd`
  color: ${colors.text.light};
  font-weight: ${fonts.weight.normal};
  ${fonts.sizes('18px', '29px')};
`;

const DefinitionDescription = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(({ children, ...rest }, ref) => {
  return (
    <StyledDD ref={ref} {...rest}>
      {children}
    </StyledDD>
  );
});

export default DefinitionDescription;
