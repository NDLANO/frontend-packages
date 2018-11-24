/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import BEMHelper from 'react-bem-helper';
import { OneColumn, FilmFrontpage } from '@ndla/ui';

import { headerWithAccessToken, getToken } from '../apiFunctions';

import {
  allMovies,
  contentTypes,
  DOCUMENTARY_CONTENTTYPE_ID,
  MOVIE_CONTENTTYPE_ID,
  TVSERIES_CONTENTTYPE_ID,
  SHORTMOVIE_CONTENTTYPE_ID,
} from '../../dummydata/mockFilm';

const fetchData = ({ apiUrl, query }) => {
  return new Promise((resolve, reject) => {
    getToken().then(token => {
      fetch(`https://test.api.ndla.no/${apiUrl}${query}`, {
        method: 'GET',
        headers: headerWithAccessToken(token),
      }).then(res => {
        if (res.ok) {
          return resolve(res.json());
        }
        return res.json().then(json => reject(json));
      });
    });
  });
};

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

class NdlaFilmExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      highlightedMovies: [],
      movieThemes: [],
      loading: true,
    };
  }

  componentDidMount() {
    fetchData({ apiUrl: 'taxonomy/v1/resource-types', query: '' }).then(
      result => {
        console.log(result);
      },
    );
    const contextFilters = ['urn:resourcetype:SourceMaterial'];
    const languageFilter = ['nb'];
    fetchData({
      apiUrl: 'search-api/v1/search',
      query: `?contextFilters=${contextFilters.toString(
        ',',
      )}&languageFilter=${languageFilter.toString(',')}&page=1&page-size=100`,
    }).then(results => {
      const highlightedMoviesIds = [13, 2, 3, 4, 6];
      const highlightedMovies = highlightedMoviesIds
        .map(id => results.results.find(result => result.id === id))
        .filter(foundMovie => foundMovie);

      const useThemes = [
        {
          name: 'Mest sett',
          movieIds: [1, 2, 6, 7, 10, 12],
        },
        {
          name: 'Mest sett',
          movieIds: [80, 90, 100],
        },
        {
          name: 'Mest sett',
          movieIds: [4, 5, 6, 7, 8],
        },
      ];
      const movieThemes = useThemes.map(theme => ({
        name: theme.name,
        movies: theme.movieIds
          .map(id => results.results.find(result => result.id === id))
          .filter(foundMovie => foundMovie),
      }));

      this.setState({
        movieThemes,
        highlightedMovies,
        movies: results.results,
      });
    });
  }

  render() {
    const { movieThemes, highlightedMovies, movies } = this.state;
    console.log('ex,', movies);
    return (
      <FilmFrontpage
        highlighted={highlightedMovies}
        themes={movieThemes}
        allMovies={movies}
      />
    );
  }
}

export default NdlaFilmExample;
