import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AudioPlayer, Figure } from '@ndla/ui';
import { uuid } from '@ndla/util';
import { getLicenseByAbbreviation } from '@ndla/licenses';
import {
  addCloseDialogClickListeners,
  addShowDialogClickListeners,
  initAudioPlayers,
} from '@ndla/article-scripts';
import { FigureCaptionExample } from './FigureCaptionExample';

class AudioExample extends Component {
  constructor(props) {
    super(props);
    this.id = uuid();
  }

  componentDidMount() {
    if (this.props.runScripts) {
      addShowDialogClickListeners();
      addCloseDialogClickListeners();
      initAudioPlayers();
    }
  }

  render() {
    const license = getLicenseByAbbreviation('CC-BY-ND-4.0', 'nb');

    const messages = {
      close: 'Lukk',
      rulesForUse: 'Regler for bruk av lydklippet',
      learnAboutLicenses: license.linkText,
      source: 'Kilde',
      title: 'Tittel',
      mediaType: 'lydklipp',
    };

    const caption = 'Familien som spela vekk jula';

    const figureId = `figure-${this.id}`;

    return (
      <Figure id={figureId} type="full-column">
        <AudioPlayer
          src="https://staging.api.ndla.no/audio/files/Alltid_Nyheter_nrk128kps.mp3"
          type="audio/mpeg"
          title={caption}
          typeLabel="Hørespill"
        />
        <FigureCaptionExample
          caption={caption}
          figureId={figureId}
          id={this.id}
          messages={messages}
        />
      </Figure>
    );
  }
}

AudioExample.propTypes = {
  runScripts: PropTypes.bool,
};

export default AudioExample;
