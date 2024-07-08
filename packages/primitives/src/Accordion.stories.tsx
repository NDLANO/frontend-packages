/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryObj } from "@storybook/react";
import { ChevronDown } from "@ndla/icons/common";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemIndicator,
  AccordionItemTrigger,
  AccordionRoot,
} from "./Accordion";
import { Heading } from "./Text";

const meta: Meta<typeof AccordionRoot> = {
  title: "Primitives/Accordion",
  component: AccordionRoot,
  tags: ["autodocs"],
  args: {
    multiple: true,
  },
  render: (args) => (
    <AccordionRoot {...args}>
      <AccordionItem value={"1"}>
        <Heading asChild consumeCss textStyle="label.medium" fontWeight="bold">
          <h2>
            <AccordionItemTrigger>
              Tittel
              <AccordionItemIndicator asChild>
                <ChevronDown size="medium" />
              </AccordionItemIndicator>
            </AccordionItemTrigger>
          </h2>
        </Heading>
        <AccordionItemContent>
          <div>
            <strong>Undertittel</strong>
          </div>
          <div>En kort paragraf</div>
        </AccordionItemContent>
      </AccordionItem>
      <AccordionItem value={"2"}>
        <Heading asChild consumeCss textStyle="label.medium" fontWeight="bold">
          <h2>
            <AccordionItemTrigger>
              Tittel
              <AccordionItemIndicator asChild>
                <ChevronDown size="medium" />
              </AccordionItemIndicator>
            </AccordionItemTrigger>
          </h2>
        </Heading>
        <AccordionItemContent>
          <div>
            <strong>Undertittel 2</strong>
          </div>
          <div>Innhold</div>
        </AccordionItemContent>
      </AccordionItem>
    </AccordionRoot>
  ),
};

export default meta;

export const Default: StoryObj<typeof AccordionRoot> = {};

export const Disabled: StoryObj<typeof AccordionRoot> = {
  args: {
    disabled: true,
  },
};
