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
  TasksAndActivitiesBadge,
  constants,
} from '@ndla/ui';

import Resources from '../molecules/resources';
import ArticleBylineExample from '../molecules/ArticleBylineExample';

import { CompetenceGoalListExample } from '../organisms/CompetenceGoalsExample';
import FigureImage from '../article/FigureImage';

const { contentTypes } = constants;

const ArticleExercise = () => (
  <OneColumn cssModifier="narrow">
    <ArticleWrapper id="mainContentId" modifier={contentTypes.TASKS_AND_ACTIVITIES}>
      <LayoutItem layout="center">
        <ArticleHeaderWrapper competenceGoals={<CompetenceGoalListExample />} competenceGoalTypes={['LK20', 'LK06']}>
          <ArticleTitle icon={<TasksAndActivitiesBadge background size="large" />} label="Oppgaver og aktiviteter">
            Lag en brukersti
          </ArticleTitle>
          <ArticleIntroduction>
            Du har en kjempegod idé til en kortfilm. Men det koster mange penger å produsere filmen.
          </ArticleIntroduction>
        </ArticleHeaderWrapper>
      </LayoutItem>
      <LayoutItem layout="center">
        <p>
          Du har en kjempegod idé til en kortfilm. Men det koster mange penger å produsere filmen. Derfor er du avhengig
          av at noen tenner på idéen din og bestemmer seg for å bruke ressurser på nettopp dette prosjektet.
        </p>
        <p>
          En pitch er en kortvarig framføring av en idé for en potensiell samarbeidspartner eller kunde. I løpet av noen
          få minutter skal du få andre til å tenne på idéen din og se potensialet i den.
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen
          du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
        </p>
        <FigureImage alt="alt" src="https://staging.api.ndla.no/image-api/raw/42-45210905.jpg" />
        <p>
          En pitch er en kortvarig framføring av en idé for en potensiell samarbeidspartner eller kunde. I løpet av noen
          få minutter skal du få andre til å tenne på idéen din og se potensialet i den.
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen
          du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
        </p>
        <ArticleBylineExample
          multipleAuthors
          useRealText
          copyPageUrlLink={window.location.href}
          id="article-by-line-example-id"
        />
      </LayoutItem>
    </ArticleWrapper>
    <LayoutItem layout="extend">
      <Resources />
    </LayoutItem>
  </OneColumn>
);

export default ArticleExercise;
