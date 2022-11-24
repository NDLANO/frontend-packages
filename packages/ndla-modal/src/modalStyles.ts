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

export const sizeCombos: Record<ModalSize, SerializedStyles> = {
  xsmall: css`
    width: 300px;
  `,
  small: css`
    width: 500px;
  `,
  normal: css`
    width: 700px;
  `,
  large: css`
    width: 1100px;
  `,
  full: css`
    min-width: 100%;
    min-height: 100%;
  `,
};

export const sizes: Record<'width' | 'height', Record<ModalSize, SerializedStyles>> = {
  width: {
    xsmall: css`
      width: 300px;
    `,
    small: css`
      width: 500px;
    `,
    normal: css`
      width: 700px;
    `,
    large: css`
      width: 1100px;
    `,
    full: css`
      min-width: 100%;
    `,
  },
  height: {
    xsmall: css`
      height: auto;
    `,
    small: css`
      height: 500px;
    `,
    normal: css`
      height: 700px;
    `,
    large: css`
      height: 1100px;
    `,
    full: css`
      min-height: 100%;
    `,
  },
};

export const margins: Record<ModalMargin, string> = {
  none: '0px',
  small: spacing.normal,
};
