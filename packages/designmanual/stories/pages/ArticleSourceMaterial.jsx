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
} from '@ndla/ui';

import { FigureImage } from '../article/FigureImage';
import RelatedArticleListExample from '../article/RelatedArticleListExample';

import { CompetenceGoalListExample } from '../organisms/CompetenceGoalsExample';
import Resources from '../molecules/resources';
import ArticleBylineExample from '../molecules/ArticleBylineExample';
import ArticleInformationBoxExample from '../molecules/ArticleInformationBoxExample';

export default () => (
  <OneColumn>
    <ArticleWrapper id="mainContentId">
      <LayoutItem layout="center">
        <ArticleHeaderWrapper competenceGoals={<CompetenceGoalListExample />}>
          <ArticleTitle
            icon={<SourceMaterialBadge background size="large" />}
            label="Kildemateriale">
            Artikkel kildemateriale
          </ArticleTitle>
          <ArticleIntroduction>
            Du har en kjempegod idé til en kortfilm. Men det koster mange penger
            å produsere filmen.
          </ArticleIntroduction>
          <ArticleBylineExample useRealText />
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
        <RelatedArticleListExample />
      </LayoutItem>
      <LayoutItem layout="center">
        <ArticleInformationBoxExample />
      </LayoutItem>
      <LayoutItem layout="extend">
        <Resources showTopicHeading />
      </LayoutItem>
    </ArticleWrapper>
  </OneColumn>
);
