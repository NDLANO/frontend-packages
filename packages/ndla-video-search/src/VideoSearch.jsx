/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import VideoSearchForm from './VideoSearchForm';
import VideoSearchList from './VideoSearchList';
import VideoLoadMoreButton from './VideoLoadMoreButton';

const classes = new BEMHelper({
  name: 'video-search',
  prefix: 'c-',
});

class VideoSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      queryObject: {
        query: '',
        offset: 0,
        limit: 10,
      },
      videos: [],
      selectedVideo: undefined,
      lastPage: 0,
      totalCount: 0,
      searching: false,
    };

    this.submitVideoSearchQuery = this.submitVideoSearchQuery.bind(this);
    this.changeQueryPage = this.changeQueryPage.bind(this);
    this.searchVideos = this.searchVideos.bind(this);
    this.onVideoPreview = this.onVideoPreview.bind(this);
    this.onSelectVideo = this.onSelectVideo.bind(this);
    this.loadMoreVideos = this.loadMoreVideos.bind(this);
  }

  componentDidMount() {
    this.searchVideos(this.state.queryObject);
  }

  onVideoPreview(video) {
    this.setState({ selectedVideo: video });
  }

  onSelectVideo(video) {
    this.setState({ selectedVideo: undefined });
    this.props.onVideoSelect(video);
  }

  loadMoreVideos() {
    this.setState({ searching: true });
    this.props
      .searchVideos(
        this.state.queryObject.query,
        this.state.queryObject.offset + 10,
        this.state.queryObject.limit,
      )
      .then(result => {
        this.setState(prevState => ({
          queryObject: {
            ...prevState.queryObject,
            offset: prevState.queryObject.offset + 10,
          },
          videos: this.state.videos.concat(result),
          searching: false,
        }));
      })
      .catch(err => {
        this.props.onError(err);
        this.setState({ searching: false });
      });
  }

  submitVideoSearchQuery(query) {
    this.searchVideos({ query, page: 1 });
  }

  changeQueryPage(queryObject) {
    this.searchVideos(queryObject);
  }

  searchVideos(queryObject) {
    this.setState({ searching: true, videos: [] });
    this.props
      .searchVideos(queryObject.query, 0, queryObject.limit)
      .then(result => {
        this.setState(prevState => ({
          queryObject: {
            ...prevState.queryObject,
            query: queryObject.query,
            offset: 0,
          },
          videos: result,
          searching: false,
        }));
      })
      .catch(err => {
        this.props.onError(err);
        this.setState({ searching: false });
      });
  }

  render() {
    const { translations, locale } = this.props;

    const { queryObject, videos, selectedVideo, searching } = this.state;

    const { query } = queryObject;

    return (
      <div {...classes()}>
        <VideoSearchForm
          onSearchQuerySubmit={this.submitVideoSearchQuery}
          query={query}
          searching={searching}
          translations={translations}
        />
        <div {...classes('list')}>
          <VideoSearchList
            translations={translations}
            selectedVideo={selectedVideo}
            videos={videos}
            locale={locale}
            onVideoPreview={this.onVideoPreview}
            searching={searching}
            onSelectVideo={this.onSelectVideo}
          />
        </div>
        <VideoLoadMoreButton
          searching={searching}
          videos={videos}
          loadMoreVideos={this.loadMoreVideos}
          limit={queryObject.limit}
          translations={translations}
        />
      </div>
    );
  }
}

VideoSearch.propTypes = {
  onVideoSelect: PropTypes.func.isRequired,
  searchVideos: PropTypes.func.isRequired,
  fetchVideo: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
  translations: PropTypes.shape({
    searchPlaceholder: PropTypes.string.isRequired,
    searchButtonTitle: PropTypes.string.isRequired,
    loadMoreVideos: PropTypes.string.isRequired,
  }),
  locale: PropTypes.string.isRequired,
};

export default VideoSearch;
