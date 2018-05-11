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
  ArticleByline,
  ArticleHeaderWrapper,
  Image,
  SourceMaterialBadge,
} from 'ndla-ui';

import { getLicenseByAbbreviation } from 'ndla-licenses';

import FigureWithLicense from '../article/FigureWithLicense';
import { LicenseBox } from '../article/LicenseExample';
import RelatedArticleListExample from '../article/RelatedArticleListExample';

import { CompentenceGoalsDialogExample } from '../organisms/CompetenceGoalsExample';

export default () => (
  <OneColumn>
    <ArticleWrapper>
      <LayoutItem layout="center">
        <ArticleHeaderWrapper>
          <CompentenceGoalsDialogExample wide />
          <ArticleTitle
            icon={<SourceMaterialBadge background size="large" />}
            label="Kildemateriale">
            Artikkel kildemateriale
          </ArticleTitle>
          <ArticleIntroduction>
            Du har en kjempegod idé til en kortfilm. Men det koster mange penger
            å produsere filmen.
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
            ]}
            updated="12/10/2016"
            license={getLicenseByAbbreviation('by-nc-nd')}
            licenseBox={<LicenseBox />}
            messages={{
              writtenBy: '',
              lastUpdated: 'Publisert',
              authorLabel: 'Opphavsmann',
              authorDescription:
                'Denne artikkelen er laget av flere opphavsmenn',
              close: 'Lukk',
            }}
          />
          <CompentenceGoalsDialogExample narrow />
        </ArticleHeaderWrapper>
      </LayoutItem>
      <LayoutItem layout="center">
        <FigureWithLicense type="left" caption="" runScripts>
          <Image
            alt=""
            src="https://staging.api.ndla.no/image-api/raw/42-45210905.jpg"
          />
        </FigureWithLicense>
        <p>
          333Du har en kjempegod idé til en kortfilm. Men det koster mange
          penger å produsere filmen. Derfor er du avhengig av at noen tenner på
          idéen din og bestemmer seg for å bruke ressurser på nettopp dette
          prosjektet.
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
        <FigureWithLicense caption="" classes="u-float-right">
          <Image
            alt=""
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
        <RelatedArticleListExample />
      </LayoutItem>
    </ArticleWrapper>
  </OneColumn>
);
