/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactChild, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ChevronLeft, ChevronRight } from '@ndla/icons/common';
import { useSwipeable } from 'react-swipeable';

interface Props {
  children: ReactChild[];
}

const Carousel = styled.div`
  overflow-x: hidden;
  position: relative;
  margin: 0 13px;
`;

const Inner = styled.div`
  flex-wrap: nowrap;
  transition: transform 0.3s;
  display: inline-flex;
  padding: 8px 0;
`;

const NavButton = styled('button')<{
  alignRight?: boolean;
}>`
  box-sizing: border-box;
  width: 48px;
  height: 48px;
  background-color: #fff;
  border: none;
  box-shadow: none;
  border-radius: 100px;
  transition: opacity 0.5s ease, transform 0.5s ease;
  transform: translate(0px, 0px, 1);
  position: absolute;
  bottom: 0;
  top: 4px;
  z-index: 3;
  left: 3px;

  svg {
    color: #20588f;
  }

  &:hover {
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.24);
    cursor: pointer;
  }

  ${(props) =>
    props.alignRight &&
    `
        right: 2px;
        left: unset;

    `}
`;

const handlerWrapperCSS = css`
  position: relative;
  max-width: 100%;
  overflow-x: hidden;
`;

const FilterCarousel = ({ children }: Props) => {
  const { t } = useTranslation();
  const [hideNext, setHideNext] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const carouselRef: { current: HTMLDivElement | null } = useRef(null);
  const innerRef: { current: HTMLDivElement | null } = useRef(null);

  // Check if we need to show the nav buttons
  const showButtons = () => {
    if (carouselRef.current && innerRef.current) {
      const carouselWidth = carouselRef.current.offsetWidth || 0;
      const innerWidth = innerRef.current.scrollWidth;
      if (innerWidth <= carouselWidth) {
        setHideNext(true);
      } else {
        setHideNext(false);
      }
    } else {
      setHideNext(true);
    }
  };

  useLayoutEffect(() => {
    showButtons();
  }, [children]);

  useEffect(() => {
    const resetTranslateX = () => {
      setTranslateX(0);
      showButtons();
    };
    window.addEventListener('resize', resetTranslateX);
    return () => window.removeEventListener('resize', resetTranslateX);
  }, []);

  const updateIndex = (direction: string) => {
    const carousel = carouselRef.current;
    const inner = innerRef.current;
    if (carousel && inner) {
      const carouselWidth = carousel.offsetWidth;
      const innerWidth = inner.scrollWidth;
      if (direction === 'NEXT') {
        // If we cannot move more than one carouselWidth then just adjust to show all of the concealed items
        if (carouselWidth + translateX + carouselWidth > innerWidth) {
          const newOffset = innerWidth - carouselWidth;
          setTranslateX(translateX + newOffset);
          setHideNext(true);
        } else {
          if (hideNext) {
            setHideNext(false);
          }
          setTranslateX(translateX + carouselWidth);
        }
      } else {
        if (translateX - carouselWidth > 0) {
          setTranslateX(translateX - carouselWidth);
        } else {
          setTranslateX(0);
        }
        if (hideNext) {
          setHideNext(false);
        }
      }
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex('NEXT'),
    onSwipedRight: () => updateIndex('PREV'),
    preventScrollOnSwipe: false,
    trackMouse: true,
  });

  return (
    <div {...handlers} css={handlerWrapperCSS}>
      <Carousel ref={carouselRef}>
        <Inner ref={innerRef} style={{ transform: `translateX(-${translateX}px)` }}>
          {children}
        </Inner>
      </Carousel>
      {!hideNext && (
        <NavButton title={t('carousel.forward')} onClick={() => updateIndex('NEXT')} alignRight>
          <ChevronRight style={{ width: '18px', height: '18px' }} aria-hidden title="" />
        </NavButton>
      )}
      {translateX >= 1 && (
        <NavButton title={t('carousel.back')} onClick={() => updateIndex('PREV')}>
          <ChevronLeft style={{ width: '18px', height: '18px' }} aria-hidden title="" />
        </NavButton>
      )}
    </div>
  );
};

export default FilterCarousel;
