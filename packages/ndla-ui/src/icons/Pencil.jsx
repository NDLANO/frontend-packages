/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

const Pencil = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" className={className}>
    <path d="M 42.90625 2.90625 C 41.80125 2.90625 40.769 3.32475 40 4.09375 L 39.1875 4.90625 L 39.15625 4.90625 A 1.0001 1.0001 0 0 0 38.5 4.8125 A 1.0001 1.0001 0 0 0 38 5.09375 L 34 9.09375 L 6.59375 36.5 A 1.0001 1.0001 0 0 0 6.5625 36.5625 A 1.0001 1.0001 0 0 0 6.375 36.84375 L 3.0625 45.65625 A 1.0001 1.0001 0 0 0 4.34375 46.9375 L 13.15625 43.625 A 1.0001 1.0001 0 0 0 13.4375 43.4375 C 13.4565 43.4215 13.482 43.42325 13.5 43.40625 L 40.90625 16 L 44.90625 12 A 1.0001 1.0001 0 0 0 45 10.71875 L 45.8125 9.90625 C 47.4165 8.30325 47.4165 5.69675 45.8125 4.09375 C 45.0445 3.32475 44.01125 2.90625 42.90625 2.90625 z M 38.6875 7.1875 L 42.8125 11.3125 L 39.5 14.59375 L 35.40625 10.5 L 38.6875 7.1875 z M 8.0625 38.0625 L 9 39 L 11 39 L 11 41 L 11.9375 41.9375 L 7.09375 43.78125 L 6.21875 42.90625 L 8.0625 38.0625 z" />
  </svg>
);

Pencil.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Pencil;
