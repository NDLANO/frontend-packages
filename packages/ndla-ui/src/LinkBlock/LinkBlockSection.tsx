/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Children, HTMLAttributes, ReactNode } from 'react';
import styled from '@emotion/styled';
import { spacing } from '@ndla/core';

interface Props extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${spacing.small};
  list-style: none;
  padding: 0px;
  li {
    padding: 0px;
  }
`;

const LinkBlockSection = ({ children, ...rest }: Props) => {
  return (
    <nav {...rest}>
      <StyledList>
        {Children.map(children, (child) => (
          <li>{child}</li>
        ))}
      </StyledList>
    </nav>
  );
};

export default LinkBlockSection;
