/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { css, SerializedStyles } from '@emotion/react';
import { spacing } from '@ndla/core';
import { ModalMargin, ModalSize } from './types';

export const widths = {
  xsmall: '300px',
  small: '500px',
  normal: '700px',
  large: '1100px',
  full: '100%',
};

export const heights = {
  xsmall: 'auto',
  small: '500px',
  normal: '700px',
  large: '1100px',
  full: '100%',
};

export const sizeCombos: Record<ModalSize, SerializedStyles> = {
  xsmall: css`
    width: ${widths.xsmall};
  `,
  small: css`
    width: ${widths.small};
  `,
  normal: css`
    width: ${widths.normal};
  `,
  large: css`
    width: ${widths.large};
  `,
  full: css`
    min-width: ${widths.full};
    min-height: ${heights.full};
  `,
};

export const sizes: Record<'width' | 'height', Record<ModalSize, SerializedStyles>> = {
  width: {
    xsmall: css`
      width: ${widths.xsmall};
    `,
    small: css`
      width: ${widths.small};
    `,
    normal: css`
      width: ${widths.normal};
    `,
    large: css`
      width: ${widths.large};
    `,
    full: css`
      width: ${widths.full};
    `,
  },
  height: {
    xsmall: css`
      width: ${heights.xsmall};
    `,
    small: css`
      width: ${heights.small};
    `,
    normal: css`
      width: ${heights.normal};
    `,
    large: css`
      width: ${heights.large};
    `,
    full: css`
      min-height: ${heights.full};
    `,
  },
};

export const margins: Record<ModalMargin, string> = {
  none: '0px',
  small: spacing.normal,
};
