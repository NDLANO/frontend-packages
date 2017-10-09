/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

const Paragraph = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="27"
    height="4"
    viewBox="0 0 27 4"
    className={className}>
    <path
      fillRule="evenodd"
      d="M1.929 3.408c.612 0 1.224-.476 1.224-1.292 0-.884-.612-1.36-1.224-1.36S.705 1.232.705 2.116c0 .816.612 1.292 1.224 1.292zm11.492 0c.612 0 1.224-.476 1.224-1.292 0-.884-.612-1.36-1.224-1.36s-1.224.476-1.224 1.36c0 .816.612 1.292 1.224 1.292zm11.492 0c.612 0 1.224-.476 1.224-1.292 0-.884-.612-1.36-1.224-1.36s-1.224.476-1.224 1.36c0 .816.612 1.292 1.224 1.292z"
    />
  </svg>
);

Paragraph.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Paragraph;
