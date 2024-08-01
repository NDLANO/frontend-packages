/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useState } from "react";
import { Portal, type ComboboxInputValueChangeDetails } from "@ark-ui/react";
import { Meta, StoryFn } from "@storybook/react";
import { CloseLine } from "@ndla/icons/action";
import { ArrowDownShortLine } from "@ndla/icons/common";
import { CheckLine } from "@ndla/icons/editor";
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
import { FieldRoot } from "./Field";
import { FieldErrorMessage } from "./FieldErrorMessage";
import { Input, InputContainer } from "./Input";
import { AdvancedItem, advancedItems, europeanCountries } from "./storybookHelpers/data";
import { Text } from "./Text";

const meta: Meta<typeof ComboboxRoot> = {
  title: "Primitives/Combobox",
  tags: ["autodocs"],
  component: ComboboxRoot,
  args: {
    variant: "simple",
    translations: {
      triggerLabel: "Vis forslag",
      clearTriggerLabel: "Fjern valg",
    },
  },
};

export default meta;

export const Default: StoryFn<typeof ComboboxRoot> = (args) => {
  const [items, setItems] = useState(europeanCountries);

  const handleChange = (e: ComboboxInputValueChangeDetails) => {
    const filtered = europeanCountries.filter((item) => item.label.toLowerCase().includes(e.inputValue.toLowerCase()));
    setItems(filtered.length > 0 ? filtered : europeanCountries);
  };

  return (
    <ComboboxRoot {...args} items={items} onInputValueChange={handleChange}>
      <ComboboxLabel>Choose your place of residence</ComboboxLabel>
      <ComboboxControl>
        <InputContainer>
          <ComboboxInput asChild>
            <Input placeholder="Where do you live?" />
          </ComboboxInput>
          <ComboboxClearTrigger asChild>
            <IconButton variant="clear">
              <CloseLine />
            </IconButton>
          </ComboboxClearTrigger>
        </InputContainer>
        <ComboboxTrigger asChild>
          <IconButton variant="secondary">
            <ArrowDownShortLine />
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
                  <CheckLine />
                </ComboboxItemIndicator>
              </ComboboxItem>
            ))}
          </ComboboxContent>
        </ComboboxPositioner>
      </Portal>
    </ComboboxRoot>
  );
};

export const Disabled: StoryFn<typeof ComboboxRoot> = (args) => {
  const [items, setItems] = useState(europeanCountries);

  const handleChange = (e: ComboboxInputValueChangeDetails) => {
    const filtered = europeanCountries.filter((item) => item.label.toLowerCase().includes(e.inputValue.toLowerCase()));
    setItems(filtered.length > 0 ? filtered : europeanCountries);
  };

  return (
    <ComboboxRoot {...args} disabled items={items} onInputValueChange={handleChange}>
      <ComboboxLabel>Choose your place of residence</ComboboxLabel>
      <ComboboxControl>
        <InputContainer>
          <ComboboxInput asChild>
            <Input placeholder="Where do you live?" />
          </ComboboxInput>
          <ComboboxClearTrigger asChild>
            <IconButton variant="clear">
              <CloseLine />
            </IconButton>
          </ComboboxClearTrigger>
        </InputContainer>
        <ComboboxTrigger asChild>
          <IconButton variant="secondary">
            <ArrowDownShortLine />
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
                  <CheckLine />
                </ComboboxItemIndicator>
              </ComboboxItem>
            ))}
          </ComboboxContent>
        </ComboboxPositioner>
      </Portal>
    </ComboboxRoot>
  );
};

const disabledEuropeanCountries = europeanCountries.map((item, index) => ({ ...item, disabled: index % 3 === 1 }));

export const DisabledItems: StoryFn<typeof ComboboxRoot> = (args) => {
  const [items, setItems] = useState(disabledEuropeanCountries);

  const handleChange = (e: ComboboxInputValueChangeDetails) => {
    const filtered = disabledEuropeanCountries.filter((item) =>
      item.label.toLowerCase().includes(e.inputValue.toLowerCase()),
    );
    setItems(filtered.length > 0 ? filtered : disabledEuropeanCountries);
  };

  return (
    <ComboboxRoot {...args} items={items} onInputValueChange={handleChange}>
      <ComboboxLabel>Choose your place of residence</ComboboxLabel>
      <ComboboxControl>
        <InputContainer>
          <ComboboxInput asChild>
            <Input placeholder="Where do you live?" />
          </ComboboxInput>
          <ComboboxClearTrigger asChild>
            <IconButton variant="clear">
              <CloseLine />
            </IconButton>
          </ComboboxClearTrigger>
        </InputContainer>
        <ComboboxTrigger asChild>
          <IconButton variant="secondary">
            <ArrowDownShortLine />
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
                  <CheckLine />
                </ComboboxItemIndicator>
              </ComboboxItem>
            ))}
          </ComboboxContent>
        </ComboboxPositioner>
      </Portal>
    </ComboboxRoot>
  );
};

