/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { spacing } from '@ndla/core';

const FieldSplitterCSS = css`
  display: flex;
  > * {
    flex-grow: 1;
    flex-basis: 0;
    &:not(:first-child) {
      margin-left: ${spacing.small};
    }
  }
  &:only-child {
    > * {
      flex-basis: 1;
    }
  }
`;

const FieldSplitter = ({ children }) => (
  <div css={FieldSplitterCSS}>{children}</div>
);

FieldSplitter.propTypes = {
  children: PropTypes.node,
};

export default FieldSplitter;
