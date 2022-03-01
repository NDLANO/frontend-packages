/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { useTranslation } from 'react-i18next';

// @ts-ignore
import { Figure, Notion } from '@ndla/ui';
// @ts-ignore
import { initArticleScripts } from '@ndla/article-scripts';
import { uuid } from '@ndla/util';
import { H5p, Video } from './VisualElements';
// @ts-ignore
import { useRunOnlyOnce } from '../article/useRunOnlyOnce';
// @ts-ignore
import FigureCaptionExample from '../article/FigureCaptionExample';
// @ts-ignore
import FigureImage from '../article/FigureImage';

type Props = {
  type: 'image' | 'video' | 'H5P';
};

const NotionBlock = ({ type }: Props) => {
  const { t } = useTranslation();

  const id = useRunOnlyOnce(uuid(), () => {
    initArticleScripts();
  });

  const figureId = `figure-${id}`;
  const notionId = `notion-${id}`;

  const messages = {
    title: t('title'),
    close: t('close'),
    learnAboutLicenses: t('license.learnMore'),
    source: t('source'),
    rulesForUse: t('license.concept.rules'),
    reuse: t('concept.reuse'),
    download: null,
  };

  return (
    <Figure id={figureId}>
      {type === 'image' && (
        <Notion
          id={notionId}
          title="And"
          text="Ender tilhører andefamilien. I Norge har det vært vanlig å dele endene inn i tre grupper etter levevis: Gressender som spiser planter på grunt vann, dykkender som dykker etter virvelløse dyr, og fiskeender som spiser fisk. Ender ble husdyr i middelhavslandene kort tid før Kristi fødsel. Hos hannen, andriken, er de fire midtre halefjærene bøyd oppover. Som ofte ellers i fugleriket har hannen finere farger enn hunnen. Det finnes en rekke raser og krysninger. På bildet ser vi tamme ender, pekinand."
          imageElement={
            <FigureImage
              hideLicence={true}
              type="full-column"
              hasHiddenCaption
              caption="Stokkand"
              alt="Stokkand. Foto."
              src="https://api.staging.ndla.no/image-api/raw/20081209-095942-ag_0.jpg"
            />
          }>
          <FigureCaptionExample id={id} figureId={figureId} messages={messages.reuse} />
        </Notion>
      )}
      {type === 'video' && (
        <Notion
          id={notionId}
          title="Velferdsteknologi"
          text="I videoen kan du se en introduksjon til hva vi for eksempel mener når vi prater om «velferdsteknologi»."
          visualElement={{
            metaImage: {
              url: 'https://api.staging.ndla.no/image-api/raw/id/52535',
              alt: 'I videoen kan du se en introduksjon til hva vi for eksempel mener når vi prater om «velferdsteknologi».',
            },
            type: 'video',
            element: <Video hideLicence={true} />,
          }}>
          <FigureCaptionExample id={id} figureId={figureId} messages={messages.reuse} />
        </Notion>
      )}
      {type === 'H5P' && (
        <Notion
          id={notionId}
          title="Mikroskop"
          text="er et instrument som brukes for å oppnå forstørrede bilder av objekter som er for små til å kunne betraktes med det blotte øye."
          visualElement={{
            metaImage: {
              url: 'https://api.staging.ndla.no/image-api/raw/optisk_mikroskop-sy029b6c_klipt.jpg',
              alt: 'Mikroskop med fire objektiv. Foto.',
            },
            type: 'other',
            element: <H5p hideLicence={true} />,
          }}>
          <FigureCaptionExample id={id} figureId={figureId} messages={messages.reuse} />
        </Notion>
      )}
    </Figure>
  );
};
export default NotionBlock;
