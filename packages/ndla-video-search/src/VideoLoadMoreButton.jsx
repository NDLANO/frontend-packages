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
import { Button } from 'ndla-ui';

const classes = new BEMHelper({
  name: 'video-search',
  prefix: 'c-',
});

const VideoLoadMoreButton = props => {
  const { videos, searching, limit, translations, loadMoreVideos } = props;

  if (!videos || videos.length === 0 || videos.length % limit !== 0) {
    console.log(videos.length);
    return null;
  }
  return (
    <div {...classes('load-videos')}>
      <Button disabled={searching} onClick={loadMoreVideos}>
        {searching
          ? <div {...classes('spinner')} />
          : translations.loadMoreVideos}
      </Button>
    </div>
  );
};

VideoLoadMoreButton.propTypes = {
  searching: PropTypes.bool.isRequired,
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
  limit: PropTypes.number.isRequired,
  loadMoreVideos: PropTypes.func.isRequired,
};

export default VideoLoadMoreButton;
