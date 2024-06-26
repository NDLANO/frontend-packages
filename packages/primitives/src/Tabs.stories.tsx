/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { TabsContent, TabsIndicator, TabsList, TabsRoot, TabsTrigger } from "./Tabs";
import { Heading, Text } from "./Text";

export default {
  title: "Primitives/Tabs",
  tags: ["autodocs"],
  component: TabsRoot,
  parameters: {
    inlineStories: true,
  },
  args: {
    defaultValue: "color",
    orientation: "horizontal",
    variant: "line",
  },
  render: (args) => (
    <TabsRoot {...args}>
      <TabsList>
        <TabsTrigger value="color">Farge</TabsTrigger>
        <TabsTrigger value="shapes">Figur</TabsTrigger>
        <TabsTrigger value="secret" disabled>
          Hemmelig
        </TabsTrigger>
        <TabsTrigger value="secret2">Hemmelig 2</TabsTrigger>
        <TabsIndicator />
      </TabsList>
      <TabsContent value="color">
        <Heading asChild textStyle="heading.medium">
          <h2>Oversikt over farger</h2>
        </Heading>
        <Text>Grønn, blå og rød.</Text>
        <Button>Hallo</Button>
      </TabsContent>
      <TabsContent value="shapes">
        <Heading asChild textStyle="heading.medium">
          <h2>Oversikt over figurer</h2>
        </Heading>
        <Text>Sirkel, trekant og firkant.</Text>
      </TabsContent>
      <TabsContent value="secret">
        <Heading asChild textStyle="heading.medium">
          <h2>Ikke hemmelig</h2>
        </Heading>
        <Text>Egentlig ikke så spennende</Text>
      </TabsContent>
      <TabsContent value="secret2">
        <Heading asChild textStyle="heading.medium">
          <h2>Ikke hemmelig</h2>
        </Heading>
        <Text>Egentlig ikke så spennende</Text>
      </TabsContent>
    </TabsRoot>
  ),
} as Meta<typeof TabsRoot>;

export const Default: StoryObj = {};

export const LineHorizontal: StoryObj = {
  args: {
    orientation: "horizontal",
  },
};

export const LineVertical: StoryObj = {
  args: {
    orientation: "vertical",
  },
};

// This is just a placeholder for the tab variant that will be used in ED.
export const OutlineHorizontal: StoryObj = {
  args: {
    variant: "outline",
    orientation: "horizontal",
  },
};

export const OutlineVertical: StoryObj = {
  args: {
    variant: "outline",
    orientation: "vertical",
  },
};
