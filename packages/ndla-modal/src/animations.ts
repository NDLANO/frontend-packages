/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { keyframes } from '@emotion/react';

interface Value {
  func: 'translateX' | 'translateY' | 'translate';
  start: string;
  end: string;
}

const slideValues: Record<string, Value> = {
  left: { func: 'translateX', start: '-100%', end: '0%' },
  right: { func: 'translateX', start: '100%', end: '0%' },
  top: { func: 'translateY', start: '-100%', end: '0%' },
  bottom: { func: 'translateY', start: '100%', end: '0%' },
};

const buildAnimation = (value: Value, showFade = true) => {
  return keyframes`
      0% {
        ${showFade && 'opacity: 0'};
        transform: ${value.func}(${value.start});
      }
      100% {
        ${showFade && 'opacity: 1'};
        transform: ${value.func}(${value.end});
      }
  `;
};

export const buildTransformAnimation = (value: Value, showFade = true) => {
  return {
    in: buildAnimation(value, showFade),
    out: buildAnimation({ func: value.func, start: value.end, end: value.start }, showFade),
  };
};

export const animations = {
  fade: {
    in: keyframes`
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    `,
    out: keyframes`
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    `,
  },
  zoom: buildTransformAnimation({ func: 'translateY', start: '40px', end: '0' }),
  subtle: buildTransformAnimation({ func: 'translateY', start: '-13px', end: '0' }),
  slideIn: {
    type: 'directional',
    center: undefined,
    default: buildTransformAnimation(slideValues['left']),
    left: buildTransformAnimation(slideValues['left']),
    right: buildTransformAnimation(slideValues['right']),
    top: buildTransformAnimation(slideValues['top']),
    bottom: buildTransformAnimation(slideValues['bottom']),
  },
};
