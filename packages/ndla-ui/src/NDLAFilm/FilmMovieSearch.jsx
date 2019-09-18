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
import { OneColumn } from '@ndla/ui';
import SafeLink from '@ndla/safelink';
import { injectT } from '@ndla/i18n';
import CategorySelect from './CategorySelect';

import { topicShape } from './shapes';

const classes = new BEMHelper({
  name: 'film-moviesearch',
  prefix: 'c-',
});

const classesMovieList = new BEMHelper({
  name: 'film-movielist',
  prefix: 'c-',
});

const FilmMovieSearch = ({ topics, t, ...props }) => (
  <div {...classes('')}>
    <OneColumn>
      <div {...classes('topic-navigation')}>
        <h2 {...classesMovieList('heading', '', 'u-12/12 u-4/12@tablet')}>
          {t('ndlaFilm.subjectsInMovies')}:
        </h2>
        <nav className="u-12/12 u-8/12@tablet">
          <ul>
            {topics.map(topic => (
              <li key={topic.id}>
                <SafeLink to={`/subjects${topic.path}`} key={topic.id}>
                  <span>{topic.name}</span>
                </SafeLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <CategorySelect {...props} />
    </OneColumn>
  </div>
);

FilmMovieSearch.propTypes = {
  topics: PropTypes.arrayOf(topicShape),
  onChangeResourceType: PropTypes.func.isRequired,
  resourceTypeSelected: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
  }),
  ariaControlId: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
};

FilmMovieSearch.defaultProps = {
  topics: [],
};

export default injectT(FilmMovieSearch);
