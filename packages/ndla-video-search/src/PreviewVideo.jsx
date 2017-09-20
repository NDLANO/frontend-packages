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
import { Cross } from 'ndla-ui/icons';
import { BrightcoveShape, YouTubeShape } from './shapes';

const classes = new BEMHelper({
  name: 'video-preview',
  prefix: 'c-',
});

export default function PreviewVideo({ video, onVideoPreview, selectedType }) {
  const iframe = () => {
    if (selectedType === 'youtube') {
      return (
        <iframe
          {...classes('video')}
          title={video.title}
          src={video.pagemap.videoobject[0].embedurl}
          allowFullScreen
        />
      );
    }
    return (
      <iframe
        {...classes('video')}
        title={video.name}
        src={`//players.brightcove.net/${video.account_id}/BkLm8fT_default/index.html?videoId=${video.id}`}
        allowFullScreen
      />
    );
  };

  return (
    <div {...classes()}>
      <Button
        {...classes('close')}
        stripped
        onClick={() => onVideoPreview(undefined)}>
        <Cross />
      </Button>
      {iframe()}
    </div>
  );
}

PreviewVideo.propTypes = {
  video: PropTypes.oneOfType([BrightcoveShape, YouTubeShape]),
  selectedType: PropTypes.oneOf(['brightcove', 'youtube']),
  onVideoPreview: PropTypes.func.isRequired,
};
