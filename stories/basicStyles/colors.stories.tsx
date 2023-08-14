/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryFn } from '@storybook/react';
import { colors } from '@ndla/core';
import { defaultParameters } from '../defaults';
import { StoryBody, StoryIntro } from '../wrappers';

const meta: Meta = {
  title: 'Base styles/Colors',
  parameters: defaultParameters,
};

const swatchBorder = '1px solid #979797';

export default meta;

export const Colors: StoryFn = () => {
  return (
    <div>
      <StoryIntro title="Farger på NDLA">
        <p>
          Fargene til NDLA er laget for å skape god lesbarhet og flyt for brukerne. Fargene skal alltid benyttes i
          design av brukergrensesnitt. Fargene skal ikke brukes på redaksjonelt innhold som for eksempel illustrasjoner
          og elementer inne i H5P. Ved bruk av farger i design skal det alltid være nok kontrast mellom elementer som
          f.eks bakgrunn og tekst. Fargene skal til enhver tid oppfylle alle standarder for WCAG (Web Content
          Accessibility Guidelines). Verktøy for å kontrollere kontrast mellom tekst og bakgrunn finnes her:{' '}
          <a href="https://webaim.org/resources/contrastchecker/">https://webaim.org/resources/contrastchecker/</a>
        </p>
      </StoryIntro>
      <StoryBody>
        <div>
          <h2 className="u-heading">NDLA-fargen</h2>
          <p>
            NDLA fargen er en blå farge i forskjellige nyanser. Disse fargene er det mest av i systemet. De brukes på
            klikkbare UI elementer, navigasjon, bakgrunner og gruppering av innhold. I tillegg brukes de på fagsider,
            hoved- og underemne sidene. Dette for å skape identitet og tydelig tilhørighet til NDLA universet.{' '}
          </p>
          <ul className="o-list--colors">
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.brand.primary }} />
              <div className="o-list__label">
                NDLA primærfarge
                <br />
                {colors.brand.primary}
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.brand.secondary }} />
              <div className="o-list__label">
                NDLA sekundærfarge
                <br />
                {colors.brand.secondary}
              </div>
            </li>
            <li className="o-list__item o-list__item--colors o-list__item ">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.brand.tertiary }} />
              <div className="o-list__label">
                NDLA tertiærfarge
                <br />
                {colors.brand.tertiary}
              </div>
            </li>
            <li className="o-list__item o-list__item--colors o-list__item">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.brand.light }} />
              <div className="o-list__label">
                NDLA lys
                <br />
                {colors.brand.light}
              </div>
            </li>
            <li className="o-list__item o-list__item--colors o-list__item">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.brand.lighter }} />
              <div className="o-list__label">
                NDLA lysere
                <br />
                {colors.brand.lighter}
              </div>
            </li>
            <li className="o-list__item o-list__item--colors o-list__item">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.brand.lightest }} />
              <div className="o-list__label">
                NDLA lysest
                <br />
                {colors.brand.lightest}
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.brand.dark }} />
              <div className="o-list__label">
                NDLA mørk
                <br />
                {colors.brand.dark}
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.brand.accent }} />
              <div className="o-list__label">
                NDLA aksent
                <br />
                {colors.brand.accent}
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="u-heading">Tekst og systemikoner</h2>
          <p>
            For å skape hierarki i innholdet finnes det to farger for tekst og systemikoner. Vektleggingen skjer i
            samhandling med stilingen av typografien. Når teksten eller ikonet er klikkbare linker skal man bruke
            NDLA-blå farge. Hvit tekst blir brukt på f.eks knapper og navigasjonselememnter med mørke bakgunner. Fargen
            og størrelsen på teksten skal til enhver tid kombineres med bakgrunner med nok kontrast og som oppfyller
            krav til WCAG. Verktøy for å teste kontrast mellom tekst og bakgrunn finnes her:{' '}
            <a href="https://webaim.org/resources/contrastchecker/" target="_blank" rel="noopener noreferrer">
              https://webaim.org/resources/contrastchecker/
            </a>
          </p>
          <ul className="o-list--colors">
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.text.primary }} />
              <div className="o-list__label">
                Mørk
                <br />
                {colors.text.primary}
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.text.light }} />
              <div className="o-list__label">
                Lys
                <br />
                {colors.text.light}
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.white, border: swatchBorder }} />
              <div className="o-list__label">
                Hvit
                <br />
                {colors.white}
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.black }} />
              <div className="o-list__label">
                Svart(ish)
                <br />
                {colors.black}
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.markColor }} />
              <div className="o-list__label">
                Markering
                <br />
                {colors.markColor}
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.brand.primary }} />
              <div className="o-list__label">
                Lenke (primærfarge)
                <br />
                {colors.brand.primary}
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.linkVisited }} />
              <div className="o-list__label">
                Lenke besøkt
                <br />
                {colors.linkVisited}
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.tableBg }} />
              <div className="o-list__label">
                Bakgrunn tabell
                <br />
                {colors.tableBg}
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="u-heading">Nøytrale farger</h2>
          <p>
            Den nøytrale paletten består av toner og nyanser som er nyttige for gruppering av innhold i NDLA systemet.
            Bruken av disse fargene varierer og er avhengig av berøringspunkt og omliggende innhold. Brukes mest til
            bakgrunner og rammer for å gruppere og skille innhold.
          </p>
          <ul className="o-list--colors">
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.white, border: swatchBorder }} />
              <div className="o-list__label">
                Nøytral Hvit
                <br />
                {colors.white}
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.brand.greyLightest }} />
              <div className="o-list__label">
                Nøytral 1
                <br />
                {colors.brand.greyLightest}
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.brand.greyLighter }} />
              <div className="o-list__label">
                Nøytral 2
                <br />
                {colors.brand.greyLighter}
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.brand.greyLight }} />
              <div className="o-list__label">
                Nøytral 3
                <br />
                {colors.brand.greyLighter}
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.brand.greyMedium }} />
              <div className="o-list__label">
                Nøytral 4
                <br />
                {colors.brand.greyMedium}
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.brand.grey }} />
              <div className="o-list__label">
                Nøytral 5
                <br />
                {colors.brand.grey}
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="u-heading">Bakgrunnsfarger</h2>
          <ul className="o-list--colors">
            <li className="o-list__item o-list__item--colors">
              <div
                className="o-list__bgcolor"
                style={{ backgroundColor: colors.background.default, border: swatchBorder }}
              />
              <div className="o-list__label">
                Standard
                <br />
                {colors.background.default}
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.background.dark }} />
              <div className="o-list__label">
                Mørk
                <br />
                {colors.background.dark}
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.background.darker }} />
              <div className="o-list__label">
                Mørkere
                <br />
                {colors.background.darker}
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.background.backgroundGray }} />
              <div className="o-list__label">
                Grå
                <br />
                {colors.background.backgroundGray}
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.background.grayDark }} />
              <div className="o-list__label">
                Mørk grå
                <br />
                {colors.background.grayDark}
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="u-heading">Innholdstypefarger</h2>
          <p>
            Innholdstyper har to farger, en mørk og en lys, knyttet til seg. Den lyse fargen er brukt på bakgrunner og
            den mørke er brukt på ikonet tilknyttet innholdstypen. Noen av innholdstypene har en tredje farge. Dette da
            det er behov for en egen bakgrunnsfarge på ikonet og en annen på bakgrunnen i artikkelmalen.
          </p>
          <p>
            Fargene er lette og duse i uttrykket for å la selve innholdet få fokus og poppe. I tillegg skaper fargene
            tilhørighet og gjenkjennbarhet til innholdstypen.
          </p>
          <h3>Emner</h3>
          <ul className="o-list--colors">
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.subject.dark }} />
              <div className="o-list__label">
                Mørk
                <br />
                {colors.subject.dark}
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.subject.light }} />
              <div className="o-list__label">
                Lys
                <br />
                {colors.subject.light}
              </div>
            </li>
          </ul>
          <h3>Fagstoff</h3>
          <ul className="o-list--colors">
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.subjectMaterial.dark }} />
              <div className="o-list__label">
                Mørk
                <br />
                {colors.subjectMaterial.dark}
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.subjectMaterial.light }} />
              <div className="o-list__label">
                Lys
                <br />
                {colors.subjectMaterial.light}
              </div>
            </li>
          </ul>
          <h3>Ekstern læringressurs</h3>
          <ul className="o-list--colors">
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.externalLearningResource.dark }} />
              <div className="o-list__label">
                Mørk
                <br />
                {colors.externalLearningResource.dark}
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div
                className="o-list__bgcolor"
                style={{ backgroundColor: colors.externalLearningResource.background }}
              />
              <div className="o-list__label">
                Bakgrunn
                <br />
                {colors.externalLearningResource.background}
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.externalLearningResource.light }} />
              <div className="o-list__label">
                Lys
                <br />
                {colors.externalLearningResource.light}
              </div>
            </li>
          </ul>
          <h3>Kildemateriale</h3>
          <ul className="o-list--colors">
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.sourceMaterial.dark }} />
              <div className="o-list__label">
                Mørk
                <br />
                {colors.sourceMaterial.dark}
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.sourceMaterial.light }} />
              <div className="o-list__label">
                Lys
                <br />
                {colors.sourceMaterial.light}
              </div>
            </li>
          </ul>
          <h3>Oppgaver og Aktiviteter</h3>
          <ul className="o-list--colors">
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.tasksAndActivities.dark }} />
              <div className="o-list__label">
                Mørk
                <br />
                {colors.tasksAndActivities.dark}
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.tasksAndActivities.background }} />
              <div className="o-list__label">
                Bakgrunn
                <br />
                {colors.tasksAndActivities.background}
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.tasksAndActivities.light }} />
              <div className="o-list__label">
                Lys
                <br />
                {colors.tasksAndActivities.light}
              </div>
            </li>
          </ul>
          <h3>Vurderingsressurs</h3>
          <ul className="o-list--colors">
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.assessmentResource.dark }} />
              <div className="o-list__label">
                Mørk
                <br />
                {colors.assessmentResource.dark}
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.assessmentResource.background }} />
              <div className="o-list__label">
                Bakgrunn
                <br />
                {colors.assessmentResource.background}
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.assessmentResource.light }} />
              <div className="o-list__label">
                Lys
                <br />
                {colors.assessmentResource.light}
              </div>
            </li>
          </ul>
          <h3>Læringsti</h3>
          <ul className="o-list--colors">
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.learningPath.dark }} />
              <div className="o-list__label">
                Mørk
                <br />
                {colors.learningPath.dark}
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.learningPath.background }} />
              <div className="o-list__label">
                Bakgrunn
                <br />
                {colors.learningPath.background}
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.learningPath.light }} />
              <div className="o-list__label">
                Lys
                <br />
                {colors.learningPath.light}
              </div>
            </li>
          </ul>
          <h3>Tilleggsstoff</h3>
          <p>Tilleggstoff bruker en farge fra fagstoffet, men med 40% opacity</p>
          <ul className="o-list--colors">
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.subjectMaterial.additional }} />
              <div className="o-list__label">
                Fagstoff lys
                <br />
                {colors.subjectMaterial.additional}
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div
                className="o-list__bgcolor"
                style={{ backgroundColor: colors.externalLearningResource.additional }}
              />
              <div className="o-list__label">
                Ekstern læringsressurs bakgrunn
                <br />
                {colors.externalLearningResource.additional}
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.sourceMaterial.additional }} />
              <div className="o-list__label">
                Kildemateriale lys
                <br />
                {colors.sourceMaterial.additional}
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.assessmentResource.additional }} />
              <div className="o-list__label">
                Oppgaver og aktiviteter lys
                <br />
                {colors.tasksAndActivities.additional}
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.assessmentResource.additional }} />
              <div className="o-list__label">
                Vurderingsressurs lys
                <br />
                {colors.assessmentResource.additional}
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.learningPath.backgroundAdditional }} />
              <div className="o-list__label">
                Læringssti bakgrunn
                <br />
                {colors.learningPath.backgroundAdditional}
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="u-heading">NDLA film</h2>
          <ul className="o-list--colors">
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.ndlaFilm.filmColor }} />
              <div className="o-list__label">
                Film
                <br />
                {colors.ndlaFilm.filmColor}
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.ndlaFilm.filmColorDark }} />
              <div className="o-list__label">
                Mørk
                <br />
                {colors.ndlaFilm.filmColorDark}
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.ndlaFilm.filmColorLight }} />
              <div className="o-list__label">
                Lys
                <br />
                {colors.ndlaFilm.filmColorLight}
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.ndlaFilm.filmColorBright }} />
              <div className="o-list__label">
                Lysere
                <br />
                {colors.ndlaFilm.filmColorBright}
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="u-heading">Support</h2>
          <p>
            Supportfargene er valgt fordi de er konvensjonelle i sin kontekst. Selv om vi anerkjenner at det er
            kulturelle forskjeller har enkelte farger iboende betydning for et stort flertall brukere. For eksempel
            bruker vi rødt til å kommunisere en feil og grønt for sukksess. Brukes med opacity 30 % på hvit bakgrunn.
          </p>
          <ul className="o-list--colors">
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.support.red }} />
              <div className="o-list__label">
                Rød
                <br />
                {colors.support.red}
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.support.redLight }} />
              <div className="o-list__label">
                Rød lysere
                <br />
                {colors.support.redLight}
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.support.redLightest }} />
              <div className="o-list__label">
                Rød lysest
                <br />
                {colors.support.redLightest}
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.support.green }} />
              <div className="o-list__label">
                Grønn
                <br />
                {colors.support.green}
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.support.greenLight }} />
              <div className="o-list__label">
                Grønn lysere
                <br />
                {colors.support.greenLight}
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.support.greenLightest }} />
              <div className="o-list__label">
                Grønn lysest
                <br />
                {colors.support.greenLightest}
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.support.yellow }} />
              <div className="o-list__label">
                Gul
                <br />
                {colors.support.yellow}
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.support.yellowLight }} />
              <div className="o-list__label">
                Gul lysere
                <br />
                {colors.support.yellowLight}
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div className="o-list__bgcolor" style={{ backgroundColor: colors.support.yellowLightest }} />
              <div className="o-list__label">
                Gul lysest
                <br />
                {colors.support.yellowLightest}
              </div>
            </li>
          </ul>
        </div>
      </StoryBody>
    </div>
  );
};
