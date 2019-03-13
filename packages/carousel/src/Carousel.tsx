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
import BEMHelper from 'react-bem-helper';
import { Swipe } from './Swipe';

interface Child {
  id: string;
  children: React.ReactNode;
}

interface Props {
  children: Child[];
  columnsPrSlide: number;
  columnWidth: number;
  distanceBetweenItems: number;
  slideBackwardsLabel: string;
  slideForwardsLabel: string;
  margin: number;
}

interface State {
  slideIndex: number;
  swiping: boolean;
}

const classes = new BEMHelper({
  name: 'film-movielist',
  prefix: 'c-',
});

export class Carousel extends Component<Props, State> {
  static defaultProps = { margin: 0 };
  swipeDistance = 0;
  slideshow = React.createRef<HTMLDivElement>();
  state: State = {
    slideIndex: 0,
    swiping: false,
  };

  onSwipeEnd = () => {
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
  };

  onSwipe = (e: any) => {
    this.setState({
      swiping: true,
    });
    this.swipeDistance = e[0];
    if (this.slideshow.current) {
      this.slideshow.current.style.transform = `translateX(${this
        .swipeDistance +
        this.state.slideIndex *
          (this.props.columnWidth + this.props.distanceBetweenItems)}px)`;
    }
  };

  slidePage = (direction: number) => {
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
  };

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
          detectMouse={false}
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
