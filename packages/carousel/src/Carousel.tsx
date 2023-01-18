/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { cloneElement, ReactElement, ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { breakpoints, mq } from '@ndla/core';
import { ButtonWrapper, slideWrapperCSS, StyledSlideContent } from './Styles';

export interface CalculatedProps {
  columnsPrSlide: number;
  columnWidth: number;
  distanceBetweenItems?: number;
  arrowOffset?: number;
  margin?: number;
}

interface Props extends CalculatedProps {
  items: ReactElement[];
  leftButton?: ReactElement;
  rightButton?: ReactElement;
}

const CarouselWrapper = styled.div`
  overflow: hidden;
  position: relative;
  &:hover {
    ${mq.range({ from: breakpoints.desktop })} {
      ${ButtonWrapper} {
        display: block;
      }
    }
  }
`;

export const Carousel = ({
  items = [],
  columnWidth,
  columnsPrSlide,
  distanceBetweenItems = 0,
  leftButton,
  rightButton,
  margin = 0,
}: Props) => {
  const slideshowRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);
  const roundedColumnsPrSlide = useMemo(() => Math.floor(columnsPrSlide), [columnsPrSlide]);
  const hideButtons = useMemo(() => columnsPrSlide >= items.length, [columnsPrSlide, items.length]);

  useEffect(() => {
    const parent = slideshowRef.current?.parentElement;
    parent?.addEventListener('scroll', onScroll);
    return () => parent?.removeEventListener('scroll', onScroll);
  }, []);

  const onScroll = (e: Event) => {
    const target = e.target as HTMLElement;
    setShowLeft(target.scrollLeft !== 0);
    if (slideshowRef.current) {
      setShowRight(slideshowRef.current.offsetWidth > target.offsetWidth + target.scrollLeft);
    }
  };

  const slidePage = (direction: 'left' | 'right') => {
    const amount = columnWidth * roundedColumnsPrSlide;
    const parent = slideshowRef.current?.parentElement;
    parent?.scrollBy({ left: direction === 'right' ? amount : -amount, behavior: 'smooth' });
  };

  return (
    <CarouselWrapper>
      <InteractButton
        position="left"
        button={leftButton}
        onClick={() => slidePage('left')}
        hidden={hideButtons || !showLeft}
      />
      <InteractButton
        position="right"
        button={rightButton}
        onClick={() => slidePage('right')}
        hidden={hideButtons || !showRight}
      />
      <div css={slideWrapperCSS}>
        <StyledSlideContent margin={margin} ref={slideshowRef} gap={distanceBetweenItems}>
          {items.map((item) => item)}
        </StyledSlideContent>
      </div>
    </CarouselWrapper>
  );
};

interface InteractButtonProps {
  position: 'left' | 'right';
  onClick: () => void;
  hidden?: boolean;
  button?: ReactElement;
}

const leftStyle = css`
  left: 0px;
  margin-left: 10px;
`;

const rightStyle = css`
  right: 0px;
  margin-right: 10px;
`;

const InteractButton = ({ position, onClick, button, hidden }: InteractButtonProps) => {
  if (!button || hidden) {
    return null;
  }
  const style = position === 'left' ? leftStyle : rightStyle;

  return <ButtonWrapper css={style}>{cloneElement(button, { onClick, 'tab-index': '0' })}</ButtonWrapper>;
};
