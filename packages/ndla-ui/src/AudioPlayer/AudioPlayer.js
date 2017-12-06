import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

/* eslint jsx-a11y/media-has-caption: 0 */


const classes = new BEMHelper({
  name: 'audio-player',
  prefix: 'c-',
});

const AudioPlayer = ({ type, src, title, description }) => (
  <figure {...classes()}>
    <audio type={type} src={src} title={title} />
    <div {...classes('controls')}>
      <button {...classes('play')}>Play</button>
      <button {...classes('pause')}>Pause</button>
      <div {...classes('time')}>0</div>
      <progress {...classes('progress')} value="0" max="1" />
    </div>
    <figcaption>
      {description}
    </figcaption>
  </figure>
);

AudioPlayer.propTypes = {
  type: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default AudioPlayer;
