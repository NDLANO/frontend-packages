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

const classes = new BEMHelper({
  name: 'video-preview',
  prefix: 'c-',
});

export default function PreviewVideo({ video, onVideoPreview }) {
  return (
    <div {...classes()}>
      <Button
        {...classes('close')}
        stripped
        onClick={() => onVideoPreview(undefined)}>
        <Cross />
      </Button>
      <iframe
        {...classes('video')}
        title={video.name}
        src={`//players.brightcove.net/${video.account_id}/BkLm8fT_default/index.html?videoId=${video.id}`}
        allowFullScreen
      />
    </div>
  );
}

PreviewVideo.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    account_id: PropTypes.string.isRequired,
  }),
  onVideoPreview: PropTypes.func.isRequired,
};
