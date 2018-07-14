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
  ArticleHeaderWrapper,
  ArticleIntroduction,
  Image,
  AssessmentResourcesBadge,
} from 'ndla-ui';

import FigureWithLicense from '../article/FigureWithLicense';
import { CompetenceGoalsDialogExample } from '../organisms/CompetenceGoalsExample';
import Resources from '../molecules/resources';
import ArticleBylineExample from '../molecules/ArticleBylineExample';

export default () => (
  <OneColumn cssModifier="narrow">
    <ArticleWrapper>
      <LayoutItem layout="center">
        <ArticleHeaderWrapper>
          <CompetenceGoalsDialogExample
            wide
            headingId="article-competence-goals-heading-id"
          />
          <ArticleTitle
            icon={<AssessmentResourcesBadge background size="large" />}
            label="Vurderingsressurs">
            Portal for vurdering, engelsk fellesfag
          </ArticleTitle>
          <ArticleIntroduction>
            På disse sidene har vi samlet ressurser som kan støtte elever og
            lærere i arbeidet med vurdering. Ressursene her kan brukes til
            egenevaluering av elevene og i dialog mellom elev og lærer.
          </ArticleIntroduction>
          <ArticleBylineExample id="article-by-line-example-id" />
          <CompetenceGoalsDialogExample
            narrow
            headingId="article-competence-goals-narrow-heading-id"
          />
        </ArticleHeaderWrapper>
      </LayoutItem>
      <LayoutItem layout="center">
        <p>
          Du har en kjempegod idé til en kortfilm. Men det koster mange penger å
          produsere filmen. Derfor er du avhengig av at noen tenner på idéen din
          og bestemmer seg for å bruke ressurser på nettopp dette prosjektet.
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
        <FigureWithLicense caption="" runScripts>
          <Image
            alt="alt"
            src="https://staging.api.ndla.no/image-api/raw/42-45210905.jpg"
          />
        </FigureWithLicense>
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
      </LayoutItem>
      <LayoutItem layout="extend">
        <Resources showTopicHeading />
      </LayoutItem>
    </ArticleWrapper>
  </OneColumn>
);
