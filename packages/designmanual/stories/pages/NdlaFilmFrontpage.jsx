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
      topics: [],
      movies: [],
      highlightedMovies: [],
      movieThemes: [],
      loading: true,
    };
  }

  async componentDidMount() {
    // Get this data from Firebase or something?
    const subjectId = 'urn:subject:14';
    const parentTopic = 'urn:topic:1:185588';
    const highlightedMoviesIds = [
      'topic:1:185993',
      'urn:topic:1:186323',
      'urn:topic:1:186347',
      'urn:topic:1:186446',
      'urn:topic:1:79218',
    ];
    const useThemes = [
      {
        name: 'Mest sett',
        movieIds: [
          'urn:topic:1:79218',
          'urn:topic:1:81818',
          'urn:topic:1:103870',
          'urn:topic:1:115982',
          'urn:topic:1:125903',
          'urn:topic:1:172557',
        ],
      },
      {
        name: 'Nyeste',
        movieIds: [
          'urn:topic:1:79218',
          'urn:topic:1:81818',
          'urn:topic:1:103870',
          'urn:topic:1:115982',
          'urn:topic:1:125903',
          'urn:topic:1:172557',
        ],
      },
      {
        name: 'Tema',
        movieIds: [
          'urn:topic:1:79218',
          'urn:topic:1:81818',
          'urn:topic:1:103870',
          'urn:topic:1:115982',
          'urn:topic:1:125903',
          'urn:topic:1:172557',
        ],
      },
    ];
    const resourceTypes = [
      { name: 'Dokumentarer', id: 'urn:resourcetype:movieAndClip' },
      { name: 'Spillefilmer', id: 'urn:resourcetype:featureFilm' },
      { name: 'Kort film', id: 'urn:resourcetype:shortFilm' },
      { name: 'Læringsressurser', id: 'urn:resourcetype:learningPath' },
    ];
    const languageFilter = ['nb'];

    const resourceTypesIds = resourceTypes
      .reduce((value, item) => `${value},${item.id}`, '')
      .substring(1);

    const resourceQuery = `?resource-types=${resourceTypesIds}&languageFilter=${languageFilter.toString(
      ',',
    )}&page=1&page-size=999&subjects=${subjectId}`;

    const topicQuery = `?context-types=topic-article&languageFilter=${languageFilter.toString(
      ',',
    )}&page=1&page-size=999&subjects=${subjectId}`;

    const [topics, allResources, allTopics] = await Promise.all([
      fetchData({
        apiUrl: `taxonomy/v1/subjects/${subjectId}/topics`,
        query: '?recursive=true',
      }),
      fetchData({
        apiUrl: 'search-api/v1/search',
        query: resourceQuery,
      }),
      fetchData({
        apiUrl: 'search-api/v1/search',
        query: topicQuery,
      }),
    ]);

    const resourceTypesId = resourceTypes.map(resourceType => resourceType.id);
    const validTopicIds = {};

    allResources.results.forEach(resource => {
      resource.contexts.forEach(context => {
        context.resourceTypes.forEach(resourceType => {
          if (resourceTypesId.includes(resourceType.id)) {
            const paths = context.path.split('/');
            const tmpId = `urn:${paths[paths.length - 2]}`;
            if (!validTopicIds[tmpId]) {
              validTopicIds[tmpId] = {};
            }
            validTopicIds[tmpId][resourceType.id] = true;
          }
        });
      });
    });

    const filteredTopics = allTopics.results
      .map(topic => {
        const context = topic.contexts.find(
          currentContext => validTopicIds[currentContext.id],
        );
        if (context) {
          return { ...topic, movieTypes: validTopicIds[context.id] };
        }
        return null;
      })
      .filter(topic => topic);

    const highlightedMovies = highlightedMoviesIds
      .map(id =>
        filteredTopics.find(topic =>
          topic.contexts.some(context => context.id === id),
        ),
      )
      .filter(foundMovie => foundMovie);

    const movieThemes = useThemes.map(theme => ({
      name: theme.name,
      movies: theme.movieIds
        .map(id =>
          filteredTopics.find(topic =>
            topic.contexts.some(context => context.id === id),
          ),
        )
        .filter(foundMovie => foundMovie),
    }));

    this.setState({
      movieThemes,
      highlightedMovies,
      movies: filteredTopics,
      topics: topics.filter(topic => topic.parent === parentTopic),
      resourceTypes,
    });
  }

  render() {
    const {
      movieThemes,
      highlightedMovies,
      movies,
      topics,
      resourceTypes,
    } = this.state;
    console.log(movies, resourceTypes);
    return (
      <FilmFrontpage
        highlighted={highlightedMovies}
        themes={movieThemes}
        allMovies={movies}
        topics={topics}
        resourceTypes={resourceTypes}
      />
    );
  }
}

export default NdlaFilmExample;
