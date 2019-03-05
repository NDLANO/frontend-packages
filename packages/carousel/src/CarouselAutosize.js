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
        const until = breakPointItem.until ? parseFloat(breakPointFromCore[breakPointItem.until]) : 0;
        return until <= wrapperWidthInEm;
      })
      .sort((a, b) => 
        (a.until ? parseFloat(breakPointFromCore[a.until]) : -1) < (b.until ? parseFloat(breakPointFromCore[b.until]) : -1) ?
          -1 : 1
      );

    console.log('available breakpoints', useBreakPoint);
    console.log(breakPointFromCore);
    
    this.setState({
      useBreakPoint: useBreakPoint[useBreakPoint.length - 1],
    });
  }

  calculateCarouselProps() {
    const wrapperWidth = this.autosizeRef.current.offsetWidth;
    const { useBreakPoint } = this.state;
    const columnWidth = (wrapperWidth - (useBreakPoint.margin || 0) - (useBreakPoint.columnsPrSlide * (useBreakPoint.distanceBetweenItems || 0))) / (useBreakPoint.columnsPrSlide);

    return {
      columnsPrSlide: useBreakPoint.columnsPrSlide,
      columnWidth,
      distanceBetweenItems: useBreakPoint.distanceBetweenItems || 0,
      arrowLeftOffset: useBreakPoint.arrowLeftOffset,
      arrowRightOffset: useBreakPoint.arrowRightOffset,
      margin: useBreakPoint.margin || 0,
    };
  }

  render() {
    if (this.state.useBreakPoint) {
      console.log(this.calculateCarouselProps())
    }
    return (
      <div ref={this.autosizeRef}>
        {this.state.useBreakPoint && this.props.children(this.calculateCarouselProps())}
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
};

export default CarouselAutosizeWrapper;
