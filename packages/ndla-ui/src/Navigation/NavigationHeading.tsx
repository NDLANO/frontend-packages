import React from 'react';
import styled from '@emotion/styled';
import { breakpoints, fonts, mq, spacing } from '@ndla/core';

const StyledH1 = styled.h1`
  ${fonts.sizes('24px', '28px')};
  margin: ${spacing.medium} 0 ${spacing.normal} 0;
  font-weight: ${fonts.weight.bold};

  ${mq.range({ from: breakpoints.tablet })} {
    margin: 40px 0 18px;
    ${fonts.sizes('40px', '48px')};
  }

  ${mq.range({ from: breakpoints.desktop })} {
    margin: 50px 0 24px;
    ${fonts.sizes('52px', '65px')};
  }
`;

type Props = {
  children: React.ReactNode;
};

export const NavigationHeading = ({ children }: Props) => (
  <StyledH1>{children}</StyledH1>
);

export default NavigationHeading;
