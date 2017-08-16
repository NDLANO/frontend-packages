/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

const Italic = ({ className }) =>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    className={className}>
    <path d="M28 2v2h-4l-10 24h4v2h-14v-2h4l10-24h-4v-2z" />
  </svg>;

Italic.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Italic;
