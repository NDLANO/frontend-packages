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
import { getLicenseByAbbreviation } from 'ndla-licenses';
import { ClickableLicenseByline } from '../index';

const classes = new BEMHelper({
  name: 'glossary-word',
  prefix: 'c-',
});
const sourceClasses = new BEMHelper({
  name: 'source-list',
  prefix: 'c-',
});

const Glossary = ({
  title,
  authors,
  source,
  content,
  id,
  ariaLabel,
  license,
  children,
}) =>
  <span {...classes('item')}>
    <button aria-label={ariaLabel} {...classes('link')}>
      {children}
    </button>
    <span
      aria-hidden="true"
      role="dialog"
      aria-labelledby={id}
      aria-describedby={id}
      {...classes('popup')}>
      <button {...classes('close', 'u-close')}>Lukk</button>
      <span {...classes('title', undefined, 'u-heading3')}>
        {title}
      </span>
      <span {...classes('content')}>
        {content}
      </span>
      <span {...sourceClasses()}>
        <ClickableLicenseByline
          className="c-source-list__item"
          noText
          license={getLicenseByAbbreviation(license).rights}
        />
        {authors.map(author =>
          <span {...sourceClasses('item')} key={author}>
            {author}
          </span>,
        )}
        <span {...sourceClasses('item')} key={source}>
          {source}
        </span>
      </span>
    </span>
  </span>;

Glossary.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  authors: PropTypes.arrayOf(PropTypes.string),
  source: PropTypes.string,
  content: PropTypes.string,
  ariaLabel: PropTypes.string,
  license: PropTypes.string,
  children: PropTypes.string,
};

export default Glossary;
