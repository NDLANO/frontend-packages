/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import { IAudioMetaInformation, IAudioSummary, IAudioSummarySearchResult } from '@ndla/types-audio-api';
//@ts-ignore
import Pager from '@ndla/pager';
import BEMHelper from 'react-bem-helper';
import AudioSearchForm from './AudioSearchForm';
import AudioSearchList from './AudioSearchList';

const classes = new BEMHelper({
  name: 'audio-search',
  prefix: 'c-',
});

interface Props {
  queryObject: QueryObject;
  fetchAudio: (id: number) => Promise<IAudioMetaInformation>;
  searchAudios: (queryObject: QueryObject) => Promise<IAudioSummarySearchResult>;
  onError: (err: any) => void;
  translations: {
    searchPlaceholder: string;
    searchButtonTitle: string;
    useAudio: string;
    noResults: string;
  };
  onAudioSelect: (audio: IAudioSummary) => void;
}

export interface QueryObject {
  query?: string;
  audioType?: string;
  page: number;
  pageSize: number;
  locale: string;
}

interface State {
  queryObject: QueryObject;
  audios: IAudioSummary[];
  lastPage: number;
  searching: boolean;
}

class AudioSearch extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      queryObject: props.queryObject,
      audios: [],
      lastPage: 0,
      searching: false,
    };

    this.submitAudioSearchQuery = this.submitAudioSearchQuery.bind(this);
    this.searchAudios = this.searchAudios.bind(this);
  }

  componentDidMount() {
    this.searchAudios(this.state.queryObject);
  }

  submitAudioSearchQuery(queryObject: QueryObject) {
    this.searchAudios({
      query: queryObject.query,
      page: 1,
      pageSize: queryObject.pageSize,
      locale: queryObject.locale,
      audioType: queryObject.audioType || 'standard',
    });
  }

  searchAudios(queryObject: QueryObject) {
    this.setState({ searching: true });
    this.props
      .searchAudios(queryObject)
      .then((result) => {
        this.setState({
          queryObject: {
            query: queryObject.query,
            page: queryObject.page,
            pageSize: result.pageSize,
            locale: queryObject.locale,
            audioType: queryObject.audioType || 'standard',
          },
          audios: result.results,
          lastPage: Math.ceil(result.totalCount / result.pageSize),
          searching: false,
        });
      })
      .catch((err) => {
        this.props.onError(err);
        this.setState({ searching: false });
      });
  }

  render() {
    const { fetchAudio, onError, translations, onAudioSelect } = this.props;
    const { queryObject, audios, lastPage, searching } = this.state;
    const { page, locale } = queryObject ?? {};

    return (
      <div {...classes()}>
        <AudioSearchForm
          onSearchQuerySubmit={this.submitAudioSearchQuery}
          queryObject={queryObject}
          searching={searching}
          translations={translations}
        />
        <AudioSearchList
          audios={audios}
          searching={searching}
          locale={locale}
          translations={translations}
          onError={onError}
          fetchAudio={fetchAudio}
          onAudioSelect={onAudioSelect}
        />
        <Pager
          page={page ?? 1}
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

export default AudioSearch;
