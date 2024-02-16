/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { css } from "@emotion/react";
import { Meta, StoryFn } from "@storybook/react";
import { spacing, colors } from "@ndla/core";
import { RadioButtonGroup } from "./RadioButtonGroup";
import { RadioButtonItem } from "./RadioButtonItem";
import { defaultParameters } from "../../../../stories/defaults";
import { FormControl } from "../FormControl";
import { Label } from "../Label";

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
  parameters: {
    ...defaultParameters,
  },
} as Meta<typeof RadioButtonGroup>;

export const Default: StoryFn<typeof RadioButtonGroup> = ({ ...args }) => (
  <RadioButtonGroup>
    <RadioButtonItem value="radio1" id="r1" />
  </RadioButtonGroup>
);

export const WithLabelAndForm: StoryFn<typeof RadioButtonGroup> = () => (
  <form>
    <RadioButtonGroup defaultValue="radio1">
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
    </RadioButtonGroup>
  </form>
);

export const Horizontal: StoryFn<typeof RadioButtonGroup> = () => (
  <form>
    <RadioButtonGroup orientation="horizontal" defaultValue="radio1" style={{ display: "flex", gap: spacing.small }}>
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
    </RadioButtonGroup>
  </form>
);

export const InFormControlWithDisabled: StoryFn<any> = () => (
  <form>
    <RadioButtonGroup defaultValue="radio1">
      <FormControl id="r1" css={radioButtonWrapperStyles}>
        <RadioButtonItem value="radio1" />
        <Label margin="none" textStyle="label-small">
          Radio 1
        </Label>
      </FormControl>
      <FormControl id="r2" css={radioButtonWrapperStyles} isDisabled>
        <RadioButtonItem value="radio2" />
        <Label margin="none" textStyle="label-small">
          Radio 2
        </Label>
      </FormControl>
    </RadioButtonGroup>
  </form>
);
