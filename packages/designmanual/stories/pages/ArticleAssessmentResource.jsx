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
  ArticleByline,
  ArticleHeaderWrapper,
  ArticleIntroduction,
  Image,
  AssessmentResourcesBadge,
} from 'ndla-ui';

import { getLicenseByAbbreviation } from 'ndla-licenses';

import FigureWithLicense from '../article/FigureWithLicense';
import LicenseBox from '../article/LicenseBox';
import { CompentenceGoalsDialogExample } from '../organisms/CompetenceGoalsExample';
import { Resources } from '../molecules/resources';

export default () => (
  <OneColumn cssModifier="narrow">
    <ArticleWrapper>
      <LayoutItem layout="center">
        <ArticleHeaderWrapper>
          <CompentenceGoalsDialogExample
            wide
            headingId="article-compentence-goals-heading-id"
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
          <ArticleByline
            authors={[
              {
                role: 'Opphavsmann',
                name: 'Lene Fossbråten',
                urlContributions: 'www.examplelink.com',
                urlAuthor: 'www.examplelink.com',
                licenses: '(CC BY-NC-SA)',
                title: 'Forfatter',
                phone: '+47 34 32 12 34',
                email: 'email@post.no',
                image: 'http://via.placeholder.com/350x150',
                introduction: '<p>Some html <strong>Hello</strong><p>',
              },
              {
                role: 'Opphavsmann',
                name: 'Wenche Heir',
                urlContributions: 'www.examplelink.com',
                urlAuthor: 'www.examplelink.com',
                licenses: '(CC BY-NC-SA)',
                title: 'Forfatter',
                phone: '+47 34 32 12 34',
                email: 'email@post.no',
                image: 'http://via.placeholder.com/350x150',
                introduction: '<p>Some html <strong>Hello</strong><p>',
              },
              {
                role: 'Rettighetshaver',
                name: 'Marit Smith',
                urlContributions: 'www.examplelink.com',
                urlAuthor: 'www.examplelink.com',
                licenses: '(CC BY-NC-SA)',
                title: 'Forfatter',
                phone: '+47 34 32 12 34',
                email: 'email@post.no',
                image: 'http://via.placeholder.com/350x150',
                introduction: '<p>Some html <strong>Hello</strong><p>',
              },
            ]}
            updated="12/10/2016"
            license={getLicenseByAbbreviation('by-nc-nd')}
            licenseBox={<LicenseBox />}
            dialogLabelledBy="Opphavsmann"
            messages={{
              writtenBy: '',
              lastUpdated: 'Publisert',
              authorLabel: 'Opphavsmann',
              authorDescription:
                'Denne artikkelen er laget av flere opphavsmenn',
              close: 'Lukk',
            }}
          />
          <CompentenceGoalsDialogExample
            narrow
            headingId="article-compentence-goals-narrow-heading-id"
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
