/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { HTMLAttributes, ReactNode } from 'react';
import styled from '@emotion/styled';
import { spacing } from '@ndla/core';

interface Props extends HTMLAttributes<HTMLElement> {
  header?: ReactNode;
  children: ReactNode;
  className?: string;
  id?: string;
}

const StyledSection = styled.section`
  padding-top: ${spacing.normal};
  padding-bottom: ${spacing.normal};
`;

const ResourcesWrapper = ({ children, header, ...rest }: Props) => (
  <StyledSection {...rest}>
    {header}
    {children}
  </StyledSection>
);

export default ResourcesWrapper;
