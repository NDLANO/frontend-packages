import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  AudioPlayer,
  Figure,
  FigureCaption,
  FigureLicenseDialog,
} from 'ndla-ui';
import { uuid } from 'ndla-util';
import { getLicenseByAbbreviation } from 'ndla-licenses';
import {
  addCloseDialogClickListeners,
  addShowDialogClickListeners,
  initAudioPlayers,
} from 'ndla-article-scripts';

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
    const license = getLicenseByAbbreviation('by-nc-nd', 'nb');

    const messages = {
      close: 'Lukk',
      rulesForUse: 'Regler for bruk av lydklippet',
      learnAboutLicenses: license.linkText,
      source: 'Kilde',
      title: 'Tittel',
    };

    const caption = 'Familien som spela vekk jula';
    const reuseLabel = 'Bruk lydklipp';
    const authors = [{ type: 'Opphavsmann', name: 'Gary Waters' }];

    const figureId = `figure-${this.id}`;

    return (
      <Figure id={figureId} type="full-column">
        <AudioPlayer
          src="https://staging.api.ndla.no/audio/files/Alltid_Nyheter_nrk128kps.mp3"
          type="audio/mpeg"
          title={caption}
          typeLabel="Hørespill"
        />
        <FigureLicenseDialog
          id={this.id}
          key="details"
          license={license}
          authors={authors}
          origin="https://www.wikimedia.com"
          title={caption}
          messages={messages}>
          <Button outline>Kopier referanse</Button>
          <Button outline>Last ned lydklipp</Button>
        </FigureLicenseDialog>
        <FigureCaption
          figureId={figureId}
          id={this.id}
          key="caption"
          caption={caption}
          reuseLabel={reuseLabel}
          licenseRights={license.rights}
          authors={authors}
        />
      </Figure>
    );
  }
}

AudioExample.propTypes = {
  runScripts: PropTypes.bool,
};

export default AudioExample;
