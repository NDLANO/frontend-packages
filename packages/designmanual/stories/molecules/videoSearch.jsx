/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';

import VideoSearch from 'ndla-video-search';
import {
  firstBrightcoveList,
  firstYouTubeList,
  secondBrightcoveList,
  secondYouTubeList,
  brightCoveMockVideo,
} from '../../dummydata';

const firstDummyData = {
  brightcove: firstBrightcoveList,
  youtube: firstYouTubeList,
};

const secondDummyData = {
  brightcove: secondBrightcoveList,
  youtube: secondYouTubeList,
};

const fetchVideos = (query, offset, limit, type) =>
  new Promise(resolve => {
    if (offset > 0) {
      return setTimeout(() => resolve(secondDummyData[type]), 1000);
    }
    return setTimeout(() => resolve(firstDummyData[type]), 1000);
  });

const fetchVideo = id =>
  new Promise(resolve => {
    const modifiedVideo = brightCoveMockVideo;
    modifiedVideo.id = id;
    resolve(modifiedVideo);
  });

export const VideoSearcher = () => {
  const videoSelect = (video, type = 'brightcove') => {
    console.log(video, type); // eslint-disable-line no-console
  };

  const onError = err => {
    console.error(err); // eslint-disable-line no-console
  };
  const translations = {
    searchPlaceholder: 'Søk i videoer',
    searchButtonTitle: 'Søk',
    loadMoreVideos: 'Last flere videor',
    noResults: 'Ingen videor funnet.',
    addVideo: 'Bruk video',
    previewVideo: 'Forhåndsvis',
    publishedDate: 'Publisert dato',
    hits: 'Visninger',
  };
  return (
    <VideoSearch
      translations={translations}
      fetchVideo={fetchVideo}
      searchVideos={fetchVideos}
      locale="nb"
      onVideoSelect={videoSelect}
      onError={onError}
      enableYouTube
    />
  );
};

export default VideoSearcher;
