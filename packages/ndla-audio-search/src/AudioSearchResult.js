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
    <div key={ audio.id } {...classes('list-item', active) }>
      <div { ...classes('list-item-inner') }>
        <Button stripped onClick={ () => onAudioClick(audio) }>
          Hola
        </Button>
      </div>
      {
        selectedAudio && selectedAudio.id === audio.id
        ? <p>PREVIEW</p>
        : ''
      }
    </div>
  );
}

AudioSearchResult.propTypes = {
  audio: PropTypes.shape({
    id: PropTypes.string.isRequired
  }),
  onAudioClick: PropTypes.func.isRequired,
  selectedAudio: PropTypes.shape({
    id: PropTypes.string.isRequired
  }),
  onSelectAudio: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired
};