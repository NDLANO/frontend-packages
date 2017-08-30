/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';

import { OneColumn, RelatedArticles, LayoutItem } from 'ndla-ui';
import { Time, Document, User } from 'ndla-ui/icons';

import { ResourceSubsetList } from '../molecules/resources';
import FigureWithLicense from '../article/FigureWithLicense';
import LicenseExample from '../article/LicenseExample';
import article, { articleResources } from '../../dummydata/index';

export default () =>
  <OneColumn cssModifier="narrow">
    <article className="c-article">
      <LayoutItem layout="center">
        <h1 className="c-article__title--icon">
          <Document />Artikkel lærestoff
        </h1>
        <p className="article_introduction">
          Du har en kjempegod idé til en kortfilm. Men det koster mange penger å
          produsere filmen.
        </p>
        <div className="c-article-byline">
          <span className="c-article-byline__flex">
            <span className="c-article-byline__icon">
              <User />
            </span>
            <span className="c-article-byline__authors">
              Ola Nordnes, Kari Nordnes, Jon Nordgubbe. <br />(BY-NC-ND)
            </span>
          </span>
          <span className="c-article-byline__flex">
            <span className="c-article-byline__icon">
              <Time />
            </span>
            <span className="c-article-byline__date">Publisert 12/10/2016</span>
            <LicenseExample />
          </span>
        </div>
      </LayoutItem>
      <LayoutItem layout="center">
        <FigureWithLicense
          caption="Person med mange armer som gjør forskjellige ting samtidig."
          expandable
          classes="u-float-left">
          <img
            alt="person med mange armer som gjør forskjellige ting samtidig. Foto."
            src="https://staging.api.ndla.no/image-api/raw/2016_tk_prod-planlegger_utsnitt3.jpg"
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
        <FigureWithLicense
          caption="Person med mange armer som gjør forskjellige ting samtidig."
          classes="u-float-right">
          <img
            alt="person med mange armer som gjør forskjellige ting samtidig. Foto."
            src="https://test.api.ndla.no/image-api/raw/2016_tk_prod-planlegger_utsnitt3.jpg"
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
        <RelatedArticles resources={articleResources} />
      </LayoutItem>
      <LayoutItem layout="extend">
        <ResourceSubsetList />
      </LayoutItem>
    </article>
  </OneColumn>;
