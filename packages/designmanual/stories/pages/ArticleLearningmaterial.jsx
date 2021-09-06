/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';

import { OneColumn, LayoutItem, Article, SubjectMaterialBadge, constants } from '@ndla/ui';

import RelatedArticleListExample from '../article/RelatedArticleListExample';
import Resources from '../molecules/resources';

import { CompetenceGoalListExample } from '../organisms/CompetenceGoalsExample';
import FigureImage from '../article/FigureImage';
import LicenseBox from '../article/LicenseBox';
import NotionExample from '../molecules/NotionExample';

const { contentTypes } = constants;

const ArticleLearningMaterial = () => (
  <OneColumn>
    <Article
      article={{
        title: 'Artikkel fagstoff',
        introduction: 'Du har en kjempegod idé til en kortfilm. Men det koster mange penger å produsere filmen.',
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
            <FigureImage alt="" src="https://staging.api.ndla.no/image-api/raw/42-45210905.jpg" />
            <p>
              En pitch er en kortvarig framføring av en idé for en potensiell samarbeidspartner eller kunde. I løpet av
              noen få minutter skal du få andre til å tenne på idéen din og se potensialet i den.
            </p>
            <p>
              Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den
              filmen du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
            </p>
            <RelatedArticleListExample />
          </>
        ),
        footNotes: '',
        copyright: {
          license: { license: 'CC-BY-SA-4.0' },
          creators: [{ name: 'Cecilie Isaksen Eftedal' }, { name: 'Siv Mundal' }, { name: 'Pål Frønsdal' }],
          rightsholders: [{ name: 'Riksarkivet' }],
        },
      }}
      licenseBox={<LicenseBox />}
      competenceGoals={<CompetenceGoalListExample />}
      competenceGoalTypes={['LK20', 'LK06']}
      copyPageUrlLink={window.location.href}
      printUrl={window.location.href}
      icon={<SubjectMaterialBadge background size="large" />}
      id="mainContentId"
      locale="nb"
      messages={{ label: 'Fagstoff' }}
      modifier={contentTypes.SUBJECT_MATERIAL}
      notions={{
        list: [NotionExample],
      }}
    />
    <LayoutItem layout="extend">
      <Resources showTopicHeading />
    </LayoutItem>
  </OneColumn>
);

export default ArticleLearningMaterial;
