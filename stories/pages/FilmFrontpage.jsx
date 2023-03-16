/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { spacing, spacingUnit } from '@ndla/core';
import { CarouselAutosize } from '@ndla/carousel';
import { withTranslation } from 'react-i18next';
import {
  FilmSlideshow,
  MovieGrid,
  AboutNdlaFilm,
  FilmMovieSearch,
  FilmMovieList,
  AllMoviesAlphabetically,
} from '@ndla/ui';

const ARIA_FILMCATEGORY_ID = 'movieCategoriesId';

class FilmFrontpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resourceTypeSelected: null,
    };
    this.onChangeResourceType = this.onChangeResourceType.bind(this);
    this.movieListRef = createRef();
  }

  onChangeResourceType(resourceTypeSelected) {
    const loadingPlaceholderHeight = `${this.movieListRef.current.getBoundingClientRect().height}px`;

    if (resourceTypeSelected) {
      this.props.onSelectedMovieByType(resourceTypeSelected);
    }

    this.setState({
      resourceTypeSelected,
      loadingPlaceholderHeight,
    });
  }

  renderMovieGrid({ resourceTypeName }) {
    const { themes, resourceTypes, moviesByType, fetchingMoviesByType, resizeThumbnailImages, language, t } =
      this.props;
    const { resourceTypeSelected, loadingPlaceholderHeight } = this.state;
    return (
      <CarouselAutosize
        breakpoints={[
          {
            until: 'mobile',
            columnsPrSlide: 1,
            distanceBetweenItems: spacingUnit / 2,
            margin: spacingUnit,
            arrowOffset: 13,
          },
          {
            until: 'mobileWide',
            columnsPrSlide: 2,
            distanceBetweenItems: spacingUnit / 2,
            margin: spacingUnit,
            arrowOffset: 13,
          },
          {
            until: 'tabletWide',
            columnsPrSlide: 3,
            distanceBetweenItems: spacingUnit / 2,
            margin: spacingUnit,
            arrowOffset: 13,
          },
          {
            until: 'desktop',
            columnsPrSlide: 4,
            distanceBetweenItems: spacingUnit,
            margin: spacingUnit * 2,
            arrowOffset: 0,
          },
          {
            until: 'wide',
            columnsPrSlide: 4,
            distanceBetweenItems: spacingUnit,
            margin: spacingUnit * 2,
            arrowOffset: 0,
          },
          {
            until: 'ultraWide',
            columnsPrSlide: 4,
            distanceBetweenItems: spacingUnit,
            margin: spacingUnit * 3.5,
            arrowOffset: 0,
          },
          {
            columnsPrSlide: 6,
            distanceBetweenItems: spacingUnit,
            margin: spacingUnit * 3.5,
            arrowOffset: 0,
          },
        ]}
      >
        {(autoSizedProps) =>
          resourceTypeSelected ? (
            <MovieGrid
              autoSizedProps={autoSizedProps}
              {...{
                resourceTypeName,
                fetchingMoviesByType,
                moviesByType,
                resourceTypes,
                loadingPlaceholderHeight,
                resizeThumbnailImages,
              }}
            />
          ) : (
            themes.map((theme) => (
              <FilmMovieList
                key={theme.name[language]}
                name={theme.name[language]}
                movies={theme.movies}
                autoSizedProps={autoSizedProps}
                slideForwardsLabel={t('ndlaFilm.slideForwardsLabel')}
                slideBackwardsLabel={t('ndlaFilm.slideBackwardsLabel')}
                resourceTypes={resourceTypes}
                resizeThumbnailImages={resizeThumbnailImages}
              />
            ))
          )
        }
      </CarouselAutosize>
    );
  }

  render() {
    const { highlighted, resourceTypes, topics, aboutNDLAVideo, moreAboutNdlaFilm, showingAll, moviesByType, id } =
      this.props;

    const { resourceTypeSelected } = this.state;

    const resourceTypeName =
      resourceTypeSelected && resourceTypes.find((resourceType) => resourceType.id === resourceTypeSelected);

    return (
      <div
        id={id}
        css={css`
          background: #091a2a;
          padding-bottom: ${spacing.large};
        `}
      >
        <FilmSlideshow slideshow={highlighted} />
        <FilmMovieSearch
          ariaControlId={ARIA_FILMCATEGORY_ID}
          topics={topics}
          resourceTypes={resourceTypes}
          resourceTypeSelected={resourceTypeName}
          onChangeResourceType={this.onChangeResourceType}
        />
        <div
          id={ARIA_FILMCATEGORY_ID}
          ref={this.movieListRef}
          css={css`
            margin: ${spacingUnit * 3}px 0 ${spacingUnit * 4}px;
          `}
        >
          {showingAll ? <AllMoviesAlphabetically movies={moviesByType} /> : this.renderMovieGrid({ resourceTypeName })}
        </div>
        <AboutNdlaFilm aboutNDLAVideo={aboutNDLAVideo} moreAboutNdlaFilm={moreAboutNdlaFilm} />
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
      name: PropTypes.objectOf(PropTypes.string),
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
  aboutNDLAVideo: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    visualElement: PropTypes.shape({
      url: PropTypes.string,
      alt: PropTypes.string,
      type: PropTypes.string,
    }),
  }),
  resizeThumbnailImages: PropTypes.bool,
  id: PropTypes.string,
  showingAll: PropTypes.bool,
  language: PropTypes.oneOf(['nb', 'nn', 'en']).isRequired,
  t: PropTypes.func.isRequired,
};

FilmFrontpage.defaultProps = {
  moviesByType: [],
  highlighted: [],
  themes: [],
  resourceTypes: [],
  topics: [],
  resizeThumbnailImages: true,
};

export default withTranslation()(FilmFrontpage);
