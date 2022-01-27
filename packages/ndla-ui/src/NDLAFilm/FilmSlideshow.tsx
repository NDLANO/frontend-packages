/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { SwipeEventData, useSwipeable } from 'react-swipeable';
import BEMHelper from 'react-bem-helper';
import SafeLink from '@ndla/safelink';
import { OneColumn } from '../Layout';
import Spinner from '../Spinner';
import { NDLAMovie } from './interfaces';
import NavigationArrow from './NavigationArrow';
import SlideshowIndicator from './SlideshowIndicator';

interface Props {
  autoSlide: boolean;
  randomStart: boolean;
  slideshow: Array<NDLAMovie>;
  slideInterval: number;
}

const classes = new BEMHelper({
  name: 'film-slideshow',
  prefix: 'c-',
});

const defaultTransitionSwipeEnd = 'transform 600ms cubic-bezier(0, 0.76, 0.09, 1)';
const defaultTransitionText = 'opacity 600ms ease';

const renderSlideItem = (slide: any) => (
  <div
    {...classes('item')}
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
  const slideRef = useRef<HTMLDivElement>(null);
  const slideText = useRef<HTMLDivElement>(null);
  let timer = useRef<ReturnType<typeof setTimeout> | null>(null);

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
    if (eventData.dir === 'Up' || eventData.dir === 'Down') {
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
  });

  if (slideshow.length === 0) {
    return (
      <div>
        <div {...classes('slideshow')}>
          <Spinner inverted />
        </div>
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

  return (
    <section {...classes('')} {...handlers}>
      <>
        <div {...classes('slide-link-wrapper')}>
          <OneColumn>
            <SafeLink
              to={slideshow[activeSlide].path}
              {...classes('item-wrapper', 'text', {
                out: !animationComplete,
              })}>
              <div {...classes('slide-info')} ref={slideText}>
                <h1>{slideshow[activeSlide].title}</h1>
                <p>{slideshow[activeSlide].metaDescription}</p>
              </div>
            </SafeLink>
          </OneColumn>
        </div>
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
          <div
            {...classes('item', 'fade-over')}
            role="img"
            onAnimationEnd={onChangedSlide}
            style={{
              backgroundImage: `url(${
                (slideshow[activeSlide].metaImage && slideshow[activeSlide].metaImage.url) || ''
              })`,
            }}
          />
        )}
        <div
          ref={slideRef}
          {...classes('item-wrapper')}
          onTransitionEnd={onTransitionEnd}
          style={{
            width: slideshowWidth,
            transform: getSlidePosition(slideIndex),
          }}>
          {renderSlideItem(slideshow[slideshow.length - 1])}
          {slideshow.map(renderSlideItem)}
          {renderSlideItem(slideshow[0])}
        </div>
        <SlideshowIndicator slideshow={slideshow} activeSlide={activeSlide} gotoSlide={gotoSlide} />
      </>
    </section>
  );
};

export default FilmSlideshow;
