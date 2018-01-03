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

import Button from '../button/Button';

const toggleFactBox = event => {
  const button = event.target;
  const aside = button.previousSibling.parentNode;
  aside.classList.toggle('expanded');
};

const classes = new BEMHelper({
  name: 'factbox',
  prefix: 'c-',
});

const FactBox = ({ children }) => (
  <aside {...classes()}>
    <div {...classes('content')}>{children}</div>
    <Button {...classes('button')} onClick={toggleFactBox} />
  </aside>
);

FactBox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FactBox;
