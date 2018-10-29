/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';
import { spacing } from 'ndla-core';

const FormSplitterCSS = css`
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

const FormSplitter = ({ children }) => (
  <div className={FormSplitterCSS}>{children}</div>
);

FormSplitter.propTypes = {
  children: PropTypes.node,
};

export default FormSplitter;
