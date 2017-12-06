import React, { Component } from 'react';
import { AudioPlayer } from 'ndla-ui';
import { initAudioPlayers } from 'ndla-article-scripts';
import { getLicenseByAbbreviation } from 'ndla-licenses';

const license = getLicenseByAbbreviation('by-nc-nd', 'nb');


class AudioExample extends Component {
  componentDidMount() {
    initAudioPlayers();
  }

  render() {
    return (
      <AudioPlayer
        src="https://staging.api.ndla.no/audio/files/Alltid_Nyheter_nrk128kps.mp3"
        type="audio/mpeg"
        title="Tittel på lydklipp"
        caption="Beskrivelse av lydklipp"
        licenseRights={license.rights}
        author="Gary Waters"
      />
    );
  }
}

export default AudioExample;
