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
import FilmSlideshow from './FilmSlideshow';
import FilmpageMovieSearch from './FilmMovieSearch';
import FilmMovieList from './FilmMovieList';
import { allMovies } from '../../../designmanual/dummydata/mockFilm';

const classes = new BEMHelper({
  name: 'film-frontpage',
  prefix: 'c-',
});

class FilmFrontpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      topicSelected: null,
      contentTypeSelected: null,
      columnWidth: 260,
      columnsPrSlide: 1,
      margin: 26,
    };
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

  onSearch(searchText) {
    this.setState({
      searchText,
    });
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
    const { highlighted, themes, contentSubTypes, topics } = this.props;
    const {
      searchText,
      topicSelected,
      contentTypeSelected,
      columnWidth,
      columnsPrSlide,
      margin,
    } = this.state;

    return (
      <div {...classes()}>
        <FilmSlideshow slideshow={highlighted} />
        <FilmpageMovieSearch
          contentSubTypes={contentSubTypes}
          topics={topics}
          onSearch={this.onSearch}
          searchText={searchText}
          topicSelected={topicSelected}
          contentTypeSelected={contentTypeSelected}
        />
        {searchText !== '' &&
          allMovies
            .filter(movie => movie.name.indexOf(searchText !== -1))
            .map(movie => <div key={movie.id}>{movie.title}</div>)}
        {searchText === '' &&
          themes.map(theme => (
            <FilmMovieList
              key={theme.title}
              title={theme.title}
              movies={theme.movies}
              columnsPrSlide={columnsPrSlide}
              columnWidth={columnWidth}
              margin={margin}
            />
          ))}
      </div>
    );
  }
}

export const movieShape = PropTypes.shape({
  name: PropTypes.string,
  id: PropTypes.string,
  path: PropTypes.string,
  metaData: PropTypes.shape({
    description: PropTypes.string,
    image: PropTypes.shape({
      alt: PropTypes.string,
      img: PropTypes.string,
    }),
  }),
});

FilmFrontpage.propTypes = {
  highlighted: PropTypes.arrayOf(movieShape),
  themes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      movies: PropTypes.arrayOf(movieShape),
    }),
  ),
  contentSubTypes: PropTypes.arrayOf(PropTypes.shape),
  topics: PropTypes.arrayOf(PropTypes.shape),
};

FilmFrontpage.defaultProps = {
  highlighted: [],
  themes: [],
  contentSubTypes: [],
  topics: [],
};

export default FilmFrontpage;
