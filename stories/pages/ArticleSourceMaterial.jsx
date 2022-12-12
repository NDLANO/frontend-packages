/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';

import { OneColumn, LayoutItem, Article, SourceMaterialBadge, constants } from '@ndla/ui';

import FigureImage from '../article/FigureImage';
import RelatedArticleListExample from '../article/RelatedArticleListExample';

import { CompetenceGoalListExample } from '../organisms/CompetenceGoalsExample';
import Resources from '../molecules/resources';
import LicenseBox from '../article/LicenseBox';
import NotionExample from '../molecules/NotionExample';

const { contentTypes } = constants;

const ArticleSourceMaterial = ({ addToFavoritesLabel, removeFromFavoritesLabel, onAddToFavorites, isFavorite }) => (
  <OneColumn>
    <Article
      addToFavoritesLabel={addToFavoritesLabel}
      removeFromFavoritesLabel={removeFromFavoritesLabel}
      onAddToFavorites={onAddToFavorites}
      isFavorite={isFavorite}
      article={{
        title: 'Artikkel kildemateriale',
        introduction: 'Du har en kjempegod idé til en kortfilm. Men det koster mange penger å produsere filmen.',
        published: '24.04.2018',
        content: () => (
          <>
            <FigureImage
              alt=""
              src="https://api.staging.ndla.no/image-api/raw/42-45210905.jpg"
              type="left"
              caption=""
            />
            <p>
              Du har en kjempegod idé til en kortfilm. Men det koster mange penger å produsere filmen. Derfor er du
              avhengig av at noen tenner på idéen din og bestemmer seg for å bruke ressurser på nettopp dette
              prosjektet.
            </p>
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
            <FigureImage alt="" src="https://api.staging.ndla.no/image-api/raw/42-45210905.jpg" caption="" />
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
          creators: [{ name: 'Frida Forfatter' }, { name: 'Ida Illustratør' }, { name: 'Fred Forfatter' }],
          rightsholders: [{ name: 'Riksarkivet' }],
        },
      }}
      licenseBox={<LicenseBox />}
      competenceGoals={<CompetenceGoalListExample />}
      competenceGoalTypes={['LK20', 'LK06']}
      copyPageUrlLink={window.location.href}
      printUrl={window.location.href}
      icon={<SourceMaterialBadge background size="large" />}
      id="mainContentId"
      locale="nb"
      messages={{ label: 'Kildemateriale' }}
      modifier={contentTypes.SOURCE_MATERIAL}
      notions={{
        list: [NotionExample],
      }}
    />
    <LayoutItem layout="extend">
      <Resources showTopicHeading />
    </LayoutItem>
  </OneColumn>
);

export default ArticleSourceMaterial;
