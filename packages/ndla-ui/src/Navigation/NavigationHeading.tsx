import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { breakpoints, fonts, mq } from '@ndla/core';

type InvertItProps = {
  invertedStyle?: boolean;
};

const StyledH1 = styled.h1<InvertItProps>`
  ${fonts.sizes('24px', '28px')};
  margin: 30px 0 20px 0;
  font-weight: ${fonts.weight.bold};
  ${mq.range({ from: breakpoints.tablet })} {
    margin: 40px 0 22px;
    ${fonts.sizes('38px', '44px')};
  }
  ${mq.range({ from: breakpoints.desktop })} {
    margin: 50px 0 24px;
    ${fonts.sizes('48px', '60px')};
  }
  ${(props) =>
    props.invertedStyle &&
    css`
      color: #fff;
    `}
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
  <StyledH1 invertedStyle={invertedStyle} id={headingId} tabIndex={-1}>
    {subHeading && <StyledSubText>{subHeading}</StyledSubText>}
    <StyledMainText>{children}</StyledMainText>
  </StyledH1>
);

export default NavigationHeading;
