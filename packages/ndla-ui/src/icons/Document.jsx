/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { PropTypes } from 'react';

const Document = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className={className}>
    <path d="M30.4,2H7v46h36V14.6L30.4,2z M15,28h16v2H15V28z M35,36H15v-2h20V36z M35,24H15v-2h20V24z M30,15V4.4L40.6,15H30z" />
  </svg>
);

Document.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Document;
