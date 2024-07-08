/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useId, useRef, useState } from "react";
import { ComboboxContext, ComboboxInputValueChangeDetails } from "@ark-ui/react/combobox";
import { Portal } from "@ark-ui/react/portal";
import { TagsInputContext } from "@ark-ui/react/tags-input";
import { Meta, StoryFn } from "@storybook/react";
import { Cross } from "@ndla/icons/action";
import { HStack } from "@ndla/styled-system/jsx";
import { contains } from "@ndla/util";
import { IconButton } from "./Button";
import {
  ComboboxClearTrigger,
  ComboboxContent,
  ComboboxControl,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxItemText,
  ComboboxLabel,
  ComboboxPositioner,
  ComboboxRoot,
  ComboboxTrigger,
} from "./Combobox";
import { FieldRoot } from "./Field";
import { FieldErrorMessage } from "./FieldErrorMessage";
import { FieldHelper } from "./FieldHelper";
import { Input, InputContainer } from "./Input";
import {
  TagsInputClearTrigger,
  TagsInputControl,
  TagsInputInput,
  TagsInputItem,
  TagsInputItemDeleteTrigger,
  TagsInputItemInput,
  TagsInputItemPreview,
  TagsInputItemText,
  TagsInputLabel,
  TagsInputRoot,
} from "./TagsInput";
import { ChevronDown } from "../../ndla-icons/src/common";
import { Done } from "../../ndla-icons/src/editor";

