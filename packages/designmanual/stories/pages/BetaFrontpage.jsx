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
  InfoBox,
} from '@ndla/ui';

export default () => (
  <OneColumn cssModifier="narrow">
    <ArticleWrapper>
      <LayoutItem layout="center">
        <ArticleHeaderWrapper>
          <InfoBox>
            <p>
              Alt innhold vil ikke være med i betaversjonen.<br />
              Vi har prioritert kjernestoff framfor tilleggsstoff. Noen emner og
              fagstoff kan mangle.
            </p>
          </InfoBox>
          <ArticleTitle>
            Vil du hjelpe oss å teste de nye fagssidene?
          </ArticleTitle>
          <ArticleIntroduction>
            Til nå har vi brukertestet over 100 elever og lærere og fått mange
            gode tilbakemeldinger og forslag. Tusen takk for all hjelp så langt!
            Nå vil vi gjerne ha din hjelp til å forbedre nettsidene enda mer.
          </ArticleIntroduction>
        </ArticleHeaderWrapper>
      </LayoutItem>
      <LayoutItem layout="center">
        <h2>Hva trenger vi din hjelp til?</h2>
        <p>
          Vi vil gjerne at du bruker sidene som du pleier når du jobber med
          læring. Hvis du tenker at noe er rart, uvant, bra eller dårlig – så
          kan du raskt melde fra til oss med knappen “spør NDLA” nede i hjørnet.
        </p>
        <p>
          Vi leser alle tips, klager eller spørsmål som kommer inn og er veldig
          takknemlige – fordi det hjelper oss til å bli bedre!
        </p>
        <h2>Hva er nytt?</h2>
        <ul className="o-list--no-margin-top">
          <li>ny struktur</li>
          <li>nye sider for fagstoffet</li>
          <li>nytt design</li>
        </ul>
        <h3>Ny struktur</h3>
        <p>
          Vi har satt sammen innholdet på NDLA på en måte som gjør det lettere
          for deg å finne frem. Alle emner har fått en kort introduksjon som du
          kan lese hvis du vil ha en liten innføring i hva fagstoffet dreier seg
          om.
        </p>
        <h3>Nye sider for fagstoffet</h3>
        <p>
          Sidene har nå større tekst og mer luft. Da blir det lettere å lese
          innholdet og ikke minst forstå det som står der. Vi har fjernet
          elementer, slik at de ikke skal forstyrre.
        </p>
        <h3>Læringsstier</h3>
        <p>
          Læringsstier er en ny måte å sette sammen lærestoffet på. Fagstoff,
          oppgaver og aktiviteter blir kombinert i en bestemt rekkefølge. I
          denne betaversjonen vil du finne redaksjonelt kvalitetssikrede
          læringsstier fra NDLA, der læringsaktivitetene er pedagogisk
          organisert.
        </p>
        <h3>Nytt design</h3>
        <p>
          Vi har blitt lysere og luftigere og håper du liker det. Vi har fått
          fine, nye farger og ikoner som følger innholdet og hjelper deg til å
          forstå om du leser om et emne, fagstoff eller en oppgave. Menyen gir
          bedre oversikt og ligger bak en knapp, slik at den ikke er i veien når
          du skal lese. Logoen vår er den samme, så du kjenner oss nok igjen.
        </p>
        <h2>Hva jobber vi med videre?</h2>
        <p>
          Snart vil vi lansere nye forsider for fagene og en forbedret versjon
          av læringsstier. Vi vet at elever søker mye og derfor ønsker vi å lage
          et skikkelig bra søk. Vi kommer til å gjøre en rekke tilpasninger
          basert på tilbakemeldingene fra dere. Hovedmålet er hele tiden å legge
          til rette for best mulig læring!
        </p>
      </LayoutItem>
    </ArticleWrapper>
  </OneColumn>
);
