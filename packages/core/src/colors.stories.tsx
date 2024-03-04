/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from "react";
import styled from "@emotion/styled";
import { Meta, StoryFn } from "@storybook/react";
import colors from "./colors";
import spacing from "./spacing";
import { defaultParameters } from "../../../stories/defaults";

interface Props {
  color: string;
  name: string;
}

const StyledColorBlocks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing.small};
`;

interface ColorBlocksProps {
  title?: string;
  description?: string;
  children: ReactNode;
}

const ColorBlocks = ({ title, description, children }: ColorBlocksProps) => (
  <div>
    {title && <h4>{title}</h4>}
    {description && <p>{description}</p>}
    <StyledColorBlocks>{children}</StyledColorBlocks>
  </div>
);

const StyledColorBlock = styled.div`
  & > p {
    margin: 0px;
  }
`;

const ColorBlock = ({ color, name }: Props) => {
  return (
    <StyledColorBlock>
      <div style={{ backgroundColor: color, height: "100px", width: "100px" }} />
      <p>{name}</p>
      <p>{color}</p>
    </StyledColorBlock>
  );
};

export default {
  title: "Base Styles/Colors",
  tags: ["autodocs"],
  component: ColorBlocks,
  parameters: {
    inlineStories: true,
    ...defaultParameters,
  },
} as Meta<typeof ColorBlocks>;

/**
 *Fargene til NDLA er laget for å skape god lesbarhet og flyt for brukerne. Fargene skal alltid benyttes i design av brukergrensesnitt. Fargene skal ikke brukes på redaksjonelt innhold som for eksempel illustrasjoner og elementer inne i H5P. Ved bruk av farger i design skal det alltid være nok kontrast mellom elementer som f.eks bakgrunn og tekst. Fargene skal til enhver tid oppfylle alle standarder for WCAG (Web Content Accessibility Guidelines). Verktøy for å kontrollere kontrast mellom tekst og bakgrunn finnes her: https://webaim.org/resources/contrastchecker/
 */
export const PrimaryColors: StoryFn = () => (
  <ColorBlocks>
    <ColorBlock color={colors.brand.primary} name="Primary" />
    <ColorBlock color={colors.brand.secondary} name="Secondary" />
    <ColorBlock color={colors.brand.tertiary} name="Tertiary" />
    <ColorBlock color={colors.brand.light} name="Light" />
    <ColorBlock color={colors.brand.lighter} name="Lighter" />
    <ColorBlock color={colors.brand.lightest} name="Lightest" />
    <ColorBlock color={colors.brand.dark} name="Dark" />
  </ColorBlocks>
);

/**
 * For å skape hierarki i innholdet finnes det to farger for tekst og systemikoner. Vektleggingen skjer i samhandling med stillingen av typografien. Når teksten eller ikonet er klikkbare linker skal man bruke NDLA-blå farge. Hvit tekst blir brukt på f.eks knapper og navigasjonselementer med mørke bagrunner. Fargen og størrelsen på teksten skal til enhver tid kombineres med bakgrunner med nok kontrast og som oppfyller krav til WCAG: Verktøy for å teste kontrast mellom tekst og bakgrunn finnes her: https://webaim.org/resources/contrastchecker/
 */
export const TextAndSystemIcons: StoryFn = () => (
  <ColorBlocks>
    <ColorBlock color={colors.text.primary} name="Primary" />
    <ColorBlock color={colors.text.light} name="Light" />
    <ColorBlock color={colors.white} name="White" />
    <ColorBlock color={colors.black} name="Black (ish)" />
    <ColorBlock color={colors.markColor} name="Mark" />
    <ColorBlock color={colors.brand.primary} name="Link (primary color)" />
    <ColorBlock color={colors.linkVisited} name="Link (visited)" />
  </ColorBlocks>
);

export const NeutralColors: StoryFn = () => (
  <ColorBlocks>
    <ColorBlock color={colors.white} name="Neutral white" />
    <ColorBlock color={colors.brand.greyLightest} name="Neutral 1" />
    <ColorBlock color={colors.brand.greyLighter} name="Neutral 2" />
    <ColorBlock color={colors.brand.greyLight} name="Neutral 3" />
    <ColorBlock color={colors.brand.greyMedium} name="Neutral 4" />
    <ColorBlock color={colors.brand.grey} name="Neutral 5" />
  </ColorBlocks>
);

export const BackgroundColors: StoryFn = () => (
  <ColorBlocks>
    <ColorBlock color={colors.background.default} name="Default" />
    <ColorBlock color={colors.background.dark} name="Dark" />
    <ColorBlock color={colors.background.darker} name="Darker" />
    <ColorBlock color={colors.background.backgroundGray} name="Grey" />
    <ColorBlock color={colors.background.grayDark} name="Dark grey" />
  </ColorBlocks>
);

/**
 * Innholdstyper har to farger, en mørk og en lys, knyttet til seg. Den lyse fargen er brukt på bakgrunner og den mørke er brukt på ikonet tilknyttet innholdstypen. Noen av innholdstypene har en tredje farge. Dette da det er behov for en egen bakgrunnsfarge på ikonet og en annen på bakgrunnen i artikkelmalen.
 *
 * Fargene er lette og duse i uttrykket for å la selve innholdet få fokus og poppe. I tillegg skaper fargene tilhørighet og gjenkjennbarhet til innholdstypen.
 */
export const ContentTypeColors: StoryFn = () => (
  <div
    style={{
      display: "flex",
      gap: spacing.normal,
      alignItems: "flex-start",
      flexWrap: "wrap",
    }}
  >
    <ColorBlocks title="Topics">
      <ColorBlock color={colors.subject.dark} name="Dark" />
      <ColorBlock color={colors.subject.light} name="Light" />
    </ColorBlocks>
    <ColorBlocks title="Subject material">
      <ColorBlock color={colors.subjectMaterial.dark} name="Dark" />
      <ColorBlock color={colors.subjectMaterial.light} name="Light" />
    </ColorBlocks>
    <ColorBlocks title="Source material">
      <ColorBlock color={colors.sourceMaterial.dark} name="Dark" />
      <ColorBlock color={colors.sourceMaterial.light} name="Light" />
    </ColorBlocks>
    <ColorBlocks title="Tasks and activities">
      <ColorBlock color={colors.tasksAndActivities.dark} name="Dark" />
      <ColorBlock color={colors.tasksAndActivities.background} name="Background" />
      <ColorBlock color={colors.tasksAndActivities.light} name="Light" />
    </ColorBlocks>
    <ColorBlocks title="Assessment resource">
      <ColorBlock color={colors.assessmentResource.dark} name="Dark" />
      <ColorBlock color={colors.assessmentResource.background} name="Background" />
      <ColorBlock color={colors.assessmentResource.light} name="Light" />
    </ColorBlocks>
    <ColorBlocks title="Learning path">
      <ColorBlock color={colors.learningPath.dark} name="Dark" />
      <ColorBlock color={colors.learningPath.background} name="Background" />
      <ColorBlock color={colors.learningPath.light} name="Light" />
    </ColorBlocks>
    <ColorBlocks title="Concept">
      <ColorBlock color={colors.concept.dark} name="Dark" />
      <ColorBlock color={colors.concept.light} name="Light" />
    </ColorBlocks>
    <ColorBlocks
      title="Additional material"
      description="Additional material uses a subject material color, but with 40% opacity"
    >
      <ColorBlock color={colors.subjectMaterial.additional} name="Subject material" />
      <ColorBlock color={colors.sourceMaterial.additional} name="Source material" />
      <ColorBlock color={colors.tasksAndActivities.additional} name="Source material" />
      <ColorBlock color={colors.assessmentResource.additional} name="Assessment resource" />
      <ColorBlock color={colors.learningPath.backgroundAdditional} name="Learning path" />
    </ColorBlocks>
  </div>
);

export const NDLAFilm: StoryFn = () => (
  <ColorBlocks>
    <ColorBlock color={colors.ndlaFilm.filmColor} name="Film" />
    <ColorBlock color={colors.ndlaFilm.filmColorDark} name="Dark" />
    <ColorBlock color={colors.ndlaFilm.filmColorLight} name="Light" />
    <ColorBlock color={colors.ndlaFilm.filmColorBright} name="Lighter" />
  </ColorBlocks>
);

/**
 * Supportfargene er valgt fordi de er konvensjonelle i sin kontekst. Selv om vi anerkjenner at det er kulturelle forskjeller har enkelte farger iboende betydning for et stort flertall brukere. For eksempel bruker vi rødt til å kommunisere en feil og grønt for suksess. Brukes med opacity 30% på hvit bakgrunn.
 */
export const Support: StoryFn = () => (
  <ColorBlocks>
    <ColorBlock color={colors.support.red} name="Red" />
    <ColorBlock color={colors.support.redLight} name="Red lighter" />
    <ColorBlock color={colors.support.redLightest} name="Red lightest" />
    <ColorBlock color={colors.support.green} name="Green" />
    <ColorBlock color={colors.support.greenLight} name="Green light" />
    <ColorBlock color={colors.support.greenLightest} name="Green lightest" />
    <ColorBlock color={colors.support.yellow} name="Yellow" />
    <ColorBlock color={colors.support.yellowLight} name="Yellow light" />
    <ColorBlock color={colors.support.yellowLightest} name="Yellow lightest" />
  </ColorBlocks>
);
