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

export const StyledButton = styled.button`
  position: absolute;
  z-index: 1;
  ${props =>
    props.prev &&
    css`
      left: ${props.arrowOffset}px;
    `};
  ${props =>
    props.next &&
    css`
      right: ${props.arrowOffset}px;
    `};
  ${props =>
    props.dontShow &&
    css`
      display: none !important;
    `}
`;

export const StyledSlideContent = styled.div`
  display: flex;
  justify-content: space-between;
  transition: ${props => (props.swiping ? 'none' : 'transform 600ms ease')};
`;

export const StyledWrapperAutosizer = styled.div`
  margin: 0 auto;
  width: ${props => props.wrapperWidth};
`;
