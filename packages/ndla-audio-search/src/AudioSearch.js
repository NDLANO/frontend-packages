/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Pager } from 'ndla-ui';
import BEMHelper from 'react-bem-helper';

import AudioSearchForm from './AudioSearchForm';
import AudioSearchResult from './AudioSearchResult';

const classes = new BEMHelper({
  name: 'audio-search',
  prefix: 'c-'
});

class AudioSearch extends Component {
  constructor() {
    super();
    this.state = {
      queryObject: {
        query: undefined,
        page: 1,
        pageSize: 16
      },
      audios: [],
      lastPage: 0,
      totalCount: 0,
      searching: false
    };

    this.submitAudioSearchQuery = this.submitAudioSearchQuery.bind(this);
    this.searchAudios = this.searchAudios.bind(this);
  }

  componentDidMount() {
    this.searchAudios(this.state.queryObject);
  }

  submitAudioSearchQuery(query) {
    this.searchAudios({ query, page: 1 })
  }

  searchAudios(queryObject) {
    this.setState({ searching: true });
    this.props
      .searchAudios(queryObject.query, queryObject.page, this.props.locale)
      .then(result => {
        this.setState({
          queryObject: {
            query: queryObject.query,
            page: queryObject.page,
            pageSize: result.pageSize
          },
          audios: result.results,
          totalCount: result.totalCount,
          lastPage: Math.ceil(result.totalCount / result.pageSize),
          searching: false
        });
      })
      .catch(err => {
        console.log("am I here?");
        this.props.onError(err);
        this.setState({ searching: false });
      });
  }

  render() {
    const {
      searchPlaceholder,
      searchButtonTitle,
      fetchAudio,
      onError,
      locale
    } = this.props;

    const {
      queryObject,
      audios,
      lastPage,
      searching
    } = this.state;

    const {
      query,
      page
    } = queryObject;

    return (
      <div { ...classes() }>
        <AudioSearchForm
          onSearchQuerySubmit={ this.submitAudioSearchQuery }
          query={ query }
          searching={ searching }
          searchPlaceholder={ searchPlaceholder }
          searchButtonTitle={ searchButtonTitle }
        />
        <div { ...classes('list') }>
          { audios.map(audio =>
            <AudioSearchResult
              key={ audio.id }
              audio={ audio }
              fetchAudio={ fetchAudio }
              onError={ onError }
              locale={ locale }
            />
          ) }
        </div>
        <Pager
          page={ page ? parseInt(page, 10) : 1 }
          pathname=""
          lastPage={ lastPage }
          query={ queryObject }
          onClick={ this.searchAudios }
          pageItemComponentClass="button"
        />
      </div>
    );
  }
}

AudioSearch.proptypes = {
  fetchAudio: PropTypes.func.isRequired,
  searchAudios: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
  searchPlaceholder: PropTypes.string.isRequired,
  searchButtonTitle: PropTypes.string.isRequired,
  locale: PropTypes.string.isRequired
};

export default AudioSearch;
