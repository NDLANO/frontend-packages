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
import { getCurrentBreakpoint, breakpoints } from '@ndla/util';
import debounce from 'lodash/debounce';

const classes = new BEMHelper({
  name: 'film-movielist',
  prefix: 'c-',
});

const setScreenSize = (startingWidth = 260) => {
  const screenWidth = window.innerWidth || document.documentElement.clientWidth;

  const currentBreakpoint = getCurrentBreakpoint();
  let margin;
  let itemSize;
  if (screenWidth < 385) {
    margin = 26;
    itemSize = startingWidth / 2;
  } else if (screenWidth < 450) {
    margin = 26;
    itemSize = startingWidth * 0.61;
  } else if (currentBreakpoint === breakpoints.mobile) {
    margin = 26;
    itemSize = startingWidth * 0.75;
  } else if (currentBreakpoint === breakpoints.tablet) {
    margin = 52;
    itemSize = startingWidth * 0.85;
  } else if (currentBreakpoint === breakpoints.desktop) {
    margin = 78;
    itemSize = startingWidth * 0.95;
  } else if (screenWidth < 1600) {
    margin = 104;
    itemSize = startingWidth;
  } else {
    margin = 104;
    itemSize = startingWidth * 1.15;
  }

  const columnsPrSlide = Math.floor((screenWidth - margin * 2) / itemSize);

  return {
    columnWidth: (screenWidth - margin * 2) / columnsPrSlide,
    columnsPrSlide,
    margin,
  };
};

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
      swiping: false,
      columnWidth: 260,
      columnsPrSlide: 1,
      margin: 0,
    };
    this.swipeDistance = 0;
    this.slideshow = React.createRef();
    this.onSwipeEnd = this.onSwipeEnd.bind(this);
    this.onSwipe = this.onSwipe.bind(this);
    this.setScreenSize = this.setScreenSize.bind(this);
    this.setScreenSizeDebounced = debounce(() => this.setScreenSize(), 50);
  }

  componentDidMount() {
    this.setScreenSize();
    window.addEventListener('resize', this.setScreenSizeDebounced);
  }

  componentWillUnmount() {
    this.setScreenSizeDebounced.cancel();
    window.removeEventListener('resize', this.setScreenSizeDebounced);
  }

  setScreenSize() {
    this.setState({ ...setScreenSize(this.props.startingWidth) });
  }

  onSwipeEnd() {
    const { columnWidth, columnsPrSlide } = this.state;
    const { distanceBetweenItems, children } = this.props;
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
    const { columnWidth } = this.state;
    this.setState({
      swiping: true,
    });
    this.swipeDistance = e[0];
    this.slideshow.current.style.transform = `translateX(${this.swipeDistance +
      this.state.slideIndex *
        (columnWidth + this.props.distanceBetweenItems)}px)`;
  }

  slidePage(direction) {
    const { columnsPrSlide } = this.state;
    const length = this.props.children.length;
    if (columnsPrSlide < length) {
      this.setState(prevState => {
        let slideIndex = prevState.slideIndex + columnsPrSlide * direction;
        if (slideIndex > 0) {
          slideIndex = 0;
        } else if (slideIndex < -(length - columnsPrSlide)) {
          slideIndex = -(length - columnsPrSlide);
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
      distanceBetweenItems,
      slideBackwardsLabel = '',
      slideForwardsLabel = '',
      padding,
    } = this.props;
    const { margin, columnWidth, columnsPrSlide } = this.state;
    const { slideIndex, swiping } = this.state;
    const length = children.length;
    const hideButtons = columnsPrSlide >= length;
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
                  hideButtons || slideIndex === -(length - columnsPrSlide),
              })}
              onClick={() => this.slidePage(-1)}>
              <ChevronRight />
            </button>
            <div
              {...classes('slide-content', swiping ? 'swiping' : '')}
              ref={this.slideshow}
              style={{
                padding: padding ? `0 ${marginString}` : '',
                width: `${length * (columnWidth + distanceBetweenItems) +
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
  children: PropTypes.arrayOf(PropTypes.node.isRequired),
  columnsPrSlide: PropTypes.number.isRequired,
  columnWidth: PropTypes.number.isRequired,
  distanceBetweenItems: PropTypes.number.isRequired,
  slideBackwardsLabel: PropTypes.string.isRequired,
  slideForwardsLabel: PropTypes.string.isRequired,
  margin: PropTypes.number,
};

Carousel.defaultProps = {
  children: [],
  margin: 0,
};

export default Carousel;
