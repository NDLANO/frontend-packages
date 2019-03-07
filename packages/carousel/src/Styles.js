/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled, { css } from 'react-emotion';
import { spacing, breakpoints, mq } from '@ndla/core';

export const slideWrapperCSS = css`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

export const StyledButton = styled.button`
  ${props =>
    !props.customClass &&
    css`
      ${mq.range({ until: breakpoints.tablet })} {
        display: none;
      }
      display: flex;
      background: #091a2a80;
      border: 0;
      outline: 0;
      bottom: 0;
      top: 0;
      align-items: center;
      justify-content: center;
      .c-icon {
        fill: #fff;
        opacity: 0;
        width: ${spacing.spacingUnit * 3}px;
        height: ${spacing.spacingUnit * 3}px;
        transition: transform 200ms ease, opacity 200ms ease;
      }
      &:focus {
        .c-icon {
          opacity: 0.7;
          transform: translate(0, -${spacing.medium});
        }
      }
      &:hover {
        .c-icon {
          opacity: 1;
          transform: translate(0, -${spacing.medium});
        }
      }
    `}
  ${props =>
    !props.customClass &&
    props.prev &&
    css`
      .c-icon {
        opacity: 0.7;
        transform: translate(-${spacing.xsmall}, -${spacing.medium});
      }
    `}
  ${props =>
    !props.customClass &&
    props.next &&
    css`
      .c-icon {
        opacity: 0.7;
        transform: translate(${spacing.xsmall}, -${spacing.medium});
      }
    `}
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
