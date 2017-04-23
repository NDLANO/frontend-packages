/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

const Grid = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" className={className}>
    <path d="M 3 1 C 1.9 1 1 1.9 1 3 L 1 5 C 1 6.1 1.9 7 3 7 L 5 7 C 6.1 7 7 6.1 7 5 L 7 3 C 7 1.9 6.1 1 5 1 L 3 1 z M 12 1 C 10.9 1 10 1.9 10 3 L 10 5 C 10 6.1 10.9 7 12 7 L 14 7 C 15.1 7 16 6.1 16 5 L 16 3 C 16 1.9 15.1 1 14 1 L 12 1 z M 21 1 C 19.9 1 19 1.9 19 3 L 19 5 C 19 6.1 19.9 7 21 7 L 23 7 C 24.1 7 25 6.1 25 5 L 25 3 C 25 1.9 24.1 1 23 1 L 21 1 z M 3 10 C 1.9 10 1 10.9 1 12 L 1 14 C 1 15.1 1.9 16 3 16 L 5 16 C 6.1 16 7 15.1 7 14 L 7 12 C 7 10.9 6.1 10 5 10 L 3 10 z M 12 10 C 10.9 10 10 10.9 10 12 L 10 14 C 10 15.1 10.9 16 12 16 L 14 16 C 15.1 16 16 15.1 16 14 L 16 12 C 16 10.9 15.1 10 14 10 L 12 10 z M 21 10 C 19.9 10 19 10.9 19 12 L 19 14 C 19 15.1 19.9 16 21 16 L 23 16 C 24.1 16 25 15.1 25 14 L 25 12 C 25 10.9 24.1 10 23 10 L 21 10 z M 3 19 C 1.9 19 1 19.9 1 21 L 1 23 C 1 24.1 1.9 25 3 25 L 5 25 C 6.1 25 7 24.1 7 23 L 7 21 C 7 19.9 6.1 19 5 19 L 3 19 z M 12 19 C 10.9 19 10 19.9 10 21 L 10 23 C 10 24.1 10.9 25 12 25 L 14 25 C 15.1 25 16 24.1 16 23 L 16 21 C 16 19.9 15.1 19 14 19 L 12 19 z M 21 19 C 19.9 19 19 19.9 19 21 L 19 23 C 19 24.1 19.9 25 21 25 L 23 25 C 24.1 25 25 24.1 25 23 L 25 21 C 25 19.9 24.1 19 23 19 L 21 19 z" />
  </svg>
);

Grid.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Grid;
