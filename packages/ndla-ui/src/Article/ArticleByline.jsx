/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { Time, User } from 'ndla-icons/common';
import ToggleLicenseBox from '../ToggleLicenseBox';
import ArticleAuthorsPopup from './ArticleAuthorsPopup';
import Dialog from '../Dialog';
import SafeLink from '../common/SafeLink';

const classes = new BEMHelper({
  name: 'article-byline',
  prefix: 'c-',
});

const ArticleByline = ({
  authors,
  license,
  licenseBox,
  messages,
  updated,
  additional,
  children,
}) => (
  <div {...classes()}>
    {authors.length && (
      <span {...classes('flex')}>
        <span {...classes('icon')}>
          <User />
        </span>
        <span {...classes('authors')}>
          <ArticleAuthorsPopup
            authors={authors}
            messages={messages}
            licenseBox={licenseBox}
          />
          ({license.abbreviation})
        </span>
      </span>
    )}
    <span {...classes('flex')}>
      <span {...classes('icon')}>
        <Time />
      </span>
      <span {...classes('date')}>
        {messages.lastUpdated} {updated}
      </span>
      <span {...classes('additional')}>{additional}</span>
      {licenseBox && (
        <ToggleLicenseBox openTitle="Bruk innhold" closeTitle="Lukk boks">
          {licenseBox}
        </ToggleLicenseBox>
      )}
      {children}
    </span>
  </div>
);

ArticleByline.propTypes = {
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      phone: PropTypes.string,
      email: PropTypes.string,
      image: PropTypes.string,
      introduction: PropTypes.string,
      role: PropTypes.string.isRequired,
      urlContributions: PropTypes.string.isRequired,
      urlAuthor: PropTypes.string.isRequired,
      licenses: PropTypes.string.isRequired,
    }),
  ).isRequired,
  updated: PropTypes.string.isRequired,
  license: PropTypes.shape({
    rights: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  licenseBox: PropTypes.node,
  messages: PropTypes.shape({
    lastUpdated: PropTypes.string.isRequired,
    authorLabel: PropTypes.string.isRequired,
    authorDescription: PropTypes.string.isRequired,
  }).isRequired,
  additional: PropTypes.node,
  children: PropTypes.node,
};

export default ArticleByline;
