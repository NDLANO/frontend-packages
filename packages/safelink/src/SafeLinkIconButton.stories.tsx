/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { UserLine } from "@ndla/icons";
import type { Meta, StoryObj } from "@storybook/react";
import { MissingRouterContext } from "./MissingRouterContext";
import { SafeLinkIconButton } from "./SafeLinkIconButton";

export default {
  title: "Components/SafeLinkIconButton",
  component: SafeLinkIconButton,
  tags: ["autodocs"],
  paramemeters: {
    inlineStories: true,
  },
  args: {
    to: "/",
    children: <UserLine />,
  },
  argTypes: {
    children: { control: false },
  },
} as Meta<typeof SafeLinkIconButton>;

export const Default: StoryObj<typeof SafeLinkIconButton> = {};

export const Disabled: StoryObj<typeof SafeLinkIconButton> = {
  args: { disabled: true },
};

export const ExternalLink: StoryObj<typeof SafeLinkIconButton> = {
  args: {
    to: "https://example.com",
    target: "_blank",
  },
};

export const WithMissingRouterContext: StoryObj<typeof SafeLinkIconButton> = {
  decorators: [
    (Story) => (
      <MissingRouterContext.Provider value={true}>
        <Story />
      </MissingRouterContext.Provider>
    ),
  ],
  args: { to: "https://example.com", target: "_blank" },
};
