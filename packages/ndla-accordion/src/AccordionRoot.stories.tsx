/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryFn } from "@storybook/react";
import AccordionContent from "./AccordionContent";
import AccordionHeader from "./AccordionHeader";
import AccordionItem from "./AccordionItem";
import AccordionRoot from "./AccordionRoot";

const meta: Meta<typeof AccordionRoot> = {
  title: "Components/Accordion",
  component: AccordionRoot,
  tags: ["autodocs"],
  args: {
    type: "single",
    collapsible: true,
  },
  argTypes: {
    value: {
      description: "For controlled state.",
      control: false,
    },
    defaultValue: {
      control: false,
    },
    onValueChange: {
      description: "For controlled state",
    },
  },
};

export default meta;

export const Accordion: StoryFn<typeof AccordionRoot> = (args) => (
  <AccordionRoot {...args}>
    <AccordionItem value={"1"}>
      <AccordionHeader>Tittel</AccordionHeader>
      <AccordionContent>
        <div>
          <strong>Undertittel</strong>
        </div>
        <div>En kort paragraf</div>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value={"2"}>
      <AccordionHeader>Tittel</AccordionHeader>
      <AccordionContent>
        <div>
          <strong>Undertittel 2</strong>
        </div>
        <div>Innhold</div>
      </AccordionContent>
    </AccordionItem>
  </AccordionRoot>
);
