/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'ndla-ui';
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

  onSelectVideo(image) {
    this.setState({ selectedImage: undefined });
    this.props.onVideoSelect(image);
  }

  loadMoreVideos() {
    this.setState({ searching: true });
    this.props.searchVideos(this.state.queryObject.query, this.state.queryObject.offset + 10, this.state.queryObject.limit).then((result) => {
      this.setState(prevState => ({
        queryObject: {
          offset: prevState.queryObject.offset + 10,
        },
        videos: this.state.videos.concat(result),
        searching: false,
      }));
    }).catch((err) => {
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
    this.setState({ searching: true });
    this.props.searchVideos(queryObject.query, 0, queryObject.limit).then((result) => {
      this.setState({
        queryObject: {
          query: queryObject.query,
          offset: 0,
        },
        videos: result,
        searching: false,
      });
    }).catch((err) => {
      this.props.onError(err);
      this.setState({ searching: false });
    });
  }

  render() {
    const {
      translations,
      locale,
    } = this.props;

    const {
      queryObject,
      videos,
      selectedVideo,
      searching,
    } = this.state;

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
          {videos && videos.length > 0 ? videos.map(video =>
            <VideoSearchResult
              key={video.id}
              video={video}
              onVideoPreview={this.onVideoPreview}
              selectedVideo={selectedVideo}
              onSelectVideo={this.onSelectVideo}
              locale={locale}
              translations={translations}
            />,
        ) : <p>{translations.noResults}</p>}
        </div>
        {videos && videos.length > 0 && videos.length % 10 === 0 ? <div {...classes('load-videos')}>
          <Button disabled={this.state.searching} onClick={this.loadMoreVideos}>
            {this.state.searching ? <div {...classes('spinner')} /> : translations.loadMoreVideos}
          </Button>
        </div> : ''}
      </div>
    );
  }
}

ImageSearch.propTypes = {
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

export default ImageSearch;
