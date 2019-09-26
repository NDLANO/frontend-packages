/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import css from '@emotion/css';
import { spacing, breakpoints, mq, colors } from '@ndla/core';

const bodyStyles = css`
  &.slide-in-left {
    animation-name: fadeInLeft;
    animation-duration: 500ms;
  }
  padding: ${spacing.normal} ${spacing.normal} ${spacing.large}
    ${spacing.normal};
  &.no-padding {
    padding: 0 !important;
  }
  &.no-padding-buttom {
    padding-bottom: 0 !important;
  }
  &.no-side-padding-mobile {
    ${mq.range({ until: breakpoints.mobileWide })} {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
  }
  h2 {
    margin: ${spacing.large} 0 0;
    + p {
      margin-top: ${spacing.small} / 2;
    }
  }
  ol {
    padding: 0;
    > li {
      margin-left: ${spacing.large} + ${spacing.normal};
    }
  }
  hr {
    position: static;
    border: 0;
    height: 1px;
    background: ${colors.brand.tertiary};
    margin: 0;
    &:before {
      content: none;
    }
  }
  .c-tabs {
    margin-left: 0;
    margin-right: 0;
  }
  .c-medialist {
    padding-right: 0;
  }
  .react-tabs__tab-panel--selected {
    animation-name: fadeInLeft;
    animation-duration: 500ms;
  }
`;

const ModalBody = ({ children, modifier }) => (
  <div css={bodyStyles} className={`modal-body ${modifier}`}>
    {children}
  </div>
);

ModalBody.propTypes = {
  children: PropTypes.node,
  modifier: PropTypes.oneOfType([PropTypes.string, PropTypes.shape]),
};

export default ModalBody;
