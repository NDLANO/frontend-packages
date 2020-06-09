import React from 'react';
import styled from '@emotion/styled';
import { breakpoints, fonts, mq } from '@ndla/core';

const StyledH1 = styled.h1`
  ${fonts.sizes('24px', '28px')};
  margin: 30px 0 20px 0;
  font-weight: ${fonts.weight.bold};

  ${mq.range({ from: breakpoints.tablet })} {
    margin: 40px 0 22px;
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
