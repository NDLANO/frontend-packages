/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';

import { OneColumn, LayoutItem, Article, AssessmentResourcesBadge, constants } from '@ndla/ui';

import { CompetenceGoalListExample } from '../organisms/CompetenceGoalsExample';
import Resources from '../molecules/resources';
import FigureImage from '../article/FigureImage';
import FigureWithLicense from '../article/FigureWithLicense';

const { contentTypes } = constants;

const ArticleAssessmentResource = () => (
  <OneColumn cssModifier="narrow">
    <Article
      article={{
        title: 'Portal for vurdering, engelsk fellesfag',
        introduction:
          'På disse sidene har vi samlet ressurser som kan støtte elever og lærere i arbeidet med vurdering. Ressursene her kan brukes til egenevaluering av elevene og i dialog mellom elev og lærer.',
        published: '24.04.2018',
        content: () => (
          <>
            <p>
              En pitch er en kortvarig framføring av en idé for en potensiell samarbeidspartner
              eller kunde. I løpet av noen få minutter skal du få andre til å{' '}
              <a href="#test">tenne på idéen din og se potensialet</a> i den.
            </p>
            <p>
              En pitch er en kortvarig framføring av en idé for en potensiell samarbeidspartner
              eller kunde. I løpet av noen få minutter skal du få andre til å tenne på idéen din og
              se potensialet i den.
            </p>
            <p>
              Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og
              historien i den filmen du planlegger å lage, tydeligere for både deg selv og dem du
              eventuelt jobber sammen med i klassen.
            </p>
            <p>
              Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og
              historien i den filmen du planlegger å lage, tydeligere for både deg selv og dem du
              eventuelt jobber sammen med i klassen.
            </p>
            <FigureImage alt="" src="https://staging.api.ndla.no/image-api/raw/42-45210905.jpg" />
            <p>
              En pitch er en kortvarig framføring av en idé for en potensiell samarbeidspartner
              eller kunde. I løpet av noen få minutter skal du få andre til å tenne på idéen din og
              se potensialet i den.
            </p>
            <p>
              Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og
              historien i den filmen du planlegger å lage, tydeligere for både deg selv og dem du
              eventuelt jobber sammen med i klassen.
            </p>
          </>
        ),
        footNotes: '',
        copyright: {
          license: { license: 'CC-BY-SA-4.0' },
          creators: [
            { name: 'Cecilie Isaksen Eftedal' },
            { name: 'Siv Mundal' },
            { name: 'Pål Frønsdal' },
          ],
          rightsholders: [{ name: 'Riksarkivet' }],
        },
      }}
      competenceGoals={<CompetenceGoalListExample />}
      competenceGoalTypes={['LK20', 'LK06']}
      copyPageUrlLink={window.location.href}
      icon={<AssessmentResourcesBadge background size="large" />}
      id="mainContentId"
      locale="nb"
      messages={{ label: 'Vurderingsressurs' }}
      modifier={contentTypes.ASSESSMENT_RESOURCES}
      notions={{
        list: [
          {
            id: 1,
            title: 'And',
            text:
              'Ender tilhører andefamilien. I Norge har det vært vanlig å dele endene inn i tre grupper etter levevis: Gressender som spiser planter på grunt vann, dykkender som dykker etter virvelløse dyr, og fiskeender som spiser fisk. Ender ble husdyr i middelhavslandene kort tid før Kristi fødsel. Hos hannen, andriken, er de fire midtre halefjærene bøyd oppover. Som ofte ellers i fugleriket har hannen finere farger enn hunnen. Det finnes en rekke raser og krysninger. På bildet ser vi tamme ender, pekinand.',
            image: {
              url: 'https://api.ndla.no/image-api/raw/id/40164?width=660',
              alt: 'And',
            },
            labels: ['Naturbruk Vg1'],
            media: (
              <FigureWithLicense
                type="full-column"
                resizeIframe
                caption="Utholdenhet - animasjon av oksygentransporten">
                <iframe
                  title="Video: Utholdenhet - animasjon av oksygentransporten"
                  height="270"
                  width="480"
                  frameBorder="0"
                  src="https://players.brightcove.net/4806596774001/default_default/index.html?videoId=ref:19011"
                  allowFullScreen
                />
              </FigureWithLicense>
            ),
            authors: [{ name: 'Fornavn Etternavn' }],
            license: 'CC-BY-SA-4.0',
            linkedTo: [{ label: 'Fag' }, { label: 'Fag' }],
            onReferenceClick: e => console.log(e), // eslint-disable-line no-console
          },
        ],
        related: [
          { url: '', label: 'Vis flere begreper til tema politikk' },
          { url: '', label: 'Vis flere begreper til tema politikk' },
          { url: '', label: 'Vis tilknyttede læringsressurser' },
        ],
      }}
    />
    <LayoutItem layout="extend">
      <Resources showTopicHeading />
    </LayoutItem>
  </OneColumn>
);

export default ArticleAssessmentResource;
