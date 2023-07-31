import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { colors, spacing, spacingUnit, fonts, misc, mq, breakpoints } from '@ndla/core';

export const highlightStyle = css`
  background: ${colors.brand.light};
  color: ${colors.brand.dark};
  width: 100%;
  small {
    color: ${colors.text.primary} !important;
  }
`;

export const noWidthhighlightStyle = css`
  background: ${colors.brand.light};
  color: ${colors.brand.dark};
  small {
    color: ${colors.text.primary} !important;
  }
`;

export const showAllButtonStyle = css`
  margin-left: -${spacing.xsmall};
  margin-top: ${spacing.small};
`;

export const tooltipStyle = css`
  padding-left: ${spacing.xsmall};
`;

export const StyledWrapper = styled.section`
  padding-bottom: ${spacing.normal};
  padding-top: ${spacing.normal};
`;

export const StyledHeader = styled.header`
  margin-bottom: ${spacing.small};
  display: flex;
  align-items: center;
  > div {
    margin-right: ${spacing.small};
  }
  h1 {
    margin: 0;
    ${fonts.sizes(16, 1.1)};
    small {
      font-weight: ${fonts.weight.normal};
      font-size: inherit;
    }
  }
`;

export const StyledTag = styled.span`
  background: ${colors.brand.greyLightest};
  border-radius: ${misc.borderRadius};
  color: ${colors.text.primary};
  ${fonts.sizes('12px', '20px')};
  font-weight: ${fonts.weight.semibold};
  margin: 0 0 0 ${spacing.small};
  height: ${spacing.normal};
  display: flex;
  align-items: center;
  padding: 0 ${spacingUnit / 6}px;
  ${mq.range({ until: breakpoints.desktop })} {
    display: none;
  }
`;
