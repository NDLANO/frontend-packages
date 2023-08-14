/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { breakpoints as breakpointFromCore } from '@ndla/core';
import { Breakpoint } from '@ndla/core/types';
import { CalculatedProps as CalculatedCarouselProps } from './Carousel';
import { StyledWrapperAutosizer } from './Styles';

export interface CaruselBreakpoint {
  until?: Breakpoint;
  columnsPrSlide: number;
  distanceBetweenItems: number;
  arrowOffset: number;
  margin?: number;
  maxColumnWidth?: number;
}

interface Props {
  ndlaFilm?: boolean;
  centered?: boolean;
  itemsLength: number;
  breakpoints: CaruselBreakpoint[];
  children: (calculatedProps: CalculatedCarouselProps) => ReactNode;
}

export const CarouselAutosize = ({ breakpoints: propsBreakpoints, children, centered, itemsLength }: Props) => {
  const [carouselBreakpoint, setCarouselBreakpoint] = useState<CaruselBreakpoint | null>(null);
  const autosizeRef = useRef<HTMLDivElement>(null);

  // Update sizes when window resize changes
  const updateSizes = useCallback(() => {
    const node = autosizeRef.current!;
    const wrapperWidthInEm = parseFloat(`${node.offsetWidth / 16}em`);
    const breakpoints: CaruselBreakpoint[] = propsBreakpoints;

    const useBreakpoint = breakpoints
      .filter((breakpointItem) => {
        const until = breakpointItem.until ? parseFloat(breakpointFromCore[breakpointItem.until]) : 9999;
        return until >= wrapperWidthInEm;
      })
      .sort((a, b) =>
        (a.until ? parseFloat(breakpointFromCore[a.until]) : 9999) <
        (b.until ? parseFloat(breakpointFromCore[b.until]) : 9999)
          ? -1
          : 1,
      );

    setCarouselBreakpoint(useBreakpoint[0]);
  }, [propsBreakpoints, setCarouselBreakpoint]);

  // Method that calculates the props for our carousel based on passed breakpoint value
  const calculateCarouselProps = (breakpoint: CaruselBreakpoint): CalculatedCarouselProps | null => {
    if (!carouselBreakpoint || !autosizeRef.current) {
      return null;
    }
    const { columnsPrSlide, distanceBetweenItems, arrowOffset, margin, maxColumnWidth } = breakpoint;

    const wrapperWidth =
      autosizeRef.current.offsetWidth - (columnsPrSlide - 1) * distanceBetweenItems - (margin || 0) * 2;

    const columnWidthDynamic = wrapperWidth / columnsPrSlide;
    const columnWidth = maxColumnWidth ? Math.min(columnWidthDynamic, maxColumnWidth) : columnWidthDynamic;

    return {
      columnsPrSlide,
      columnWidth,
      distanceBetweenItems,
      arrowOffset,
      margin,
    };
  };

  useEffect(() => {
    window.addEventListener('resize', updateSizes);
    updateSizes();
    return () => {
      window.removeEventListener('resize', updateSizes);
    };
  }, [updateSizes]);

  if (!carouselBreakpoint) {
    return <div ref={autosizeRef} />;
  }

  const calculatedCarouselProps = calculateCarouselProps(carouselBreakpoint);

  let wrapperWidth = 'auto';

  if (centered && calculatedCarouselProps) {
    wrapperWidth = `${
      calculatedCarouselProps.columnWidth * Math.min(calculatedCarouselProps.columnsPrSlide, itemsLength) +
      (calculatedCarouselProps.distanceBetweenItems || 0) * (calculatedCarouselProps.columnsPrSlide - 1) +
      (calculatedCarouselProps.margin || 0) * 2
    }px`;
  }

  return (
    <div ref={autosizeRef}>
      {carouselBreakpoint && (
        <StyledWrapperAutosizer width={wrapperWidth}>
          {calculatedCarouselProps ? children(calculatedCarouselProps) : undefined}
        </StyledWrapperAutosizer>
      )}
    </div>
  );
};

export default CarouselAutosize;
