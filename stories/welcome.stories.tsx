/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryFn } from "@storybook/react";
import { NdlaLogoText, PageContent } from "@ndla/primitives";
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
          <h2 style={{ marginTop: "26px" }}>Hva designmanualen er, og hva den ikke er</h2>
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
          <p>
            Designmanual er for produksjon av teknisk innhold. Den består av hovedsakelig to deler: et CSS-bibliotek som
            styler de mest brukte HTML-elementene, og et komponent-bibliotek for{" "}
            <a href="https://facebook.github.io/react/">React</a>. Den er også publisert på{" "}
            <a href="https://www.npmjs.com/package/@ndla/ui">npm</a>.
          </p>
          <h3>Hente inn prosjekt direkte via npm</h3>
          <code>npm install @ndla/ui --save</code>
          <br />
          <code>yarn add @ndla/ui -S</code>
          <h3>Fonter</h3>
          <p>
            Vi henter fonter ved hjelp av <a href="https://github.com/fontsource/fontsource">Fontsource</a>. Installer
            fontene du trenger, og importer deretter fontene du trenger i inngangspunktet til appen.
          </p>
          <p>Følgende fonter tas i bruk: </p>
          <code>import '@fontsource/source-sans-pro/index.css';</code>
          <br />
          <code>import '@fontsource/source-sans-pro/400-italic.css';</code>
          <br />
          <code>import '@fontsource/source-sans-pro/300.css';</code>
          <br />
          <code>import '@fontsource/source-sans-pro/300-italic.css';</code>
          <br />
          <code>import '@fontsource/source-sans-pro/600.css';</code>
          <br />
          <code>import '@fontsource/source-sans-pro/700.css';</code>
          <br />
          <code>import '@fontsource/source-code-pro/index.css';</code>
          <br />
          <code>import '@fontsource/source-code-pro/400-italic.css';</code>
          <br />
          <code>import '@fontsource/source-code-pro/700.css';</code>
          <br />
          <code>import '@fontsource/source-serif-pro/index.css';</code>
          <br />
          <code>import '@fontsource/source-serif-pro/400-italic.css';</code>
          <br />
          <code>import '@fontsource/source-serif-pro/700.css';</code>
          <h3>Hente inn stilark</h3>
          <code>@import '^@ndla/ui/lib/all.css';</code>
          <br />
          Eller
          <br />
          <code>@import '~@ndla/core/scss/core';</code>
          <br />
          <code>@import '~@ndla/ui/src/main';</code>
          <br />
          Osv.
        </section>
      </ArticleContent>
    </ArticleWrapper>
  </StyledPageContent>
);
