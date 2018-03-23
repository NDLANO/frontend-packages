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
import { uuid } from 'ndla-util';
import BreadcrumbItem from './BreadcrumbItem';

const classes = BEMHelper({
  name: 'breadcrumb-block',
  prefix: 'c-',
});

const BreadcrumbBlock = ({ children, items }) => (
  <div {...classes('')}>
    {children}
    <ol {...classes('list')}>
      {items.map((item, i) => (
        <BreadcrumbItem
          classes={classes}
          key={uuid()}
          isCurrent={i === items.length - 1}
          to={item.to}>
          {item.name}
        </BreadcrumbItem>
      ))}
    </ol>
  </div>
);

BreadcrumbBlock.propTypes = {
  children: PropTypes.node,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
};

export default BreadcrumbBlock;
