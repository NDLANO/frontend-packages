/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

const Heading1 = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="15"
    viewBox="0 0 21 15"
    className={className}>
    <path
      fillRule="evenodd"
      d="M.2 15h.704V7.564h8.14V15h.704V.48h-.704v6.468H.904V.48H.2V15zm13.64 0h7.128v-.616h-3.124V.92h-.572c-.616.352-1.496.66-2.596.836v.484h2.508v12.144H13.84V15z"
    />
  </svg>
);

Heading1.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Heading1;
