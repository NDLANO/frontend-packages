/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
// @ts-ignore
import { ChevronRight, ChevronLeft } from '@ndla/icons/common';
import { slideWrapperCSS, StyledButton, StyledSlideContent } from './Styles';
import { Swipe, Position } from './Swipe';

export interface CalculatedProps {
  columnsPrSlide: number;
  columnWidth: number;
  distanceBetweenItems: number;
  arrowOffset: number;
  margin: number;
}

interface Props extends CalculatedProps {
  items: React.ReactNode[];
  slideBackwardsLabel: string;
  slideForwardsLabel: string;
  buttonClass: string;
  wrapperClass: string;
  disableScroll: boolean;
}

interface State {
  slideIndex: number;
  swiping: boolean;
}

export class Carousel extends Component<Props, State> {
  static defaultProps = {
    items: [],
    margin: 0,
    distanceBetweenItems: 0,
    arrowOffset: 0,
    buttonClass: '',
    wrapperClass: '',
  };

  swipeDistance = 0;
  swipeSpeed = 0;
  slideshowRef = React.createRef<HTMLDivElement>();

  state: State = {
    slideIndex: 0,
    swiping: false,
  };

  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    const { columnsPrSlide, items } = nextProps;
    const { slideIndex } = prevState;
    // Check if resize caused carousel to be scrolled to far.
    if (Math.floor(columnsPrSlide) - items.length > slideIndex) {
      const adjustedSlideIndex =
        slideIndex + (Math.floor(columnsPrSlide) - items.length - slideIndex);
      return {
        slideIndex: adjustedSlideIndex,
      };
    }

    return null;
  }

  onSwipeEnd = () => {
    const {
      columnsPrSlide,
      columnWidth,
      distanceBetweenItems,
      items,
    } = this.props;
    const roundedColumnsPrSlide = Math.floor(columnsPrSlide);

    const moved = Math.round(
      (-Math.min(this.props.columnWidth / 2, this.swipeSpeed * 5) +
        this.swipeDistance) /
        (columnWidth + distanceBetweenItems),
    );
    this.swipeDistance = 0;
    if (moved !== 0) {
      this.setState(prevState => {
        let slideIndex = prevState.slideIndex + moved;
        if (slideIndex > 0) {
          slideIndex = 0;
        } else if (slideIndex < -(items.length - columnsPrSlide)) {
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
  };

  onSwipe = (p: Position) => {
    this.setState({
      swiping: true,
    });
    const moved = p.x;
    this.swipeSpeed = this.swipeDistance - moved;
    this.swipeDistance = moved;
    const transformX =
      this.swipeDistance + this.state.slideIndex * this.props.columnWidth;

    if (this.slideshowRef.current) {
      this.slideshowRef.current.style.transform = `translateX(${transformX}px)`;
    }
  };

  slidePage = (direction: number) => {
    const { columnsPrSlide, items } = this.props;
    const roundedColumnsPrSlide = Math.floor(columnsPrSlide);
    if (roundedColumnsPrSlide < items.length) {
      this.setState(prevState => {
        let slideIndex =
          prevState.slideIndex + roundedColumnsPrSlide * direction;

        if (slideIndex > 0) {
          slideIndex = 0;
        } else if (slideIndex < -(items.length - roundedColumnsPrSlide)) {
          slideIndex = -(items.length - roundedColumnsPrSlide);
        }
        return {
          slideIndex,
        };
      });
    }
  };

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

    const transformX =
      this.swipeDistance + slideIndex * (columnWidth + distanceBetweenItems);

    return (
      <section>
        <Swipe
          nodeName="div"
          detectMouse={false}
          detectTouch
          onSwipeEnd={this.onSwipeEnd}
          onSwipe={this.onSwipe}>
          <div css={slideWrapperCSS} className={wrapperClass}>
            {!disableScroll && (
              <>
                <StyledButton
                  type="button"
                  aria-label={slideBackwardsLabel}
                  className={buttonClass}
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
                  dontShow={
                    hideButtons ||
                    Math.floor(columnsPrSlide) === items.length + slideIndex
                  }
                  next
                  arrowOffset={arrowOffset}
                  onClick={() => this.slidePage(-1)}>
                  <ChevronRight />
                </StyledButton>
              </>
            )}
            <StyledSlideContent
              swiping={swiping}
              ref={this.slideshowRef}
              style={{
                padding: `0 ${margin}px`,
                width: `${items.length * columnWidth +
                  distanceBetweenItems * (items.length - 1) +
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
