/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from "@emotion/styled";
import { Meta, StoryObj } from "@storybook/react";
import { spacing } from "@ndla/core";
import { Heading, Text } from "@ndla/typography";
import FactBox from "./FactBox";

const Wrapper = styled.div`
  padding: ${spacing.normal};
`;

/**
 *For alt nytt innhold på ndla.no skal ikke flytende høyrespalte benyttes. I stedet benytter vi faktabokser innenfor innholdsspalten.
 */
export default {
  title: "Components/FactBox",
  component: FactBox,
  tags: ["autodocs"],
  paramemeters: {
    inlineStories: true,
  },
  decorators: [
    (Story) => (
      <Wrapper>
        <Story />
      </Wrapper>
    ),
  ],
  args: {
    children: (
      <>
        <Heading element="h2" headingStyle="h2">
          Faktaboks
        </Heading>
        <Text textStyle="content">
          En faktaboks kan inneholde punktlister eller korte fakta som er relevant for artikkelens innhold.
        </Text>
        <Text textStyle="content">
          Det anbefales å ikke ha for mye innhold i faktaboks, slik at lese-konteksten i størst mulig grad beholdes.
        </Text>
        <Heading element="h2" headingStyle="h2">
          Enkel tittel
        </Heading>
        <Text textStyle="content">
          Faktaboksen kan også brukes til å oppsummere innhold i slutten av en artikkel, og den kan inneholde
          lisensiering om eksternt innhold er brukt.
        </Text>
      </>
    ),
  },
} as Meta<typeof FactBox>;

export const Default: StoryObj<typeof FactBox> = {};
