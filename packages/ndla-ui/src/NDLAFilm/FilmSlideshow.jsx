/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Swipeable } from 'react-swipeable';
import BEMHelper from 'react-bem-helper';
import { OneColumn, SafeLink } from '@ndla/ui';
import Spinner from '../Spinner';
import { movieShape } from './shapes';
import NavigationArrow from './NavigationArrow';
import SlideshowIndicator from './SlideshowIndicator';

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
    this.onTransitionEnd = this.onTransitionEnd.bind(this);

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
    } else if (this.swipeDistance < -40) {
      slide = 1;
    } else {
      slide = 0;
    }
    this.slideRef.current.style.transition = defaultTransitionSwipeEnd;
    this.slideText.current.style.transition = defaultTransitionText;
    this.slideText.current.style.opacity = 1;
    this.swipeDistance = 0;
    this.initTimer();
    if (slide !== 0) {
      this.setState(prevState => {
        return {
          slideIndex: prevState.slideIndex + slide,
          slideIndexTarget: prevState.slideIndex + slide,
        };
      });
    } else {
      // Reset transfrom
      this.slideRef.current.style.transform = this.getSlidePosition(
        this.state.slideIndex + slide,
      );
    }
  }

  onSwipe(eventData) {
    if (eventData.dir === 'Up' || eventData.dir === 'Down') {
      return;
    }
    clearTimeout(this.timer);
    this.swipeDistance = -eventData.deltaX;
    this.slideRef.current.style.transition = 'none';
    this.slideRef.current.style.transform = this.getSlidePosition(
      this.state.slideIndexTarget,
    );
    const opacityText = 1 - Math.min(100, Math.abs(this.swipeDistance)) / 100;
    this.slideText.current.style.transition = 'none';
    this.slideText.current.style.opacity = opacityText;
  }

  onTransitionEnd() {
    const slideshowLength = this.props.slideshow.length;
    if (this.state.slideIndex === -1) {
      this.slideRef.current.style.transition = 'none';
      this.slideRef.current.style.transform = this.getSlidePosition(
        slideshowLength - 1,
      );
      this.setState({
        slideIndex: slideshowLength - 1,
        slideIndexTarget: slideshowLength - 1,
      });
    } else if (this.state.slideIndex >= slideshowLength) {
      this.slideRef.current.style.transition = 'none';
      this.slideRef.current.style.transform = this.getSlidePosition(0);
      this.setState({
        slideIndex: 0,
        slideIndexTarget: 0,
      });
    }
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
    if (activeSlide < 0) {
      activeSlide = slideshow.length - 1;
    } else if (activeSlide >= slideshow.length) {
      activeSlide = 0;
    }

    return (
      <section>
        <Swipeable
          {...classes('')}
          onSwiped={this.onSwipeEnd}
          onSwiping={this.onSwipe}>
          <div {...classes('slide-link-wrapper')}>
            <OneColumn>
              <SafeLink
                to={`/subjects${slideshow[activeSlide].path}`}
                {...classes('item-wrapper', 'text', {
                  out: !animationComplete,
                })}>
                <div {...classes('slide-info')} ref={this.slideText}>
                  <h1>{slideshow[activeSlide].title}</h1>
                  <p>{slideshow[activeSlide].metaDescription}</p>
                </div>
              </SafeLink>
            </OneColumn>
          </div>
          <NavigationArrow
            slideIndexTarget={
              slideIndexTarget > 0 ? slideIndexTarget - 1 : slideshow.length - 1
            }
            gotoSlide={this.gotoSlide}
          />
          <NavigationArrow
            slideIndexTarget={
              slideIndexTarget < slideshow.length - 1 ? slideIndexTarget + 1 : 0
            }
            gotoSlide={this.gotoSlide}
            rightArrow
          />
          {!animationComplete && (
            <div
              {...classes('item', 'fade-over')}
              role="img"
              onAnimationEnd={this.onChangedSlide}
              style={{
                backgroundImage: `url(${(slideshow[activeSlide].metaImage &&
                  slideshow[activeSlide].metaImage.url) ||
                  ''})`,
              }}
            />
          )}
          <div
            ref={this.slideRef}
            {...classes('item-wrapper')}
            onTransitionEnd={this.onTransitionEnd}
            style={{
              width: slideshowWidth,
              transform: this.getSlidePosition(slideIndex),
            }}>
            {renderSlideItem(slideshow[slideshow.length - 1], -1)}
            {slideshow.map(renderSlideItem)}
            {renderSlideItem(slideshow[0], slideshow.length)}
          </div>
        </Swipeable>
        <SlideshowIndicator
          slideshow={slideshow}
          activeSlide={activeSlide}
          gotoSlide={this.gotoSlide}
        />
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
  randomStart: false,
  slideshow: [],
  slideInterval: 5000,
};

export default FilmSlideshow;