export const Advanced: StoryFn<typeof ComboboxRoot> = (args) => {
  const [items, setItems] = useState<AdvancedItem[]>(advancedItems);

  const handleChange = (e: ComboboxInputValueChangeDetails) => {
    const filtered = advancedItems.filter((item) => item.label.toLowerCase().includes(e.inputValue.toLowerCase()));
    setItems(filtered.length > 0 ? filtered : advancedItems);
  };

  return (
    <ComboboxRoot {...args} variant="bordered" items={items} onInputValueChange={handleChange}>
      <ComboboxLabel>Framework</ComboboxLabel>
      <ComboboxControl>
        <InputContainer>
          <ComboboxInput asChild>
            <Input placeholder="Velg et rammeverk" />
          </ComboboxInput>
          <ComboboxClearTrigger asChild>
            <IconButton variant="clear">
              <CloseLine />
            </IconButton>
          </ComboboxClearTrigger>
        </InputContainer>
        <ComboboxTrigger asChild>
          <IconButton variant="secondary">
            <ArrowDownShortLine />
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
                  <CheckLine />
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
  const [items, setItems] = useState(europeanCountries);

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
    const filtered = europeanCountries.filter((item) => item.label.toLowerCase().includes(e.inputValue.toLowerCase()));
    setItems(filtered);
  };

  return (
    <ComboboxRoot
      {...args}
      variant="bordered"
      items={items}
      onInputValueChange={handleChange}
      itemToString={(item) => item.label}
    >
      <ComboboxLabel>Countries you've visited</ComboboxLabel>
      <ComboboxControl>
        <InputContainer>
          <ComboboxInput asChild>
            <Input placeholder="Har du vært i Spania?" />
          </ComboboxInput>
          <ComboboxClearTrigger asChild>
            <IconButton variant="clear">
              <CloseLine />
            </IconButton>
          </ComboboxClearTrigger>
        </InputContainer>
        <ComboboxTrigger asChild>
          <IconButton variant="secondary">
            <ArrowDownShortLine />
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
                  <ComboboxItemGroupLabel>{key}</ComboboxItemGroupLabel>
                  {value.map((item) => (
                    <ComboboxItem key={item.value} item={item}>
                      <ComboboxItemText>{item.label}</ComboboxItemText>
                      <ComboboxItemIndicator>
                        <CheckLine />
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

export const WithField: StoryFn<typeof ComboboxRoot> = (args) => {
  const [items, setItems] = useState(europeanCountries);
  const [value, setValue] = useState<string[]>([]);

  const handleChange = (e: ComboboxInputValueChangeDetails) => {
    const filtered = europeanCountries.filter((item) => item.label.toLowerCase().includes(e.inputValue.toLowerCase()));
    setItems(filtered.length > 0 ? filtered : europeanCountries);
  };

  const invalid = !value.length;

  return (
    <FieldRoot invalid={invalid}>
      <ComboboxRoot
        {...args}
        value={value}
        onValueChange={(val) => setValue(val.value)}
        items={items}
        onInputValueChange={handleChange}
      >
        <ComboboxLabel>Choose your place of residence</ComboboxLabel>
        <FieldErrorMessage>You have to live somewhere</FieldErrorMessage>
        <ComboboxControl>
          <InputContainer>
            <ComboboxInput asChild>
              <Input placeholder="Where do you live?" />
            </ComboboxInput>
            <ComboboxClearTrigger asChild>
              <IconButton variant="clear">
                <CloseLine />
              </IconButton>
            </ComboboxClearTrigger>
          </InputContainer>
          <ComboboxTrigger asChild>
            <IconButton variant="secondary">
              <ArrowDownShortLine />
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
                    <CheckLine />
                  </ComboboxItemIndicator>
                </ComboboxItem>
              ))}
            </ComboboxContent>
          </ComboboxPositioner>
        </Portal>
      </ComboboxRoot>
    </FieldRoot>
  );
};
