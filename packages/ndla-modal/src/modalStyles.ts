import { css, SerializedStyles } from '@emotion/core';
import { spacing } from '@ndla/core';
import { ModalMargin, ModalSize } from './types';

export const sizeCombos: Record<ModalSize, SerializedStyles> = {
  xxsmall: css`
    min-width: 15%;
    max-width: 15%;
    max-height: 85%;
  `,
  xsmall: css`
    max-height: 85%;
    max-width: 30%;
    min-width: 30%;
  `,
  small: css`
    max-height: 85%;
    max-width: 40%;
    min-width: 40%;
  `,
  normal: css`
    max-height: 85%;
    max-width: 60%;
    min-width: 60%;
  `,
  large: css`
    max-height: 85%;
    max-width: 80%;
    min-width: 80%;
  `,
  full: css`
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;
  `,
};

export const sizes: Record<'width' | 'height', Record<ModalSize, SerializedStyles>> = {
  width: {
    xxsmall: css`
      min-width: 15%;
      max-width: 15%;
    `,
    xsmall: css`
      min-width: 30%;
      max-width: 30%;
    `,
    small: css`
      min-width: 40%;
      max-width: 40%;
    `,
    normal: css`
      min-width: 60%;
      max-width: 60%;
    `,
    large: css`
      min-width: 80%;
      max-width: 80%;
    `,
    full: css`
      min-width: 100%;
      max-width: 100%;
    `,
  },
  height: {
    xxsmall: css`
      min-width: 15%;
      max-width: 15%;
    `,
    xsmall: css`
      min-height: 30%;
      max-height: 30%;
    `,
    small: css`
      min-height: 40%;
      max-height: 40%;
    `,
    normal: css`
      min-height: 60%;
      max-height: 60%;
    `,
    large: css`
      min-height: 80%;
      max-height: 80%;
    `,
    full: css`
      min-height: 100%;
      max-height: 100%;
    `,
  },
};

export const margins: Record<ModalMargin, string> = {
  none: '0px',
  small: spacing.normal,
};
