import styled from '@emotion/styled';
import { fonts, spacing, colors, mq, breakpoints, spacingUnit } from '@ndla/core';

export const setAnimations = () => {
  const styles: any = {};
  for (let i = 1; i < 20; i++) {
    styles[`> div:nth-child(${i + 1})`] = {
      'animation-delay': `${i * 50}ms`,
    };
  }
  return styles;
};

export const StyledHeadingH1 = styled.h1`
  ${fonts.sizes('22px', '26px')};
  font-weight: ${fonts.weight.semibold};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${colors.white};
  margin: ${spacing.xsmall} 0;
  small {
    font-weight: normal;
    padding-left: ${spacing.small};
    color: ${colors.brand.grey};
  }
  margin-left: ${spacing.normal};
  margin-right: ${spacing.normal};
  ${mq.range({ from: breakpoints.desktop })} {
    margin-left: ${spacingUnit * 3}px;
    margin-right: ${spacingUnit * 3}px;
  }
`;

export const StyledHeadingH2 = StyledHeadingH1.withComponent('h2');
