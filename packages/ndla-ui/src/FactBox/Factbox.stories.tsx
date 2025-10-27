/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Meta, StoryObj } from "@storybook/react";
import { Button, Heading, UnOrderedList, OrderedList } from "@ndla/primitives";
import { FactBox } from "./FactBox";

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
  decorators: [(Story) => <Story />],
  args: {
    children: (
      <>
        <Heading>Faktaboks</Heading>
        <p>Innhold kan først nås etter at boksen er åpnet.</p>
        <Button>Klikk meg</Button>
        <p>En faktaboks kan inneholde punktlister eller korte fakta som er relevant for artikkelens innhold.</p>
        <p>
          Det anbefales å ikke ha for mye innhold i faktaboks, slik at lese-konteksten i størst mulig grad beholdes.
        </p>
        <h2>Enkel tittel</h2>
        <p>
          Faktaboksen kan også brukes til å oppsummere innhold i slutten av en artikkel, og den kan inneholde
          lisensiering om eksternt innhold er brukt.
        </p>
        <UnOrderedList>
          <li>Punkt 1</li>
          <li>Punkt 2</li>
          <li>
            <UnOrderedList>
              <li>Punkt 1.1</li>
              <li>Punkt 1.2</li>
              <li>
                <UnOrderedList>
                  <li>Punkt 1.1.1</li>
                  <li>Punkt 1.2.1</li>
                </UnOrderedList>
              </li>
            </UnOrderedList>
          </li>
        </UnOrderedList>
        <OrderedList>
          <li>Punkt 1</li>
          <li>Punkt 2</li>
          <li>
            <OrderedList>
              <li>Punkt 1.1</li>
              <li>Punkt 1.2</li>
              <li>
                <OrderedList>
                  <li>Punkt 1.1.1</li>
                  <li>Punkt 1.2.1</li>
                </OrderedList>
              </li>
            </OrderedList>
          </li>
        </OrderedList>
      </>
    ),
  },
} as Meta<typeof FactBox>;

export const Default: StoryObj<typeof FactBox> = {};
