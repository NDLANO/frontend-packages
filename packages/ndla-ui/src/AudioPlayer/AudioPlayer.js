import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { Video } from 'ndla-icons/editor';

import LicenseByline from '../LicenseByline';


/* eslint jsx-a11y/media-has-caption: 0 jsx-a11y/no-noninteractive-tabindex: 0 */

const classes = new BEMHelper({
  name: 'audio-player',
  prefix: 'c-',
});

const AudioPlayer = ({
  type,
  src,
  title,
  caption,
  licenseRights,
  author
}) => (
  <figure {...classes()}>
    <audio type={type} src={src} title={title} preload="metadata" />
    <div {...classes('controls')}>
      <button {...classes('play')}>
        <span {...classes('play-icon')}><Video /></span>
        <span {...classes('pause-icon')}><Video /></span>
      </button>
      <div {...classes('time')}>0:00</div>
      <div {...classes('progress')} tabIndex="0">
        <div {...classes('progress-background')} />
        <div {...classes('progress-played')} data-value="0" />
      </div>
    </div>
    <figcaption {...classes('caption')}>
      <div {...classes('info')}>
        {caption}
      </div>
      <LicenseByline licenseRights={licenseRights}>
        <span {...classes('author')}>{author}</span>
      </LicenseByline>
    </figcaption>
  </figure>
);

AudioPlayer.propTypes = {
  type: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  licenseRights: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AudioPlayer;
