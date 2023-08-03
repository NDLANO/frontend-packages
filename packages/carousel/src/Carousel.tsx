/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { cloneElement, MouseEvent as ReactMouseEvent, ReactElement, UIEvent, useMemo, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { breakpoints, mq, spacing } from '@ndla/core';
import { ButtonWrapper, StyledSlideContent } from './Styles';

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
  cursor: grab;
  &:hover {
    ${mq.range({ from: breakpoints.desktop })} {
      ${ButtonWrapper} {
        display: block;
      }
    }
  }
`;

const SliderWrapper = styled.div`
  display: flex;
  position: relative;
  overflow-x: scroll;
  padding: ${spacing.xxsmall} 0;

  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
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
  const slideContainer = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);
  const roundedColumnsPrSlide = useMemo(() => Math.floor(columnsPrSlide), [columnsPrSlide]);
  const hideButtons = useMemo(() => columnsPrSlide >= items.length, [columnsPrSlide, items.length]);

  const onScroll = (e: UIEvent<HTMLDivElement>) => {
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

  const onMouseDown = (e: ReactMouseEvent<HTMLDivElement>) => {
    const pos = {
      left: slideContainer.current?.scrollLeft || 0,
      x: e.clientX,
    };

    const slider = slideContainer.current;
    const sliderContent = slideshowRef.current;

    if (slider) {
      slider.style.cursor = 'grabbing';
    }
    document.body.style.cursor = 'grabbing';

    const mouseMoveHandler = (e: MouseEvent) => {
      const dx = e.clientX - pos.x;

      if (sliderContent && !sliderContent?.style.pointerEvents) {
        sliderContent.style.pointerEvents = 'none';
      }
      if (slider) {
        slider.style.userSelect = 'none';
        slider.scrollLeft = pos.left - dx;
      }
    };

    const mouseUpHandler = () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);

      sliderContent?.style.removeProperty('pointer-events');
      slider?.style.removeProperty('user-select');
      document.body.style.removeProperty('cursor');

      if (slider) {
        slider.style.cursor = 'grab';
      }
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler, { once: true });
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
      <SliderWrapper ref={slideContainer} tabIndex={-1} onScroll={onScroll} onMouseDown={onMouseDown}>
        <StyledSlideContent margin={margin} ref={slideshowRef} gap={distanceBetweenItems}>
          {items.map((item) => item)}
        </StyledSlideContent>
      </SliderWrapper>
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
