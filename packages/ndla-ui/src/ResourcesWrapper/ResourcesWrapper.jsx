/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

export const classes = new BEMHelper({
  name: 'resources',
  prefix: 'c-',
});

const ResourcesWrapper = ({ children, header, subjectPage, id }) => (
  <section {...classes('', { subjectPage })} id={id}>
    {header}
    <div {...classes('content')}>{children}</div>
  </section>
);

ResourcesWrapper.propTypes = {
  header: PropTypes.node,
  children: PropTypes.node.isRequired,
  subjectPage: PropTypes.bool,
  id: PropTypes.string,
};

ResourcesWrapper.defaultProps = {
  subjectPage: false,
};

export default ResourcesWrapper;
