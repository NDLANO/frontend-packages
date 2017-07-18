/**
 * Copyright (c) 2016-present, NDLA.
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
  name: 'audio-preview',
  prefix: 'c-'
});

export default function PreviewAudio({ audio, onSelectAudio, locale }) {
  return (
    <div { ...classes() }>
      <h1>{ audio.titles[0].title }</h1>
      <p>{ audio.url }</p>
    </div>
  );
}

PreviewAudio.propTypes = {
  audio: PropTypes.object.isRequired,
  onSelectAudio: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired
};
