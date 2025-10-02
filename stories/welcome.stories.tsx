/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Meta, StoryFn } from "@storybook/react";
import { NdlaLogoText, PageContent, UnOrderedList } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import { ArticleWrapper, ArticleContent } from "@ndla/ui";

export default {
  title: "Welcome",
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

const StyledPageContent = styled(PageContent, {
  base: {
    paddingBlockEnd: "xxlarge",
  },
});

const HeaderWrapper = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

export const Welcome: StoryFn = () => (
  <StyledPageContent variant="page">
    <ArticleWrapper>
      <ArticleContent>
        <section>
          <HeaderWrapper>
            <NdlaLogoText aria-label="Nasjonal digital læringsarena" />
            <h1>Designmanual</h1>
          </HeaderWrapper>
          <p>
            <i>
              NB: Grunnet overgang til ny profil er komponenter i ferd med å bli byttet ut med nyere versjoner, og vil
              derfor ikke se helt korrekte ut her.
            </i>
          </p>
          <h2>Hva designmanualen er, og hva den ikke er</h2>
          <p>
            Designmanualen inneholder retningslinjer for formatering, visuelt uttrykk, interaksjon og innholdselementer.
          </p>
          <p>
            En del lenker, knapper og lignende funksjonalitet har foreløpig ikke reelt innhold. De er ment som eksempler
            til videre utvikling oppimot APIer og reelt innhold på nye ndla.no. Etter hvert som innholdselementer
            utvikles videre med reell funksjonalitet, kan de tas inn i designmanualen og erstatte de gamle elementene.
          </p>
          <p>
            Den er ikke en brukermanual for innholdsproduksjon. Råd og retningslinjer for produksjon av innhold ligger i{" "}
            <a href="https://kvalitet.ndla.no" target="_blank" rel="noopener noreferrer">
              kvalitet i NDLA.
            </a>
          </p>
          <h2>Hvordan bruke designmanualen?</h2>
          <p>Designmanual er for produksjon av teknisk innhold. Den består av hovedsakelig tre deler:</p>
          <UnOrderedList>
            <li>
              <b>preset-panda</b>: En <a href="https://panda-css.com">Panda-css</a>-preset som genererer CSS som alle
              NDLA-applikasjoner bruker.
            </li>
            <li>
              <b>primitives</b>: Et komponentbibliotek bestående av grunnkomponenter, bygget på toppen av Panda-CSS og{" "}
              <a href="https://ark-ui.com">ark-ui</a>.
            </li>
            <li>
              <b>ui</b>: NDLA-spesifikke komponenter som bygger på toppen av våre eksisterende primitives.
            </li>
          </UnOrderedList>
          <p>
            Hovedapplikasjonene til NDLA er skrevet i <a href="https://react.dev">React</a>, og publiseres på{" "}
            <a href="https://www.npmjs.com/org/ndla">npm</a>.
          </p>
          <h3>Hente inn prosjekt direkte via npm</h3>
          <code>npm install @ndla/ui</code>
          <br />
          <code>yarn add @ndla/ui</code>
          <h3>Fonter</h3>
          <p>NDLA bruker tre forskjellige fonter:</p>
          <UnOrderedList>
            <li>
              <b>Satoshi</b>: Hovedfonten til NDLA. Hentes fra{" "}
              <a href="https://www.fontshare.com/fonts/satoshi">Fontshare</a>.
            </li>
            <li>
              <b>Source Serif 4</b>: Serif-fonten til NDLA. Hentes fra <a href="https://fontsource.org/">Fontsource</a>.
            </li>
            <li>
              <b>Source Code Pro Variable</b>: Brukes til fremvisning av kodesnutter. Hentes fra{" "}
              <a href="https://fontsource.org/">Fontsource</a>.
            </li>
          </UnOrderedList>
          <p>
            Fontsource-fontene kan installeres ved hjelp av NPM. De heter henholdsvis
            <code>@fontsource-variable/source-serif-4</code> og <code>@fontsource-variable/source-code-pro</code>.
            Satoshi må hentes fra Fontshare sin CDN.
          </p>
          <p>
            Dersom du kun skal bruke primitives-komponentene vil du kun ha behov for Satoshi, gitt at du ikke bruker
            tekststiler som er tiltenkt for bruk i NDLA sine artikler.
          </p>
          <p>Følgende fonter tas i bruk: </p>
          <code>import '@fontsource/source-sans-pro/index.css';</code>
          <br />
          <code>import '@fontsource/source-sans-pro/400-italic.css';</code>
          <h3>Hente inn stilark</h3>
          <p>
            Dersom du bruker Panda-CSS kan du ta inspirasjon fra oppsett i{" "}
            <a href="https://github.com/NDLANO/ndla-frontend/blob/master/panda.config.ts">ndla-frontend</a>
          </p>
          <p>
            Alternativt eksporterer vi CSS-filer fra alle pakker. Dersom du skal bruke en av pakkene våre er det
            nødvendig å ha med css fra <code>@ndla/preset-panda</code>:
          </p>
          <code>@import '@ndla/preset-panda/dist/styles.css';</code>
          <p>Du vil deretter være nødt til å importere css for hver pakke du tar i bruk.</p>
          <code>@import '@ndla/primitives/dist/styles.css';</code>
        </section>
      </ArticleContent>
    </ArticleWrapper>
  </StyledPageContent>
);
