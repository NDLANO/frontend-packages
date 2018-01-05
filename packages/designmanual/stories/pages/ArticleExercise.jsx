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
  ArticleIntroduction,
  Image,
} from 'ndla-ui';
import { Pencil } from 'ndla-icons/common';

import { getLicenseByAbbreviation } from 'ndla-licenses';

import FigureWithLicense from '../article/FigureWithLicense';
import LicenseExample from '../article/LicenseExample';
import { Resources } from '../molecules/resources';

export default () => (
  <OneColumn cssModifier="narrow">
    <ArticleWrapper>
      <LayoutItem layout="center">
        <ArticleTitle icon={<Pencil />}>Oppgave eller aktivitet</ArticleTitle>
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
          license={getLicenseByAbbreviation('by-nc-nd')}
          messages={{
            writtenBy: '',
            lastUpdated: 'Publisert',
          }}>
          <LicenseExample />
        </ArticleByline>
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
        <Resources />
      </LayoutItem>
    </ArticleWrapper>
  </OneColumn>
);
