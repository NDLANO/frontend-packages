/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useState } from "react";
import { css } from "@emotion/react";
import { Meta, StoryFn } from "@storybook/react";
import { spacing, colors } from "@ndla/core";
import { RadioButtonGroup } from "./RadioButtonGroup";
import { RadioButtonItem } from "./RadioButtonItem";
import { FieldErrorMessage } from "..";
import { FormControl } from "../FormControl";
import { Fieldset, Label, Legend } from "../Label";

const radioButtonWrapperStyles = css`
  display: flex;
  align-items: center;
  gap: ${spacing.small};
  flex-direction: row;
  color: ${colors.brand.primary};
`;

export default {
  title: "Forms/RadioButtonGroup",
  component: RadioButtonGroup,
  tags: ["autodocs"],
} as Meta<typeof RadioButtonGroup>;

export const Default: StoryFn<typeof RadioButtonGroup> = ({ ...args }) => (
  <RadioButtonGroup>
    <RadioButtonItem value="radio1" id="r0" />
  </RadioButtonGroup>
);

export const WithLabelAndForm: StoryFn<typeof RadioButtonGroup> = () => (
  <form>
    <RadioButtonGroup defaultValue="radio1" asChild>
      <Fieldset>
        <Legend margin="none" textStyle="label-small">
          Choose an option
        </Legend>
        <div css={radioButtonWrapperStyles}>
          <RadioButtonItem value="radio1" id="r1" />
          <Label margin="none" textStyle="label-small" htmlFor="r1">
            Radio 1
          </Label>
        </div>
        <div css={radioButtonWrapperStyles}>
          <RadioButtonItem value="radio2" id="r2" />
          <Label margin="none" textStyle="label-small" htmlFor="r2">
            Radio 2
          </Label>
        </div>
      </Fieldset>
    </RadioButtonGroup>
  </form>
);

export const Horizontal: StoryFn<typeof RadioButtonGroup> = () => (
  <form>
    <RadioButtonGroup
      orientation="horizontal"
      defaultValue="radio1"
      style={{ display: "flex", gap: spacing.small }}
      asChild
    >
      <Fieldset>
        <Legend margin="none" textStyle="label-small">
          Choose an option
        </Legend>
        <div css={radioButtonWrapperStyles}>
          <RadioButtonItem value="radio1" id="r3" />
          <Label margin="none" textStyle="label-small" htmlFor="r3">
            Radio 1
          </Label>
        </div>
        <div css={radioButtonWrapperStyles}>
          <RadioButtonItem value="radio2" id="r4" />
          <Label margin="none" textStyle="label-small" htmlFor="r4">
            Radio 2
          </Label>
        </div>
      </Fieldset>
    </RadioButtonGroup>
  </form>
);

export const InFormControlWithDisabled: StoryFn<any> = () => (
  <form>
    <FormControl id={"radio-with-form-control"}>
      <RadioButtonGroup defaultValue="radio1" asChild>
        <Fieldset>
          <Legend margin="none" textStyle="label-small">
            Choose an option
          </Legend>
          <div css={radioButtonWrapperStyles}>
            <RadioButtonItem id="radio1" value="radio1" />
            <Label margin="none" htmlFor="radio1" textStyle="label-small">
              Radio 1
            </Label>
          </div>
          <div css={radioButtonWrapperStyles}>
            <RadioButtonItem id="radio2" value="radio2" />
            <Label margin="none" htmlFor="radio2" textStyle="label-small">
              Radio 2
            </Label>
          </div>
          <div css={radioButtonWrapperStyles}>
            <RadioButtonItem id="radio3" value="radio3" disabled />
            <Label margin="none" htmlFor="radio3" data-disabled="true" textStyle="label-small">
              Radio 3
            </Label>
          </div>
        </Fieldset>
      </RadioButtonGroup>
    </FormControl>
  </form>
);

export const InFormControlWithAllDisabled: StoryFn<any> = () => (
  <form>
    <FormControl id={"radio-with-form-control"} isDisabled>
      <RadioButtonGroup defaultValue="radio4" asChild>
        <Fieldset>
          <Legend margin="none" textStyle="label-small">
            Choose an option
          </Legend>
          <div css={radioButtonWrapperStyles}>
            <RadioButtonItem id="radio4" value="radio1" />
            <Label margin="none" htmlFor="radio4" textStyle="label-small">
              Radio 4
            </Label>
          </div>
          <div css={radioButtonWrapperStyles}>
            <RadioButtonItem id="radio5" value="radio5" />
            <Label margin="none" htmlFor="radio2" textStyle="label-small">
              Radio 5
            </Label>
          </div>
          <div css={radioButtonWrapperStyles}>
            <RadioButtonItem id="radio6" value="radio6" />
            <Label margin="none" htmlFor="radio6" data-disabled="true" textStyle="label-small">
              Radio 6
            </Label>
          </div>
        </Fieldset>
      </RadioButtonGroup>
    </FormControl>
  </form>
);

export const InFormControlWithErrorMessageAndHelper: StoryFn<any> = () => {
  const [value, setValue] = useState("parrot");

  const error = value === "parrot" ? "This is an error. You probably clicked the wrong thing." : undefined;

  return (
    <form>
      <FormControl id={"radio-with-form-control"} isInvalid={!!error} isRequired>
        <RadioButtonGroup value={value} onValueChange={setValue} asChild>
          <Fieldset>
            <Legend margin="none" textStyle="label-small">
              Choose your favourite pet
            </Legend>
            <div css={radioButtonWrapperStyles}>
              <RadioButtonItem id="dog" value="dog" />
              <Label margin="none" htmlFor="dog" textStyle="label-small">
                Dog
              </Label>
            </div>
            <div css={radioButtonWrapperStyles}>
              <RadioButtonItem id="cat" value="cat" />
              <Label margin="none" htmlFor="cat" textStyle="label-small">
                Cat
              </Label>
            </div>
            <div css={radioButtonWrapperStyles}>
              <RadioButtonItem id="parrot" value="parrot" />
              <Label margin="none" htmlFor="parrot" textStyle="label-small">
                Parrot
              </Label>
            </div>
            <FieldErrorMessage>{error}</FieldErrorMessage>
          </Fieldset>
        </RadioButtonGroup>
      </FormControl>
    </form>
  );
};
