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
} from 'ndla-ui';
import { Document } from 'ndla-ui/icons';

import { Resources } from '../molecules/resources';
import FigureWithLicense from '../article/FigureWithLicense';
import LicenseExample from '../article/LicenseExample';
import RelatedArticleListExample from '../article/RelatedArticleListExample';

export default () => (
  <OneColumn>
    <ArticleWrapper>
      <LayoutItem layout="center">
        <ArticleTitle icon={<Document />}>Artikkel fagstoff</ArticleTitle>
        <ArticleIntroduction>
          Du har en kjempegod idé til en kortfilm. Men det koster mange penger å
          produsere filmen.
        </ArticleIntroduction>
        <ArticleByline
          authors={[
            { name: 'Ola Nordnes' },
            { name: 'Kari Nordnes' },
            { name: 'Jon Nordgubbe' },
          ]}
          updated="12/10/2016"
          license="BY-NC-ND"
          messages={{
            writtenBy: '',
            lastUpdated: 'Publisert',
          }}>
          <LicenseExample />
        </ArticleByline>
      </LayoutItem>
      <LayoutItem layout="center">
        <FigureWithLicense caption="" expandable classes="u-float-left">
          <img
            alt=""
            src="https://staging.api.ndla.no/image-api/raw/42-45210905.jpg?width=1000"
          />
        </FigureWithLicense>
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
        <FigureWithLicense caption="" classes="u-float-right">
          <img
            alt=""
            src="https://staging.api.ndla.no/image-api/raw/42-45210905.jpg?width=1000"
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
        <RelatedArticleListExample />
      </LayoutItem>
      <LayoutItem layout="extend">
        <Resources />
      </LayoutItem>
    </ArticleWrapper>
  </OneColumn>
);
