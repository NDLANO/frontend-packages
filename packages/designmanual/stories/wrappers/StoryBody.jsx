/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { OneColumn, LayoutItem } from 'ndla-ui';

const StoryBody = ({ children, layout }) => (
  <OneColumn>
    <LayoutItem layout={layout}>
      <article className="c-article c-article--clean">{children}</article>
    </LayoutItem>
  </OneColumn>
);

StoryBody.propTypes = {
  children: PropTypes.node,
  layout: PropTypes.string,
};

StoryBody.defaultProps = {
  layout: 'center',
};

export default StoryBody;
