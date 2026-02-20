/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Accordion } from "@ark-ui/react";
import { ArrowDownShortLine } from "@ndla/icons";
import { styled } from "@ndla/styled-system/jsx";
import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemIndicator,
  AccordionItemTrigger,
  AccordionRoot,
} from "./Accordion";
import { IconButton } from "./Button";
import { Heading } from "./Text";

const meta: Meta<typeof AccordionRoot> = {
  title: "Primitives/Accordion",
  component: Accordion.Root,
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
                <ArrowDownShortLine size="medium" />
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
                <ArrowDownShortLine size="medium" />
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

const SimpleRender: StoryFn<typeof AccordionRoot> = (args) => (
  <AccordionRoot {...args}>
    <AccordionItem value={"1"}>
      <styled.div css={{ display: "flex", justifyContent: "space-between" }}>
        <Heading asChild consumeCss textStyle="label.medium" fontWeight="bold">
          <h2>Tittel</h2>
        </Heading>
        <AccordionItemTrigger asChild>
          <IconButton variant="tertiary" title="Åpne trekkspill" aria-label="Åpne trekkspill">
            <AccordionItemIndicator asChild>
              <ArrowDownShortLine size="medium" />
            </AccordionItemIndicator>
          </IconButton>
        </AccordionItemTrigger>
      </styled.div>
      <AccordionItemContent>
        <div>
          <strong>Undertittel</strong>
        </div>
        <div>En kort paragraf</div>
      </AccordionItemContent>
    </AccordionItem>
    <AccordionItem value={"2"}>
      <styled.div css={{ display: "flex", justifyContent: "space-between" }}>
        <Heading asChild consumeCss textStyle="label.medium" fontWeight="bold">
          <h2>Tittel</h2>
        </Heading>
        <AccordionItemTrigger asChild>
          <IconButton variant="tertiary" title="Åpne trekkspill" aria-label="Åpne trekkspill">
            <AccordionItemIndicator asChild>
              <ArrowDownShortLine size="medium" />
            </AccordionItemIndicator>
          </IconButton>
        </AccordionItemTrigger>
      </styled.div>
      <AccordionItemContent>
        <div>
          <strong>Undertittel 2</strong>
        </div>
        <div>Innhold</div>
      </AccordionItemContent>
    </AccordionItem>
  </AccordionRoot>
);

export const Simple: StoryObj<typeof AccordionRoot> = {
  args: {
    variant: "clean",
  },
  render: SimpleRender,
};

export const SimpleDisabled: StoryObj<typeof AccordionRoot> = {
  args: {
    variant: "clean",
    disabled: true,
  },
  render: SimpleRender,
};
