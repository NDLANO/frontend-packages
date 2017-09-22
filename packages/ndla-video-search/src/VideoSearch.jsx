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
import { Pager } from 'ndla-ui';
import VideoSearchForm from './VideoSearchForm';
import VideoSearchList from './VideoSearchList';
import VideoLoadMoreButton from './VideoLoadMoreButton';
import VideoTabs from './VideoTabs';
import { getLastPage } from './videoHelpers';

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
      lastPage: 0,
      searching: false,
    };

    this.submitVideoSearchQuery = this.submitVideoSearchQuery.bind(this);
    this.changeQueryPage = this.changeQueryPage.bind(this);
    this.onSearchTypeChange = this.onSearchTypeChange.bind(this);
    this.searchVideos = this.searchVideos.bind(this);
    this.onVideoPreview = this.onVideoPreview.bind(this);
    this.onSelectVideo = this.onSelectVideo.bind(this);
    this.loadMoreVideos = this.loadMoreVideos.bind(this);
    this.setVideoResults = this.setVideoResults.bind(this);
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
    const queryObject = { offset: 0, limit: 10, page: 1 };
    this.setState(
      {
        queryObject,
        selectedType: type,
        selectedVideo: undefined,
      },
      this.searchVideos(queryObject, type),
    );
  }

  setVideoResults = (result, selectedType) => {
    switch (selectedType) {
      case 'youtube':
        return result.items;
      default:
        return result;
    }
  };

  loadMoreVideos() {
    const { queryObject, videos, selectedType } = this.state;
    const { searchVideos, onError } = this.props;
    this.setState({ searching: true });
    searchVideos(
      {
        ...queryObject,
        offset: queryObject.offset + 10,
      },
      selectedType,
    )
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

  changeQueryPage(page) {
    this.setState({ lastPage: 0 });
    const newQueryObject = { ...this.state.queryObject, ...page };
    this.searchVideos(newQueryObject);
  }

  submitVideoSearchQuery(query) {
    const queryObject = { query };
    this.searchVideos(queryObject);
  }

  searchVideos(queryObject, selectedType = this.state.selectedType) {
    const { searchVideos, onError } = this.props;
    this.setState({ searching: true, videos: [] });
    searchVideos(queryObject, selectedType)
      .then(result => {
        this.setState(prevState => ({
          queryObject: {
            ...prevState.queryObject,
            query: queryObject.query,
            page: queryObject.page,
            offset: 0,
          },
          videos: this.setVideoResults(result, selectedType),
          searching: false,
          lastPage: getLastPage(result, selectedType),
        }));
      })
      .catch(err => {
        onError(err);
        this.setState({ searching: false });
      });
  }

  render() {
    const { translations, locale, enabledSources } = this.props;

    const {
      queryObject,
      lastPage,
      videos,
      selectedVideo,
      selectedType,
      searching,
    } = this.state;

    const { query, page } = queryObject;

    const paginationItem = () => {
      let item;
      if (selectedType === 'brightcove') {
        item = (
          <VideoLoadMoreButton
            searching={searching}
            videos={videos}
            loadMoreVideos={this.loadMoreVideos}
            limit={queryObject.limit}
            translations={translations}
          />
        );
      } else if (lastPage) {
        item = (
          <Pager
            page={page || 1}
            lastPage={lastPage}
            onClick={this.changeQueryPage}
          />
        );
      }
      return item;
    };

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
          content={searchList}
          onSearchTypeChange={this.onSearchTypeChange}
          enabledSources={enabledSources || ['brightcove']}
        />
        {paginationItem()}
      </div>
    );
  }
}

VideoSearch.propTypes = {
  onVideoSelect: PropTypes.func.isRequired,
  searchVideos: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
  translations: PropTypes.shape({
    searchPlaceholder: PropTypes.string.isRequired,
    searchButtonTitle: PropTypes.string.isRequired,
    loadMoreVideos: PropTypes.string.isRequired,
  }),
  locale: PropTypes.string.isRequired,
  enabledSources: PropTypes.array,
};

VideoSearch.defaultProps = {
  enabledSources: ['brightcove'],
};

export default VideoSearch;
