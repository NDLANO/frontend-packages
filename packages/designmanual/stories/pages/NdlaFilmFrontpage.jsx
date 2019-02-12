/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FilmFrontpage } from '@ndla/ui';

import {
  mockAllMovies,
  mockHighlightedMovies,
  movieThemes,
  mockMovieTopics,
  mockMovieResourceTypes,
} from '../../dummydata';
import Poster from '../../images/filmposter-aboutNDLA.png';

class NdlaFilmExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesByType: [],
      fetchingMoviesByType: false,
    };
    this.simulateLoadingTimer = null;
    this.onSelectedMovieByType = this.onSelectedMovieByType.bind(this);
  }

  onSelectedMovieByType(resourceId) {
    // Simulate fetching movies..
    clearInterval(this.simulateLoadingTimer);
    this.setState(
      {
        fetchingMoviesByType: true,
      },
      () => {
        this.simulateLoadingTimer = setTimeout(() => {
          this.setState({
            fetchingMoviesByType: false,
            moviesByType: mockAllMovies.filter(
              movie => movie.movieTypes[resourceId],
            ),
          });
        }, 500);
      },
    );
  }

  render() {
    const { moviesByType, fetchingMoviesByType } = this.state;

    return (
      <FilmFrontpage
        highlighted={mockHighlightedMovies}
        themes={movieThemes}
        moviesByType={moviesByType}
        topics={mockMovieTopics}
        resourceTypes={mockMovieResourceTypes}
        onSelectedMovieByType={this.onSelectedMovieByType}
        aboutNDLAVideo={<img src={Poster} alt="example of video" />}
        fetchingMoviesByType={fetchingMoviesByType}
        language="nb"
      />
    );
  }
}

NdlaFilmExample.propTypes = {
  editor: PropTypes.bool,
};

export default NdlaFilmExample;
