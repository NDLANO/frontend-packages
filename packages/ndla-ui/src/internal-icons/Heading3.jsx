/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

const Heading3 = ({ className }) =>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="16"
    viewBox="0 0 22 16"
    className={className}>
    <path
      fillRule="evenodd"
      d="M.2 15h.704V7.564h8.14V15h.704V.48h-.704v6.468H.904V.48H.2V15zm16.808.264c2.376 0 4.18-1.54 4.18-3.96 0-2.024-1.496-3.344-3.256-3.696V7.52c1.54-.506 2.728-1.628 2.728-3.52 0-2.112-1.628-3.344-3.696-3.344-1.628 0-2.816.792-3.74 1.716l.44.484c.792-.88 1.98-1.584 3.3-1.584 1.804 0 2.992 1.1 2.992 2.772 0 1.76-1.188 3.212-4.532 3.212v.66c3.564 0 5.06 1.408 5.06 3.432 0 1.98-1.452 3.3-3.432 3.3-2.024 0-3.168-.924-4.004-1.848l-.44.484c.88.924 2.156 1.98 4.4 1.98z"
    />
  </svg>;

Heading3.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Heading3;
