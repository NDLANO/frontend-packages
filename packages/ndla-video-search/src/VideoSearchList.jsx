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

import VideoSearchResult from './VideoSearchResult';

const classes = new BEMHelper({
  name: 'video-search',
  prefix: 'c-',
});

const VideoSearchList = props => {
  const {
    videos,
    locale,
    translations,
    selectedVideo,
    onSelectVideo,
    onVideoPreview,
    searching,
  } = props;

  if ((!videos || videos.length === 0) && !searching) {
    return (
      <p>
        {translations.noResults}
      </p>
    );
  }
  if (searching && !(videos.length > 0)) {
    return <div {...classes('result-spinner')} />;
  }
  return (
    <div {...classes('list-inner')}>
      {videos.map(video =>
        <VideoSearchResult
          key={video.id}
          video={video}
          onVideoPreview={onVideoPreview}
          selectedVideo={selectedVideo}
          onSelectVideo={onSelectVideo}
          locale={locale}
          translations={translations}
        />,
      )}
    </div>
  );
};

VideoSearchList.propTypes = {
  onSelectVideo: PropTypes.func.isRequired,
  onVideoPreview: PropTypes.func.isRequired,
  searching: PropTypes.bool.isRequired,
  selectedVideo: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      custom_fields: PropTypes.shape({
        licenseinfo: PropTypes.string.isRequired,
        license: PropTypes.string.isRequired,
      }),
      images: PropTypes.shape({
        thumbnail: PropTypes.shape({
          src: PropTypes.string.isRequired,
        }),
      }),
    }),
  ),
  translations: PropTypes.shape({
    searchPlaceholder: PropTypes.string.isRequired,
    searchButtonTitle: PropTypes.string.isRequired,
    loadMoreVideos: PropTypes.string.isRequired,
  }),
  locale: PropTypes.string.isRequired,
};

export default VideoSearchList;
