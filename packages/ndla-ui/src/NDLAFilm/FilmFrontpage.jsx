/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import debounce from 'lodash/debounce';

import { getCurrentBreakpoint, breakpoints } from '@ndla/util';
import Modal, { ModalHeader, ModalBody, ModalCloseButton } from '@ndla/modal';
import Button from '@ndla/button';
import { injectT } from '@ndla/i18n';
import FilmSlideshow from './FilmSlideshow';
import FilmMovieSearch from './FilmMovieSearch';
import FilmMovieList from './FilmMovieList';
import FrontpagePlaceholder from './FrontpagePlaceholder';
import { AboutNDLAFilmNb } from './AboutNDLAFilmNb';

const classes = new BEMHelper({
  name: 'film-frontpage',
  prefix: 'c-',
});

const movieListClasses = new BEMHelper({
  name: 'film-movielist',
  prefix: 'c-',
});

class FilmFrontpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      topicSelected: null,
      resourceTypeSelected: null,
      columnWidth: 260,
      columnsPrSlide: 1,
      margin: 26,
      activeSearch: false,
    };
    this.onChangeResourceType = this.onChangeResourceType.bind(this);
    this.onChangeTopic = this.onChangeTopic.bind(this);
    this.onChangeSearch = this.onChangeSearch.bind(this);
    this.setScreenSize = this.setScreenSize.bind(this);
    this.setScreenSizeDebounced = debounce(() => this.setScreenSize(false), 50);
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
    this.setState(prevState => ({
      resourceTypeSelected:
        prevState.resourceTypeSelected === resourceTypeSelected
          ? null
          : resourceTypeSelected,
      activeSearch:
        resourceTypeSelected ||
        prevState.topicSelected ||
        prevState.searchValue.length,
    }));
  }

  onChangeTopic(topicSelected) {
    this.setState(prevState => ({
      topicSelected,
      activeSearch:
        topicSelected ||
        prevState.resourceTypeSelected ||
        prevState.searchValue.length,
    }));
  }

  onChangeSearch(searchValue) {
    this.setState(prevState => ({
      searchValue,
      activeSearch:
        searchValue.length ||
        prevState.resourceTypeSelected ||
        prevState.topicSelected,
    }));
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
      allMovies,
      aboutNDLAVideo: Video,
      t,
    } = this.props;
    const {
      searchValue,
      topicSelected,
      resourceTypeSelected,
      columnWidth,
      columnsPrSlide,
      activeSearch,
      margin,
    } = this.state;

    if (highlighted.length === 0) {
      // Loading.
      return <FrontpagePlaceholder />;
    }

    const filteredMovies =
      activeSearch &&
      allMovies.filter(
        movie =>
          (searchValue === '' ||
            movie.title.title.search(new RegExp(searchValue, 'i')) !== -1) &&
          (!topicSelected ||
            movie.contexts.some(context => context.id === topicSelected)) &&
          (!resourceTypeSelected ||
            Object.keys(movie.movieTypes).some(
              movieTypeId => movieTypeId === resourceTypeSelected,
            )),
      );

    const resourceTypeName =
      resourceTypeSelected &&
      resourceTypes.find(
        resourceType => resourceType.id === resourceTypeSelected,
      );

    return (
      <div {...classes()}>
        <FilmSlideshow slideshow={highlighted} />
        <FilmMovieSearch
          topics={topics}
          resourceTypes={resourceTypes}
          searchValue={searchValue}
          topicSelected={topicSelected}
          resourceTypeSelected={resourceTypeName}
          onChangeSearch={this.onChangeSearch}
          onChangeTopic={this.onChangeTopic}
          onChangeResourceType={this.onChangeResourceType}
        />
        {activeSearch ? (
          <section>
            <h1
              {...movieListClasses('heading')}
              style={{ marginLeft: `${margin + 7}px` }}>
              Søk gav{resourceTypeName && ` i ${resourceTypeName.name}`}{' '}
              {filteredMovies.length} treff:
            </h1>
            <div
              {...classes('movie-listing')}
              style={{ marginLeft: `${margin}px` }}>
              {filteredMovies.map(movie => (
                <a
                  href={movie.url}
                  key={movie.id}
                  {...classes('movie-item', '', 'c-film-movielist__slide-item')}
                  style={{ width: `${columnWidth}px` }}>
                  <div
                    {...movieListClasses('slidecolumn-image')}
                    role="img"
                    aria-label={movie.metaImage ? movie.metaImage.alt : ''}
                    style={{
                      height: `${columnWidth * 0.5625}px`,
                      backgroundImage: `url(${
                        movie.metaImage && movie.metaImage.url
                          ? movie.metaImage.url
                          : ''
                      })`,
                    }}>
                    <div {...movieListClasses('movie-tags-wrapper')}>
                      {Object.keys(movie.movieTypes).map(movieType => (
                        <span
                          {...movieListClasses('movie-tags')}
                          key={movieType}>
                          {
                            resourceTypes.find(
                              resourceType => resourceType.id === movieType,
                            ).name
                          }
                        </span>
                      ))}
                    </div>
                  </div>
                  <h2 {...movieListClasses('movie-title')}>
                    {movie.title.title}
                  </h2>
                </a>
              ))}
            </div>
          </section>
        ) : (
          themes.map(theme => (
            <FilmMovieList
              key={theme.name}
              name={theme.name}
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
        {!activeSearch && (
          <div className="o-wrapper">
            <aside className="c-film-frontpage__about">
              <div>
                <div {...classes('video')}>{Video}</div>
              </div>
              <div>
                <h1>{t('ndlaFilm.about.heading')}</h1>
                <p>{t('ndlaFilm.about.text')}</p>
                <Modal
                  activateButton={
                    <Button stripped>Les mer om NDLA film</Button>
                  }>
                  {onClose => (
                    <Fragment>
                      <ModalHeader>
                        <ModalCloseButton onClick={onClose} title="Lukk" />
                      </ModalHeader>
                      <ModalBody>
                        <AboutNDLAFilmNb />
                      </ModalBody>
                    </Fragment>
                  )}
                </Modal>
              </div>
            </aside>
          </div>
        )}
      </div>
    );
  }
}

export const movieShape = PropTypes.shape({
  contexts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      resourceTypes: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          id: PropTypes.string,
        }),
      ),
      subject: PropTypes.string,
    }),
  ).isRequired,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  metaDescription: PropTypes.shape({
    metaDescription: PropTypes.string,
  }),
  metaImage: PropTypes.shape({
    url: PropTypes.string,
    alt: PropTypes.string,
  }),
  title: PropTypes.shape({
    title: PropTypes.string,
  }),
  url: PropTypes.string,
});

export const topicShape = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
});

FilmFrontpage.propTypes = {
  allMovies: PropTypes.arrayOf(movieShape),
  highlighted: PropTypes.arrayOf(movieShape),
  themes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
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
  aboutNDLAVideo: PropTypes.node.isRequired,
  t: PropTypes.shape({}),
};

FilmFrontpage.defaultProps = {
  allMovies: [],
  highlighted: [],
  themes: [],
  resourceTypes: [],
  topics: [],
};

export default injectT(FilmFrontpage);
