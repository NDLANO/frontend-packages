import { useRef } from 'react';
import { AudioPlayer, Figure } from '@ndla/ui';
import { initArticleScripts } from '@ndla/article-scripts';
import { uuid } from '@ndla/util';
import { useTranslation } from 'react-i18next';
import FigureCaptionExample from './FigureCaptionExample';
import { useRunOnlyOnce } from './useRunOnlyOnce';

const AudioExample = ({ showSubtitle, showDescription, showImage, showTextVersion }) => {
  const { t } = useTranslation();
  const id = useRunOnlyOnce(uuid(), () => {
    initArticleScripts();
  });

  const imageId = useRef(uuid());

  const messages = {
    rulesForUse: t('license.audio.rules'),
    reuse: t('audio.reuse'),
    download: t('audio.download'),
  };

  const imageMessages = {
    rulesForUse: t('license.images.rules'),
    zoomImageButtonLabel: t('license.images.itemImage.zoomImageButtonLabel'),
    reuse: t('image.reuse'),
    download: t('image.download'),
    modelPermission: 'Personen(e) på bildet har godkjent at det kan brukes videre.',
  };

  const figureId = `figure-${id}`;

  const description =
    'Se gjerne nærmere på hvordan andre kjente fortellere griper saken an. Siri Knudsen i NRK P3 lot seg for eksempel inspirere av Asbjørnsen og Moe da hun jobbet med sin radiodokumentar om artisten Truls Heggero. Se gjerne nærmere på hvordan andre kjente fortellere griper saken an. Siri Knudsen i NRK P3 lot seg for eksempel inspirere av Asbjørnsen og Moe da hun jobbet med sin radiodokumentar om artisten Truls Heggero.';

  const TextVersion = (
    <>
      <p>
        So, I had graduated seven years ago from Berkeley with a dual degree in molecular and cell biology and
        linguistics, and I had gone to a career fair here on campus, where I'd gotten an interview with a start-up
        called Theranos. And at the time, there wasn't really that much information about the company, but the little
        that was there was really impressive. Essentially, what the company was doing was creating a medical device
        where you would be able to run your entire blood panel on a finger-stick of blood. So you wouldn't have to get a
        big needle stuck in your arm in order to get your blood test done. So this was interesting not only because it
        was less painful,
      </p>
      <p>
        And this was confirmed in an interview that the founder, Elizabeth Holmes, had said in the Wall Street Journal.
        "The reality within our health-care system today is that when someone you care about gets really sick, by the
        time you find out it's [most often] too late to do anything about it, It's heartbreaking." This was a moon shot
        that I really wanted to be a part of and I really wanted to help build.{' '}
      </p>
    </>
  );
  return (
    <Figure id={figureId} type="full-column">
      <AudioPlayer
        src="https://api.staging.ndla.no/audio/files/Alltid_Nyheter_nrk128kps.mp3"
        title="Den gode lydhistoria"
        subtitle={showSubtitle && { title: 'Serienavn', url: '#' }}
        description={showDescription && description}
        img={
          showImage && {
            url: 'https://api.ndla.no/image-api/raw/BagNsXHq.jpg?height=400',
            alt: 'Mann blir målt og observert. Omgitt av ulike diagrammer. Illustrasjon.',
          }
        }
        textVersion={showTextVersion && TextVersion}
      />
      <FigureCaptionExample
        figureId={figureId}
        id={id}
        messages={messages}
        authors={[{ type: 'Opphaver', name: 'Siri Knudsen' }]}
      />
      {showImage && (
        <div id={imageId.current}>
          <FigureCaptionExample
            figureId={imageId.current}
            id={imageId.current}
            messages={imageMessages}
            authors={[{ type: 'Opphaver', name: 'Maxim Usik' }]}
          />
        </div>
      )}
    </Figure>
  );
};

export default AudioExample;
