/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

const Time = ({ className }) =>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1"
    viewBox="0 0 24 24"
    className={className}>
    <path d="M 12 2 C 6.4666667 2 2 6.4666667 2 12 C 2 17.533333 6.4666667 22 12 22 C 17.533333 22 22 17.533333 22 12 C 22 6.4666667 17.533333 2 12 2 z M 12 4 C 16.466667 4 20 7.5333333 20 12 C 20 16.466667 16.466667 20 12 20 C 7.5333333 20 4 16.466667 4 12 C 4 7.5333333 7.5333333 4 12 4 z M 11 7 L 11 12 L 11 12.40625 L 11.28125 12.71875 L 14.28125 15.71875 L 15.71875 14.28125 L 13 11.5625 L 13 7 L 11 7 z" />
  </svg>;

Time.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Time;
