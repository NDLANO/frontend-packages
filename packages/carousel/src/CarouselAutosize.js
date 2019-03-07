/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import em from 'polished/lib/helpers/em';
import debounce from 'lodash/debounce';
import { breakpoints as breakPointFromCore } from '@ndla/core';

class CarouselAutosizeWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.autosizeRef = React.createRef();
    this.updateSizes = this.updateSizes.bind(this);
    this.updateSizesDebounce = debounce(() => this.updateSizes(), 50);
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateSizes);
    this.updateSizes();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateSizes);
  }

  updateSizes() {
    const wrapperWidthInEm = parseFloat(em(this.autosizeRef.current.offsetWidth));
    const { breakPoints } = this.props;

    const useBreakPoint = breakPoints
      .filter(breakPointItem => {
        const until = breakPointItem.until ? parseFloat(breakPointFromCore[breakPointItem.until]) : 9999;
        return until >= wrapperWidthInEm;
      })
      .sort((a, b) => 
        (a.until ? parseFloat(breakPointFromCore[a.until]) : 9999) < (b.until ? parseFloat(breakPointFromCore[b.until]) : 9999) ?
          -1 : 1
      );
    
    this.setState({
      useBreakPoint: useBreakPoint[0],
    });
  }

  calculateCarouselProps() {
    const {
      columnsPrSlide,
      distanceBetweenItems,
      arrowLeftOffset,
      arrowRightOffset,
      margin,
      maxColumnWidth,
    } = this.state.useBreakPoint;

    const wrapperWidth = this.autosizeRef.current.offsetWidth;
    const columnWidthDynamic = ((wrapperWidth - ((margin || 0) * 2) - (columnsPrSlide - 1) * Math.floor(distanceBetweenItems))) / columnsPrSlide;
    const columnWidth = maxColumnWidth ? Math.min(columnWidthDynamic, maxColumnWidth) : columnWidthDynamic;

    console.log('columnWidth', columnWidth);
    return {
      columnsPrSlide: columnsPrSlide,
      columnWidth: columnWidth,
      distanceBetweenItems: distanceBetweenItems,
      arrowLeftOffset: arrowLeftOffset,
      arrowRightOffset: arrowRightOffset,
      margin: margin || 0,
      maxColumnWidth,
    };
  }

  render() {
    const calulatedCarouselProps = this.state.useBreakPoint ? this.calculateCarouselProps() : null;
    let wrapperWidth = 'auto';
    if (this.props.centered && calulatedCarouselProps && calulatedCarouselProps.maxColumnWidth === calulatedCarouselProps.columnWidth) {
      wrapperWidth = `${(calulatedCarouselProps.columnWidth * calulatedCarouselProps.columnsPrSlide) +
        (calulatedCarouselProps.distanceBetweenItems * (calulatedCarouselProps.columnsPrSlide - 1)) +
        (calulatedCarouselProps.margin || 0) * 2}px`;
    }
    return (
      <div ref={this.autosizeRef}>
        {this.state.useBreakPoint && (
          <div style={{ margin: '0 auto', width: wrapperWidth }}>
            {this.props.children(calulatedCarouselProps)}
          </div>
        )}
      </div>
    );
  }
}

CarouselAutosizeWrapper.propTypes = {
  breakPoints: PropTypes.arrayOf(
    PropTypes.shape({
      until: PropTypes.oneOf(Object.keys(breakPointFromCore)),
      columnsPrSlide: PropTypes.number.isRequired,
      distanceBetweenItems: PropTypes.number,
      arrowLeftOffset: PropTypes.number,
      arrowRightOffset: PropTypes.number,
      margin: PropTypes.number,
    }),
  ).isRequired,
  centered: PropTypes.bool,
  itemsLength: (props, propName, componentName) => {
    if (typeof props[propName] !== 'number' && props.centered) {
      return new Error(
        `Invalid prop ${propName} supplied to ${componentName}. Must be a number when ${componentName} centered prop is set to true`,
      );
    }
    return null;
  },
};

export default CarouselAutosizeWrapper;
