/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { breakpoints, colors, mq, spacing } from '@ndla/core';
import { MovieType } from './types';

interface Props {
  slideshow: MovieType[];
  activeSlide: number;
  gotoSlide: (indexTarget: number, useAnimation: boolean) => void;
}

const SlideshowIndicatorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${spacing.small} 0;
  ${mq.range({ from: breakpoints.mobileWide })} {
    margin: ${spacing.normal} 0;
  }
`;

interface SlideshowIndicatorDotProps {
  active?: boolean;
}

const SlideshowIndicatorDot = styled.button<SlideshowIndicatorDotProps>`
  border: 0;
  display: flex;
  justify-content: center;
  background: transparent;
  span {
    background: ${(props) => (props.active ? colors.white : colors.ndlaFilm.filmColorBright)};
    transition: background 100ms ease;
    height: 8px;
    width: 8px;
    ${mq.range({ from: breakpoints.mobileWide })} {
      height: 10px;
      width: 10px;
    }
    ${mq.range({ from: breakpoints.tablet })} {
      height: ${spacing.small};
      width: ${spacing.small};
    }
    border-radius: 100%;
  }
  padding: ${spacing.xsmall};
  ${mq.range({ from: breakpoints.tablet })} {
    padding: ${spacing.small};
  }
  &:hover,
  &:focus {
    span {
      background: ${colors.white};
    }
  }
`;

const SlideshowIndicator = ({ slideshow, activeSlide, gotoSlide }: Props) => {
  return (
    <SlideshowIndicatorWrapper>
      {slideshow.map((_, index) => (
        <SlideshowIndicatorDot
          active={index === activeSlide}
          key={`indicator_${index}`}
          type="button"
          onClick={() => gotoSlide(index, true)}
        >
          <span />
        </SlideshowIndicatorDot>
      ))}
    </SlideshowIndicatorWrapper>
  );
};

export default SlideshowIndicator;
