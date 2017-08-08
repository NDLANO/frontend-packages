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
import moment from 'moment';
import { User, Time } from 'ndla-ui/icons';
import LicenseExample from './LicenseExample';

const classes = new BEMHelper({
  name: 'article-byline',
  prefix: 'c-',
});

const AuthorsList = ({ authors }) =>
  <span {...classes('authors')}>
    <span {...classes('icon')}>
      <User />
    </span>{' '}
    {authors.map(author => author.name).join(', ')}
  </span>;

AuthorsList.propTypes = {
  authors: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string.isRequired }),
  ),
};

const LastUpdated = ({ date }) =>
  <span {...classes('date')}>
    <span {...classes('icon')}>
      <Time />
    </span>{' '}
    Sist oppdatert: {moment(date).format('DD/MM/YYYY')}
  </span>;

LastUpdated.propTypes = {
  date: PropTypes.string,
};

const ArticleByline = ({ article }) => {
  if (!article) {
    return null;
  }

  return (
    <div>
      <section {...classes()}>
        <span {...classes('flex')}>
          {article.copyright.authors &&
            <AuthorsList authors={article.copyright.authors} />}
          <LastUpdated date={article.updated} />
          <LicenseExample />
        </span>
      </section>
    </div>
  );
};

ArticleByline.propTypes = {
  article: PropTypes.shape({
    copyright: PropTypes.shape({
      authors: PropTypes.arrayOf(
        PropTypes.shape({ name: PropTypes.string.isRequired }),
      ),
    }),
  }),
};

export default ArticleByline;
