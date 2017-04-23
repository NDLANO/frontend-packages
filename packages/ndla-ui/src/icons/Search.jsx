/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50" height="50" className={className}>
    <path d="M 21 3 C 11.6 3 4 10.6 4 20 C 4 29.4 11.6 37 21 37 C 24.354126 37 27.461484 36.015541 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.680155 27.423093 38 23.878362 38 20 C 38 10.6 30.4 3 21 3 z M 21 7 C 28.2 7 34 12.8 34 20 C 34 27.2 28.2 33 21 33 C 13.8 33 8 27.2 8 20 C 8 12.8 13.8 7 21 7 z" />
  </svg>
);

Search.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Search;
