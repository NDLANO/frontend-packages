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

export const overlayAnimations = css`
  @keyframes overlayFadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes overlayFadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

export const modalAnimations = css`
  @keyframes modalFadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes modalFadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  @keyframes modalZoomIn {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes modalZoomOut {
    from {
      opacity: 1;
      transform: translateY(0px);
    }
    to {
      opacity: 0;
      transform: translateY(40px);
    }
  }
  @keyframes modalSubtleIn {
    from {
      opacity: 0;
      transform: translateY(13px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes modalSubleOut {
    from {
      opacity: 1;
      transform: translateY(0px);
    }
    to {
      opacity: 0;
      transform: translateY(13px);
    }
  }
  @keyframes modalSlideLeftIn {
    from {
      opacity: 0;
      transform: translateX(-100%);
    }
    to {
      opacity: 1;
      transform: translateX(0%);
    }
  }
  @keyframes modalSlideLeftOut {
    from {
      opacity: 1;
      transform: translateX(0%);
    }
    to {
      opacity: 0;
      transform: translateX(-100%);
    }
  }
  @keyframes modalSlideRightIn {
    from {
      opacity: 0;
      transform: translateX(100%);
    }
    to {
      opacity: 1;
      transform: translateX(0%);
    }
  }
  @keyframes modalSlideRightOut {
    from {
      opacity: 1;
      transform: translateX(0%);
    }
    to {
      opacity: 0;
      transform: translateX(-100%);
    }
  }
  @keyframes modalSlideTopIn {
    from {
      opacity: 0;
      transform: translateY(-100%);
    }
    to {
      opacity: 1;
      transform: translateY(0%);
    }
  }
  @keyframes modalSlideTopOut {
    from {
      opacity: 1;
      transform: translateY(0%);
    }
    to {
      opacity: 0;
      transform: translateY(-100%);
    }
  }
  @keyframes modalSlideBottomIn {
    from {
      opacity: 0;
      transform: translateY(100%);
    }
    to {
      opacity: 1;
      transform: translateY(0%);
    }
  }
  @keyframes modalSlideBottomOut {
    from {
      opacity: 1;
      transform: translateY(0%);
    }
    to {
      opacity: 0;
      transform: translateY(100%);
    }
  }
`;
