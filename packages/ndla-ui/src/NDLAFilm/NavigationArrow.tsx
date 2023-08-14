/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ChevronRight, ChevronLeft } from '@ndla/icons/common';
import styled from '@emotion/styled';
import { breakpoints, colors, mq, spacing } from '@ndla/core';
import { css } from '@emotion/react';

interface Props {
  slideIndexTarget: number;
  slideshowLength?: number;
  gotoSlide: (indexTarget: number, useAnimation: boolean) => void;
  rightArrow?: boolean;
}

interface StyledNavigationArrowProps {
  right?: boolean;
}

export const StyledNavigationArrow = styled.div<StyledNavigationArrowProps>`
  opacity: 0;
  transition: transform 800ms ease, opacity 800ms ease;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  align-items: center;
  z-index: 2;
  height: 70vw;
  ${mq.range({ from: breakpoints.tablet })} {
    height: 60vw;
  }
  ${mq.range({ from: breakpoints.desktop })} {
    height: 55vw;
  }
  ${mq.range({ from: breakpoints.wide })} {
    height: 40vw;
  }
  ${mq.range({ from: breakpoints.ultraWide })} {
    height: 36vw;
  }
  transform: translate(${spacing.xsmall}, 0);
  ${(props) =>
    props.right &&
    css`
      right: 0;
      transform: translate(-${spacing.xsmall}, 0);
    `}
`;

const NavigationArrowButton = styled.button`
  padding: ${spacing.normal} 0;
  border-radius: 4px;
  outline: none;
  background: transparent;
  color: ${colors.white};
  border: 0;
  &:hover,
  &:focus {
    .c-icon {
      opacity: 1;
    }
    background: rgba(0, 0, 0, 0.1);
  }
`;

const chevronCss = css`
  fill: ${colors.white};
  width: 52px;
  height: 52px;
  ${mq.range({ from: breakpoints.desktop })} {
    width: 78px;
    height: 78px;
  }
  opacity: 0.7;
  transition: transform 400ms ease, opacity 400ms ease;
  ${NavigationArrowButton}:focus {
    opacity: 1;
  }
  ${NavigationArrowButton}:hover {
    opacity: 1;
  }
`;

const NavigationArrow = ({ slideIndexTarget, gotoSlide, rightArrow }: Props) => {
  const Chevron = rightArrow ? ChevronRight : ChevronLeft;

  return (
    <StyledNavigationArrow right={rightArrow}>
      <NavigationArrowButton
        type="button"
        tabIndex={-1}
        onClick={() => {
          gotoSlide(slideIndexTarget, true);
        }}
      >
        <Chevron css={chevronCss} />
      </NavigationArrowButton>
    </StyledNavigationArrow>
  );
};

export default NavigationArrow;
