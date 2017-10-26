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
import { Time, User } from '../icons';

const classes = new BEMHelper({
  name: 'article-byline',
  prefix: 'c-',
});

const ArticleByline = ({ authors, license, messages, updated, children }) => (
  <div {...classes()}>
    <span {...classes('flex')}>
      <span {...classes('icon')}>
        <User />
      </span>
      <span {...classes('authors')}>
        {messages.writtenBy}{' '}
        {authors && authors.map(author => author.name).join(', ')}. <br /> ({license.toUpperCase()})
      </span>
    </span>
    <span {...classes('flex')}>
      <span {...classes('icon')}>
        <Time />
      </span>
      <span {...classes('date')}>
        {messages.lastUpdated} {updated}
      </span>
      {children}
    </span>
  </div>
);

ArticleByline.propTypes = {
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  updated: PropTypes.string.isRequired,
  license: PropTypes.string.isRequired,
  messages: PropTypes.shape({
    writtenBy: PropTypes.string.isRequired,
    lastUpdated: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.node,
};

export default ArticleByline;
