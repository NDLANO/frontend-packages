/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Pager } from 'ndla-ui';
import BEMHelper from 'react-bem-helper';

import AudioSearchForm from './AudioSearchForm';
import AudioSearchResult from './AudioSearchResult';

const classes = new BEMHelper({
  name: 'audio-search',
  prefix: 'c-'
});

class AudioSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      queryObject: {
        query: undefined,
        page: 1,
        pageSize: 16
      },
      audios: [],
      selectedAudio: undefined,
      lastPage: 0,
      totalCount: 0,
      searching: false
    };

    this.submitAudioSearchQuery = this.submitAudioSearchQuery.bind(this);
    this.changeQueryPage = this.changeQueryPage.bind(this);
    this.searchAudios = this.searchAudios.bind(this);
    this.onAudioClick = this.onAudioClick.bind(this);
    this.onSelectAudio = this.onSelectAudio.bind(this);
  }

  componentDidMount() {
    this.searchAudios(this.state.queryObject);
  }

  onAudioClick(audio) {
    if (!this.state.selectedAudio || audio.id !== this.state.selectedAudio.id) {
      this.props
        .fetchAudio(audio.id)
        .then(result => {
          this.setState({ selectedAudio: result });
        })
        .catch(err => {
          this.props.onError(err);
        });
    }
  }

  onSelectAudio(audio) {
    this.setState({ selectedAudio: undefined });
    this.props.onAudioSelect(audio);
  }

  submitAudioSearchQuery(query) {
    this.searchAudios({ query, page: 1 })
  }

  changeQueryPage(queryObject) {
    this.searchAudios(queryObject);
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
        this.props.onError(err);
        this.setState({ searching: false });
      })
  }

  render() {
    const { searchPlaceholder, searchButtonTitle, locale } = this.props;
    const {
      queryObject,
      audios,
      selectedAudio,
      lastPage,
      totalCount,
      searching
    } = this.state;
    const { query, page } = queryObject;

    return (
      <div {...classes()}>
        <AudioSearchForm
          onSearchQuerySubmit={ this.submitAudioSearchQuery }
          query={ query }
          searching={ searching }
          totalCount={ totalCount }
          searchPlaceholder={ searchPlaceholder }
          searchButtonTitle={ searchButtonTitle }
        />
        <div { ...classes('list') }>
          { audios.map(audio =>
            <AudioSearchResult
              key={ audio.id }
              audio={ audio }
              onAudioClick={ this.onAudioClick }
              selectedAudio={ selectedAudio }
              onSelectAudio={ this.onSelectAudio }
              locale={ locale }
            />
          ) }
        </div>
        <Pager
          page={page ? parseInt(page, 10) : 1}
          pathname=""
          lastPage={lastPage}
          query={queryObject}
          onClick={this.searchAudios}
          pageItemComponentClass="button"
        />
      </div>
    );
  }
}

AudioSearch.propTypes = {
  onAudioSelect: PropTypes.func.isRequired,
  searchAudios: PropTypes.func.isRequired,
  fetchAudio: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
  searchPlaceholder: PropTypes.string.isRequired,
  searchButtonTitle: PropTypes.string.isRequired,
  locale: PropTypes.string.isRequired
};

export default AudioSearch;
