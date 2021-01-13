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
  SubjectMaterialBadge,
  ArticleHeaderWrapper,
  constants,
} from '@ndla/ui';

import RelatedArticleListExample from '../article/RelatedArticleListExample';
import Resources from '../molecules/resources';
import ArticleBylineExample from '../molecules/ArticleBylineExample';

import { CompetenceGoalListExample } from '../organisms/CompetenceGoalsExample';
import FigureImage from '../article/FigureImage';

const { contentTypes } = constants;

const ArticleLearningMaterial = () => (
  <OneColumn>
    <ArticleWrapper id="mainContentId" modifier={contentTypes.SUBJECT_MATERIAL}>
      <LayoutItem layout="center">
        <ArticleHeaderWrapper
          competenceGoals={<CompetenceGoalListExample />}
          competenceGoalTypes={['LK20', 'LK06']}>
          <ArticleTitle
            icon={<SubjectMaterialBadge background size="large" />}
            label="Fagstoff">
            Artikkel fagstoff
          </ArticleTitle>
          <ArticleIntroduction>
            Du har en kjempegod idé til en kortfilm. Men det koster mange penger
            å produsere filmen.
          </ArticleIntroduction>
        </ArticleHeaderWrapper>
      </LayoutItem>
      <LayoutItem layout="center">
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

export default ArticleLearningMaterial;
