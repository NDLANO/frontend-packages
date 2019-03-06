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

  onSwipeEnd() {
    const moved = Math.round(
      this.swipeDistance /
        (this.props.columnWidth + this.props.distanceBetweenItems),
    );
    this.swipeDistance = 0;
    if (moved !== 0) {
      this.setState(prevState => {
        let slideIndex = prevState.slideIndex + moved;
        if (slideIndex > 0) {
          slideIndex = 0;
        } else if (
          slideIndex < -(this.props.items.length - this.props.columnsPrSlide)
        ) {
          slideIndex = -(this.props.items.length - this.props.columnsPrSlide);
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
      (this.props.columnWidth + this.props.distanceBetweenItems);
    this.slideshowRef.current.style.transform = `translateX(${transformX}px)`;
  }

  slidePage(direction) {
    if (Math.floor(this.props.columnsPrSlide) < this.props.items.length) {
      this.setState(prevState => {
        let slideIndex =
          prevState.slideIndex + Math.floor(this.props.columnsPrSlide) * direction;
        
        if (slideIndex > 0) {
          slideIndex = 0;
        } else if (
          slideIndex < -(this.props.items.length - this.props.columnsPrSlide)
        ) {
          slideIndex = -(this.props.items.length - Math.floor(this.props.columnsPrSlide));
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
      distanceBetweenItems,
      margin,
      slideBackwardsLabel,
      slideForwardsLabel,
      arrowLeftOffset,
      arrowRightOffset,
      buttonClass,
      wrapperClass,
    } = this.props;
    const { slideIndex, swiping } = this.state;
    const hideButtons = columnsPrSlide >= items.length;

    const transformX = this.swipeDistance +
      slideIndex * (columnWidth + distanceBetweenItems);

    return (
      <section>
        <Swipe
          nodeName="div"
          detectMouse={false}
          detectTouch
          onSwipeEnd={this.onSwipeEnd}
          onSwipe={this.onSwipe}>
          <div className={cx(slideWrapperCSS, wrapperClass)}>
            <StyledButton
              type="button"
              aria-label={slideBackwardsLabel}
              className={buttonClass}
              customClass={buttonClass}
              prev
              arrowLeftOffset={arrowLeftOffset}
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
              arrowRightOffset={arrowRightOffset}
              onClick={() => this.slidePage(-1)}>
              <ChevronRight />
            </StyledButton>
            <StyledSlideContent
              swiping={swiping}
              innerRef={this.slideshowRef}
              style={{
                padding: `0 ${margin}px`,
                width: `${items.length * (columnWidth + distanceBetweenItems) +
                  margin * 2}px`,
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
  distanceBetweenItems: PropTypes.number.isRequired,
  slideBackwardsLabel: PropTypes.string.isRequired,
  slideForwardsLabel: PropTypes.string.isRequired,
  arrowLeftOffset: PropTypes.number,
  arrowRightOffset: PropTypes.number,
  margin: PropTypes.number,
  buttonClass: PropTypes.string,
  wrapperClass: PropTypes.string,
};

Carousel.defaultProps = {
  items: [],
  margin: 0,
  arrowLeftOffset: 0,
  arrowRightOffset: 0,
  buttonClass: '',
  wrapperClass: '',
};




export default Carousel;
