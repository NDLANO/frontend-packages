/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { BrightcoveShape, YouTubeShape } from './shapes';

import VideoSearchResultBrightcove from './VideoSearchResultBrightcove';
import VideoSearchResultYouTube from './VideoSearchResultYouTube';

const classes = new BEMHelper({
  name: 'video-search',
  prefix: 'c-',
});

const VideoSearchList = (props) => {
  const { videos, locale, translations, selectedType, selectedVideo, onSelectVideo, onVideoPreview, searching } = props;

  if ((!videos || videos.length === 0) && !searching) {
    return <p>{translations.noResults}</p>;
  }
  if (searching && !(videos.length > 0)) {
    return <div {...classes('result-spinner')} />;
  }

  const videoresults = () => {
    if (selectedType === 'youtube') {
      return videos.map((video) => (
        <VideoSearchResultYouTube
          key={video.cacheId}
          video={video}
          onVideoPreview={onVideoPreview}
          selectedVideo={selectedVideo}
          onSelectVideo={onSelectVideo}
          translations={translations}
          locale={locale}
        />
      ));
    }

    return videos.map((video) => (
      <VideoSearchResultBrightcove
        key={video.id}
        video={video}
        onVideoPreview={onVideoPreview}
        selectedVideo={selectedVideo}
        onSelectVideo={onSelectVideo}
        locale={locale}
        translations={translations}
      />
    ));
  };

  return <div {...classes('list-inner')}>{videoresults()}</div>;
};

VideoSearchList.propTypes = {
  onSelectVideo: PropTypes.func.isRequired,
  onVideoPreview: PropTypes.func.isRequired,
  searching: PropTypes.bool.isRequired,
  selectedType: PropTypes.string.isRequired,
  selectedVideo: PropTypes.oneOfType([BrightcoveShape, YouTubeShape]),
  videos: PropTypes.oneOfType([PropTypes.arrayOf(BrightcoveShape), PropTypes.arrayOf(YouTubeShape)]),
  translations: PropTypes.shape({
    searchPlaceholder: PropTypes.string.isRequired,
    searchButtonTitle: PropTypes.string.isRequired,
    loadMoreVideos: PropTypes.string.isRequired,
  }),
  locale: PropTypes.string.isRequired,
};

export default VideoSearchList;
