/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { css } from "@emotion/react";
import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { colors, misc, spacing, utils, stackOrder } from "@ndla/core";
import RadioButtonGroup, { RadioButtonGroupRoot, RadioGroupItem } from "./RadioButtonGroup";
import { defaultParameters } from "../../../../stories/defaults";

export default {
  title: "Forms/RadioButtonGroup",
  component: RadioButtonGroup,
  tags: ["autodocs"],
  parameters: {
    ...defaultParameters,
  },
  args: {
    uniqeIds: true,
    label: "Velg fag",
    options: [
      {
        title: "T1",
        value: "t1",
      },
      {
        title: "R1",
        value: "r1",
      },
      {
        title: "R2",
        value: "r2",
      },
      {
        title: "S1",
        value: "s1",
        disabled: true,
      },
    ],
  },
} as Meta<typeof RadioButtonGroup>;

export const RadioButtonGroupStory: StoryFn<typeof RadioButtonGroup> = ({ ...args }) => {
  return <RadioButtonGroup {...args} />;
};

RadioButtonGroupStory.storyName = "RadioButtonGroup";

export const WithStandaloneComponents: StoryObj<typeof RadioButtonGroup> = {
  args: {
    onChange: () => {},
    direction: "vertical",
    options: [
      {
        title: "Vis navnet mitt når jeg deler en mappe",
        value: "showName",
      },
      {
        title: "Ikke vis navnet mitt når jeg deler en mappe",
        value: "dontShowName",
      },
      {
        title: "Kanskje vis navnet mitt når jeg deler en mappe",
        value: "maybeShowName",
      },
    ],
  },
  render: ({ options, ...args }) => {
    return (
      <RadioButtonGroupRoot
        value={args.selected}
        direction={args.direction}
        defaultValue={args.selected ?? options[0].value}
        onValueChange={args.onChange}
        css={css`
          gap: 0px;
        `}
        aria-labelledby="desc"
      >
        <span id="desc" css={css(utils.visuallyHidden)}>
          {args.label}
        </span>
        {options.map((option) => (
          <RadioGroupItem
            key={option.value}
            id={option.value}
            css={css`
              box-sizing: content-box;
              border-radius: ${misc.borderRadius};
              border: 1px solid ${colors.brand.greyLight};
              border-radius: 0px;
              padding: ${spacing.small};
              border-color: ${colors.brand.light};

              &:focus-within,
              &[data-state="checked"] {
                outline: 0px;
                border-color: ${colors.brand.primary};
                border-radius: 0px;
                z-index: ${stackOrder.offsetSingle};
              }
              &:first-of-type {
                border-top-left-radius: ${misc.borderRadius};
                border-top-right-radius: ${misc.borderRadius};
              }
              &:not(:first-of-type) {
                margin-top: -1px;
              }
              &:last-of-type {
                border-bottom-left-radius: ${misc.borderRadius};
                border-bottom-right-radius: ${misc.borderRadius};
              }
            `}
            value={option.value}
            title={option.title}
            disabled={option.disabled}
          />
        ))}
      </RadioButtonGroupRoot>
    );
  },
};
