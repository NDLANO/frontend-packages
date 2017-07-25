/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* eslint jsx-a11y/media-has-caption: 0 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

const classes = new BEMHelper({
  name: 'audio-component',
  prefix: 'c-',
});

class AudioComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audioSource: undefined,
      audioType: undefined,
    };

    this.loadAudio = this.loadAudio.bind(this);
  }

  loadAudio() {
    this.props
      .fetchAudio(this.props.audio.id)
      .then(result => {
        this.setState({
          audioSource: result.audioFile.url,
          audioType: result.audioFile.mimeType,
        });
      })
      .catch(err => {
        this.props.onError(err);
      });
  }

  render() {
    const { audioSource, audioType } = this.state;
    return (
      <div {...classes()}>
        <audio controls autoPlay onPlay={!audioSource && this.loadAudio}>
          {audioSource
            ? <source src={audioSource} type={audioType} />
            : undefined}
        </audio>
      </div>
    );
  }
}

AudioComponent.propTypes = {
  audio: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
  fetchAudio: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
};

export default AudioComponent;
