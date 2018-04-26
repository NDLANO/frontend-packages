/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

const classes = new BEMHelper('c-table');

const Table = ({ children, ...rest }) => (
  <div {...classes('wrapper')}>
    <div {...classes('left-shadow')} />
    <table {...classes({ extra: ['o-table'] })} {...rest}>
      {children}
    </table>
    <div {...classes('right-shadow')} />
  </div>
);

Table.propTypes = {
  children: PropTypes.node,
};

export default Table;
