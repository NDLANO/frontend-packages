/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {
  cloneElement,
  MouseEvent as ReactMouseEvent,
  ReactElement,
  UIEvent,
  useRef,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { breakpoints, mq, spacing, spacingUnit } from '@ndla/core';

type Gap = 'none' | 'small' | 'normal';

interface Props {
  items: ReactElement[];
  leftButton?: ReactElement;
  rightButton?: ReactElement;
  gap?: Gap;
}

interface SlideContentProps {
  'data-gap': 'none' | 'small' | 'normal';
}

const StyledSlideContent = styled.div<SlideContentProps>`
  display: flex;
  justify-content: space-between;
  margin-left: ${spacing.normal};
  margin-right: ${spacing.normal};
  ${mq.range({ from: breakpoints.desktop })} {
    margin-left: ${spacingUnit * 3}px;
    margin-right: ${spacingUnit * 3}px;
  }
  &[data-gap='small'] {
    gap: ${spacing.small};
  }
  &[data-gap='normal'] {
    gap: ${spacing.small};
    ${mq.range({ from: breakpoints.desktop })} {
      gap: ${spacing.normal};
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: none;
  position: absolute;
  top: 30%;
  transform: translateY(-20%);
  z-index: 1;
`;

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

export const Carousel = ({ items = [], leftButton, rightButton, gap = 'normal' }: Props) => {
  const slideshowRef = useRef<HTMLDivElement>(null);
  const slideContainer = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const onScroll = (e: UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    setShowLeft(target.scrollLeft !== 0);
    if (slideshowRef.current) {
      setShowRight(slideshowRef.current.offsetWidth > target.offsetWidth + target.scrollLeft);
    }
  };

  const onResize = useCallback(() => {
    if (slideContainer.current) {
      setShowRight(slideContainer.current.scrollWidth > slideContainer.current.clientWidth);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', onResize);
    onResize();
    return () => window.removeEventListener('resize', onResize);
  }, [onResize]);

  const slidePage = (direction: 'left' | 'right') => {
    const firstChild = slideshowRef.current?.firstChild as HTMLElement;
    if (!firstChild) return;
    const amount = firstChild.clientWidth * 3;
    slideContainer.current?.scrollBy({ left: direction === 'right' ? amount : -amount, behavior: 'smooth' });
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
      <InteractButton position="left" button={leftButton} onClick={() => slidePage('left')} hidden={!showLeft} />
      <InteractButton position="right" button={rightButton} onClick={() => slidePage('right')} hidden={!showRight} />
      <SliderWrapper ref={slideContainer} tabIndex={-1} onScroll={onScroll} onMouseDown={onMouseDown}>
        <StyledSlideContent ref={slideshowRef} data-gap={gap}>
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
