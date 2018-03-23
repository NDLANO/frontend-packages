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
import { Home } from 'ndla-icons/common';
import BreadcrumbItem from './BreadcrumbItem';

const classes = BEMHelper({
  name: 'breadcrumb',
  prefix: 'c-',
});

const Breadcrumb = ({ children, items }) => (
  <div {...classes()}>
    {children}
    <ol {...classes('list')}>
      {items.map((item, i) => (
        <BreadcrumbItem
          classes={classes}
          home={i === 0}
          key={uuid()}
          isCurrent={i === items.length - 1}
          to={item.to}>
          {i === 0 ? <Home className="c-icon--20" /> : item.name}
        </BreadcrumbItem>
      ))}
    </ol>
  </div>
);

Breadcrumb.propTypes = {
  children: PropTypes.node,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
};

export default Breadcrumb;
