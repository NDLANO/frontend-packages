/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode } from 'react';
import { css } from '@emotion/react';
import { fonts, colors, spacing, mq, breakpoints } from '@ndla/core';

const headerStyles = css`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  h1 {
    margin: 0;
    flex-grow: 1;
    font-weight: ${fonts.weight.bold};
    ${fonts.sizes('22px', 1.2)};
    color: ${colors.text.primary};
    small {
      padding-left: ${spacing.small};
      margin-left: ${spacing.xsmall};
      border-left: 1px solid ${colors.brand.greyLight};
      ${fonts.sizes('20px', 1.2)};
      font-weight: ${fonts.weight.normal};
    }
  }
  hr {
    flex-basis: 100%;
  }
  padding: ${spacing.normal};
  @supports (-webkit-overflow-scrolling: touch) {
    padding-top: ${spacing.large};
  }
  &.no-bottom-padding {
    padding-bottom: 0;
  }
  + .modal-body {
    padding-top: 0;
  }
  hr {
    display: block;
    height: 2px;
    background-color: ${colors.brand.primary};
  }
  &.white {
    background: #fff;
    + .modal-body {
      padding-top: ${spacing.normal};
    }
  }
  &.grey {
    background: ${colors.brand.greyLightest};
    + .modal-body {
      padding-top: ${spacing.normal};
    }
  }
  &.grey-dark {
    background: ${colors.brand.greyLighter};
    + .modal-body {
      padding-top: ${spacing.normal};
    }
  }
  &.blue {
    background: ${colors.brand.lighter};
    + .modal-body {
      padding-top: ${spacing.normal};
    }
  }
  &.left-align {
    justify-content: flex-start;
  }
  &.menu {
    padding: ${spacing.small} ${spacing.large};
    justify-content: space-between;
    border-bottom: 1px solid ${colors.brand.greyLighter};
    ${mq.range({ until: breakpoints.desktop })} {
      padding: ${spacing.small} ${spacing.normal};
      .c-logo {
        display: none;
      }
    }
  }
`;

interface Props {
  children?: ReactNode;
  modifier?: string | string[];
}
const ModalHeader = ({ children, modifier }: Props) => (
  <div
    data-cy="modal-header"
    css={headerStyles}
    className={`modal-header ${Array.isArray(modifier) ? modifier.join(' ') : modifier}`}
  >
    {children}
  </div>
);

export default ModalHeader;
