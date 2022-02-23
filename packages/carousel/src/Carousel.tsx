/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode, useRef, useState } from 'react';
import { ChevronRight, ChevronLeft } from '@ndla/icons/common';
import { SwipeEventData, useSwipeable } from 'react-swipeable';
import { slideWrapperCSS, StyledButton, StyledSlideContent } from './Styles';

export interface CalculatedProps {
  columnsPrSlide: number;
  columnWidth: number;
  distanceBetweenItems?: number;
  arrowOffset?: number;
  margin?: number;
}

interface Props extends CalculatedProps {
  items: ReactNode[];
  slideBackwardsLabel: string;
  slideForwardsLabel: string;
  buttonClass: string;
  wrapperClass: string;
  disableScroll: boolean;
}

export const Carousel = ({
  items = [],
  columnWidth,
  columnsPrSlide,
  slideBackwardsLabel,
  slideForwardsLabel,
  disableScroll,
  arrowOffset = 0,
  distanceBetweenItems = 0,
  margin = 0,
  buttonClass = '',
  wrapperClass = '',
}: Props) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [swiping, setSwiping] = useState(false);
  const [swipeDistance, setSwipeDistance] = useState(0);
  const [swipeSpeed, setSwipeSpeed] = useState(0);
  const slideshowRef = useRef<HTMLDivElement>(null);

  const hideButtons = columnsPrSlide >= items.length;
  const transformX = swipeDistance + slideIndex * (columnWidth + distanceBetweenItems);

  // Callback methods
  const slidePage = (direction: number) => {
    const roundedColumnsPrSlide = Math.floor(columnsPrSlide);
    if (roundedColumnsPrSlide < items.length) {
      let newSlideIndex = slideIndex + roundedColumnsPrSlide * direction;
      if (newSlideIndex > 0) {
        newSlideIndex = 0;
      } else if (newSlideIndex < -(items.length - roundedColumnsPrSlide)) {
        newSlideIndex = -(items.length - roundedColumnsPrSlide);
      }
      setSlideIndex(newSlideIndex);
    }
  };

  // Swipe handler functions
  const onSwipe = (eventData: SwipeEventData) => {
    const moved = eventData.deltaX;
    if (Math.abs(moved) < 15 || eventData.dir === 'Up' || eventData.dir === 'Down') {
      return;
    }
    setSwiping(true);
    setSwipeSpeed(swipeDistance - moved);
    setSwipeDistance(moved);
    const transformX = swipeDistance + slideIndex * columnWidth;

    if (slideshowRef.current) {
      slideshowRef.current.style.transform = `translateX(${transformX}px)`;
    }
  };

  const onSwipeEnd = () => {
    if (!swiping) {
      return;
    }

    const roundedColumnsPrSlide = Math.floor(columnsPrSlide);

    const moved = Math.round(
      (-Math.min(columnWidth / 2, swipeSpeed * 5) + swipeDistance) / (columnWidth + distanceBetweenItems),
    );
    setSwipeDistance(0);
    if (moved !== 0) {
      let newSlideIndex = slideIndex + moved;
      if (newSlideIndex > 0) {
        newSlideIndex = 0;
      } else if (newSlideIndex < -(items.length - columnsPrSlide)) {
        newSlideIndex = -(items.length - roundedColumnsPrSlide);
      }

      setSlideIndex(newSlideIndex);
      setSwiping(false);
    } else {
      setSwiping(false);
    }
  };

  const handlers = useSwipeable({
    onSwiping: onSwipe,
    onSwiped: onSwipeEnd,
  });

  return (
    <section {...handlers}>
      <div>
        <div css={slideWrapperCSS} className={wrapperClass}>
          {!disableScroll && (
            <>
              <StyledButton
                type="button"
                aria-label={slideBackwardsLabel}
                className={buttonClass}
                prev
                arrowOffset={arrowOffset}
                dontShow={slideIndex === 0 || hideButtons}
                onClick={() => slidePage(1)}>
                <ChevronLeft />
              </StyledButton>
              <StyledButton
                type="button"
                aria-label={slideForwardsLabel}
                className={buttonClass}
                dontShow={hideButtons || Math.floor(columnsPrSlide) === items.length + slideIndex}
                next
                arrowOffset={arrowOffset}
                onClick={() => slidePage(-1)}>
                <ChevronRight />
              </StyledButton>
            </>
          )}
          <StyledSlideContent
            swiping={swiping}
            ref={slideshowRef}
            style={{
              padding: `0 ${margin}px`,
              width: `${items.length * columnWidth + distanceBetweenItems * (items.length - 1) + margin * 2}px`,
              transform: `translateX(${transformX}px)`,
            }}>
            {items.map((item) => item)}
          </StyledSlideContent>
        </div>
      </div>
    </section>
  );
};
