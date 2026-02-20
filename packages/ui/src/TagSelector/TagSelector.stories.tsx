/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { type ComboboxInputValueChangeDetails, createListCollection } from "@ark-ui/react";
import { CloseLine, ArrowDownShortLine, CheckLine } from "@ndla/icons";
import {
  ComboboxContent,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxItemText,
  IconButton,
  Input,
  InputContainer,
} from "@ndla/primitives";
import { HStack } from "@ndla/styled-system/jsx";
import type { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import { useTagSelectorTranslations } from "../i18n/useComponentTranslations";
import {
  TagSelectorClearTrigger,
  TagSelectorControl,
  TagSelectorInput,
  TagSelectorLabel,
  TagSelectorRoot,
  TagSelectorTrigger,
} from "./TagSelector";

export default {
  title: "Components/TagSelector",
  component: TagSelectorRoot,
  tags: ["autodocs"],
} satisfies Meta<typeof TagSelectorRoot>;

const data = [
  "BackToSchool",
  "SchoolLife",
  "Homework",
  "SchoolDays",
  "Classroom",
  "StudyTime",
  "TeacherLife",
  "StudentLife",
  "SchoolSpirit",
  "Education",
];

export const Default: StoryFn<typeof TagSelectorRoot> = ({ translations, ...args }) => {
  const [options, setOptions] = useState(data);
  const [value, setValue] = useState<string[]>([]);
  const componentTranslations = useTagSelectorTranslations(translations);

  const handleChange = (e: ComboboxInputValueChangeDetails) => {
    const filtered = data.filter((item) => item.toLowerCase().includes(e.inputValue.toLowerCase()));
    setOptions(filtered);
  };

  const collection = createListCollection({ items: options });

  return (
    <TagSelectorRoot
      {...args}
      value={value}
      collection={collection}
      onInputValueChange={handleChange}
      onValueChange={(details) => setValue(details.value)}
      translations={componentTranslations}
    >
      <TagSelectorLabel>Emneknagger</TagSelectorLabel>
      <HStack gap="4xsmall">
        <TagSelectorControl asChild>
          <InputContainer>
            <TagSelectorInput asChild>
              <Input placeholder="Søk etter emneknagger" />
            </TagSelectorInput>

            <TagSelectorClearTrigger asChild>
              <IconButton variant="clear">
                <CloseLine />
              </IconButton>
            </TagSelectorClearTrigger>
          </InputContainer>
        </TagSelectorControl>
        <TagSelectorTrigger asChild>
          <IconButton variant="secondary">
            <ArrowDownShortLine />
          </IconButton>
        </TagSelectorTrigger>
      </HStack>
      <ComboboxContent>
        {options.map((item) => (
          <ComboboxItem key={item} item={item}>
            <ComboboxItemText>{item}</ComboboxItemText>
            <ComboboxItemIndicator>
              <CheckLine />
            </ComboboxItemIndicator>
          </ComboboxItem>
        ))}
      </ComboboxContent>
    </TagSelectorRoot>
  );
};
