/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { PageContent } from "@ndla/primitives";
import { SafeLink } from "@ndla/safelink";
import { styled } from "@ndla/styled-system/jsx";
import { ArticleContent, ArticleWrapper } from "@ndla/ui";
import type { Meta, StoryFn } from "@storybook/react";

export default {
  title: "NDLA urls",
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

const StyledPageContent = styled(PageContent, {
  base: {
    paddingBlockEnd: "xxlarge",
  },
});

export const NDLAUrls: StoryFn = () => (
  <StyledPageContent variant="page">
    <ArticleWrapper>
      <ArticleContent>
        <section>
          <h1>Lenker i NDLA</h1>
          <h2>NDLA.no</h2>
          <p>
            Produksjon:
            <br />
            <SafeLink to="https://ndla.no/">https://ndla.no</SafeLink>
          </p>
          <p>
            Staging:
            <br />
            <SafeLink to="https://staging.ndla.no/">https://staging.ndla.no</SafeLink>
          </p>
          <p>
            Test:
            <br />
            <SafeLink to="https://test.ndla.no/">https://test.ndla.no</SafeLink>
          </p>
          <h2>Editorial (ED)</h2>
          <p>
            Produksjon:
            <br />
            <SafeLink to="https://ed.ndla.no/">https://ed.ndla.no</SafeLink>
          </p>
          <p>
            Staging:
            <br />
            <SafeLink to="https://ed.staging.ndla.no/">https://ed.staging.ndla.no</SafeLink>
          </p>
          <p>
            Test:
            <br />
            <SafeLink to="https://ed.test.ndla.no/">https://ed.test.ndla.no</SafeLink>
          </p>
          <h2>API</h2>
          <p>
            API dokumentasjon (Swagger):
            <br />
            <SafeLink to="https://api.ndla.no/">https://api.ndla.no/</SafeLink>
          </p>
          <h2>Design</h2>
          <SafeLink to="https://www.figma.com/file/aGuqdNB8y8gPZsiK9YJ2An/NDLA-components">
            Komponenter (Figma)
          </SafeLink>
          <br />
          <SafeLink to="https://www.figma.com/file/jiZ86RzWFZZZHrjZUse866/NDLA-pages">Sider (Figma)</SafeLink>
        </section>
      </ArticleContent>
    </ArticleWrapper>
  </StyledPageContent>
);

NDLAUrls.storyName = "NDLA urls";
