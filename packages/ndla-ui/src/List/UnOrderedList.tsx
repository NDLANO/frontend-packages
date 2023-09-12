/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { colors, fonts, spacing } from '@ndla/core';
import { forwardRef, HTMLAttributes } from 'react';

const StyledUl = styled.ul`
  padding-left: ${spacing.nsmall} !important;
  margin-left: ${spacing.normal} !important;
  margin-top: 0;
  ${fonts.sizes('18px', '29px')};

  ul {
    list-style-image: none;
    padding-left: ${spacing.nsmall};

    margin-left: 0 !important;
  }

  > li {
    ::marker {
      color: ${colors.brand.secondary};
    }
  }
  // List item
  li {
    padding-left: ${spacing.nsmall};
    margin-top: ${spacing.nsmall};
    p {
      margin-bottom: ${spacing.nsmall} !important;
    }
  }
`;

const UnOrderedList = forwardRef<HTMLUListElement, HTMLAttributes<HTMLUListElement>>(({ children, ...rest }, ref) => {
  return (
    <StyledUl ref={ref} {...rest}>
      {children}
    </StyledUl>
  );
});

export default UnOrderedList;
