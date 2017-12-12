import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AudioPlayer, Figure, FigureCaption, FigureDetails } from 'ndla-ui';
import { uuid } from 'ndla-util';
import { getLicenseByAbbreviation } from 'ndla-licenses';
import {
  addCloseFigureDetailsClickListeners,
  addShowFigureDetailsClickListeners,
  initAudioPlayers,
} from 'ndla-article-scripts';

class AudioExample extends Component {
  componentDidMount() {
    if (this.props.runScripts) {
      addShowFigureDetailsClickListeners();
      addCloseFigureDetailsClickListeners();
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

    const captionView = [
      <FigureCaption
        key="caption"
        caption={caption}
        reuseLabel={reuseLabel}
        licenseRights={license.rights}
        authors={authors}
      />,
      <FigureDetails
        id={uuid()}
        key="details"
        licenseRights={license.rights}
        authors={authors}
        licenseUrl={license.url}
        origin="https://www.wikimedia.com"
        title={caption}
        messages={messages}>
        <button
          className="c-button c-button--outline c-figure-license__button"
          type="button">
          Kopier referanse
        </button>
        <button
          className="c-button c-button--outline c-figure-license__button"
          type="button">
          Last ned lydklipp
        </button>
      </FigureDetails>,
    ];

    return (
      <Figure
        type="full-column"
        captionView={captionView}>
        <AudioPlayer
          src="https://staging.api.ndla.no/audio/files/Alltid_Nyheter_nrk128kps.mp3"
          type="audio/mpeg"
          title={caption}
          typeLabel="Hørespill"
        />
      </Figure>
    );
  }
}

AudioExample.propTypes = {
  runScripts: PropTypes.bool,
};

export default AudioExample;
