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
import LicenseBox from '../article/LicenseBox';
import NotionExample from '../molecules/NotionExample';
import NotionBlock from '../molecules/NotionBlock';

const { contentTypes } = constants;

const ArticleAssessmentResource = () => (
  <OneColumn cssModifier="narrow">
    <Article
      // eslint-disable-next-line no-console
      onAddToFavorites={() => console.log('add to favorites')}
      addToFavoritesLabel="Legg til i favoritter"
      removeFromFavoritesLabel="Fjern fra favoritter"
      isFavorite
      article={{
        title: 'Portal for vurdering, engelsk fellesfag',
        introduction:
          'På disse sidene har vi samlet ressurser som kan støtte elever og lærere i arbeidet med vurdering. Ressursene her kan brukes til egenevaluering av elevene og i dialog mellom elev og lærer.',
        published: '24.04.2018',
        content: () => (
          <>
            <p>
              En pitch er en kortvarig framføring av en idé for en potensiell samarbeidspartner eller kunde. I løpet av
              noen få minutter skal du få andre til å <a href="#test">tenne på idéen din og se potensialet</a> i den.
            </p>
            <p>
              En pitch er en kortvarig framføring av en idé for en potensiell samarbeidspartner eller kunde. I løpet av
              noen få minutter skal du få andre til å tenne på idéen din og se potensialet i den.
            </p>
            <p>
              Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den
              filmen du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
            </p>
            <p>
              Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den
              filmen du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
            </p>
            <FigureImage alt="" src="https://api.staging.ndla.no/image-api/raw/42-45210905.jpg" />
            <p>
              En pitch er en kortvarig framføring av en idé for en potensiell samarbeidspartner eller kunde. I løpet av
              noen få minutter skal du få andre til å tenne på idéen din og se potensialet i den.
            </p>
            <NotionBlock type="video" />
            <p>
              Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den
              filmen du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
            </p>
          </>
        ),
        footNotes: '',
        copyright: {
          license: { license: 'CC-BY-SA-4.0' },
          creators: [{ name: 'Frida Forfatter' }, { name: 'Ida Illustratør' }, { name: 'Fred Forfatter' }],
          rightsholders: [{ name: 'Riksarkivet' }],
        },
      }}
      licenseBox={<LicenseBox />}
      competenceGoals={<CompetenceGoalListExample />}
      competenceGoalTypes={['LK20', 'LK06']}
      printUrl={window.location.href}
      icon={<AssessmentResourcesBadge background size="large" />}
      id="mainContentId"
      locale="nb"
      messages={{ label: 'Vurderingsressurs' }}
      modifier={contentTypes.ASSESSMENT_RESOURCES}
      notions={{
        list: [NotionExample],
      }}
    />
    <LayoutItem layout="extend">
      <Resources showTopicHeading />
    </LayoutItem>
  </OneColumn>
);

export default ArticleAssessmentResource;
