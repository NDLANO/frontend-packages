import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { breakpoints, colors, fonts, mq } from '@ndla/core';
import { Heading } from '../Typography';

const StyledHeading = styled(Heading)`
  &[data-inverted='true'] {
    color: ${colors.white};
  }
`;
const StyledMainText = styled.span`
  display: block;
`;
const StyledSubText = styled.span`
  display: block;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 6px;

  ${fonts.sizes('14px', '24px')};

  ${mq.range({ from: breakpoints.tablet })} {
    ${fonts.sizes('18px', '32px')};
  }
`;

type Props = {
  subHeading?: string;
  children: ReactNode;
  invertedStyle?: boolean;
  headingId?: string;
};

export const NavigationHeading = ({ subHeading, children, invertedStyle, headingId }: Props) => (
  <StyledHeading
    element="h1"
    margin="xlarge"
    headingStyle="h1"
    serif
    data-inverted={invertedStyle}
    id={headingId}
    tabIndex={-1}
  >
    {subHeading && <StyledSubText>{subHeading}</StyledSubText>}
    <StyledMainText>{children}</StyledMainText>
  </StyledHeading>
);

export default NavigationHeading;
