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
import { uuid, tagsI18N } from 'ndla-util';


const classes = new BEMHelper({
  name: 'video-preview',
  prefix: 'c-',
});

const preferdLocales = ['nb', 'nn', 'en'];

export default function PreviewVideo({ video, onSelectVideo, locale }) {
  return (
    <div {...classes()}>
      <p>{video.name}</p>
    </div>
  );
}

PreviewVideo.propTypes = {
  video: PropTypes.object.isRequired,
  onSelectVideo: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired,
};
