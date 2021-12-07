/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {
  OneColumn,
  LayoutItem,
  ArticleTitle,
  ArticleWrapper,
  ArticleIntroduction,
  ArticleHeaderWrapper,
} from '@ndla/ui';

import FigureImage from '../article/FigureImage';
import ArticleBylineExample from '../molecules/ArticleBylineExample';

const ArticleLearningPaths = ({ title, description }) => (
  <>
    <h1>{title}</h1>
    <p>{description}</p>
    <OneColumn>
      <ArticleWrapper>
        <LayoutItem layout="center">
          <ArticleHeaderWrapper>
            <ArticleTitle>Tittel</ArticleTitle>
            <ArticleIntroduction>
              Du har en kjempegod idé til en kortfilm. Men det koster mange penger å produsere filmen.
            </ArticleIntroduction>
          </ArticleHeaderWrapper>
        </LayoutItem>
        <LayoutItem layout="center">
          <FigureImage src="https://api.staging.ndla.no/image-api/raw/42-45210905.jpg" alt="Lupe" />
          <p>
            Du har en kjempegod idé til en kortfilm. Men det koster mange penger å produsere filmen. Derfor er du
            avhengig av at noen tenner på idéen din og bestemmer seg for å bruke ressurser på nettopp dette prosjektet.
          </p>
          <p>
            En pitch er en kortvarig framføring av en idé for en potensiell samarbeidspartner eller kunde. I løpet av
            noen få minutter skal du få andre til å <a href="#test">tenne på idéen din og se potensialet</a> i den.
          </p>
          <p>
            En pitch er en kortvarig framføring av en idé for en potensiell samarbeidspartner eller kunde. I løpet av
            noen få minutter skal du få andre til å tenne på idéen din og se potensialet i den.
          </p>
          <p>
            Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den
            filmen du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
          </p>
          <p>
            Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den
            filmen du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
          </p>
          <ArticleBylineExample
            multipleAuthors
            useRealText
            copyPageUrlLink={window.location.href}
            id="article-by-line-example-id"
          />
        </LayoutItem>
      </ArticleWrapper>
    </OneColumn>
  </>
);

export default ArticleLearningPaths;
