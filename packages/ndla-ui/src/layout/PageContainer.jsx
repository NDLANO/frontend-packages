/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { PropTypes } from 'react';

export const PageContainer = ({ children }) => <div>{children}</div>;

PageContainer.propTypes = {
  children: PropTypes.node,
};

export default PageContainer;
