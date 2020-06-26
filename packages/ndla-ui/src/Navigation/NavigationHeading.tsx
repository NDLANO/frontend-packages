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
const StyledMainText = styled.span`
  display: block;
`;
const StyledSubText = styled.span`
  display: block;
  ${fonts.sizes('20px', '24px')};

  ${mq.range({ from: breakpoints.tablet })} {
    ${fonts.sizes('32px', '40px')};
  }

  ${mq.range({ from: breakpoints.desktop })} {
    ${fonts.sizes('40px', '48px')};
  }
`;

type Props = {
  subHeading?: string;
  children: React.ReactNode;
};

export const NavigationHeading = ({ subHeading, children }: Props) => (
  <StyledH1>
    <StyledMainText>{children}</StyledMainText>
    {subHeading && <StyledSubText>{subHeading}</StyledSubText>}
  </StyledH1>
);

export default NavigationHeading;
