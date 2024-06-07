/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useState } from "react";
import { Portal, type ComboboxInputValueChangeDetails } from "@ark-ui/react";
import { Meta, StoryFn } from "@storybook/react";
import { Cross } from "@ndla/icons/action";
import { ChevronDown } from "@ndla/icons/common";
import { Done } from "@ndla/icons/editor";
import { css } from "@ndla/styled-system/css";
import { Flex } from "@ndla/styled-system/jsx";
import { IconButton } from "./Button";
import {
  ComboboxClearTrigger,
  ComboboxContent,
  ComboboxControl,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemGroup,
  ComboboxItemGroupLabel,
  ComboboxItemIndicator,
  ComboboxItemText,
  ComboboxLabel,
  ComboboxPositioner,
  ComboboxRoot,
  ComboboxTrigger,
} from "./Combobox";
import { Input, InputContainer } from "./Input";
import { Text } from "./Text";

const meta: Meta<typeof ComboboxRoot> = {
  title: "Primitives/Combobox",
  tags: ["autodocs"],
  component: ComboboxRoot,
  args: {
    variant: "simple",
  },
};

export default meta;

const data = [
  { value: "apple", label: "Apple" },
  { value: "apricot", label: "Apricot" },
  { value: "ant", label: "Ant" },
  { value: "anchor", label: "Anchor" },
  { value: "album", label: "Album" },
  { value: "arrow", label: "Arrow" },
  { value: "arcade", label: "Arcade" },
  { value: "ash", label: "Ash" },
  { value: "attic", label: "Attic" },
  { value: "apex", label: "Apex" },
  { value: "banana", label: "Banana" },
  { value: "boat", label: "Boat" },
  { value: "basket", label: "Basket" },
  { value: "butter", label: "Butter" },
  { value: "beacon", label: "Beacon" },
  { value: "branch", label: "Branch" },
  { value: "brick", label: "Brick" },
  { value: "blade", label: "Blade" },
  { value: "brother", label: "Brother" },
  { value: "breeze", label: "Breeze" },
  { value: "cat", label: "Cat" },
  { value: "carrot", label: "Carrot" },
  { value: "crane", label: "Crane" },
  { value: "cloud", label: "Cloud" },
  { value: "camel", label: "Camel" },
  { value: "crown", label: "Crown" },
  { value: "castle", label: "Castle" },
  { value: "circle", label: "Circle" },
  { value: "cactus", label: "Cactus" },
  { value: "crystal", label: "Crystal" },
  { value: "dog", label: "Dog" },
  { value: "dragon", label: "Dragon" },
  { value: "daisy", label: "Daisy" },
  { value: "desert", label: "Desert" },
  { value: "drift", label: "Drift" },
  { value: "dune", label: "Dune" },
  { value: "dolphin", label: "Dolphin" },
  { value: "dance", label: "Dance" },
  { value: "dawn", label: "Dawn" },
  { value: "dream", label: "Dream" },
  { value: "eagle", label: "Eagle" },
  { value: "earth", label: "Earth" },
  { value: "ember", label: "Ember" },
  { value: "echo", label: "Echo" },
  { value: "eclipse", label: "Eclipse" },
  { value: "elm", label: "Elm" },
  { value: "elephant", label: "Elephant" },
  { value: "engine", label: "Engine" },
  { value: "entrance", label: "Entrance" },
  { value: "east", label: "East" },
  { value: "fox", label: "Fox" },
  { value: "feather", label: "Feather" },
  { value: "frost", label: "Frost" },
  { value: "flame", label: "Flame" },
  { value: "forest", label: "Forest" },
  { value: "finch", label: "Finch" },
  { value: "fence", label: "Fence" },
  { value: "fountain", label: "Fountain" },
  { value: "frame", label: "Frame" },
  { value: "fog", label: "Fog" },
];

export const Default: StoryFn<typeof ComboboxRoot> = (args) => {
  const [items, setItems] = useState(data);

  const handleChange = (e: ComboboxInputValueChangeDetails) => {
    const filtered = data.filter((item) => item.label.toLowerCase().includes(e.inputValue.toLowerCase()));
    setItems(filtered.length > 0 ? filtered : data);
  };

  return (
    <ComboboxRoot {...args} items={data} onInputValueChange={handleChange}>
      <ComboboxLabel>Framework</ComboboxLabel>
      <ComboboxControl>
        <InputContainer>
          <ComboboxInput asChild>
            <Input placeholder="Velg et rammeverk" />
          </ComboboxInput>
          <ComboboxClearTrigger asChild>
            <IconButton variant="clear">
              <Cross />
            </IconButton>
          </ComboboxClearTrigger>
        </InputContainer>
        <ComboboxTrigger asChild>
          <IconButton variant="secondary">
            <ChevronDown />
          </IconButton>
        </ComboboxTrigger>
      </ComboboxControl>
      <Portal>
        <ComboboxPositioner>
          <ComboboxContent>
            {items.map((item) => (
              <ComboboxItem key={item.value} item={item}>
                <ComboboxItemText>{item.label}</ComboboxItemText>
                <ComboboxItemIndicator>
                  <Done />
                </ComboboxItemIndicator>
              </ComboboxItem>
            ))}
          </ComboboxContent>
        </ComboboxPositioner>
      </Portal>
    </ComboboxRoot>
  );
};

