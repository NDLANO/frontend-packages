/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

const Table = ({ className }) =>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    className={className}>
    <path d="M0 6v22h32v-22h-32zM12 20v-4h8v4h-8zM20 22v4h-8v-4h8zM20 10v4h-8v-4h8zM10 10v4h-8v-4h8zM2 16h8v4h-8v-4zM22 16h8v4h-8v-4zM22 14v-4h8v4h-8zM2 22h8v4h-8v-4zM22 26v-4h8v4h-8z" />
  </svg>;

Table.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Table;
