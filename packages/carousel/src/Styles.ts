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

type SlideProps = {
  swiping?: boolean;
};
export const StyledSlideContent = styled.div<SlideProps>(
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

type WrapperProps = {
  width: string;
};
export const StyledWrapperAutosizer = styled.div<WrapperProps>(
  {
    margin: '0 auto',
  },
  (props: { width: string }) => ({
    width: props.width,
  }),
);
