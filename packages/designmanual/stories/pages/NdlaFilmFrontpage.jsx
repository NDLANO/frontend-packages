/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import BEMHelper from 'react-bem-helper';
import { OneColumn, FilmFrontpage } from '@ndla/ui';

import {
  allMovies,
  contentTypes,
  DOCUMENTARY_CONTENTTYPE_ID,
  MOVIE_CONTENTTYPE_ID,
  TVSERIES_CONTENTTYPE_ID,
  SHORTMOVIE_CONTENTTYPE_ID,
} from '../../dummydata/mockFilm';

const highlightedIds = [
  'adjo',
  'gullkysten',
  '12ye',
  'KampenOmTungtvannet',
  'Halvbroren',
];

const highlighted = allMovies.filter(movie =>
  highlightedIds.includes(movie.id),
);

const themes = [
  {
    title: 'Mest sett',
    movies: allMovies,
  },
  {
    title: 'Nyeste',
    movies: allMovies,
  },
  {
    title: 'Tema',
    movies: allMovies,
  },
];

console.log(highlighted);
console.log(allMovies);

export default () => (
  <FilmFrontpage highlighted={highlighted} themes={themes} />
);
