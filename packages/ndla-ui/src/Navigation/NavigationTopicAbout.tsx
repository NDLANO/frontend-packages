import React from 'react';
import styled from '@emotion/styled';
import { breakpoints, fonts, mq, spacing } from '@ndla/core';

const StyledWrapper = styled.section``;

const StyledIngress = styled.p`
  max-width: 612px;
`;

const StyledH1 = styled.h1`
  ${fonts.sizes('24px', '28px')}
  margin: ${spacing.medium} 0 ${spacing.normal} 0;
  font-weight: ${fonts.weight.bold};

  ${mq.range({ from: breakpoints.tablet })} {
    margin: 40px 0 18px;
    ${fonts.sizes('32px', '28px')};
  }

  ${mq.range({ from: breakpoints.desktop })} {
    margin: 50px 0 24px;
    ${fonts.sizes('38px', '32px')};
  }
`;

type Props = {
  heading: string;
  ingress: string;
  children: React.ReactNode;
};

export const NavigationTopicAbout = ({ heading, ingress, children }: Props) => (
  <StyledWrapper>
    <StyledH1>{heading}</StyledH1>
    <StyledIngress>{ingress}</StyledIngress>
    {children}
  </StyledWrapper>
);

export default NavigationTopicAbout;
