/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types'
import BEMHelper from 'react-bem-helper';
import moment from 'moment';
import { Icon } from '../../src';

const classes = new BEMHelper({
  name: 'article',
  prefix: 'c-',
});

const AuthorsList = ({ authors }) => <span {...classes('authors')}><Icon.User /> {authors.map(author => author.name).join(', ')}</span>;

AuthorsList.propTypes = {
  authors: PropTypes.array,
};

const LastUpdated = ({ date }) => <span {...classes('date')}><Icon.Time /> Sist oppdatert: {moment(date).format('DD/MM/YYYY')}</span>;

LastUpdated.propTypes = {
  date: PropTypes.string,
};

const ArticleByline = ({ article }) => {
  if (!article) {
    return null;
  }

  return (
    <section {...classes('byline')}>
      {article.copyright.authors && <AuthorsList authors={article.copyright.authors} />} –
      <LastUpdated date={article.updated} />
    </section>
  );
};

ArticleByline.propTypes = {
  article: PropTypes.object,
};

export default ArticleByline;
