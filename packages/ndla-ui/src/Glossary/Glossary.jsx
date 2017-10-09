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
import LicenseByline from '../LicenseByline';

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
  messages,
  license,
  children,
}) => {
  const licenseRights = getLicenseByAbbreviation(license).rights;
  return (
    <span {...classes('item')}>
      <button aria-label={messages.ariaLabel} {...classes('link')}>
        {children}
      </button>
      <span
        aria-hidden="true"
        role="dialog"
        aria-labelledby={id}
        aria-describedby={id}
        {...classes('popup')}>
        <button {...classes('close', 'u-close')}>{messages.close}</button>
        <span {...classes('title', undefined, 'u-heading3')}>{title}</span>
        <span {...classes('content')}>{content}</span>
        <span {...sourceClasses()}>
          {licenseRights.length > 0 && (
            <LicenseByline
              className="c-source-list__item"
              licenseRights={licenseRights}
            />
          )}
          {authors.map(author => (
            <span {...sourceClasses('item')} key={author}>
              {author}
            </span>
          ))}
          <span {...sourceClasses('item')} key={source}>
            {source}
          </span>
        </span>
      </span>
    </span>
  );
};

Glossary.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.string),
  source: PropTypes.string,
  content: PropTypes.string.isRequired,
  messages: PropTypes.shape({
    ariaLabel: PropTypes.string.isRequired,
    close: PropTypes.string.isRequired,
  }),
  license: PropTypes.string,
  children: PropTypes.string,
};

export default Glossary;
