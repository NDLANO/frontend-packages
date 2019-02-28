/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import debounce from 'lodash/debounce';

import { getCurrentBreakpoint, breakpoints } from '@ndla/util';
import { injectT } from '@ndla/i18n';
import { movieShape, topicShape } from './shapes';
import FilmSlideshow from './FilmSlideshow';
import FilmMovieSearch from './FilmMovieSearch';
import FilmMovieList from './FilmMovieList';
import FrontpagePlaceholder from './FrontpagePlaceholder';
import MovieGrid from './MovieGrid';
import AboutNdlaFilm from './aboutNDLA/AboutNdlaFilm';

const classes = new BEMHelper({
  name: 'film-frontpage',
  prefix: 'c-',
});

const ARIA_FILMCATEGORY_ID = 'movieCategoriesId';

class FilmFrontpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resourceTypeSelected: null,
      columnWidth: 260,
      columnsPrSlide: 1,
      margin: 26,
    };
    this.onChangeResourceType = this.onChangeResourceType.bind(this);
    this.setScreenSize = this.setScreenSize.bind(this);
    this.setScreenSizeDebounced = debounce(() => this.setScreenSize(false), 50);
    this.movieListRef = React.createRef();
  }

  componentDidMount() {
    this.setScreenSize();
    window.addEventListener('resize', this.setScreenSizeDebounced);
  }

  componentWillUnmount() {
    this.setScreenSizeDebounced.cancel();
    window.removeEventListener('resize', this.setScreenSizeDebounced);
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

  setScreenSize() {
    const screenWidth =
      window.innerWidth || document.documentElement.clientWidth;

    const currentBreakpoint = getCurrentBreakpoint();
    let margin;
    let itemSize;
    if (screenWidth < 385) {
      margin = 26;
      itemSize = 130;
    } else if (screenWidth < 450) {
      margin = 26;
      itemSize = 160;
    } else if (currentBreakpoint === breakpoints.mobile) {
      margin = 26;
      itemSize = 200;
    } else if (currentBreakpoint === breakpoints.tablet) {
      margin = 52;
      itemSize = 220;
    } else if (currentBreakpoint === breakpoints.desktop) {
      margin = 78;
      itemSize = 240;
    } else if (screenWidth < 1600) {
      margin = 104;
      itemSize = 260;
    } else {
      margin = 104;
      itemSize = 300;
    }

    const columnsPrSlide = Math.floor((screenWidth - margin * 2) / itemSize);

    /* eslint react/no-did-mount-set-state: 0 */
    this.setState({
      columnWidth: (screenWidth - margin * 2) / columnsPrSlide,
      columnsPrSlide,
      margin,
    });
    /* eslint react/no-did-mount-set-state: 1 */
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
      language,
      t,
    } = this.props;
    const {
      resourceTypeSelected,
      columnWidth,
      columnsPrSlide,
      margin,
      loadingPlaceholderHeight,
    } = this.state;

    if (highlighted.length === 0) {
      return <FrontpagePlaceholder />;
    }

    const resourceTypeName =
      resourceTypeSelected &&
      resourceTypes.find(
        resourceType => resourceType.id === resourceTypeSelected,
      );

    return (
      <div {...classes()}>
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
                margin,
                resourceTypeName,
                fetchingMoviesByType,
                moviesByType,
                classes,
                columnWidth,
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
                columnsPrSlide={columnsPrSlide}
                columnWidth={columnWidth}
                margin={margin}
                slideForwardsLabel={t('ndlaFilm.slideForwardsLabel')}
                slideBackwardsLabel={t('ndlaFilm.slideBackwardsLabel')}
                resourceTypes={resourceTypes}
              />
            ))
          )}
        </div>
        <AboutNdlaFilm language={language} aboutNDLAVideo={aboutNDLAVideo} />
      </div>
    );
  }
}

FilmFrontpage.propTypes = {
  fetchingMoviesByType: PropTypes.bool,
  moviesByType: PropTypes.arrayOf(movieShape),
  highlighted: PropTypes.arrayOf(movieShape),
  themes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.shape({
        nb: PropTypes.string,
        nn: PropTypes.string,
        en: PropTypes.string,
      }).isRequired,
      movies: PropTypes.arrayOf(movieShape),
    }),
  ),
  topics: PropTypes.arrayOf(topicShape),
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
