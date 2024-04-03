/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryObj } from "@storybook/react";
import MissingRouterContext from "./MissingRouterContext";
import SafeLink from "./SafeLink";

/**
 * Lenker på [ndla.no](https://ndla.no) bruker den vanlige konvensjonen med underlinje. Lenker skal i hovedsak åpne seg i samme vindu (det vil si at vi bruker `target="_self"` eller ingen target-attributt). Unntaket er hvis lenken inngår i et skjema eller læringssammenhengen gjør det unødvendig at brukerne beholder vinduet eller fanen de står i. Når lenker går til et annet nettsted (eksterne lenker) skal disse alltids åpnes i ny fane.
 *
 * Når det finnes flere kontekster til en lenke/node skal den ta konteksten/fag til det en stod i før en klikket seg videre, hvis ikke den finnes i samme, skal den ta primærkoblingen til noden. Dette gjelder både for relaterte artikler og interne lenker.
 *
 * Interne lenker styres av html-innstilling i nettleser (samme vindu eller ny fane) avhengig av koden som ligger der, brukerens/browserens preferanser skal styre.
 */
export default {
  title: "Components/SafeLink",
  component: SafeLink,
  tags: ["autodocs"],
  paramemeters: {
    inlineStories: true,
  },
  args: {
    to: "/",
    children: <span>Lenke</span>,
  },
  argTypes: {
    children: { control: false },
  },
} as Meta<typeof SafeLink>;

export const Default: StoryObj<typeof SafeLink> = {};

export const Disabled: StoryObj<typeof SafeLink> = {
  args: { disabled: true },
};

export const ExternalLink: StoryObj<typeof SafeLink> = {
  args: {
    to: "https://example.com",
    showNewWindowIcon: true,
    target: "_blank",
  },
};

export const WithMissingRouterContext: StoryObj<typeof SafeLink> = {
  decorators: [
    (Story) => (
      <MissingRouterContext.Provider value={true}>
        <Story />
      </MissingRouterContext.Provider>
    ),
  ],
  args: { to: "https://example.com", target: "_blank" },
};
