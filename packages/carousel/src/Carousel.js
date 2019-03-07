/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Swipe } from 'react-swipe-component';
import { cx } from 'react-emotion';
import { ChevronRight, ChevronLeft } from '@ndla/icons/common';

import {
  slideWrapperCSS,
  StyledButton,
  StyledSlideContent,
} from './Styles';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
      swiping: false,
    };
    this.swipeDistance = 0;
    this.slideshowRef = React.createRef();
    this.onSwipeEnd = this.onSwipeEnd.bind(this);
    this.onSwipe = this.onSwipe.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { columnsPrSlide, items } = nextProps;
    const { slideIndex } = prevState;
    // Check if resize caused carousel to be scrolled to far.
    if (Math.floor(columnsPrSlide) - items.length > slideIndex) {
      const adjustedSlideIndex = slideIndex + ((Math.floor(columnsPrSlide) - items.length) - slideIndex);
      return {
        slideIndex: adjustedSlideIndex,
      };
    }

    return null;
  }

  onSwipeEnd() {
    const {
      columnsPrSlide,
      columnWidth,
      distanceBetweenItems,
      items,
    } = this.props;
    const roundedColumnsPrSlide = Math.floor(columnsPrSlide);

    const moved = Math.round(
      this.swipeDistance /
        (columnWidth + distanceBetweenItems),
    );
    this.swipeDistance = 0;
    if (moved !== 0) {
      this.setState(prevState => {
        let slideIndex = prevState.slideIndex + moved;
        if (slideIndex > 0) {
          slideIndex = 0;
        } else if (
          slideIndex < -(items.length - columnsPrSlide)
        ) {
          slideIndex = -(items.length - roundedColumnsPrSlide);
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
    this.swipeDistance = e.x || e[0];
    const transformX = this.swipeDistance +
    this.state.slideIndex *
      (this.props.columnWidth);
    this.slideshowRef.current.style.transform = `translateX(${transformX}px)`;
  }

  slidePage(direction) {
    const {
      columnsPrSlide,
      items,
    } = this.props;
    const roundedColumnsPrSlide = Math.floor(columnsPrSlide);
    if (roundedColumnsPrSlide < items.length) {
      this.setState(prevState => {
        let slideIndex =
          prevState.slideIndex + roundedColumnsPrSlide * direction;
        
        if (slideIndex > 0) {
          slideIndex = 0;
        } else if (
          slideIndex < -(items.length - roundedColumnsPrSlide)
        ) {
          slideIndex = -(items.length - roundedColumnsPrSlide);
        }
        return {
          slideIndex,
        };
      });
    }
  }

  render() {
    const {
      items,
      columnWidth,
      columnsPrSlide,
      margin,
      distanceBetweenItems,
      slideBackwardsLabel,
      slideForwardsLabel,
      arrowOffset,
      buttonClass,
      wrapperClass,
      disableScroll,
    } = this.props;
    const { slideIndex, swiping } = this.state;
    const hideButtons = columnsPrSlide >= items.length;

    const transformX = this.swipeDistance +
      (slideIndex * (columnWidth + distanceBetweenItems));

    return (
      <section>
        <Swipe
          nodeName="div"
          detectMouse={false}
          detectTouch
          onSwipeEnd={this.onSwipeEnd}
          onSwipe={this.onSwipe}>
          <div className={cx(slideWrapperCSS, wrapperClass)}>
            {!disableScroll && (
              <>
                <StyledButton
                  type="button"
                  aria-label={slideBackwardsLabel}
                  className={buttonClass}
                  customClass={buttonClass}
                  prev
                  arrowOffset={arrowOffset}
                  dontShow={slideIndex === 0 || hideButtons}
                  onClick={() => this.slidePage(1)}>
                  <ChevronLeft />
                </StyledButton>
                <StyledButton
                  type="button"
                  aria-label={slideForwardsLabel}
                  className={buttonClass}
                  customClass={buttonClass}
                  dontShow={hideButtons || Math.floor(columnsPrSlide) === (items.length + slideIndex)}
                  next
                  arrowOffset={arrowOffset}
                  onClick={() => this.slidePage(-1)}>
                  <ChevronRight />
                </StyledButton>
              </>
            )}
            <StyledSlideContent
              swiping={swiping}
              innerRef={this.slideshowRef}
              style={{
                padding: `0 ${margin}px`,
                width: `${items.length * columnWidth +
                  (distanceBetweenItems * (items.length - 1)) + (margin * 2)}px`,
                transform: `translateX(${transformX}px)`,
              }}>
              {items.map(item => item)}
            </StyledSlideContent>
          </div>
        </Swipe>
      </section>
    );
  }
}

Carousel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.node).isRequired,
  columnsPrSlide: PropTypes.number.isRequired,
  columnWidth: PropTypes.number.isRequired,
  distanceBetweenItems: PropTypes.number,
  slideBackwardsLabel: PropTypes.string.isRequired,
  slideForwardsLabel: PropTypes.string.isRequired,
  arrowOffset: PropTypes.number,
  margin: PropTypes.number,
  buttonClass: PropTypes.string,
  wrapperClass: PropTypes.string,
  disableScroll: PropTypes.bool,
};

Carousel.defaultProps = {
  items: [],
  margin: 0,
  distanceBetweenItems: 0,
  arrowOffset: 0,
  buttonClass: '',
  wrapperClass: '',
};




export default Carousel;
