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
import { Play, Pause, VolumeUp } from '@ndla/icons/common';

/* eslint jsx-a11y/media-has-caption: 0 jsx-a11y/no-noninteractive-tabindex: 0 */

const classes = new BEMHelper({
  name: 'audio-player',
  prefix: 'c-',
});

const stopPropagation = evt => {
  evt.preventDefault();
  evt.stopPropagation();
};

const AudioPlayer = ({ type, src, title, speech }) => {
  if (speech) {
    return (
      <section {...classes('', 'speech')}>
        <audio type={type} src={src} title={title} preload="metadata" />
        <button type="button" {...classes('play')} onClick={stopPropagation}>
          <VolumeUp role="img" aria-label="play" title="play" />
        </button>
      </section>
    );
  }

  return (
    <section {...classes()}>
      <h1 {...classes('title')}>{title}</h1>
      <audio type={type} src={src} title={title} preload="metadata" />
      <div {...classes('controls')}>
        <button type="button" {...classes('play')} onClick={stopPropagation}>
          <span {...classes('play-icon')}>
            <Play role="img" aria-label="play" title="play" />
          </span>
          <span {...classes('pause-icon')}>
            <Pause role="img" aria-label="pause" title="play" />
          </span>
        </button>
        <div {...classes('time')}>0:00</div>
        <div {...classes('progress')} tabIndex="0">
          <div {...classes('progress-background')} />
          <div {...classes('progress-played')} data-value="0" />
        </div>
      </div>
    </section>
  );
};

AudioPlayer.propTypes = {
  type: PropTypes.string.isRequired,
  typeLabel: PropTypes.string,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  speech: PropTypes.bool,
};

AudioPlayer.defaultProps = {
  speech: false,
};

export default AudioPlayer;
