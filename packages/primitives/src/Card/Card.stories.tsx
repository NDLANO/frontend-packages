/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Badge, Text } from "@ndla/primitives";
import { SafeLink } from "@ndla/safelink";
import { styled } from "@ndla/styled-system/jsx";
import { linkOverlay } from "@ndla/styled-system/patterns";
import type { Meta, StoryFn } from "@storybook/react";
import { CardContent, CardHeading, CardImage, CardRoot } from "./Card";

export default {
  title: "Primitives/Card",
  component: CardRoot,
  tags: ["autodocs"],
  parameters: {
    inlineStories: true,
  },
} satisfies Meta<typeof CardRoot>;

export const Default: StoryFn<typeof CardRoot> = (args) => (
  <CardRoot {...args}>
    <CardContent>
      <Badge colorTheme="brand1">Fagstoff</Badge>
      <CardHeading>
        <SafeLink to="#example" unstyled css={linkOverlay.raw()}>
          Tittel
        </SafeLink>
      </CardHeading>
      <Text>
        En metabeskrivelse forteller litt om innholdet til kortet. Dette kortet handler for eksempel om absolutt
        ingenting.
      </Text>
      <Text color="text.subtle" textStyle="label.small">
        {"Fag > Emne > Underemne"}
      </Text>
    </CardContent>
  </CardRoot>
);

export const WithImage: StoryFn<typeof CardRoot> = (args) => (
  <CardRoot {...args}>
    <CardImage src="https://api.staging.ndla.no/image-api/raw/Ide.jpg" alt="En lyspære" height={200} />
    <CardContent>
      <Badge colorTheme="brand1">Fagstoff</Badge>
      <CardHeading>
        <SafeLink to="#example" unstyled css={linkOverlay.raw()}>
          Tittel
        </SafeLink>
      </CardHeading>
      <Text>
        En metabeskrivelse forteller litt om innholdet til kortet. Dette kortet handler for eksempel om absolutt
        ingenting.
      </Text>
      <Text color="text.subtle" textStyle="label.small">
        {"Fag > Emne > Underemne"}
      </Text>
    </CardContent>
  </CardRoot>
);

export const InGrid: StoryFn<typeof CardRoot> = (args) => {
  const component = (
    <CardRoot {...args}>
      <CardImage src="https://api.staging.ndla.no/image-api/raw/Ide.jpg" alt="En lyspære" height={200} />
      <CardContent>
        <Badge colorTheme="brand1">Fagstoff</Badge>
        <CardHeading>
          <SafeLink to="#example" unstyled css={linkOverlay.raw()}>
            Tittel
          </SafeLink>
        </CardHeading>
        <Text>
          En metabeskrivelse forteller litt om innholdet til kortet. Dette kortet handler for eksempel om absolutt
          ingenting.
        </Text>
        <Text color="text.subtle" textStyle="label.small">
          {"Fag > Emne > Underemne"}
        </Text>
      </CardContent>
    </CardRoot>
  );

  return (
    <styled.div
      css={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "xsmall",
        tabletWideDown: {
          gridTemplateColumns: "repeat(2, 1fr)",
        },
        mobileWideDown: {
          gridTemplateColumns: "repeat(1, 1fr)",
        },
      }}
    >
      {component}
      {component}
      {component}
      {component}
      {component}
    </styled.div>
  );
};
