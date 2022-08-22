import React, { ElementType, ReactNode } from 'react';
import { css } from '@emotion/core';
import { breakpoints, fonts, mq, spacing } from '@ndla/core';
import styled from '@emotion/styled';

interface StyledWrapperProps {
  large?: boolean;
}

const StyledWrapper = styled.h2<StyledWrapperProps>`
  font-weight: ${fonts.weight.bold};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  ${fonts.sizes('18px', '24px')};
  ${mq.range({ from: breakpoints.tablet })} {
    ${fonts.sizes('20px', '26px')};
  }
  ${(p) =>
    p.large &&
    css`
      margin: 0 0 ${spacing.small} 0;
      ${fonts.sizes('16px', '32px')};
      ${mq.range({ from: breakpoints.tablet })} {
        ${fonts.sizes('22px')};
      }
    `};
`;

const LargeStyledWrapper = StyledWrapper.withComponent('h2');

interface Props {
  children: ReactNode;
  large?: boolean;
  className?: string;
}

const SectionHeading = ({ children, large = false, className }: Props) => {
  const Wrapper: ElementType = large ? LargeStyledWrapper : StyledWrapper;
  return <Wrapper className={className}>{children}</Wrapper>;
};

export default SectionHeading;
