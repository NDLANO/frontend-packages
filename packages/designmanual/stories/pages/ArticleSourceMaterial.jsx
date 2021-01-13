/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';

import {
  OneColumn,
  LayoutItem,
  ArticleTitle,
  ArticleWrapper,
  ArticleIntroduction,
  ArticleHeaderWrapper,
  SourceMaterialBadge,
  constants,
} from '@ndla/ui';

import FigureImage from '../article/FigureImage';
import RelatedArticleListExample from '../article/RelatedArticleListExample';

import { CompetenceGoalListExample } from '../organisms/CompetenceGoalsExample';
import Resources from '../molecules/resources';
import ArticleBylineExample from '../molecules/ArticleBylineExample';

const { contentTypes } = constants;

export default () => (
  <OneColumn>
    <ArticleWrapper id="mainContentId" modifier={contentTypes.SOURCE_MATERIAL}>
      <LayoutItem layout="center">
        <ArticleHeaderWrapper
          competenceGoals={<CompetenceGoalListExample />}
          competenceGoalTypes={['LK20', 'LK06']}>
          <ArticleTitle
            icon={<SourceMaterialBadge background size="large" />}
            label="Kildemateriale">
            Artikkel kildemateriale
          </ArticleTitle>
          <ArticleIntroduction>
            Du har en kjempegod idé til en kortfilm. Men det koster mange penger
            å produsere filmen.
          </ArticleIntroduction>
        </ArticleHeaderWrapper>
      </LayoutItem>
      <LayoutItem layout="center">
        <FigureImage
          alt=""
          src="https://staging.api.ndla.no/image-api/raw/42-45210905.jpg"
          type="left"
          caption=""
        />
        <p>
          Du har en kjempegod idé til en kortfilm. Men det koster mange penger å
          produsere filmen. Derfor er du avhengig av at noen tenner på idéen din
          og bestemmer seg for å bruke ressurser på nettopp dette prosjektet.
        </p>
        <p>
          En pitch er en kortvarig framføring av en idé for en potensiell
          samarbeidspartner eller kunde. I løpet av noen få minutter skal du få
          andre til å <a href="#test">tenne på idéen din og se potensialet</a> i
          den.
        </p>
        <p>
          En pitch er en kortvarig framføring av en idé for en potensiell
          samarbeidspartner eller kunde. I løpet av noen få minutter skal du få
          andre til å tenne på idéen din og se potensialet i den.
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du
          pitcher, blir idéen og historien i den filmen du planlegger å lage,
          tydeligere for både deg selv og dem du eventuelt jobber sammen med i
          klassen.
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du
          pitcher, blir idéen og historien i den filmen du planlegger å lage,
          tydeligere for både deg selv og dem du eventuelt jobber sammen med i
          klassen.
        </p>
        <FigureImage
          alt=""
          src="https://staging.api.ndla.no/image-api/raw/42-45210905.jpg"
          caption=""
        />
        <p>
          En pitch er en kortvarig framføring av en idé for en potensiell
          samarbeidspartner eller kunde. I løpet av noen få minutter skal du få
          andre til å tenne på idéen din og se potensialet i den.
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du
          pitcher, blir idéen og historien i den filmen du planlegger å lage,
          tydeligere for både deg selv og dem du eventuelt jobber sammen med i
          klassen.
        </p>
        <ArticleBylineExample
          multipleAuthors
          useRealText
          copyPageUrlLink={window.location.href}
          id="article-by-line-example-id"
        />
        <RelatedArticleListExample />
      </LayoutItem>
    </ArticleWrapper>
    <LayoutItem layout="extend">
      <Resources showTopicHeading />
    </LayoutItem>
  </OneColumn>
);