interface Item {
  label: string;
  value: string;
  description: string;
  disabled?: boolean;
  img: string;
}

const advancedItems: Item[] = [
  {
    label: "React",
    value: "react",
    description: "A JavaScript library for building user interfaces",
    img: "https://api.test.ndla.no/image-api/raw/YQyWgMkg.png",
  },
  {
    label: "Solid",
    value: "solid",
    description: "React, but with signals",
    img: "https://api.test.ndla.no/image-api/raw/YQyWgMkg.png",
  },
  {
    label: "Svelte",
    value: "svelte",
    disabled: true,
    description: "No more JS than required",
    img: "https://api.test.ndla.no/image-api/raw/YQyWgMkg.png",
  },
  {
    label: "Vue",
    value: "vue",
    description: "The Progressive JavaScript Framework",
    img: "https://api.test.ndla.no/image-api/raw/YQyWgMkg.png",
  },
];

export const Advanced: StoryFn<typeof ComboboxRoot> = (args) => {
  const [items, setItems] = useState<Item[]>(advancedItems);

  const handleChange = (e: ComboboxInputValueChangeDetails) => {
    const filtered = advancedItems.filter((item) => item.label.toLowerCase().includes(e.inputValue.toLowerCase()));
    setItems(filtered.length > 0 ? filtered : advancedItems);
  };

  return (
    <ComboboxRoot {...args} variant="bordered" items={data} onInputValueChange={handleChange}>
      <ComboboxLabel>Framework</ComboboxLabel>
      <ComboboxControl>
        <InputContainer>
          <ComboboxInput asChild>
            <Input placeholder="Velg et rammeverk" />
          </ComboboxInput>
          <ComboboxClearTrigger asChild>
            <IconButton variant="clear">
              <Cross />
            </IconButton>
          </ComboboxClearTrigger>
        </InputContainer>
        <ComboboxTrigger asChild>
          <IconButton variant="secondary">
            <ChevronDown />
          </IconButton>
        </ComboboxTrigger>
      </ComboboxControl>
      <Portal>
        <ComboboxPositioner>
          <ComboboxContent>
            {items.map((item) => (
              <ComboboxItem key={item.value} item={item}>
                <Flex className={css({ gap: "xsmall" })}>
                  <img src={item.img} alt="" width="56" height="40" />
                  <Flex direction="column">
                    <ComboboxItemText>{item.label}</ComboboxItemText>
                    <Text textStyle="label.xsmall">{item.description}</Text>
                  </Flex>
                </Flex>
                <ComboboxItemIndicator>
                  <Done />
                </ComboboxItemIndicator>
              </ComboboxItem>
            ))}
          </ComboboxContent>
        </ComboboxPositioner>
      </Portal>
    </ComboboxRoot>
  );
};

type GroupedData = Record<string, { value: string; label: string }[]>;

export const Grouped: StoryFn<typeof ComboboxRoot> = (args) => {
  const [items, setItems] = useState(data);

  const groupedItems = items.reduce<GroupedData>((acc, item) => {
    const key = item.label[0].toUpperCase();
    if (acc[key]) {
      acc[key].push(item);
    } else {
      acc[key] = [item];
    }
    return acc;
  }, {});

  const handleChange = (e: ComboboxInputValueChangeDetails) => {
    const filtered = data.filter((item) => item.label.toLowerCase().includes(e.inputValue.toLowerCase()));
    setItems(filtered);
  };

  return (
    <ComboboxRoot
      {...args}
      variant="bordered"
      items={items}
      onInputValueChange={handleChange}
      itemToString={(item) => (item as Item).label}
    >
      <ComboboxLabel>Framework</ComboboxLabel>
      <ComboboxControl>
        <InputContainer>
          <ComboboxInput asChild>
            <Input placeholder="Velg et rammeverk" />
          </ComboboxInput>
          <ComboboxClearTrigger asChild>
            <IconButton variant="clear">
              <Cross />
            </IconButton>
          </ComboboxClearTrigger>
        </InputContainer>
        <ComboboxTrigger asChild>
          <IconButton variant="secondary">
            <ChevronDown />
          </IconButton>
        </ComboboxTrigger>
      </ComboboxControl>
      <Portal>
        <ComboboxPositioner>
          <ComboboxContent>
            {Object.entries(groupedItems)
              .filter(([_, value]) => !!value.length)
              .map(([key, value], index) => (
                <ComboboxItemGroup key={index}>
                  <ComboboxItemGroupLabel>{`Ting som starter med ${key}`}</ComboboxItemGroupLabel>
                  {value.map((item) => (
                    <ComboboxItem key={item.value} item={item}>
                      <ComboboxItemText>{item.label}</ComboboxItemText>
                      <ComboboxItemIndicator>
                        <Done />
                      </ComboboxItemIndicator>
                    </ComboboxItem>
                  ))}
                </ComboboxItemGroup>
              ))}
          </ComboboxContent>
        </ComboboxPositioner>
      </Portal>
    </ComboboxRoot>
  );
};
