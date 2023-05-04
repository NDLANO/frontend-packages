/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* eslint jsx-a11y/media-has-caption: 0 */

import { IAudioMetaInformation } from '@ndla/types-backend/audio-api';
import React, { Component } from 'react';

interface Props {
  audio: { id: number };
  fetchAudio: (id: number) => Promise<IAudioMetaInformation>;
  onError: (err: any) => void;
}

interface State {
  audioSource?: string;
  audioType?: string;
}

class AudioBar extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      audioSource: undefined,
      audioType: undefined,
    };

    this.loadAudio = this.loadAudio.bind(this);
  }

  componentDidMount() {
    this.loadAudio();
  }

  loadAudio() {
    const { fetchAudio, audio, onError } = this.props;
    fetchAudio(audio.id)
      .then((result) => {
        this.setState({
          audioSource: result.audioFile.url,
          audioType: result.audioFile.mimeType,
        });
      })
      .catch((err) => {
        onError(err);
      });
  }

  render() {
    const { audioSource, audioType } = this.state;
    return <audio controls>{audioSource && <source src={audioSource} type={audioType} />}</audio>;
  }
}

export default AudioBar;
