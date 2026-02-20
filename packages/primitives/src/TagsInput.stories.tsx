/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { TagsInputContext } from "@ark-ui/react";
import { CloseLine } from "@ndla/icons";
import { HStack } from "@ndla/styled-system/jsx";
import type { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import { IconButton } from "./Button";
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

const meta: Meta<typeof TagsInputRoot> = {
  title: "Primitives/TagsInput",
  component: TagsInputRoot,
  args: {
    translations: {
      clearTriggerLabel: "Fjern alle emneknagger",
      deleteTagTriggerLabel: (tag) => `Fjern emneknagg ${tag}`,
      tagAdded: (tag) => `Emneknagg ${tag} lagt til`,
      tagsPasted: (tags) => `${tags.length} emneknagger lagt til`,
      tagEdited: (tag) => `Redigererer emneknagg ${tag}. Trykk enter for å lagre, eller esc for å avbryte.`,
      tagUpdated: (tag) => `Emneknagg oppdatert til ${tag}`,
      tagDeleted: (tag) => `Emneknagg ${tag} slettet`,
      tagSelected: (tag) =>
        `Emneknagg ${tag} valgt. Trykk enter for å redigere. Trykk backspace eller delete for å slette.`,
    },
  },
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
                        <CloseLine />
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
            <CloseLine />
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
                        <CloseLine />
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
            <CloseLine />
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
                        <CloseLine />
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
            <CloseLine />
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
                          <CloseLine />
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
              <CloseLine />
            </IconButton>
          </TagsInputClearTrigger>
        </HStack>
      </TagsInputRoot>
    </FieldRoot>
  );
};
