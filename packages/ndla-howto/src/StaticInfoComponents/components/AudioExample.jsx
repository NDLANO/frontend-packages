import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  AudioPlayer,
  Figure,
  FigureCaption,
  FigureLicenseDialog,
} from '@ndla/ui';
import Button from '@ndla/button';
import { uuid } from '@ndla/util';
import { getLicenseByAbbreviation } from '@ndla/licenses';
import {
  addCloseDialogClickListeners,
  addShowDialogClickListeners,
} from '@ndla/article-scripts';

class AudioExample extends Component {
  constructor(props) {
    super(props);
    this.id = uuid();
  }

  componentDidMount() {
    if (this.props.runScripts) {
      addShowDialogClickListeners();
      addCloseDialogClickListeners();
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
    };

    const caption = 'Familien som spela vekk jula';
    const reuseLabel = 'Bruk lydklipp';
    const authors = [{ type: 'Opphaver', name: 'Gary Waters' }];

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
          locale="nb"
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

const AudioPlayerExamples = () => (
  <div>
    <h2 className="u-heading">Lydavspiller med lisensinformasjon</h2>
    <AudioExample runScripts />
    <h2 className="u-heading">Lydavspiller for bruk ved uttale</h2>
    <table className="c-table o-table">
      <thead>
        <tr>
          <th>Forenklet</th>
          <th>Trad.</th>
          <th>Pinyin</th>
          <th>Ordkl.</th>
          <th>Oversettelse</th>
          <th>Uttale</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>旅游</td>
          <td>旅遊</td>
          <td>lǚyóu</td>
          <td>v/n</td>
          <td>å reise (rundt); å dra på tur; reise(liv)</td>
          <td>
            <AudioPlayer
              src="https://staging.api.ndla.no/audio/files/shu3jia4.mp3"
              type="audio/mpeg"
              speech
              title="Oversettelse"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default AudioPlayerExamples;