const meta: Meta<typeof TagsInputRoot> = {
  title: "Primitives/TagsInput",
  component: TagsInputRoot,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryFn<typeof TagsInputRoot> = ({ ...args }) => {
  return (
    <TagsInputRoot {...args} editable={false}>
      <TagsInputLabel>Favorittfag</TagsInputLabel>
      <HStack gap="4xsmall">
        <TagsInputContext>
          {(api) => (
            <TagsInputControl asChild>
              <InputContainer>
                {api.value.map((value, index) => (
                  <TagsInputItem key={index} index={index} value={value}>
                    <TagsInputItemPreview>
                      <TagsInputItemText>{value}</TagsInputItemText>
                      <TagsInputItemDeleteTrigger>
                        <Cross />
                      </TagsInputItemDeleteTrigger>
                    </TagsInputItemPreview>
                  </TagsInputItem>
                ))}
                <TagsInputInput placeholder="Legg til fag" asChild>
                  <Input />
                </TagsInputInput>
              </InputContainer>
            </TagsInputControl>
          )}
        </TagsInputContext>
        <TagsInputClearTrigger asChild>
          <IconButton variant="secondary">
            <Cross />
          </IconButton>
        </TagsInputClearTrigger>
      </HStack>
    </TagsInputRoot>
  );
};

export const Editable: StoryFn<typeof TagsInputRoot> = ({ ...args }) => {
  return (
    <TagsInputRoot {...args} editable>
      <TagsInputLabel>Favorittfag</TagsInputLabel>
      <HStack gap="4xsmall">
        <TagsInputContext>
          {(api) => (
            <TagsInputControl asChild>
              <InputContainer>
                {api.value.map((value, index) => (
                  <TagsInputItem key={index} index={index} value={value}>
                    <TagsInputItemPreview>
                      <TagsInputItemText>{value}</TagsInputItemText>
                      <TagsInputItemDeleteTrigger>
                        <Cross />
                      </TagsInputItemDeleteTrigger>
                    </TagsInputItemPreview>
                    <TagsInputItemInput />
                  </TagsInputItem>
                ))}
                <TagsInputInput placeholder="Legg til fag" asChild>
                  <Input />
                </TagsInputInput>
              </InputContainer>
            </TagsInputControl>
          )}
        </TagsInputContext>
        <TagsInputClearTrigger asChild>
          <IconButton variant="secondary">
            <Cross />
          </IconButton>
        </TagsInputClearTrigger>
      </HStack>
    </TagsInputRoot>
  );
};

export const Disabled: StoryFn<typeof TagsInputRoot> = ({ ...args }) => {
  return (
    <TagsInputRoot {...args} disabled>
      <TagsInputLabel>Favorittfag</TagsInputLabel>
      <HStack gap="4xsmall">
        <TagsInputContext>
          {(api) => (
            <TagsInputControl asChild>
              <InputContainer>
                {api.value.map((value, index) => (
                  <TagsInputItem key={index} index={index} value={value}>
                    <TagsInputItemPreview>
                      <TagsInputItemText>{value}</TagsInputItemText>
                      <TagsInputItemDeleteTrigger>
                        <Cross />
                      </TagsInputItemDeleteTrigger>
                    </TagsInputItemPreview>
                  </TagsInputItem>
                ))}
                <TagsInputInput placeholder="Legg til fag" asChild>
                  <Input />
                </TagsInputInput>
              </InputContainer>
            </TagsInputControl>
          )}
        </TagsInputContext>
        <TagsInputClearTrigger asChild>
          <IconButton variant="secondary">
            <Cross />
          </IconButton>
        </TagsInputClearTrigger>
      </HStack>
    </TagsInputRoot>
  );
};

export const WithField: StoryFn<typeof TagsInputRoot> = ({ ...args }) => {
  const [value, setValue] = useState<string[]>([]);
  const invalid = value.length > 3;

  return (
    <FieldRoot invalid={invalid}>
      <TagsInputRoot {...args} value={value} onValueChange={(details) => setValue(details.value)}>
        <TagsInputLabel>Favorittfag</TagsInputLabel>
        <FieldHelper>Du kan bare velge tre tags</FieldHelper>
        <FieldErrorMessage>Ikke mer enn tre!!</FieldErrorMessage>
        <HStack gap="4xsmall">
          <TagsInputContext>
            {(api) => (
              <TagsInputControl asChild>
                <InputContainer>
                  {api.value.map((value, index) => (
                    <TagsInputItem key={index} index={index} value={value}>
                      <TagsInputItemPreview>
                        <TagsInputItemText>{value}</TagsInputItemText>
                        <TagsInputItemDeleteTrigger>
                          <Cross />
                        </TagsInputItemDeleteTrigger>
                      </TagsInputItemPreview>
                    </TagsInputItem>
                  ))}
                  <TagsInputInput placeholder="Legg til fag" asChild>
                    <Input />
                  </TagsInputInput>
                </InputContainer>
              </TagsInputControl>
            )}
          </TagsInputContext>
          <TagsInputClearTrigger asChild>
            <IconButton variant="secondary">
              <Cross />
            </IconButton>
          </TagsInputClearTrigger>
        </HStack>
      </TagsInputRoot>
    </FieldRoot>
  );
};

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

export const ComboboxTags: StoryFn<typeof ComboboxRoot> = () => {
  const [options, setOptions] = useState(data);
  const [value, setValue] = useState<string[]>([]);

  const contentRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: ComboboxInputValueChangeDetails) => {
    const filtered = data.filter((item) => item.toLowerCase().includes(e.inputValue.toLowerCase()));
    setOptions(filtered);
  };

  const ids = {
    root: useId(),
    input: useId(),
    control: useId(),
  };

  const tagsInputId = useId();
  const comboboxId = useId();

  return (
    <ComboboxRoot
      id={comboboxId}
      items={options}
      ids={ids}
      allowCustomValue
      multiple
      selectionBehavior="clear"
      value={value}
      onInputValueChange={handleChange}
      onValueChange={(details) => {
        queueMicrotask(() => {
          setValue(details.value);
          setOptions((curr) => curr.filter((item) => !details.value.includes(item)));
          contentRef.current?.scrollTo(0, 0);
        });
      }}
      asChild
    >
      <ComboboxContext>
        {(comboboxApi) => (
          <TagsInputRoot
            id={tagsInputId}
            ids={ids}
            editable={false}
            addOnPaste={false}
            onInteractOutside={(event) => {
              const { target } = event.detail.originalEvent;
              if (contains(target, contentRef.current)) {
                event.preventDefault();
              }
            }}
            inputValue={comboboxApi.inputValue}
            value={value}
            onValueChange={(details) => setValue(details.value)}
            onInputValueChange={(details) => comboboxApi.setInputValue(details.inputValue)}
          >
            <ComboboxLabel>Emneknagger</ComboboxLabel>
            <TagsInputContext>
              {(tagsInputApi) => (
                <HStack gap="4xsmall">
                  <ComboboxControl asChild>
                    <TagsInputControl asChild>
                      <InputContainer>
                        {tagsInputApi.value.map((value, index) => (
                          <TagsInputItem index={index} value={value} key={index}>
                            <TagsInputItemPreview>
                              <TagsInputItemText>{value}</TagsInputItemText>
                              <TagsInputItemDeleteTrigger>
                                <Cross />
                              </TagsInputItemDeleteTrigger>
                            </TagsInputItemPreview>
                          </TagsInputItem>
                        ))}
                        <ComboboxInput asChild>
                          <TagsInputInput asChild>
                            <Input
                              placeholder="Skriv inn en emneknagg"
                              onKeyDown={(event) => {
                                if (event.key === "Enter" && options.length === 0) {
                                  tagsInputApi.addValue(tagsInputApi.inputValue);
                                }
                              }}
                            />
                          </TagsInputInput>
                        </ComboboxInput>
                        <ComboboxClearTrigger asChild>
                          <IconButton variant="clear">
                            <Cross />
                          </IconButton>
                        </ComboboxClearTrigger>
                      </InputContainer>
                    </TagsInputControl>
                  </ComboboxControl>
                  <ComboboxTrigger asChild>
                    <IconButton variant="secondary">
                      <ChevronDown />
                    </IconButton>
                  </ComboboxTrigger>
                </HStack>
              )}
            </TagsInputContext>
            <Portal>
              <ComboboxPositioner>
                <ComboboxContent>
                  {options.map((item) => (
                    <ComboboxItem key={item} item={item}>
                      <ComboboxItemText>{item}</ComboboxItemText>
                      <ComboboxItemIndicator>
                        <Done />
                      </ComboboxItemIndicator>
                    </ComboboxItem>
                  ))}
                </ComboboxContent>
              </ComboboxPositioner>
            </Portal>
          </TagsInputRoot>
        )}
      </ComboboxContext>
    </ComboboxRoot>
  );
};
