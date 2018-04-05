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

import Button from '../Button';

const toggleFactBox = event => {
  const button = event.target;
  const aside = button.previousSibling.parentNode;
  aside.classList.toggle('expanded');
};

const classes = new BEMHelper({
  name: 'factbox',
  prefix: 'c-',
});

const FactBox = ({ children, dangerouslySetInnerHTML }) => (
  <aside {...classes()}>
    <div
      {...classes('content')}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}>
      {children}
    </div>
    <Button {...classes('button')} onClick={toggleFactBox} />
  </aside>
);

FactBox.propTypes = {
  dangerouslySetInnerHTML: PropTypes.shape({
    __html: PropTypes.string.isRequired,
  }),
  children: PropTypes.node,
};

export default FactBox;
