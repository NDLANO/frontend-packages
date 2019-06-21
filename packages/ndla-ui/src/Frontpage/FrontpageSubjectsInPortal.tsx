/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { spacing, fonts, colors, mq, breakpoints } from '@ndla/core';
import SafeLink from '../common/SafeLink';

const StyledHeader = styled.h1`
  color: ${colors.brand.primary};
  ${fonts.sizes(24, 1)};
  margin-top: ${spacing.large};
  margin-bottom: ${spacing.normal};
  ${mq.range({ from: breakpoints.tablet })} {
    ${fonts.sizes(26, 1)};
    margin-top: 0;
    margin-bottom: -${spacing.spacingUnit * 2}px;
  }
  ${mq.range({ from: breakpoints.tabletWide })} {
    ${fonts.sizes(32, 1)};
    margin-top: 0;
    margin-bottom: -${spacing.spacingUnit * 3}px;
  }
  ${mq.range({ from: breakpoints.desktop })} {
    margin-top: ${spacing.normal};
    margin-bottom: -${spacing.spacingUnit * 4}px;
  }
`;

const StyledSafeLink = styled(SafeLink)`
  box-shadow: none;
  text-decoration: underline;
  color: ${colors.brand.primary};
  &:hover, &:focus {
    text-decoration: none;
  }
`;

type StyledImageProps = {
  mobile: boolean;
};

const StyledImage = styled.img<StyledImageProps>`
  display: ${props => !props.mobile ? 'none' : 'block'};
  margin-top: -136px;
  ${mq.range({ from: breakpoints.tablet })} {
    display: ${props => props.mobile ? 'none' : 'block'};
    margin-top: 0;
  }
  width: ${props => props.mobile ? '100px' : '100%'};
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${spacing.normal};
  ${mq.range({ from: breakpoints.tablet })} {
    align-items: flex-start;
  }
`;

const StyledUL = styled.ul`
  column-count: 1;
  column-gap: ${spacing.normal};
  list-style: none;
  margin: ${spacing.small} 0;
  width: 100%;
  padding: ${spacing.normal} 0 0;
  ${mq.range({ from: breakpoints.tablet })} {
    padding: 0;
    column-count: 2;
  }
  ${mq.range({ from: breakpoints.desktop })} {
    column-count: 3;
  }
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
  illustrationMobile: string;
  title: string;
  subjects: any[];
}

const FrontpageSubjectsInPortal: React.FunctionComponent<Props> = ({
  illustration,
  illustrationMobile,
  title,
  subjects,
}) => (
  <StyledNav>
    <StyledHeader>{title}</StyledHeader>
    <StyledImage src={illustration} />
    <StyledImage mobile src={illustrationMobile} />
    <StyledUL>
      {subjects.map(subject => (
        <StyledLI key={subject.url}>
          <StyledSafeLink to={subject.url}>{subject.text}</StyledSafeLink>
        </StyledLI>
      ))}
    </StyledUL>
  </StyledNav>
);
  
export default FrontpageSubjectsInPortal;