/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ className }) =>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1"
    width="26"
    height="26"
    viewBox="0 0 26 26"
    className={className}>
    <path d="M 4 1 L 4 19 C 7.4 19 10 18.30625 12 19.90625 L 12 2.8125 C 10 1.0125 7.4 1 4 1 z M 22 1 C 18.6 1 16 1.0125 14 2.8125 L 14 19.90625 C 16 18.30625 18.6 19 22 19 L 22 1 z M 1 4 C 0.4 4 0 4.4 0 5 L 0 23 C 0 23.6 0.4 24 1 24 L 9.09375 24 C 10.09375 24 11.4 25.90625 13 25.90625 C 14.6 25.90625 15.90625 24 16.90625 24 L 25 24 C 25.6 24 26 23.6 26 23 L 26 5 C 26 4.4 25.6 4 25 4 L 24 4 L 24 19 C 24 20.5 23.5 21 22 21 L 17.6875 21 C 15.9875 21 15.2875 21.09375 14.6875 22.09375 C 14.2875 22.69375 13.7 23 13 23 C 12.3 23 11.7125 22.69375 11.3125 22.09375 C 10.7125 21.09375 9.9125 21 8.3125 21 L 4 21 C 2.5 21 2 20.4 2 19 L 2 4 L 1 4 z" />
  </svg>;

Book.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Book;
