import React, { useLayoutEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { ChevronLeft, ChevronRight } from '@ndla/icons/common';

import { useSwipeable } from '../../node_modules/react-swipeable';

interface Props {
  children: React.ReactChild[];
}

const Carousel = styled('div')<{
  paddingLeft?: boolean;
  paddingRight?: boolean;
}>`
  overflow-x: hidden;
  display: flex;
  position: relative;
  box-sizing: border-box;

  ${(props) =>
    props.paddingLeft &&
    `
        &:before {
            content:"";
            background:#fff;
            width: 24px;
            height: 48px;
            position: absolute;
            z-index: 2;
        }
    `}

  ${(props) =>
    props.paddingRight &&
    `
        &:after {
            content:"";
            background:#fff;
            width: 24px;
            height: 48px;
            position: absolute;
            z-index: 2;
            right: 0;
        }
    `}
`;

const Inner = styled.div`
  white-space: nowrap;
  flex-wrap: nowrap;
  transition: transform 0.3s;
  display: inline-flex;
  padding: 4px;
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
  top: 0;
  z-index: 3;

  svg {
    color: #20588f;
  }

  &:hover {
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.24);
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
        right: 0;
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

const FilterCarousel: React.FC<Props> = ({ children }) => {
  const [hideNext, setHideNext] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const carouselRef: { current: HTMLDivElement | null } = useRef(null);
  const innerRef: { current: HTMLDivElement | null } = useRef(null);

  // Check if we need to show the nav buttons
  useLayoutEffect(() => {
    if (carouselRef.current && innerRef.current) {
      const carouselWidth = carouselRef.current.offsetWidth || 0;
      const innerWidth = innerRef.current.getBoundingClientRect().width;
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
      const innerPosition = inner.getBoundingClientRect();
      const innerWidth = innerPosition.width;
      if (direction === 'NEXT') {
        // If we cannot move more than one carouselWidth then just adjust to show all of the concealed items
        if (carouselWidth + translateX + carouselWidth > innerWidth) {
          setTranslateX(translateX + (carouselWidth - (carouselWidth * 2 + translateX - innerWidth)) + 40);
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
      <Carousel ref={carouselRef} paddingLeft={translateX > 0} paddingRight={!hideNext}>
        <Inner ref={innerRef} style={{ transform: `translateX(-${translateX}px)` }}>
          {children}
        </Inner>
      </Carousel>
      <NavButton onClick={() => updateIndex('PREV')} hide={translateX < 20}>
        <ChevronLeft style={{ width: '18px', height: '18px' }} />
      </NavButton>
      <NavButton onClick={() => updateIndex('NEXT')} alignRight hide={hideNext}>
        <ChevronRight style={{ width: '18px', height: '18px' }} />
      </NavButton>
    </div>
  );
};

export default FilterCarousel;
