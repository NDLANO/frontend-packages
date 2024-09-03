/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryFn } from "@storybook/react";
import { Bold, Italic, Link, ListAlphabetical, ListCircle, ListNumbered } from "@ndla/icons/editor";
import { HStack, styled } from "@ndla/styled-system/jsx";
import { ToggleGroupRoot, ToggleGroupItem } from "./ToggleGroup";

export default {
  title: "Components/ToggleGroup",
  tags: ["autodocs"],
  component: ToggleGroupRoot,
  args: {
    variant: "subtle",
  },
} as Meta<typeof ToggleGroupRoot>;

export const Default: StoryFn<typeof ToggleGroupRoot> = ({ ...args }) => {
  return (
    <ToggleGroupRoot variant="subtle" {...args}>
      <ToggleGroupItem value="bold">
        <Bold />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic">
        <Italic />
      </ToggleGroupItem>
      <ToggleGroupItem value="bulletedList">
        <ListCircle />
      </ToggleGroupItem>
      <ToggleGroupItem value="numberedList">
        <ListNumbered />
      </ToggleGroupItem>
      <ToggleGroupItem value="alphabeticalList">
        <ListAlphabetical />
      </ToggleGroupItem>
    </ToggleGroupRoot>
  );
};

export const Label: StoryFn<typeof ToggleGroupRoot> = ({ ...args }) => {
  return (
    <ToggleGroupRoot multiple {...args}>
      <ToggleGroupItem value="bulletedList" asChild>
        <ListCircle />
      </ToggleGroupItem>
      <ToggleGroupItem value="numberedList">
        <ListNumbered />
      </ToggleGroupItem>
      <ToggleGroupItem value="alphabeticalList">
        <ListAlphabetical />
      </ToggleGroupItem>
    </ToggleGroupRoot>
  );
};

const Wrapper = styled(HStack, {
  base: {
    background: "surface.infoSubtle",
    border: "1px solid",
    borderColor: "stroke.subtle",
    borderTopRadius: "xsmall",
  },
});

export const MultipleGroups: StoryFn<typeof ToggleGroupRoot> = () => {
  return (
    <Wrapper gap="initial">
      <ToggleGroupRoot multiple>
        <ToggleGroupItem value="bold">
          <Bold />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic">
          <Italic />
        </ToggleGroupItem>
      </ToggleGroupRoot>
      <ToggleGroupRoot>
        <ToggleGroupItem value="bulletedList">
          <ListCircle />
        </ToggleGroupItem>
        <ToggleGroupItem value="numberedList">
          <ListNumbered />
        </ToggleGroupItem>
        <ToggleGroupItem value="alphabeticalList">
          <ListAlphabetical />
        </ToggleGroupItem>
      </ToggleGroupRoot>
      <ToggleGroupRoot>
        <ToggleGroupItem value="link">
          <Link />
        </ToggleGroupItem>
      </ToggleGroupRoot>
    </Wrapper>
  );
};

export const InitialActive: StoryFn<typeof ToggleGroupRoot> = () => {
  return (
    <ToggleGroupRoot multiple variant="subtle" defaultValue={["italic", "bold"]}>
      <ToggleGroupItem value="bold">
        <Bold />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic">
        <Italic />
      </ToggleGroupItem>
      <ToggleGroupItem value="bulletedList">
        <ListCircle />
      </ToggleGroupItem>
      <ToggleGroupItem value="numberedList">
        <ListNumbered />
      </ToggleGroupItem>
      <ToggleGroupItem value="alphabeticalList">
        <ListAlphabetical />
      </ToggleGroupItem>
    </ToggleGroupRoot>
  );
};
