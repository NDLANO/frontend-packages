/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

const Plus = ({ className }) =>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="33"
    height="33"
    viewBox="0 0 33 33"
    className={className}>
    <path d="M16.97 1h-.94v15.03H1v.94h15.03V32h.94V16.97H32v-.94H16.97z" />
  </svg>;

Plus.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Plus;
