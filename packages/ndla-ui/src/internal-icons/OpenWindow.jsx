/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

const OpenWindow = ({ className }) =>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    className={className}>
    <path d="M 7 7 C 5.3 7 4 8.3 4 10 L 4 38 L 6 36 L 6 15 L 44 15 L 44 40 C 44 40.6 43.6 41 43 41 L 11 41 L 9 43 L 43 43 C 44.7 43 46 41.7 46 40 L 46 10 C 46 8.3 44.7 7 43 7 L 7 7 z M 7 9 L 43 9 C 43.6 9 44 9.4 44 10 L 44 13 L 6 13 L 6 10 C 6 9.4 6.4 9 7 9 z M 8 10 C 7.4477153 10 7 10.447715 7 11 C 7 11.552285 7.4477153 12 8 12 C 8.5522847 12 9 11.552285 9 11 C 9 10.447715 8.5522847 10 8 10 z M 11 10 C 10.447715 10 10 10.447715 10 11 C 10 11.552285 10.447715 12 11 12 C 11.552285 12 12 11.552285 12 11 C 12 10.447715 11.552285 10 11 10 z M 14 10 C 13.447715 10 13 10.447715 13 11 C 13 11.552285 13.447715 12 14 12 C 14.552285 12 15 11.552285 15 11 C 15 10.447715 14.552285 10 14 10 z M 11 24 L 11 26 L 19.59375 26 L 4.09375 41.5 L 5.5 42.90625 L 21 27.40625 L 21 36 L 23 36 L 23 25 L 23 24 L 22 24 L 11 24 z" />
  </svg>;

OpenWindow.propTypes = {
  className: PropTypes.string.isRequired,
};

export default OpenWindow;
