/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

const Copy = ({ className }) =>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100"
    height="100"
    viewBox="0 0 50 50"
    className={className}>
    <path d="M 19 0 L 19 6 L 21 8 L 21 2 L 36 2 L 36 13 L 36 14 L 37 14 L 48 14 L 48 40 L 33 40 L 33 42 L 50 42 L 50 12.59375 L 37.40625 0 L 19 0 z M 38 3.40625 L 46.59375 12 L 38 12 L 38 3.40625 z M 0 8 L 0 9 L 0 49 L 0 50 L 1 50 L 30 50 L 31 50 L 31 49 L 31 21 L 31 20.59375 L 30.71875 20.28125 L 18.71875 8.28125 L 18.40625 8 L 18 8 L 1 8 L 0 8 z M 2 10 L 17 10 L 17 21 L 17 22 L 18 22 L 29 22 L 29 48 L 2 48 L 2 10 z M 19 11.4375 L 27.5625 20 L 19 20 L 19 11.4375 z" />
  </svg>;

Copy.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Copy;
