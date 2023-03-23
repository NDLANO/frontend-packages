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
import { ButtonV2 } from '@ndla/button';
import { BrightcoveShape, YouTubeShape } from './shapes';

const classes = new BEMHelper({
  name: 'video-search',
  prefix: 'c-',
});

const VideoLoadMoreButton = (props) => {
  const { videos, searching, limit, translations, loadMoreVideos } = props;

  if (!videos || videos.length === 0 || videos.length % limit !== 0) {
    return null;
  }
  return (
    <div {...classes('load-videos')}>
      <ButtonV2 disabled={searching} onClick={loadMoreVideos}>
        {searching ? <div {...classes('spinner')} /> : translations.loadMoreVideos}
      </ButtonV2>
    </div>
  );
};

VideoLoadMoreButton.propTypes = {
  searching: PropTypes.bool.isRequired,
  videos: PropTypes.oneOfType([PropTypes.arrayOf(BrightcoveShape), PropTypes.arrayOf(YouTubeShape)]),
  translations: PropTypes.shape({
    searchPlaceholder: PropTypes.string.isRequired,
    searchButtonTitle: PropTypes.string.isRequired,
    loadMoreVideos: PropTypes.string.isRequired,
  }),
  limit: PropTypes.number.isRequired,
  loadMoreVideos: PropTypes.func.isRequired,
};

export default VideoLoadMoreButton;
