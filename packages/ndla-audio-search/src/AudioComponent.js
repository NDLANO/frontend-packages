/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { Button } from 'ndla-ui';

const classes = new BEMHelper({
  name: 'audio-component',
  prefix: 'c-'
});

class AudioComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
      audioSource: undefined
		};

    this.loadAudio = this.loadAudio.bind(this);
	}

	loadAudio() {
		this.props.fetchAudio(this.props.audio.id)
      .then(result => {
        this.setState({
          audioSource:
            <source
              src={ result.audioFiles[0].url }
              type={ result.audioFiles[0].mimeType }
            />
        });
      })
      .catch(err => {
        this.props.onError(err);
      });
	}

	render() {
		const { audioSource } = this.state;

		return (
			<div { ...classes() }>
        <audio
          autoPlay
          controls
          onPlay={ this.loadAudio }
        > { audioSource }
        </audio>
			</div>
		);
	}
}

AudioComponent.propTypes = {
	audio: PropTypes.object.isRequired,
	fetchAudio: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired
};

export default AudioComponent;
