/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Swipe from 'react-swipe-component';
import { ChevronRight, ChevronLeft } from '@ndla/icons/common';
import BEMHelper from 'react-bem-helper';

const classes = new BEMHelper({
  name: 'film-movielist',
  prefix: 'c-',
});

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
      swiping: false,
    };
    this.swipeDistance = 0;
    this.slideshow = React.createRef();
    this.onSwipeEnd = this.onSwipeEnd.bind(this);
    this.onSwipe = this.onSwipe.bind(this);
  }

  onSwipeEnd() {
    const {
      children,
      columnsPrSlide,
      columnWidth,
      distanceBetweenItems,
    } = this.props;
    const moved = Math.round(
      this.swipeDistance / (columnWidth + distanceBetweenItems),
    );
    this.swipeDistance = 0;
    if (moved !== 0) {
      this.setState(prevState => {
        let slideIndex = prevState.slideIndex + moved;
        if (slideIndex > 0) {
          slideIndex = 0;
        } else if (slideIndex < -(children.length - columnsPrSlide)) {
          slideIndex = -(children.length - columnsPrSlide);
        }
        return {
          slideIndex,
          swiping: false,
        };
      });
    } else {
      this.setState({
        swiping: false,
      });
    }
  }

  onSwipe(e) {
    this.setState({
      swiping: true,
    });
    this.swipeDistance = e[0];
    this.slideshow.current.style.transform = `translateX(${this.swipeDistance +
      this.state.slideIndex *
        (this.props.columnWidth + this.props.distanceBetweenItems)}px)`;
  }

  slidePage(direction) {
    const { children, columnsPrSlide } = this.props;
    if (columnsPrSlide < children.length) {
      this.setState(prevState => {
        let slideIndex = prevState.slideIndex + columnsPrSlide * direction;
        if (slideIndex > 0) {
          slideIndex = 0;
        } else if (slideIndex < -(children.length - columnsPrSlide)) {
          slideIndex = -(children.length - columnsPrSlide);
        }
        return {
          slideIndex,
        };
      });
    }
  }

  render() {
    const {
      children,
      columnWidth,
      columnsPrSlide,
      distanceBetweenItems,
      margin,
      slideBackwardsLabel,
      slideForwardsLabel,
    } = this.props;
    const { slideIndex, swiping } = this.state;
    const numberOfSlides = children.length;
    const hideButtons = columnsPrSlide >= numberOfSlides;
    const marginString = `${margin}px`;

    return (
      <section>
        <Swipe
          nodeName="div"
          mouseSwipe={false}
          onSwipeEnd={this.onSwipeEnd}
          onSwipe={this.onSwipe}>
          <div {...classes('slide-wrapper')}>
            <button
              type="button"
              aria-label={slideBackwardsLabel}
              style={{ width: marginString }}
              {...classes('slide-navigation', {
                prev: true,
                hidden: slideIndex === 0 || hideButtons,
              })}
              onClick={() => this.slidePage(1)}>
              <ChevronLeft />
            </button>
            <button
              type="button"
              aria-label={slideForwardsLabel}
              style={{ width: marginString }}
              {...classes('slide-navigation', {
                next: true,
                hidden:
                  hideButtons ||
                  slideIndex === -(numberOfSlides - columnsPrSlide),
              })}
              onClick={() => this.slidePage(-1)}>
              <ChevronRight />
            </button>
            <div
              {...classes('slide-content', swiping ? 'swiping' : '')}
              ref={this.slideshow}
              style={{
                padding: `0 ${marginString}`,
                width: `${numberOfSlides *
                  (columnWidth + distanceBetweenItems) +
                  margin * 2}px`,
                transform: `translateX(${this.swipeDistance +
                  slideIndex * (columnWidth + distanceBetweenItems)}px)`,
              }}>
              {children}
            </div>
          </div>
        </Swipe>
      </section>
    );
  }
}

Carousel.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      children: PropTypes.node.isRequired,
    }),
  ),
  columnsPrSlide: PropTypes.number.isRequired,
  columnWidth: PropTypes.number.isRequired,
  distanceBetweenItems: PropTypes.number.isRequired,
  slideBackwardsLabel: PropTypes.string.isRequired,
  slideForwardsLabel: PropTypes.string.isRequired,
  margin: PropTypes.number,
};

Carousel.defaultProps = {
  margin: 0,
};

export default Carousel;
