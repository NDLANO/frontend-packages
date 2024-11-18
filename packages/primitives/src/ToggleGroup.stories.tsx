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
import { IconButton } from "./Button";
import { ToggleGroupRoot, ToggleGroupItem } from "./ToggleGroup";

export default {
  title: "Primitives/ToggleGroup",
  tags: ["autodocs"],
  component: ToggleGroupRoot,
} as Meta<typeof ToggleGroupRoot>;

export const Primary: StoryFn<typeof ToggleGroupRoot> = ({ ...args }) => {
  return (
    <ToggleGroupRoot {...args}>
      <ToggleGroupItem value="bold" asChild>
        <IconButton size="small">
          <Bold />
        </IconButton>
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" asChild>
        <IconButton size="small">
          <Italic />
        </IconButton>
      </ToggleGroupItem>
      <ToggleGroupItem value="bulletedList" asChild>
        <IconButton size="small">
          <ListCircle />
        </IconButton>
      </ToggleGroupItem>
      <ToggleGroupItem value="numberedList" asChild>
        <IconButton size="small">
          <ListNumbered />
        </IconButton>
      </ToggleGroupItem>
      <ToggleGroupItem value="alphabeticalList" asChild>
        <IconButton size="small">
          <ListAlphabetical />
        </IconButton>
      </ToggleGroupItem>
    </ToggleGroupRoot>
  );
};

export const Secondary: StoryFn<typeof ToggleGroupRoot> = ({ ...args }) => {
  return (
    <ToggleGroupRoot {...args}>
      <ToggleGroupItem value="bold" asChild>
        <IconButton size="small" variant="secondary">
          <Bold />
        </IconButton>
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" asChild>
        <IconButton size="small" variant="secondary">
          <Italic />
        </IconButton>
      </ToggleGroupItem>
      <ToggleGroupItem value="bulletedList" asChild>
        <IconButton size="small" variant="secondary">
          <ListCircle />
        </IconButton>
      </ToggleGroupItem>
      <ToggleGroupItem value="numberedList" asChild>
        <IconButton size="small" variant="secondary">
          <ListNumbered />
        </IconButton>
      </ToggleGroupItem>
      <ToggleGroupItem value="alphabeticalList" asChild>
        <IconButton size="small" variant="secondary">
          <ListAlphabetical />
        </IconButton>
      </ToggleGroupItem>
    </ToggleGroupRoot>
  );
};

export const Tertiary: StoryFn<typeof ToggleGroupRoot> = ({ ...args }) => {
  return (
    <ToggleGroupRoot {...args}>
      <ToggleGroupItem value="bold" asChild>
        <IconButton size="small" variant="tertiary">
          <Bold />
        </IconButton>
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" asChild>
        <IconButton size="small" variant="tertiary">
          <Italic />
        </IconButton>
      </ToggleGroupItem>
      <ToggleGroupItem value="bulletedList" asChild>
        <IconButton size="small" variant="tertiary">
          <ListCircle />
        </IconButton>
      </ToggleGroupItem>
      <ToggleGroupItem value="numberedList" asChild>
        <IconButton size="small" variant="tertiary">
          <ListNumbered />
        </IconButton>
      </ToggleGroupItem>
      <ToggleGroupItem value="alphabeticalList" asChild>
        <IconButton size="small" variant="tertiary">
          <ListAlphabetical />
        </IconButton>
      </ToggleGroupItem>
    </ToggleGroupRoot>
  );
};

export const ToggleMultiple: StoryFn<typeof ToggleGroupRoot> = ({ ...args }) => {
  return (
    <ToggleGroupRoot multiple {...args}>
      <ToggleGroupItem value="bulletedList" asChild>
        <IconButton variant="tertiary" size="small">
          <ListCircle />
        </IconButton>
      </ToggleGroupItem>
      <ToggleGroupItem value="numberedList" asChild>
        <IconButton variant="tertiary" size="small">
          <ListNumbered />
        </IconButton>
      </ToggleGroupItem>
      <ToggleGroupItem value="alphabeticalList" asChild>
        <IconButton variant="tertiary" size="small">
          <ListAlphabetical />
        </IconButton>
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
    padding: "3xsmall",
  },
});

export const MultipleGroups: StoryFn<typeof ToggleGroupRoot> = () => {
  return (
    <Wrapper gap="initial">
      <ToggleGroupRoot multiple>
        <ToggleGroupItem value="bold" asChild>
          <IconButton variant="tertiary" size="small">
            <Bold />
          </IconButton>
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" asChild>
          <IconButton variant="tertiary" size="small">
            <Italic />
          </IconButton>
        </ToggleGroupItem>
      </ToggleGroupRoot>
      <ToggleGroupRoot>
        <ToggleGroupItem value="bulletedList" asChild>
          <IconButton variant="tertiary" size="small">
            <ListCircle />
          </IconButton>
        </ToggleGroupItem>
        <ToggleGroupItem value="numberedList" asChild>
          <IconButton variant="tertiary" size="small">
            <ListNumbered />
          </IconButton>
        </ToggleGroupItem>
        <ToggleGroupItem value="alphabeticalList" asChild>
          <IconButton variant="tertiary" size="small">
            <ListAlphabetical />
          </IconButton>
        </ToggleGroupItem>
      </ToggleGroupRoot>
      <ToggleGroupRoot>
        <ToggleGroupItem value="link" asChild>
          <IconButton variant="tertiary" size="small">
            <Link />
          </IconButton>
        </ToggleGroupItem>
      </ToggleGroupRoot>
    </Wrapper>
  );
};

export const InitialActive: StoryFn<typeof ToggleGroupRoot> = () => {
  return (
    <ToggleGroupRoot multiple defaultValue={["italic", "bold"]}>
      <ToggleGroupItem value="bold" asChild>
        <IconButton variant="tertiary" size="small">
          <Bold />
        </IconButton>
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" asChild>
        <IconButton variant="tertiary" size="small">
          <Italic />
        </IconButton>
      </ToggleGroupItem>
      <ToggleGroupItem value="bulletedList" asChild>
        <IconButton variant="tertiary" size="small">
          <ListCircle />
        </IconButton>
      </ToggleGroupItem>
      <ToggleGroupItem value="numberedList" asChild>
        <IconButton variant="tertiary" size="small">
          <ListNumbered />
        </IconButton>
      </ToggleGroupItem>
      <ToggleGroupItem value="alphabeticalList" asChild>
        <IconButton variant="tertiary" size="small">
          <ListAlphabetical />
        </IconButton>
      </ToggleGroupItem>
    </ToggleGroupRoot>
  );
};
