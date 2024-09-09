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
} as Meta<typeof ToggleGroupRoot>;

export const Primary: StoryFn<typeof ToggleGroupRoot> = ({ ...args }) => {
  return (
    <ToggleGroupRoot {...args}>
      <ToggleGroupItem value="bold" size="small">
        <Bold />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" size="small">
        <Italic />
      </ToggleGroupItem>
      <ToggleGroupItem value="bulletedList" size="small">
        <ListCircle />
      </ToggleGroupItem>
      <ToggleGroupItem value="numberedList" size="small">
        <ListNumbered />
      </ToggleGroupItem>
      <ToggleGroupItem value="alphabeticalList" size="small">
        <ListAlphabetical />
      </ToggleGroupItem>
    </ToggleGroupRoot>
  );
};

export const Secondary: StoryFn<typeof ToggleGroupRoot> = ({ ...args }) => {
  return (
    <ToggleGroupRoot {...args}>
      <ToggleGroupItem value="bold" size="small" variant="secondary">
        <Bold />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" size="small" variant="secondary">
        <Italic />
      </ToggleGroupItem>
      <ToggleGroupItem value="bulletedList" size="small" variant="secondary">
        <ListCircle />
      </ToggleGroupItem>
      <ToggleGroupItem value="numberedList" size="small" variant="secondary">
        <ListNumbered />
      </ToggleGroupItem>
      <ToggleGroupItem value="alphabeticalList" size="small" variant="secondary">
        <ListAlphabetical />
      </ToggleGroupItem>
    </ToggleGroupRoot>
  );
};

export const Tertiary: StoryFn<typeof ToggleGroupRoot> = ({ ...args }) => {
  return (
    <ToggleGroupRoot {...args}>
      <ToggleGroupItem value="bold" size="small" variant="tertiary">
        <Bold />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" size="small" variant="tertiary">
        <Italic />
      </ToggleGroupItem>
      <ToggleGroupItem value="bulletedList" size="small" variant="tertiary">
        <ListCircle />
      </ToggleGroupItem>
      <ToggleGroupItem value="numberedList" size="small" variant="tertiary">
        <ListNumbered />
      </ToggleGroupItem>
      <ToggleGroupItem value="alphabeticalList" size="small" variant="tertiary">
        <ListAlphabetical />
      </ToggleGroupItem>
    </ToggleGroupRoot>
  );
};

export const ToggleMultiple: StoryFn<typeof ToggleGroupRoot> = ({ ...args }) => {
  return (
    <ToggleGroupRoot multiple {...args}>
      <ToggleGroupItem value="bulletedList" variant="tertiary" size="small">
        <ListCircle />
      </ToggleGroupItem>
      <ToggleGroupItem value="numberedList" variant="tertiary" size="small">
        <ListNumbered />
      </ToggleGroupItem>
      <ToggleGroupItem value="alphabeticalList" variant="tertiary" size="small">
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
    padding: "3xsmall",
  },
});

export const MultipleGroups: StoryFn<typeof ToggleGroupRoot> = () => {
  return (
    <Wrapper gap="initial">
      <ToggleGroupRoot multiple>
        <ToggleGroupItem value="bold" variant="tertiary" size="small">
          <Bold />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" variant="tertiary" size="small">
          <Italic />
        </ToggleGroupItem>
      </ToggleGroupRoot>
      <ToggleGroupRoot>
        <ToggleGroupItem value="bulletedList" variant="tertiary" size="small">
          <ListCircle />
        </ToggleGroupItem>
        <ToggleGroupItem value="numberedList" variant="tertiary" size="small">
          <ListNumbered />
        </ToggleGroupItem>
        <ToggleGroupItem value="alphabeticalList" variant="tertiary" size="small">
          <ListAlphabetical />
        </ToggleGroupItem>
      </ToggleGroupRoot>
      <ToggleGroupRoot>
        <ToggleGroupItem value="link" variant="tertiary" size="small">
          <Link />
        </ToggleGroupItem>
      </ToggleGroupRoot>
    </Wrapper>
  );
};

export const InitialActive: StoryFn<typeof ToggleGroupRoot> = () => {
  return (
    <ToggleGroupRoot multiple defaultValue={["italic", "bold"]}>
      <ToggleGroupItem value="bold" variant="tertiary" size="small">
        <Bold />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" variant="tertiary" size="small">
        <Italic />
      </ToggleGroupItem>
      <ToggleGroupItem value="bulletedList" variant="tertiary" size="small">
        <ListCircle />
      </ToggleGroupItem>
      <ToggleGroupItem value="numberedList" variant="tertiary" size="small">
        <ListNumbered />
      </ToggleGroupItem>
      <ToggleGroupItem value="alphabeticalList" variant="tertiary" size="small">
        <ListAlphabetical />
      </ToggleGroupItem>
    </ToggleGroupRoot>
  );
};
