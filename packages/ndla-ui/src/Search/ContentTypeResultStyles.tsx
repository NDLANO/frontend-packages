/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors, spacing, spacingUnit, fonts, misc, animations, mq, breakpoints } from '@ndla/core';

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

type inMenuProps = {
  inMenu?: boolean;
  animateList?: number;
  unGrouped?: boolean;
};

export const StyledNoHit = styled.p<inMenuProps>`
  color: ${colors.text.light};
  margin: 0;
  font-style: italic;
  ${fonts.sizes(16, 1.1)};
  ${(props) =>
    props.inMenu &&
    css`
      ${mq.range({ from: breakpoints.desktop })} {
        margin-left: ${spacingUnit * 1.5}px;
      }
    `}
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

type StyledListItemProps = {
  delayAnimation?: boolean;
};

export const StyledListItem = styled.li<StyledListItemProps>`
  ${(props) =>
    props.delayAnimation &&
    css`
      ${animations.fadeInLeftFromZero()}
      animation-delay: ${animations.durations.normal};
    `}
  ${(props) => !props.delayAnimation && animations.fadeInLeft()}
`;

export const StyledList = styled.ul<inMenuProps>`
  list-style: none;
  padding: 0;
  ${(props) => {
    if (props.animateList && props.animateList > 0) {
      return animations.toggledContentWithSwitchAnimation(
        animations.durations.normal,
        `contentTypeResultAnimation${props.animateList % 2 ? '1' : '2'}`,
      );
    }
  }}
  li {
    margin: 0 -${spacing.small};
    a {
      > div {
        margin-right: ${spacing.small};
      }
      color: ${colors.brand.primary};
      box-shadow: none;
      display: inline-flex;
      flex-grow: 1;
      align-items: center;
      padding: ${spacing.xsmall} ${spacing.small};
      small {
        color: ${colors.text.light};
        padding-left: ${spacing.xsmall};
        ${mq.range({ until: breakpoints.tablet })} {
          display: none;
        }
      }
      &:focus {
        ${highlightStyle};
      }
      ${(props) =>
        props.inMenu
          ? css`
              ${mq.range({ from: breakpoints.desktop })} {
                margin-left: ${!props.unGrouped && spacingUnit * 1.5}px;
              }
              strong {
                text-decoration: underline;
                font-weight: ${fonts.weight.normal};
              }
              &:hover {
                strong {
                  text-decoration: none;
                }
              }
            `
          : css`
              strong {
                font-weight: ${fonts.weight.semibold};
              }
              &:hover {
                strong {
                  text-decoration: underline;
                }
              }
            `}
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
