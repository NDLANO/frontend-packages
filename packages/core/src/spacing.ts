/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export const spacingUnit = 24;

export type SpacingNames =
  | 'xxsmall'
  | 'xsmall'
  | 'small'
  | 'nsmall'
  | 'normal'
  | 'medium'
  | 'mediumlarge'
  | 'large'
  | 'xlarge'
  | 'xxlarge';

const spacing: Record<SpacingNames, string> = {
  xxsmall: `${spacingUnit / 6}px`,
  xsmall: `${spacingUnit / 4}px`,
  small: `${spacingUnit / 2}px`,
  nsmall: `${spacingUnit / 1.5}px`,
  normal: `${spacingUnit}px`,
  medium: `${spacingUnit * 1.25}px`,
  mediumlarge: `${spacingUnit * 1.5}px`,
  large: `${spacingUnit * 2}px`,
  xlarge: `${spacingUnit * 3}px`,
  xxlarge: `${spacingUnit * 4}px`,
};
export default spacing;
