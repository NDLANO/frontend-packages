import styled from '@emotion/styled';
import { fonts, spacing, colors } from '@ndla/core';

export const setAnimations = () => {
  const styles: any = {};
  for (let i = 1; i < 20; i++) {
    styles[`> div:nth-child(${i + 1})`] = {
      'animation-delay': `${i * 50}ms`,
    };
  }
  return styles;
};

interface StyledHeadingProps {
  marginLeft?: number;
}

export const StyledHeadingH1 = styled.h1<StyledHeadingProps>`
  ${fonts.sizes('22px', '26px')};
  font-weight: ${fonts.weight.semibold};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${colors.white};
  margin: ${spacing.xsmall} 0;
  margin-left: ${(props) => props.marginLeft && `${props.marginLeft}px`};
  small {
    font-weight: normal;
    padding-left: ${spacing.small};
    color: ${colors.brand.grey};
  }
`;

export const StyledHeadingH2 = StyledHeadingH1.withComponent('h2');
