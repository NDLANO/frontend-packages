/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { colors, fonts } from '@ndla/core';
import { forwardRef, HTMLAttributes } from 'react';
import { generateListResets } from './OrderedList';

const StyledUl = styled.ul`
  > li {
    ::marker {
      color: ${colors.brand.secondary};
    }
  }
  ul {
    padding-left: 44px;
  }
  margin-top: 0;
  margin-left: 0;
  ${fonts.sizes('18px', '29px')};

  // List item
  li {
    margin-top: 24px;
  }

  // Child unordered lists
  ul {
    padding-left: 20px;
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
