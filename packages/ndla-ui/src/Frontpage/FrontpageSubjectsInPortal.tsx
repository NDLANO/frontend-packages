/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { spacing, fonts, colors } from '@ndla/core';
import { SafeLink } from '../index';

const StyledHeader = styled.h1`
  color: ${colors.brand.primary};
  ${fonts.sizes(32, 1)};
  margin-bottom: -${spacing.spacingUnit * 4}px;
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  > * {
    width: 100%;
  }
`;

const StyledUL = styled.ul`
  column-count: 3;
  column-gap: ${spacing.normal};
  list-style: none;
  margin: ${spacing.small} 0;
  padding: 0;
`;

const StyledLI = styled.li`
  padding: ${spacing.small} 0;
  ${fonts.sizes(18, 1.4)};
  font-weight: ${fonts.weight.semibold};
  display: inline-flex;
  width: 100%;
  margin: 0;
`;

interface Props {
  illustration: string;
  title: string;
  subjects: any[];
}

const FrontpageSubjectsInPortal: React.FunctionComponent<Props> = ({
  illustration,
  title,
  subjects,
}) => (
  <StyledNav>
    <StyledHeader>{title}</StyledHeader>
    <img src={illustration} />
    <StyledUL>
      {subjects.map(subject => (
        <StyledLI key={subject.url}>
          <SafeLink to={subject.url}>{subject.text}</SafeLink>
        </StyledLI>
      ))}
    </StyledUL>
  </StyledNav>
);
  
export default FrontpageSubjectsInPortal;