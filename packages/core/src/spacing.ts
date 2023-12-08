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
  | 'snormal'
  | 'normal'
  | 'medium'
  | 'mediumlarge'
  | 'large';

const spacing: Record<SpacingNames, string> = {
  xxsmall: `${spacingUnit / 6}px`,
  xsmall: `${spacingUnit / 4}px`,
  small: `${spacingUnit / 2}px`,
  nsmall: `${spacingUnit / 1.5}px`,
  snormal: `${spacingUnit / 1.2}px`,
  normal: `${spacingUnit}px`,
  medium: `${spacingUnit * 1.25}px`,
  mediumlarge: `${spacingUnit * 1.5}px`,
  large: `${spacingUnit * 2}px`,
};
export default spacing;
