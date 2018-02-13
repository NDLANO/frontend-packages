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
import { Time } from 'ndla-icons/common';
import AuthorsAndLicense from './ArticleAuthorsAndLicense';

const classes = new BEMHelper({
  name: 'article-byline',
  prefix: 'c-',
});

const ArticleByline = ({ authors, license, messages, updated, children }) => (
  <div {...classes()}>
    <AuthorsAndLicense license={license} authors={authors} />
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
  license: PropTypes.shape({
    abbreviation: PropTypes.string.isRequired,
  }).isRequired,
  messages: PropTypes.shape({
    lastUpdated: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.node,
};

export default ArticleByline;
