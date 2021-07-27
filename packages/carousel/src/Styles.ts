/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { css } from '@emotion/core';

export const slideWrapperCSS = css`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

type ButtonProps = {
  prev?: boolean;
  next?: boolean;
  dontShow?: boolean;
  arrowOffset: number;
};

export const StyledButton = styled.button<ButtonProps>(
  {
    position: 'absolute',
    zIndex: 1,
  },
  props =>
    props.prev && {
      left: `${props.arrowOffset}px`,
    },
  props =>
    props.next && {
      right: `${props.arrowOffset}px`,
    },
  props =>
    props.dontShow && {
      display: 'none !important',
    },
);

export const StyledSlideContent = styled.div<{ swiping?: boolean }>(
  {
    display: 'flex',
    justifyContent: 'space-between',
    transition: 'transform 600ms ease',
  },
  props =>
    props.swiping && {
      transition: 'none',
    },
);

export const StyledWrapperAutosizer = styled.div<{ width: string }>(
  {
    margin: '0 auto',
  },
  props => ({
    width: props.width,
  }),
);
