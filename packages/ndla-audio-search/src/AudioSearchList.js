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
import AudioSearchResult from './AudioSearchResult';

const classes = new BEMHelper({
  name: 'audio-search-list',
  prefix: 'c-',
});

export default function AudioSearchList({
  audios,
  searching,
  locale,
  translations,
  onError,
  fetchAudio,
  onAudioSelect,
}) {
  if ((!audios || audios.length === 0) && !searching) {
    return <p>{translations.noResults}</p>;
  }
  if (searching && !(audios.length > 0)) {
    return <div {...classes('result-spinner')} />;
  }
  return (
    <div {...classes('list')}>
      {audios.map(audio => (
        <AudioSearchResult
          key={audio.id}
          audio={audio}
          fetchAudio={fetchAudio}
          onError={onError}
          locale={locale}
          translations={translations}
          onAudioSelect={onAudioSelect}
        />
      ))}
    </div>
  );
}

AudioSearchList.propTypes = {
  audios: PropTypes.array.isRequired,
  searching: PropTypes.bool.isRequired,
  locale: PropTypes.string.isRequired,
  translations: PropTypes.shape({
    noResults: PropTypes.string.isRequired,
    useAudio: PropTypes.string.isRequired,
  }),
  onError: PropTypes.func.isRequired,
  fetchAudio: PropTypes.func.isRequired,
  onAudioSelect: PropTypes.func.isRequired,
};
