/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import BEMHelper from 'react-bem-helper';
import SafeLink from '@ndla/safelink';
import { useTranslation } from 'react-i18next';
import CategorySelect from './CategorySelect';
import { MovieResourceType } from './types';
import { OneColumn } from '..';

const classes = new BEMHelper({
  name: 'film-moviesearch',
  prefix: 'c-',
});

const classesMovieList = new BEMHelper({
  name: 'film-movielist',
  prefix: 'c-',
});

interface Props {
  topics?: { id: string; path: string; name: string }[];
  onChangeResourceType: (resourceType?: string) => void;
  resourceTypeSelected?: MovieResourceType;
  resourceTypes: MovieResourceType[];
  ariaControlId: string;
}

const FilmMovieSearch = ({
  topics = [],
  onChangeResourceType,
  resourceTypes,
  resourceTypeSelected,
  ariaControlId,
}: Props) => {
  const { t } = useTranslation();
  return (
    <div {...classes('')}>
      <OneColumn>
        <div {...classes('topic-navigation')}>
          <h2 {...classesMovieList('heading', '', 'u-12/12 u-4/12@tablet')}>{t('ndlaFilm.subjectsInMovies')}:</h2>
          <nav className="u-12/12 u-8/12@tablet">
            <ul>
              {topics.map((topic) => (
                <li key={topic.id}>
                  <SafeLink to={topic.path} key={topic.id}>
                    <span>{topic.name}</span>
                  </SafeLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <CategorySelect
          onChangeResourceType={onChangeResourceType}
          resourceTypes={resourceTypes}
          resourceTypeSelected={resourceTypeSelected}
          ariaControlId={ariaControlId}
        />
      </OneColumn>
    </div>
  );
};

export default FilmMovieSearch;
