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

import VideoSearchForm from './VideoSearchForm';
import VideoSearchResult from './VideoSearchResult';

const classes = new BEMHelper({
  name: 'video-search',
  prefix: 'c-',
});

class ImageSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      queryObject: {
        query: undefined,
        page: 1,
        pageSize: 16,
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
    this.onVideoClick = this.onVideoClick.bind(this);
    this.onSelectVideo = this.onSelectVideo.bind(this);
  }

  componentDidMount() {
    this.searchVideos(this.state.queryObject);
  }

  onVideoClick(image) {
    if (!this.state.selectedImage || image.id !== this.state.selectedImage.id) {
      this.props.fetchVideo(image.id).then((result) => {
        this.setState({ selectedImage: result });
      }).catch((err) => {
        this.props.onError(err);
      });
    }
  }

  onSelectVideo(image) {
    this.setState({ selectedImage: undefined });
    this.props.onVideoSelect(image);
  }
  submitVideoSearchQuery(query) {
    this.searchVideos({ query, page: 1 });
  }

  changeQueryPage(queryObject) {
    this.searchVideos(queryObject);
  }

  searchVideos(queryObject) {
    this.setState({ searching: true });
    this.props.searchVideos(queryObject.query, queryObject.page, this.props.locale).then((result) => {
      console.log(result);
      this.setState({
        queryObject: {
          query: queryObject.query,
        },
        videos: result,
        totalCount: result.totalCount,
        lastPage: Math.ceil(result.totalCount / result.pageSize),
        searching: false,
      });
    }).catch((err) => {
      this.props.onError(err);
      this.setState({ searching: false });
    });
  }

  render() {
    const {
      searchPlaceholder,
      searchButtonTitle,
      locale,
    } = this.props;

    const {
      queryObject,
      videos,
      selectedVideo,
      searching,
    } = this.state;

    const { query } = queryObject;
    console.log(videos);
    return (
      <div {...classes()}>
        <VideoSearchForm
          onSearchQuerySubmit={this.submitVideoSearchQuery}
          query={query}
          searching={searching}
          searchPlaceholder={searchPlaceholder}
          searchButtonTitle={searchButtonTitle}
        />
        <div {...classes('list')}>
          {videos.map(video =>
            <VideoSearchResult
              key={video.id}
              video={video}
              onImageClick={this.onVideoClick}
              selectedImage={selectedVideo}
              onSelectImage={this.onSelectVideo}
              locale={locale}
            />,
        )}
        </div>
      </div>
    );
  }
}

ImageSearch.propTypes = {
  onVideoSelect: PropTypes.func.isRequired,
  searchVideos: PropTypes.func.isRequired,
  fetchVideo: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
  searchPlaceholder: PropTypes.string.isRequired,
  searchButtonTitle: PropTypes.string.isRequired,
  locale: PropTypes.string.isRequired,
};

export default ImageSearch;
