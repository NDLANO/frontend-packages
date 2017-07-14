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
import PreviewVideo from './PreviewVideo';

const classes = new BEMHelper({
  name: 'video-search',
  prefix: 'c-',
});

export default function VideoSearchResult({
  video,
  onVideoClick,
  selectedVideo,
  onSelectVideo,
  locale,
}) {
  const active = selectedVideo && selectedVideo.id === video.id ? 'active' : '';

  return (
    <div key={video.id} {...classes('list-item', active)}>
      <div {...classes('list-item-inner')}>
        <Button stripped onClick={() => onVideoClick(video)}>
          <img
            role="presentation"
            alt="presentation"
            src={video.images.thumbnail.src}
          />
        </Button>
      </div>
      {selectedVideo && selectedVideo.id === video.id
        ? <PreviewVideo image={selectedVideo} onSelectImage={onSelectVideo} locale={locale} />
        : ''}
    </div>
  );
}

VideoSearchResult.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.string.isRequired,
    previewUrl: PropTypes.string.isRequired,
  }),
  onVideoClick: PropTypes.func.isRequired,
  selectedVideo: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
  onSelectVideo: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired,
};
