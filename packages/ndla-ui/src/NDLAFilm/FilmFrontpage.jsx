/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import debounce from 'lodash/debounce';

import { getCurrentBreakpoint, breakpoints } from '@ndla/util';
import { OneColumn } from '../Layout';
import FilmSlideshow from './FilmSlideshow';
import FilmpageMovieSearch from './FilmMovieSearch';
import FilmMovieList from './FilmMovieList';

const classes = new BEMHelper({
  name: 'film-frontpage',
  prefix: 'c-',
});

class FilmFrontpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      topicSelected: null,
      contextFilterSelected: null,
      columnWidth: 260,
      columnsPrSlide: 1,
      margin: 26,
      activeSearch: false,
    };
    this.onChangeContextFilter = this.onChangeSearch.bind(this);
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

  onChangeContextFilter(contextFilterSelected) {
    this.setState(prevState => ({
      contextFilterSelected,
      activeSearch:
        contextFilterSelected ||
        prevState.topicSelected ||
        prevState.searchValue.length,
    }));
  }

  onChangeTopic(topicSelected) {
    this.setState(prevState => ({
      topicSelected,
      activeSearch:
        topicSelected ||
        prevState.contextFilterSelected ||
        prevState.searchValue.length,
    }));
  }

  onChangeSearch(searchValue) {
    console.log('searchValue', searchValue);
    this.setState(prevState => ({
      searchValue,
      activeSearch:
        searchValue.length ||
        prevState.contextFilterSelected ||
        prevState.topicSelected,
    }));
  }

  setScreenSize() {
    const screenWidth =
      window.innerWidth || document.documentElement.clientWidth;

    const currentBreakpoint = getCurrentBreakpoint();
    let margin;
    let itemSize;
    if (screenWidth < 450) {
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
    } else {
      margin = 104;
      itemSize = 260;
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
      contextFilter,
      topics,
      allMovies,
    } = this.props;
    const {
      searchValue,
      topicSelected,
      contextFilterSelected,
      columnWidth,
      columnsPrSlide,
      activeSearch,
      margin,
    } = this.state;

    return (
      <div {...classes()}>
        <FilmSlideshow slideshow={highlighted} />
        <FilmpageMovieSearch
          topics={topics}
          contextFilter={contextFilter}
          searchValue={searchValue}
          topicSelected={topicSelected}
          contextFilterSelected={contextFilterSelected}
          onChangeSearch={this.onChangeSearch}
          onChangeTopic={this.onChangeTopic}
          onChangeContextFilter={this.onChangeContextFilter}
        />
        {activeSearch ? (
          <OneColumn>
            <div {...classes('movie-listing')}>
              {allMovies
                .filter(
                  movie =>
                    movie.title.title.search(new RegExp(searchValue, 'i')) !==
                    -1,
                )
                .map(movie => (
                  <a
                    href={movie.url}
                    key={movie.id}
                    {...classes('movie-item')}
                    style={{ width: `${columnWidth}px` }}>
                    <div
                      {...classes('movie-image')}
                      role="img"
                      aria-label={movie.metaImage.alt}
                      style={{
                        backgroundImage: `url(${movie.metaImage.url})`,
                      }}
                    />
                    <h2 {...classes('movie-title')}>{movie.title.title}</h2>
                  </a>
                ))}
            </div>
          </OneColumn>
        ) : (
          themes.map(theme => (
            <FilmMovieList
              key={theme.title}
              title={theme.title}
              movies={theme.movies}
              columnsPrSlide={columnsPrSlide}
              columnWidth={columnWidth}
              margin={margin}
            />
          ))
        )}
      </div>
    );
  }
}

export const movieShape = PropTypes.shape({
  contexts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ).isRequired,
  id: PropTypes.string.isRequired,
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

FilmFrontpage.propTypes = {
  allMovies: PropTypes.arrayOf(movieShape),
  highlighted: PropTypes.arrayOf(movieShape),
  themes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      movies: PropTypes.arrayOf(movieShape),
    }),
  ),
  contextFilter: PropTypes.arrayOf(PropTypes.shape),
  topics: PropTypes.arrayOf(PropTypes.shape),
};

FilmFrontpage.defaultProps = {
  allMovies: [],
  highlighted: [],
  themes: [],
  contextFilter: [],
  topics: [],
};

export default FilmFrontpage;
