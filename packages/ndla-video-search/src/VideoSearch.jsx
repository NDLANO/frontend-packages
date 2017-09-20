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
// import { Pager } from 'ndla-ui';
import VideoSearchForm from './VideoSearchForm';
import VideoSearchList from './VideoSearchList';
import VideoLoadMoreButton from './VideoLoadMoreButton';
import VideoTabs from './VideoTabs';

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
      selectedType: 'brightcove', // Default
      selectedVideo: undefined,
      page: 1,
      lastPage: 1,
      totalCount: 0,
      searching: false,
    };

    this.submitVideoSearchQuery = this.submitVideoSearchQuery.bind(this);
    this.changeQueryPage = this.changeQueryPage.bind(this);
    this.onSearchTypeChange = this.onSearchTypeChange.bind(this);
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
    const { selectedType } = this.state;
    const { onVideoSelect } = this.props;
    this.setState({ selectedVideo: undefined });
    onVideoSelect(video, selectedType);
  }

  onSearchTypeChange(type) {
    this.setState(
      { selectedType: type, selectedVideo: undefined, page: 1 },
      this.searchVideos(this.state.queryObject, type),
    );
  }

  loadMoreVideos() {
    const { queryObject, videos } = this.state;
    const { searchVideos, onError } = this.props;
    this.setState({ searching: true });
    searchVideos(queryObject.query, queryObject.offset + 10, queryObject.limit)
      .then(result => {
        this.setState(prevState => ({
          queryObject: {
            ...prevState.queryObject,
            offset: prevState.queryObject.offset + 10,
          },
          videos: videos.concat(result),
          searching: false,
        }));
      })
      .catch(err => {
        onError(err);
        this.setState({ searching: false });
      });
  }

  submitVideoSearchQuery(query) {
    this.searchVideos({ query, page: 1 });
  }

  changeQueryPage(queryObject) {
    this.searchVideos(queryObject);
  }

  searchVideos(queryObject, selectedType = this.state.selectedType) {
    const { searchVideos, onError } = this.props;
    this.setState({ searching: true, videos: [] });
    searchVideos(queryObject.query, 0, queryObject.limit, selectedType)
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
        onError(err);
        this.setState({ searching: false });
      });
  }

  render() {
    const { translations, locale } = this.props;

    const {
      queryObject,
      // page,
      // lastPage,
      videos,
      selectedVideo,
      selectedType,
      searching,
    } = this.state;

    const { query } = queryObject;

    // const paginationItem = () => {
    //   if (selectedType === 'brightcove') {
    //     return (
    //       <VideoLoadMoreButton
    //         searching={searching}
    //         videos={videos}
    //         loadMoreVideos={this.loadMoreVideos}
    //         limit={queryObject.limit}
    //         translations={translations}
    //       />
    //     );
    //   }
    //   return <Pager page={page ? parseInt(page, 10) : 1} lastPage={lastPage} />;
    // };

    const searchList = (
      <div {...classes('list')}>
        <VideoSearchList
          translations={translations}
          selectedType={selectedType}
          selectedVideo={selectedVideo}
          videos={videos}
          locale={locale}
          onVideoPreview={this.onVideoPreview}
          searching={searching}
          onSelectVideo={this.onSelectVideo}
        />
      </div>
    );

    return (
      <div {...classes()}>
        <VideoSearchForm
          onSearchQuerySubmit={this.submitVideoSearchQuery}
          query={query}
          searching={searching}
          translations={translations}
        />
        <VideoTabs
          searchTypes={selectedType}
          tabContent={searchList}
          onSearchTypeChange={this.onSearchTypeChange}
        />
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
