/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useLayoutEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { ChevronLeft, ChevronRight } from '@ndla/icons/common';

import { useSwipeable } from '../../node_modules/react-swipeable';

interface Props {
  children: React.ReactChild[];
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
  hide?: boolean;
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
    props.hide &&
    `
        opacity: 0;
        transform: translate(-40px, 0px);
    `}

  ${(props) =>
    props.alignRight &&
    `
        right: 2px;
        left: unset;
    `}

    ${(props) =>
    props.alignRight &&
    props.hide &&
    `
        transform: translate(40px, 0px);
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
  useLayoutEffect(() => {
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
  }, [children]);

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
    preventDefaultTouchmoveEvent: false,
    trackMouse: true,
  });

  return (
    <div {...handlers} css={handlerWrapperCSS}>
      <Carousel ref={carouselRef}>
        <Inner ref={innerRef} style={{ transform: `translateX(-${translateX}px)` }}>
          {children}
        </Inner>
      </Carousel>
      <NavButton title={t('carousel.back')} onClick={() => updateIndex('PREV')} hide={translateX < 1}>
        <ChevronLeft style={{ width: '18px', height: '18px' }} aria-hidden title="" />
      </NavButton>
      <NavButton title={t('carousel.forward')} onClick={() => updateIndex('NEXT')} alignRight hide={hideNext}>
        <ChevronRight style={{ width: '18px', height: '18px' }} aria-hidden title="" />
      </NavButton>
    </div>
  );
};

export default FilterCarousel;
