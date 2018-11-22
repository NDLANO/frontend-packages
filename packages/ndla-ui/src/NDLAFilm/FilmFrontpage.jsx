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

import FrontpageSlideshow from './FrontpageSlideshow';
import FrontpageMovieSearch from './FrontpageMovieSearch';

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
    };
  }

  onSearch(searchText) {
    this.setState({
      searchText,
    });
  }

  render() {
    const { highlighted, themes, contentSubTypes, topics } = this.props;
    const { searchText, topicSelected, contentTypeSelected } = this.state;
    return (
      <div {...classes()}>
        <FrontpageSlideshow slideshow={highlighted} />
        <FrontpageMovieSearch
          contentSubTypes={contentSubTypes}
          topics={topics}
          onSearch={this.onSearch}
          searchText={searchText}
          topicSelected={topicSelected}
          contentTypeSelected={contentTypeSelected}
        />
        {themes.map(theme => (
          <div key={theme.id}>
            <h1>{theme.name}</h1>
            <FrontpageMovieList movies={theme.movies} />
          </div>
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
  themes: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    movies: PropTypes.arrayOf(movieShape),
  }),
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
