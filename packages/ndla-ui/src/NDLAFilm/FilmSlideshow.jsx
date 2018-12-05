/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Swipe from 'react-swipe-component';
import BEMHelper from 'react-bem-helper';

import { OneColumn } from '../Layout';
import { movieShape } from './FilmFrontpage';

const classes = new BEMHelper({
  name: 'film-slideshow',
  prefix: 'c-',
});

const defaultTransition = 'transform 600ms cubic-bezier(0.98, 0, 0.21, 1)';

class FilmSlideshow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
      swiping: false,
    };
    this.swipeDistance = 0;
    this.slideRef = React.createRef();
    this.onSwipeEnd = this.onSwipeEnd.bind(this);
    this.onSwipe = this.onSwipe.bind(this);
    this.gotoSlide = this.gotoSlide.bind(this);
    this.renderSlideItem = this.renderSlideItem.bind(this);
    this.onChangedSlide = this.onChangedSlide.bind(this);

    this.timer = null;
    this.onChangedSlideBlock = false;
  }

  componentDidMount() {
    this.initTimer();
  }

  clearTimer() {
    clearTimeout(this.timer);
  }

  initTimer() {
    this.clearTimer();
    this.timer = setTimeout(() => {
      this.gotoSlide(this.state.slideIndex + 1);
    }, this.props.slideInterval);
  }

  onChangedSlide() {
    if (this.state.slideIndex === -1) {
      // Go to last slide for continuous loop
      this.slideRef.current.style.transition = 'none';
      this.slideRef.current.style.transform = `translateX(${this.props.slideshow.length * 100}vw))`;
      this.setState({
        slideIndex: this.props.slideshow.length - 1,
        swiping: false,
      });
    } else if (this.state.slideIndex === this.props.slideshow.length) {
      // Go to first slide for continuous loop
      this.slideRef.current.style.transition = 'none';
      this.slideRef.current.style.transform = `translateX(100vw))`;
      this.setState({
        slideIndex: 0,
        swiping: false,
      });
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
    this.slideRef.current.style.transition = defaultTransition;
    this.swipeDistance = 0;
    this.initTimer();
    this.setState(prevState => ({
      swiping: false,
      slideIndex: prevState.slideIndex + slide,
    }));
  }

  onSwipe(e) {
    this.clearTimer();
    this.setState({
      swiping: true,
    });
    this.swipeDistance = e[0];
    this.slideRef.current.style.transition = 'none';
    this.slideRef.current.style.transform = this.getSlidePosition();
  }

  gotoSlide(slideIndex) {
    this.swipeDistance = 0;
    this.initTimer();
    this.slideRef.current.style.transition = defaultTransition;
    this.setState({
      slideIndex,
    });
  }

  getSlidePosition() {
    return `translateX(calc(${this.swipeDistance}px -
      ${(this.state.slideIndex + 1) * 100}vw))`;
  }

  renderSlideItem(slide) {
    return (<div
      {...classes('item')}
      key={slide.id}
      role="img"
      aria-label={(slide.metaImage && slide.metaImage.alt) || ''}
      style={{
        backgroundImage: `url(${(slide.metaImage &&
          slide.metaImage.url) ||
          ''})`,
      }}>
    </div>);
  }

  render() {
    const { slideshow } = this.props;
    const { slideIndex, swiping } = this.state;

    if (slideshow.length === 0) {
      return null;
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
          nodeName="div"
          mouseSwipe={false}
          onSwipeEnd={this.onSwipeEnd}
          onSwipe={this.onSwipe}>
          <a href={slideshow[activeSlide].url} {...classes('item-wrapper', 'text')}>
            <div {...classes('slide-info')}>
              <div>
                <OneColumn>
                  <h1>{slideshow[activeSlide].title.title}</h1>
                </OneColumn>
              </div>
              <div>
                <OneColumn>
                  <p>{slideshow[activeSlide].metaDescription.metaDescription}</p>
                </OneColumn>
              </div>
            </div>
          </a>
          <div ref={this.slideRef} onTransitionEnd={this.onChangedSlide} {...classes('item-wrapper')} style={{
            width: slideshowWidth,
            transform: this.getSlidePosition(),
            transition: defaultTransition,
          }}>
            {this.renderSlideItem(slideshow[slideshow.length - 1], -1)}
            {slideshow.map(this.renderSlideItem)}
            {this.renderSlideItem(slideshow[0], slideshow.length)}
          </div>
        </Swipe>
        <div {...classes('indicator-wrapper')}>
          {slideshow.map((slide, index) => (
            <button
              key={`indicator_${index}`} // eslint-disable-line react/no-array-index-key
              type="button"
              {...classes(
                'indicator-dot',
                index === activeSlide ? 'active' : '',
              )}
              onClick={() => this.gotoSlide(index)}
            />
          ))}
        </div>
      </section>
    );
  }
}

FilmSlideshow.propTypes = {
  slideshow: PropTypes.arrayOf(movieShape),
  slideInterval: PropTypes.number,
};

FilmSlideshow.defaultProps = {
  slideshow: [],
  slideInterval: 5000,
};

export default FilmSlideshow;
