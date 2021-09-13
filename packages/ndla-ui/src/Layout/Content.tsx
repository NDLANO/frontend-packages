/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';

interface Props {
  children: ReactNode;
}

export const Content = ({ children }: Props) => <div className="o-content">{children}</div>;

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
