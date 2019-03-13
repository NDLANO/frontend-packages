/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled, { css } from 'react-emotion';

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

export const StyledButton = styled.button(
  {
    position: 'absolute',
    zIndex: 1,
  },
  (props: ButtonProps) =>
    props.prev && {
      left: `${props.arrowOffset}px`,
    },
  (props: ButtonProps) =>
    props.next && {
      right: `${props.arrowOffset}px`,
    },
  (props: ButtonProps) =>
    props.dontShow && {
      display: 'none !important',
    },
);

export const StyledSlideContent = styled.div(
  {
    display: 'flex',
    justifyContent: 'space-between',
    transition: 'transform 600ms ease',
  },
  (props: { swiping?: boolean }) =>
    props.swiping && {
      transition: 'none',
    },
);

export const StyledWrapperAutosizer = styled.div(
  {
    margin: '0 auto',
  },
  (props: { width: string }) => ({
    width: props.width,
  }),
);
