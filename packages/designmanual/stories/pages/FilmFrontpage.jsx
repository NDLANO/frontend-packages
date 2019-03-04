/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';
import { spacing } from '@ndla/core';

import { injectT } from '@ndla/i18n';
import {
  FilmSlideshow,
  MovieGrid,
  AboutNdlaFilm,
  FilmMovieSearch,
  FilmMovieList,
} from '@ndla/ui';

const ARIA_FILMCATEGORY_ID = 'movieCategoriesId';

class FilmFrontpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resourceTypeSelected: null,
    };
    this.onChangeResourceType = this.onChangeResourceType.bind(this);
    this.movieListRef = React.createRef();
  }

  onChangeResourceType(resourceTypeSelected) {
    const loadingPlaceholderHeight = `${
      this.movieListRef.current.getBoundingClientRect().height
    }px`;

    if (resourceTypeSelected) {
      this.props.onSelectedMovieByType(resourceTypeSelected);
    }

    this.setState({
      resourceTypeSelected,
      loadingPlaceholderHeight,
    });
  }

  render() {
    const {
      highlighted,
      themes,
      resourceTypes,
      topics,
      aboutNDLAVideo,
      moviesByType,
      fetchingMoviesByType,
      moreAboutNdlaFilm,
      language,
      t,
    } = this.props;
    const { resourceTypeSelected, loadingPlaceholderHeight } = this.state;

    const resourceTypeName =
      resourceTypeSelected &&
      resourceTypes.find(
        resourceType => resourceType.id === resourceTypeSelected,
      );

    return (
      <div
        css={css`
          background: #091a2a;
          padding-bottom: ${spacing.large};
        `}>
        <FilmSlideshow slideshow={highlighted} />
        <FilmMovieSearch
          ariaControlId={ARIA_FILMCATEGORY_ID}
          topics={topics}
          resourceTypes={resourceTypes}
          resourceTypeSelected={resourceTypeName}
          onChangeResourceType={this.onChangeResourceType}
        />
        <div id={ARIA_FILMCATEGORY_ID} ref={this.movieListRef}>
          {resourceTypeSelected ? (
            <MovieGrid
              {...{
                resourceTypeName,
                fetchingMoviesByType,
                moviesByType,
                resourceTypes,
                loadingPlaceholderHeight,
              }}
            />
          ) : (
            themes.map(theme => (
              <FilmMovieList
                key={theme.name[language]}
                name={theme.name[language]}
                movies={theme.movies}
                slideForwardsLabel={t('ndlaFilm.slideForwardsLabel')}
                slideBackwardsLabel={t('ndlaFilm.slideBackwardsLabel')}
                resourceTypes={resourceTypes}
              />
            ))
          )}
        </div>
        <AboutNdlaFilm
          aboutNDLAVideo={aboutNDLAVideo}
          moreAboutNdlaFilm={moreAboutNdlaFilm}
        />
      </div>
    );
  }
}

FilmFrontpage.propTypes = {
  fetchingMoviesByType: PropTypes.bool,
  moviesByType: PropTypes.arrayOf(PropTypes.object),
  highlighted: PropTypes.arrayOf(PropTypes.object),
  themes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      movies: PropTypes.arrayOf(PropTypes.object),
    }),
  ),
  topics: PropTypes.arrayOf(PropTypes.object),
  resourceTypes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.id,
    }),
  ),
  onSelectedMovieByType: PropTypes.func.isRequired,
  aboutNDLAVideo: PropTypes.node.isRequired,
  language: PropTypes.oneOf(['nb', 'nn', 'en']).isRequired,
  t: PropTypes.func.isRequired,
};

FilmFrontpage.defaultProps = {
  moviesByType: [],
  highlighted: [],
  themes: [],
  resourceTypes: [],
  topics: [],
};

export default injectT(FilmFrontpage);
