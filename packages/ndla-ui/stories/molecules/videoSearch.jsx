
/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';

import VideoSearch from 'ndla-video-search';
import { brightCoveMock } from '../../dummydata';

const fetchVideos = () => new Promise((resolve) => {
  resolve(brightCoveMock);
});

const fetchVideo = () => new Promise((resolve) => {
  resolve(brightCoveMock);
});

export const ImageSearcher = () => {
  const videoSelect = (video) => {
    console.log(video);
  };

  const onError = (err) => {
    console.error(err);
  };

  return (
    <VideoSearch
      searchPlaceholder="Søk i videoer"
      searchButtonTitle="Søk"
      fetchImage={fetchVideo}
      searchVideos={fetchVideos}
      locale="nb"
      onVideoSelect={videoSelect}
      onError={onError}
    />
  );
};

export default ImageSearcher;
