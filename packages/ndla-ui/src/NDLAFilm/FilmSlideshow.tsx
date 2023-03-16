/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { SwipeDirections, SwipeEventData, useSwipeable } from 'react-swipeable';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { breakpoints, mq, spacing, spacingUnit, fonts, colors } from '@ndla/core';
import SafeLink from '@ndla/safelink';
import { Spinner } from '@ndla/icons';
import { OneColumn } from '../Layout';
import NavigationArrow, { StyledNavigationArrow } from './NavigationArrow';
import SlideshowIndicator from './SlideshowIndicator';
import { MovieType } from './types';

interface Props {
  autoSlide?: boolean;
  randomStart?: boolean;
  slideshow: MovieType[];
  slideInterval?: number;
}

const SlideLinkWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  position: absolute;
  z-index: 2;
  height: 100vw;
  width: 100%;
  ${mq.range({ from: breakpoints.mobileWide })} {
    height: 100vw;
  }
  ${mq.range({ from: breakpoints.tablet })} {
    height: 75vw;
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
`;

const itemWrapperCSS = css`
  display: flex;
  box-shadow: none;
`;

interface SlideshowItemProps {
  fadeOver?: boolean;
}

const SlideshowItem = styled.div<SlideshowItemProps>`
  width: 100vw;
  height: 100vw;
  /* aspect ratios */
  ${mq.range({ from: breakpoints.mobileWide })} {
    height: 100vw;
  }
  ${mq.range({ from: breakpoints.tablet })} {
    height: 75vw;
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
  background-color: '#222';
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
  border: 0;
  position: ${(props) => (props.fadeOver ? 'absolute' : 'relative')};
  animation: ${(props) => props.fadeOver && 'fadeIn 400ms ease'};
  z-index: ${(props) => props.fadeOver && 1};
  &:before {
    content: '';
    opacity: 0.4;
    background: #091a2a;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: 1;
  }
`;

interface SlideshowLinkProps {
  out?: boolean;
}

const shouldForwardProp = (p: string) => p !== 'out';

const SlideshowLink = styled(SafeLink, { shouldForwardProp })<SlideshowLinkProps>`
  display: flex;
  box-shadow: none;
  transition: all 400ms ease;
  opacity: ${(props) => props.out && 0};
  animation: ${(props) => !props.out && 'fadeInBottomFixed 600ms ease'};
  ${mq.range({ from: breakpoints.mobileWide })} {
    padding-bottom: ${spacing.medium};
  }
  ${mq.range({ from: breakpoints.tablet })} {
    padding-bottom: ${spacing.large};
  }
  ${mq.range({ from: breakpoints.desktop })} {
    padding-bottom: ${spacingUnit * 3}px;
  }
  &:hover {
    ${() => SlideshowName} {
      text-decoration: underline;
      text-decoration-color: white;
    }
  }
`;

const SlideshowWrapper = styled.section`
  width: 100%;
  overflow: hidden;
  &:hover {
    ${StyledNavigationArrow} {
      opacity: 1;
      transform: translate(0, 0);
    }
  }
`;

const SlideshowInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.small};
  background-color: rgba(3, 23, 43, 0.7);
  border-radius: 4px;
  padding: ${spacing.medium} ${spacing.medium} ${spacing.medium} ${spacing.normal};
  margin: 0 -20px;
  width: 100vw;
  ${mq.range({ from: breakpoints.mobileWide })} {
    margin: 0;
    width: 100%;
    padding: ${spacing.medium} ${spacingUnit * 2}px ${spacing.medium} ${spacing.normal};
  }
`;

const SlideshowName = styled.p`
  ${fonts.sizes('22px', '30px')};
  color: ${colors.white};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  margin: 0;
  font-weight: ${fonts.weight.semibold};
  ${mq.range({ from: breakpoints.mobileWide })} {
    ${fonts.sizes('26px', '30px')};
  }
  ${mq.range({ from: breakpoints.tablet })} {
    ${fonts.sizes('40px', '44px')};
  }
  ${mq.range({ from: breakpoints.desktop })} {
    ${fonts.sizes('48px', '54px')};
  }
`;

const SlideshowDescription = styled.p`
  color: ${colors.white};
  margin: 0;
  padding: 0;
  ${fonts.sizes('12px', '18px')};
  ${mq.range({ from: breakpoints.mobileWide })} {
    ${fonts.sizes('15px', '20px')};
  }
  ${mq.range({ from: breakpoints.tablet })} {
    ${fonts.sizes('18px', '24px')};
  }
  ${mq.range({ from: breakpoints.wide })} {
    ${fonts.sizes('20px', '32px')};
  }
`;

const EmptySlideshow = styled.div`
  background: rgba(255, 255, 255, 0.08);
  margin-bottom: $spacing--large * 4;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40vw;
`;

const defaultTransitionSwipeEnd = 'transform 600ms cubic-bezier(0, 0.76, 0.09, 1)';
const defaultTransitionText = 'opacity 600ms ease';

const renderSlideItem = (slide: MovieType) => (
  <SlideshowItem
    key={slide.id}
    role="img"
    aria-label={(slide.metaImage && slide.metaImage.alt) || ''}
    style={{
      backgroundImage: `url(${(slide.metaImage && slide.metaImage.url) || ''})`,
    }}
  />
);

const FilmSlideshow = ({ autoSlide = false, slideshow = [], slideInterval = 5000 }: Props) => {
  const [swipeDistance, setSwipeDistance] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const [slideIndexTarget, setSlideIndexTarget] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(true);
  const [swipeDirection, setSwipeDirection] = useState<SwipeDirections | undefined>(undefined);
  const slideRef = useRef<HTMLDivElement>(null);
  const slideText = useRef<HTMLDivElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const gotoSlide = useCallback((indexTarget: number, useAnimation = false) => {
    setSwipeDistance(0);
    if (timer.current) {
      clearTimeout(timer.current);
    }
    setSlideIndexTarget(indexTarget);
    setAnimationComplete(!useAnimation);
  }, []);

  const onChangedSlide = () => {
    if (!animationComplete) {
      if (slideRef.current) {
        slideRef.current.style.transition = 'none';
        slideRef.current.style.transform = `translateX(${slideIndexTarget * 100}vw))`;
      }

      setAnimationComplete(true);
      setSlideIndex(slideIndexTarget);
    } else if (slideIndexTarget === -1) {
      if (slideRef.current) {
        // Go to last slide for continuous loop
        slideRef.current.style.transition = 'none';
        slideRef.current.style.transform = `translateX(${slideshow.length * 100}vw))`;
      }

      setSlideIndex(slideshow.length - 1);
      setSlideIndexTarget(slideshow.length - 1);
      setAnimationComplete(true);
    } else if (slideIndexTarget === slideshow.length) {
      if (slideRef.current) {
        // Go to first slide for continuous loop
        slideRef.current.style.transition = 'none';
        slideRef.current.style.transform = `translateX(100vw))`;
      }
      setSlideIndex(0);
      setSlideIndexTarget(0);
      setAnimationComplete(true);
    } else {
      setAnimationComplete(true);
      setSlideIndex(slideIndexTarget);
    }
  };

  const onSwipeEnd = () => {
    setSwipeDirection(undefined);
    let slide;
    if (swipeDistance > 40) {
      slide = -1;
    } else if (swipeDistance < -40) {
      slide = 1;
    } else {
      slide = 0;
    }
    if (slideRef.current && slideText.current) {
      slideRef.current.style.transition = defaultTransitionSwipeEnd;
      slideText.current.style.transition = defaultTransitionText;
      slideText.current.style.opacity = '1';
    }
    setSwipeDistance(0);

    initTimer();

    if (slide !== 0) {
      setSlideIndex(slideIndex + slide);
      setSlideIndexTarget(slideIndex + slide);
    } else {
      // Reset transfrom
      if (slideRef.current) {
        slideRef.current.style.transform = getSlidePosition(slideIndex + slide);
      }
    }
  };

  const onSwipe = (eventData: SwipeEventData) => {
    if (eventData.initial) {
      setSwipeDirection(eventData.dir);
    }
    const dir = eventData.initial ? eventData.dir : swipeDirection;
    if (dir === 'Up' || dir === 'Down') {
      return;
    }
    if (timer.current) {
      clearTimeout(timer.current);
    }
    setSwipeDistance(eventData.deltaX);
    if (slideRef && slideRef.current) {
      slideRef.current.style.transition = 'none';
      slideRef.current.style.transform = getSlidePosition(slideIndexTarget);
    }
    const opacityText = 1 - Math.min(100, Math.abs(swipeDistance)) / 100;
    if (slideText && slideText.current) {
      slideText.current.style.transition = 'none';
      slideText.current.style.opacity = opacityText.toString();
    }
  };

  const onTransitionEnd = () => {
    const slideshowLength = slideshow.length;
    if (slideIndex === -1) {
      if (slideRef.current) {
        slideRef.current.style.transition = 'none';
        slideRef.current.style.transform = getSlidePosition(slideshowLength - 1);
      }
      setSlideIndex(slideshowLength - 1);
      setSlideIndexTarget(slideshowLength - 1);
    } else if (slideIndex >= slideshowLength) {
      if (slideRef.current) {
        slideRef.current.style.transition = 'none';
        slideRef.current.style.transform = getSlidePosition(0);
      }
      setSlideIndex(0);
      setSlideIndexTarget(0);
    }
  };

  const getSlidePosition = (target: number) => {
    if (swipeDistance !== 0) {
      return `translateX(calc(${swipeDistance}px -
        ${(target + 1) * 100}vw))`;
    }
    return `translateX(-${(target + 1) * 100}vw)`;
  };

  const initTimer = useCallback(() => {
    if (autoSlide) {
      timer.current = setTimeout(() => {
        gotoSlide(slideIndex + 1);
      }, slideInterval);
    }
  }, [autoSlide, gotoSlide, slideInterval, slideIndex]);

  useEffect(() => {
    initTimer();
  }, [initTimer]);

  const handlers = useSwipeable({
    onSwiped: onSwipeEnd,
    onSwiping: onSwipe,
    preventScrollOnSwipe: swipeDirection === 'Left' || swipeDirection === 'Right',
  });

  if (slideshow.length === 0) {
    return (
      <div>
        <EmptySlideshow>
          <Spinner inverted />
        </EmptySlideshow>
      </div>
    );
  }

  const slideshowWidth = `${(slideshow.length + 2) * 100}vw`;
  let activeSlide = slideIndex;
  if (activeSlide < 0) {
    activeSlide = slideshow.length - 1;
  } else if (activeSlide >= slideshow.length) {
    activeSlide = 0;
  }

  const backgroundImage = slideshow[activeSlide].metaImage;

  return (
    <SlideshowWrapper {...handlers}>
      <>
        <SlideLinkWrapper>
          <OneColumn>
            <SlideshowLink to={slideshow[activeSlide].path} out={!animationComplete}>
              <SlideshowInfo ref={slideText}>
                <SlideshowName>{slideshow[activeSlide].title}</SlideshowName>
                <SlideshowDescription>{slideshow[activeSlide].metaDescription}</SlideshowDescription>
              </SlideshowInfo>
            </SlideshowLink>
          </OneColumn>
        </SlideLinkWrapper>
        <NavigationArrow
          slideIndexTarget={slideIndexTarget > 0 ? slideIndexTarget - 1 : slideshow.length - 1}
          gotoSlide={gotoSlide}
        />
        <NavigationArrow
          slideIndexTarget={slideIndexTarget < slideshow.length - 1 ? slideIndexTarget + 1 : 0}
          gotoSlide={gotoSlide}
          rightArrow
        />
        {!animationComplete && (
          <SlideshowItem
            fadeOver
            role="img"
            onAnimationEnd={onChangedSlide}
            style={{
              backgroundImage: `url(${(backgroundImage && backgroundImage.url) || ''})`,
            }}
          />
        )}
        <div
          ref={slideRef}
          css={itemWrapperCSS}
          onTransitionEnd={onTransitionEnd}
          style={{
            width: slideshowWidth,
            transform: getSlidePosition(slideIndex),
          }}
        >
          {renderSlideItem(slideshow[slideshow.length - 1])}
          {slideshow.map(renderSlideItem)}
          {renderSlideItem(slideshow[0])}
        </div>
        <SlideshowIndicator slideshow={slideshow} activeSlide={activeSlide} gotoSlide={gotoSlide} />
      </>
    </SlideshowWrapper>
  );
};

export default FilmSlideshow;
