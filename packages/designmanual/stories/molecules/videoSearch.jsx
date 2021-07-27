/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';

import VideoSearch from '@ndla/video-search';
import { firstBrightcoveList, firstYouTubeList, secondBrightcoveList, secondYouTubeList } from '../../dummydata';

const firstDummyData = {
  brightcove: firstBrightcoveList,
  youtube: firstYouTubeList,
};

const secondDummyData = {
  brightcove: secondBrightcoveList,
  youtube: secondYouTubeList,
};

const fetchVideos = (query, type) =>
  new Promise((resolve) => {
    if (query.offset > 0 || query.page > 1) {
      return setTimeout(() => resolve(secondDummyData[type]), 1000);
    }
    return setTimeout(() => resolve(firstDummyData[type]), 1000);
  });

export const VideoSearcher = () => {
  const videoSelect = (video, type = 'brightcove') => {
    console.log(video, type); // eslint-disable-line no-console
  };

  const onError = (err) => {
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
    duration: 'Varighet',
    interactioncount: 'Visninger',
  };
  return (
    <VideoSearch
      translations={translations}
      searchVideos={fetchVideos}
      locale="nb"
      onVideoSelect={videoSelect}
      onError={onError}
      enabledSources={['Brightcove']}
    />
  );
};

export default VideoSearcher;
