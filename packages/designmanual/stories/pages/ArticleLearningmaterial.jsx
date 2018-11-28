/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import {
  OneColumn,
  LayoutItem,
  ArticleTitle,
  ArticleWrapper,
  ArticleIntroduction,
  Image,
  SubjectMaterialBadge,
  ArticleHeaderWrapper,
} from '@ndla/ui';

import FigureWithLicense from '../article/FigureWithLicense';
import RelatedArticleListExample from '../article/RelatedArticleListExample';
import Topics from '../molecules/topics';
import ArticleBylineExample from '../molecules/ArticleBylineExample';

import { CompetenceGoalListExample } from '../organisms/CompetenceGoalsExample';

const ArticleLearningMaterial = ({ ndlaFilm }) => (
  <OneColumn>
    <ArticleWrapper>
      <LayoutItem layout="center">
        <ArticleHeaderWrapper competenceGoals={<CompetenceGoalListExample />}>
          <ArticleTitle
            icon={<SubjectMaterialBadge background size="large" />}
            label="Fagstoff">
            Artikkel fagstoff
          </ArticleTitle>
          <ArticleIntroduction>
            Du har en kjempegod idé til en kortfilm. Men det koster mange penger
            å produsere filmen.
          </ArticleIntroduction>
          <ArticleBylineExample id="example-article-license-id" />
        </ArticleHeaderWrapper>
      </LayoutItem>
      <LayoutItem layout="center">
        <p>
          Du har en kjempegod idé til en kortfilm. Men det koster mange penger å
          produsere filmen. Derfor er du avhengig av at noen tenner på idéen din
          og bestemmer seg for å bruke ressurser på nettopp dette prosjektet.
        </p>
        <FigureWithLicense caption="" classes="u-float-right">
          <Image
            alt=""
            src="https://staging.api.ndla.no/image-api/raw/42-45210905.jpg"
          />
        </FigureWithLicense>
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
      <LayoutItem layout="extend">
        <Topics ndlaFilm={ndlaFilm} />
      </LayoutItem>
    </ArticleWrapper>
  </OneColumn>
);

ArticleLearningMaterial.PropTypes = {
  ndlaFilm: PropTypes.bool,
};

export default ArticleLearningMaterial;
