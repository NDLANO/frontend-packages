/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryFn } from "@storybook/react";
import { spacing } from "@ndla/core";
import { FormControl, Label } from ".";
import { CheckboxItem } from "./CheckboxItem";

/**
 * A styled reexport of the CheckboxRoot from radix-ui.
 * We do not use the radix indicator, and roll our own instead.
 **/
export default {
  title: "Forms/CheckboxItem",
  tags: ["autodocs"],
  parameters: {
    inlineStories: true,
  },
  args: {
    disabled: false,
  },
} as Meta<typeof CheckboxItem>;

export const Default: StoryFn<typeof CheckboxItem> = ({ ...args }) => <CheckboxItem {...args} />;

export const WithLabelAndForm: StoryFn<any> = () => (
  <form style={{ display: "flex", gap: spacing.small, alignItems: "center" }}>
    <CheckboxItem id="test" />
    <Label margin="none" htmlFor="test" textStyle="label-small">
      Check it
    </Label>
  </form>
);

export const InFormControl: StoryFn<any> = () => (
  <form>
    <FormControl id="test">
      <div style={{ display: "flex", gap: spacing.small, alignItems: "center" }}>
        <CheckboxItem />
        <Label margin="none" textStyle="label-small">
          Check it
        </Label>
      </div>
    </FormControl>
  </form>
);

export const Disabled: StoryFn<any> = () => (
  <form>
    <FormControl id="test" isDisabled>
      <div style={{ display: "flex", gap: spacing.small, alignItems: "center" }}>
        <CheckboxItem />
        <Label margin="none" textStyle="label-small">
          Check it
        </Label>
      </div>
    </FormControl>
  </form>
);
