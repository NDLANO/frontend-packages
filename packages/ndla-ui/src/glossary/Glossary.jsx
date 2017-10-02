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

const classes = new BEMHelper({
  name: 'glossary-word',
  prefix: 'c-',
});
const sourceClasses = new BEMHelper({
  name: 'source-list',
  prefix: 'c-',
});

const Glossary = ({ title, authors, content, children }) =>
  <span {...classes('item')}>
    <button aria-haspopup {...classes('link')}>
      {children}
    </button>
    <span {...classes('popup')}>
      <button {...classes('close', 'u-close')}>Lukk</button>
      <span {...classes('title')}>
        {title}
      </span>
      <span {...classes('content')}>
        {content}
      </span>
      <span {...sourceClasses()}>
        {authors.map(author =>
          <span {...sourceClasses('item')} key={author}>
            {author}
          </span>,
        )}
      </span>
    </span>
  </span>;

Glossary.propTypes = {
  title: PropTypes.string,
  authors: PropTypes.arrayOf(PropTypes.string),
  content: PropTypes.string,
  children: PropTypes.string,
};

export default Glossary;
