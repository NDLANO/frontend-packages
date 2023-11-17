import { Component } from 'react';
import { AudioEmbed, AudioPlayer } from '@ndla/ui';

const embedData = {
  resource: 'audio' as const,
  resourceId: '3000',
  type: 'standard',
  url: 'https://api.test.ndla.no/audio-api/v1/audio/3000',
};

const successData = {
  id: 3000,
  revision: 1,
  title: { title: "\nAin't I a Woman? by Sojourner Truth ", language: 'nb' },
  audioFile: {
    url: 'https://api.test.ndla.no/audio/files/ZZ1gkRc7.mp3',
    mimeType: 'audio/mpeg',
    fileSize: 3025206,
    language: 'nb',
  },
  copyright: {
    license: {
      license: 'CC-BY-SA-4.0',
      description: 'Creative Commons Attribution-ShareAlike 4.0 International',
      url: 'https://creativecommons.org/licenses/by-sa/4.0/',
    },
    origin: '',
    creators: [{ type: 'originator', name: 'Radio Metro AS' }],
    processors: [],
    rightsholders: [],
    processed: false,
  },
  tags: { tags: ["Ain't I a Woman?", 'Sojourner Truth', 'speech', 'abolitionist'], language: 'nb' },
  supportedLanguages: ['nb'],
  audioType: 'standard',
  manuscript: { manuscript: '', language: 'nb' },
  created: '2022-02-28T17:09:28Z',
  updated: '2022-02-28T17:09:28Z',
};

const audioEmbedMetaData = {
  resource: 'audio' as const,
  status: 'success' as const,
  embedData: embedData,
  data: successData,
} as const;

class AudioExample extends Component {
  render() {
    return <AudioEmbed embed={audioEmbedMetaData} />;
  }
}

const AudioPlayerExamples = () => (
  <div>
    <h2 className="u-heading">Lydavspiller med lisensinformasjon</h2>
    <AudioExample />
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
