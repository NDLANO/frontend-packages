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

import { OneColumn } from '../Layout';

const classes = new BEMHelper({
  name: 'film-movie-search',
  prefix: 'c-',
});

class FilmMovieSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contextFilterIsOpen: false,
      topicIsOpen: false,
    };
  }

  render() {
    const {
      topics,
      contextFilter,
      searchValue,
      topicSelected,
      contextFilterSelected,
      onChangeSearch,
      onChangeTopic,
      onChangeContextFilter,
    } = this.props;

    const { contextFilterIsOpen, topicIsOpen } = this.state;
    return (
      <OneColumn>
        <input
          type="search"
          {...classes('input')}
          id="search"
          name="search"
          placeholder="Søk på film"
          aria-label="Søk på film"
          value={searchValue}
          onChange={e => onChangeSearch(e.target.value)}
        />
        <button
          type="button"
          onClick={() => {
            this.setState({
              topicIsOpen: true,
            });
          }}>
          Select topic
        </button>
        {topicIsOpen && <div>Choose a topic!</div>}
        <button
          type="button"
          onClick={() => {
            this.setState({
              contextFilterIsOpen: true,
            });
          }}>
          Select topic
        </button>
        {contextFilterIsOpen && <div>Choose a contextFilter!</div>}
      </OneColumn>
    );
  }
}

FilmMovieSearch.propTypes = {
  topics: PropTypes.arrayOf(PropTypes.shape),
  contextFilter: PropTypes.arrayOf(PropTypes.shape),
  onChangeSearch: PropTypes.func.isRequired,
  onChangeTopic: PropTypes.func.isRequired,
  onChangeContextFilter: PropTypes.func.isRequired,
};

export default FilmMovieSearch;
