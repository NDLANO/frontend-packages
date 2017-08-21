/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

const Ingress = ({ className }) =>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="24"
    viewBox="0 0 28 24"
    className={className}>
    <path
      fillRule="evenodd"
      d="M.133 23h1.088V.56H.133V23zm7.752 0h1.02V10.556c2.108-2.176 3.604-3.264 5.644-3.264 2.788 0 3.944 1.768 3.944 5.372V23h1.02V12.528c0-4.216-1.564-6.188-4.896-6.188-2.244 0-3.944 1.292-5.644 2.992h-.068l-.136-2.584h-.884V23zm18.156.408c.612 0 1.224-.476 1.224-1.292 0-.884-.612-1.36-1.224-1.36s-1.224.476-1.224 1.36c0 .816.612 1.292 1.224 1.292z"
    />
  </svg>;

Ingress.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Ingress;
