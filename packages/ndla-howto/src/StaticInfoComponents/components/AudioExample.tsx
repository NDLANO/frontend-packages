import { Component } from 'react';

import { AudioPlayer, Figure, FigureCaption, FigureLicenseDialog } from '@ndla/ui';
import { ButtonV2 } from '@ndla/button';
import { uuid } from '@ndla/util';
import { getLicenseByAbbreviation } from '@ndla/licenses';
//@ts-ignore
import { addCloseDialogClickListeners, addShowDialogClickListeners } from '@ndla/article-scripts';

interface Props {
  runScripts?: boolean;
}
class AudioExample extends Component<Props> {
  id: string;
  constructor(props: Props) {
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
        <AudioPlayer src="https://api.staging.ndla.no/audio/files/Alltid_Nyheter_nrk128kps.mp3" title={caption} />
        <FigureLicenseDialog
          id={this.id}
          locale="nb"
          key="details"
          license={license}
          authors={authors}
          origin="https://www.wikimedia.com"
          title={caption}
          messages={messages}
        >
          <ButtonV2 variant="outline">Kopier referanse</ButtonV2>
          <ButtonV2 variant="outline">Last ned lydklipp</ButtonV2>
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
            <AudioPlayer src="https://api.staging.ndla.no/audio/files/shu3jia4.mp3" speech title="Oversettelse" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default AudioPlayerExamples;
