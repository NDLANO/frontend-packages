/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

const Cross = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    width="100%"
    height="100%"
    className={className}
  >
    <title>close</title>
    <path
      className="path1"
      d="M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z"
    />
  </svg>
);

Cross.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Cross;
