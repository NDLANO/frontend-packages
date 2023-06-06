/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { css } from '@emotion/react';

export const positionStyles = css`
  &[data-position='top'] {
    top: var(--margin);
    bottom: unset;
  }
  &[data-position='bottom'] {
    bottom: var(--margin);
    top: unset;
  }
  &[data-position='left'] {
    left: var(--margin);
    right: unset;
  }
  &[data-position='right'] {
    right: var(--margin);
    left: unset;
  }
`;

export const sizeStyles = css`
  &[data-size='full'] {
    min-height: 100%;
    min-width: 100%;
    inset: 0;
  }
  &[data-width='xsmall'],
  &[data-size='xsmall'] {
    width: 300px;
  }
  &[data-width='small'],
  &[data-size='small'] {
    width: 500px;
  }
  &[data-width='normal'],
  &[data-size='normal'] {
    width: 700px;
  }
  &[data-width='large'],
  &[data-size='large'] {
    width: 1100px;
  }
  &[data-width='full'] {
    width: 100%;
    min-width: 100%;
    left: 0;
    right: 0;
  }
  &[data-height='xsmall'] {
    height: 300px;
  }
  &[data-height='small'] {
    height: 500px;
  }
  &[data-height='normal'] {
    height: 700px;
  }
  &[data-height='large'] {
    height: 1100px;
  }
  &[data-height='full'] {
    height: 100%;
    min-height: 100%;
    top: 0;
    bottom: 0;
  }
`;
