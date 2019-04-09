import { spacing } from '@ndla/core';
import { CaruselBreakpoint } from './CarouselAutosize';

export const ndlaFilmBreakpoints: CaruselBreakpoint[] = [
  {
    until: 'mobile',
    columnsPrSlide: 1,
    distanceBetweenItems: spacing.spacingUnit / 2,
    margin: spacing.spacingUnit,
    arrowOffset: 26,
  },
  {
    until: 'mobileWide',
    columnsPrSlide: 2,
    distanceBetweenItems: spacing.spacingUnit / 2,
    margin: spacing.spacingUnit,
    arrowOffset: 26,
  },
  {
    until: 'tabletWide',
    columnsPrSlide: 3,
    distanceBetweenItems: spacing.spacingUnit / 2,
    margin: spacing.spacingUnit,
    arrowOffset: 26,
  },
  {
    until: 'desktop',
    columnsPrSlide: 4,
    distanceBetweenItems: spacing.spacingUnit,
    margin: spacing.spacingUnit * 2,
    arrowOffset: 26,
  },
  {
    until: 'wide',
    columnsPrSlide: 4,
    distanceBetweenItems: spacing.spacingUnit,
    margin: spacing.spacingUnit * 2,
    arrowOffset: 26,
  },
  {
    until: 'ultraWide',
    columnsPrSlide: 4,
    distanceBetweenItems: spacing.spacingUnit,
    margin: spacing.spacingUnit * 3.5,
    arrowOffset: 26,
  },
  {
    columnsPrSlide: 6,
    distanceBetweenItems: spacing.spacingUnit,
    margin: spacing.spacingUnit * 3.5,
    arrowOffset: 26,
  },
];

export const standardBreakpoints: CaruselBreakpoint[] = [
  {
    until: 'mobile',
    columnsPrSlide: 1,
    distanceBetweenItems: 26,
    arrowOffset: 26,
  },
  {
    until: 'mobileWide',
    columnsPrSlide: 2,
    distanceBetweenItems: 26,
    arrowOffset: 26,
  },
  {
    until: 'tablet',
    columnsPrSlide: 2.25,
    distanceBetweenItems: 26,
    arrowOffset: 26,
    margin: spacing.spacingUnit,
  },
  {
    until: 'tabletWide',
    columnsPrSlide: 3.25,
    distanceBetweenItems: 26,
    arrowOffset: 26,
    margin: spacing.spacingUnit * 1.25,
  },
  {
    until: 'desktop',
    columnsPrSlide: 4,
    distanceBetweenItems: 26,
    arrowOffset: 26,
    margin: spacing.spacingUnit * 1.25,
  },
  {
    until: 'wide',
    columnsPrSlide: 4,
    distanceBetweenItems: 26,
    arrowOffset: 26,
    margin: spacing.spacingUnit * 2.5,
  },
  {
    until: 'ultraWide',
    columnsPrSlide: 5,
    distanceBetweenItems: 26,
    arrowOffset: 26,
    margin: spacing.spacingUnit * 2.5,
  },
  {
    columnsPrSlide: 7,
    distanceBetweenItems: 26,
    arrowOffset: 26,
    margin: spacing.spacingUnit * 2.5,
    maxColumnWidth: 200,
  },
];
