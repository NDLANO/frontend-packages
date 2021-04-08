import React from 'react';
import { initArticleScripts } from '@ndla/article-scripts';
import { injectT } from '@ndla/i18n';
import { AudioPlayer, Figure } from '@ndla/ui';
import { uuid } from '@ndla/util';
import PropTypes from 'prop-types';
import FigureCaptionExample from './FigureCaptionExample';
import { useRunOnlyOnce } from './useRunOnlyOnce';

function AudioExample({ t }) {
  const id = useRunOnlyOnce(uuid(), () => {
    initArticleScripts();
  });

  const messages = {
    rulesForUse: t('license.audio.rules'),
    reuse: t('audio.reuse'),
    download: t('audio.download'),
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
      <FigureCaptionExample caption={caption} figureId={figureId} id={id} messages={messages} />
    </Figure>
  );
}

AudioExample.propTypes = {
  t: PropTypes.func.isRequired,
};

export default injectT(AudioExample);
