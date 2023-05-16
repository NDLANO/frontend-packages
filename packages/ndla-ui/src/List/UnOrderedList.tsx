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
import { generateListResets } from './OrderedList';

const StyledUl = styled.ul`
  padding-left: ${spacing.small} !important;
  margin-left: ${spacing.medium} !important;
  > li {
    ::marker {
      color: ${colors.brand.secondary};
    }
  }
  ul {
    list-style-image: none;
    padding-left: ${spacing.small};

    margin-left: 0 !important;
  }
  margin-top: 0;
  ${fonts.sizes('18px', '29px')};

  // List item
  li {
    padding-left: ${spacing.nsmall};
    margin-top: ${spacing.normal};
    p {
      margin-bottom: ${spacing.medium} !important;
    }
  }

  // Child unordered lists
  ul {
    padding-left: ${spacing.nsmall};
  }
  // List reset classes
  ${generateListResets()}
`;

const UnOrderedList = forwardRef<HTMLUListElement, HTMLAttributes<HTMLUListElement>>(({ children, ...rest }, ref) => {
  return (
    <StyledUl ref={ref} {...rest}>
      {children}
    </StyledUl>
  );
});

export default UnOrderedList;
