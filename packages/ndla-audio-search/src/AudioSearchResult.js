/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'ndla-ui';
import BEMHelper from 'react-bem-helper';
import PreviewAudio from './PreviewAudio';

const classes = new BEMHelper({
  name: 'audio-search',
  prefix: 'c-'
});

export default function AudioSearchResult({
  audio,
  onAudioClick,
  selectedAudio,
  onSelectAudio,
  locale
                                          }) {
  const active = selectedAudio && selectedAudio.id === audio.id ? 'active' : '';

  return (
    <div key={ audio.id } { ...classes('list-item', active) }>
      <PreviewAudio
        audio={ audio }
        onSelectAudio={ onSelectAudio }
        locale={ locale }
      />
    </div>
  );
}

AudioSearchResult.propTypes = {
  audio: PropTypes.shape({
    id: PropTypes.number.isRequired
  }),
  onAudioClick: PropTypes.func.isRequired,
  selectedAudio: PropTypes.shape({
    id: PropTypes.string.isRequired
  }),
  onSelectAudio: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired
};