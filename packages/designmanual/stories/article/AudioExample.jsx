import React from 'react';
import { AudioPlayer, Figure } from '@ndla/ui';
import { uuid } from '@ndla/util';
import { getLicenseByAbbreviation } from '@ndla/licenses';
import { initArticleScripts } from '@ndla/article-scripts';
import { FigureCaptionExample } from './FigureCaptionExample';
import { useRunOnlyOnce } from './useRunOnlyOnce';

function AudioExample() {
  const id = useRunOnlyOnce(uuid(), () => {
    initArticleScripts();
  });
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

  const figureId = `figure-${id}`;

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
        id={id}
        messages={messages}
      />
    </Figure>
  );
}

AudioExample.propTypes = {};

export default AudioExample;
