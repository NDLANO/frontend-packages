/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Swipe } from '@ndla/carousel';
import BEMHelper from 'react-bem-helper';
import { isMobile } from 'react-device-detect';
import { OneColumn } from '@ndla/ui';
import { Spinner } from '@ndla/editor';
import { ChevronRight, ChevronLeft } from '@ndla/icons/common';
import { movieShape } from './shapes';

const classes = new BEMHelper({
  name: 'film-slideshow',
  prefix: 'c-',
});

const defaultTransitionSwipeEnd =
  'transform 600ms cubic-bezier(0, 0.76, 0.09, 1)';
const defaultTransitionText = 'opacity 600ms ease';

const renderSlideItem = slide => (
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

class FilmSlideshow extends Component {
  constructor(props) {
    super(props);
    const startIndex = this.props.randomStart
      ? Math.floor(Math.random() * this.props.slideshow.length)
      : 0;
    this.state = {
      slideIndex: startIndex,
      slideIndexTarget: startIndex,
      animationComplete: true,
    };
    this.swipeDistance = 0;
    this.slideRef = React.createRef();
    this.slideText = React.createRef();
    this.onSwipeEnd = this.onSwipeEnd.bind(this);
    this.onSwipe = this.onSwipe.bind(this);
    this.gotoSlide = this.gotoSlide.bind(this);
    this.onChangedSlide = this.onChangedSlide.bind(this);

    this.timer = null;
    this.onChangedSlideBlock = false;
  }

  componentDidMount() {
    this.initTimer();
  }

  onChangedSlide() {
    if (!this.state.animationComplete) {
      this.slideRef.current.style.transition = 'none';
      this.slideRef.current.style.transform = `translateX(${this.state
        .slideIndexTarget * 100}vw))`;
      this.setState(prevState => ({
        animationComplete: true,
        slideIndex: prevState.slideIndexTarget,
      }));
    } else if (this.state.slideIndexTarget === -1) {
      // Go to last slide for continuous loop
      this.slideRef.current.style.transition = 'none';
      this.slideRef.current.style.transform = `translateX(${this.props.slideshow
        .length * 100}vw))`;
      this.setState({
        slideIndex: this.props.slideshow.length - 1,
        slideIndexTarget: this.props.slideshow.length - 1,
        animationComplete: true,
      });
    } else if (this.state.slideIndexTarget === this.props.slideshow.length) {
      // Go to first slide for continuous loop
      this.slideRef.current.style.transition = 'none';
      this.slideRef.current.style.transform = `translateX(100vw))`;
      this.setState({
        slideIndex: 0,
        slideIndexTarget: 0,
        animationComplete: true,
      });
    } else {
      this.setState(prevState => ({
        animationComplete: true,
        slideIndex: prevState.slideIndexTarget,
      }));
    }
  }

  onSwipeEnd() {
    let slide;
    if (this.swipeDistance > 40) {
      slide = -1;
    } else if (this.swipeDistance < 40) {
      slide = 1;
    } else {
      slide = 0;
    }
    this.slideRef.current.style.transition = defaultTransitionSwipeEnd;
    this.slideText.current.style.transition = defaultTransitionText;
    this.slideText.current.style.opacity = 1;
    this.swipeDistance = 0;
    this.initTimer();
    this.setState(prevState => ({
      slideIndex: prevState.slideIndex + slide,
      slideIndexTarget: prevState.slideIndex + slide,
    }));
  }

  onSwipe(e) {
    clearTimeout(this.timer);
    this.swipeDistance = e[0];
    this.slideRef.current.style.transition = 'none';
    this.slideRef.current.style.transform = this.getSlidePosition(
      this.state.slideIndexTarget,
    );
    const opacityText = 1 - Math.min(100, Math.abs(this.swipeDistance)) / 100;
    this.slideText.current.style.transition = 'none';
    this.slideText.current.style.opacity = opacityText;
  }

  getSlidePosition(target) {
    return `translateX(calc(${this.swipeDistance}px -
      ${(target + 1) * 100}vw))`;
  }

  gotoSlide(slideIndexTarget, useAnimation) {
    this.swipeDistance = 0;
    clearTimeout(this.timer);
    this.initTimer();
    this.setState({
      slideIndexTarget,
      animationComplete: !useAnimation,
    });
  }

  initTimer() {
    if (this.props.autoSlide) {
      this.timer = setTimeout(() => {
        this.gotoSlide(this.state.slideIndex + 1);
      }, this.props.slideInterval);
    }
  }

  render() {
    const { slideshow } = this.props;
    const { slideIndex, slideIndexTarget, animationComplete } = this.state;

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
    if (activeSlide === -1) {
      activeSlide = slideshow.length - 1;
    } else if (activeSlide === slideshow.length) {
      activeSlide = 0;
    }

    return (
      <section>
        <Swipe
          {...classes('')}
          nodeName="div"
          mouseSwipe={false}
          onSwipeEnd={this.onSwipeEnd}
          onSwipe={this.onSwipe}>
          <div {...classes('slide-link-wrapper')}>
            <OneColumn>
              <a
                href={slideshow[activeSlide].url}
                ref={this.slideText}
                {...classes('item-wrapper', 'text', {
                  out: !animationComplete,
                })}>
                <div {...classes('slide-info')}>
                  <h1>{slideshow[activeSlide].title}</h1>
                  <p>
                    {slideshow[activeSlide].metaDescription.metaDescription}
                  </p>
                </div>
              </a>
            </OneColumn>
          </div>
          <div {...classes('navigation-arrows')}>
            <button
              type="button"
              tabIndex={-1}
              onClick={() => {
                this.gotoSlide(
                  slideIndexTarget > 0
                    ? slideIndexTarget - 1
                    : slideshow.length - 1,
                  true,
                );
              }}>
              <ChevronLeft />
            </button>
          </div>
          <div {...classes('navigation-arrows', 'right')}>
            <button
              type="button"
              tabIndex={-1}
              onClick={() => {
                this.gotoSlide(
                  slideIndexTarget < slideshow.length - 1
                    ? slideIndexTarget + 1
                    : 0,
                  true,
                );
              }}>
              <ChevronRight />
            </button>
          </div>
          {!animationComplete && (
            <div
              {...classes('item', 'fade-over')}
              role="img"
              onAnimationEnd={this.onChangedSlide}
              style={{
                backgroundImage: `url(${(slideshow[slideIndexTarget]
                  .metaImage &&
                  slideshow[slideIndexTarget].metaImage.url) ||
                  ''})`,
              }}
            />
          )}
          <div
            ref={this.slideRef}
            {...classes('item-wrapper')}
            style={{
              width: slideshowWidth,
              transform: this.getSlidePosition(slideIndex),
            }}>
            {renderSlideItem(slideshow[slideshow.length - 1], -1)}
            {slideshow.map(renderSlideItem)}
            {renderSlideItem(slideshow[0], slideshow.length)}
          </div>
        </Swipe>
        <div {...classes('indicator-wrapper')}>
          {slideshow.map((slide, index) => (
            <button
              key={`indicator_${index}`} // eslint-disable-line react/no-array-index-key
              type="button"
              {...classes(
                'indicator-dot',
                index === slideIndexTarget ? 'active' : '',
              )}
              onClick={() => !isMobile && this.gotoSlide(index, true)}>
              <span />
            </button>
          ))}
        </div>
      </section>
    );
  }
}

FilmSlideshow.propTypes = {
  autoSlide: PropTypes.bool,
  randomStart: PropTypes.bool,
  slideshow: PropTypes.arrayOf(movieShape),
  slideInterval: PropTypes.number,
};

FilmSlideshow.defaultProps = {
  autoSlide: false,
  randomStart: true,
  slideshow: [],
  slideInterval: 5000,
};

export default FilmSlideshow;
