/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryObj } from "@storybook/react";
import { MissingRouterContext } from "./MissingRouterContext";
import { SafeLinkButton } from "./SafeLinkButton";

export default {
  title: "Components/SafeLinkButton",
  component: SafeLinkButton,
  tags: ["autodocs"],
  paramemeters: {
    inlineStories: true,
  },
  args: {
    to: "/",
    children: <span>Lenke</span>,
  },
  argTypes: {
    children: { control: false },
  },
} as Meta<typeof SafeLinkButton>;

export const Default: StoryObj<typeof SafeLinkButton> = {};

export const Disabled: StoryObj<typeof SafeLinkButton> = {
  args: { disabled: true },
};

export const ExternalLink: StoryObj<typeof SafeLinkButton> = {
  args: {
    to: "https://example.com",
    showNewWindowIcon: true,
    target: "_blank",
  },
};

export const WithMissingRouterContext: StoryObj<typeof SafeLinkButton> = {
  decorators: [
    (Story) => (
      <MissingRouterContext.Provider value={true}>
        <Story />
      </MissingRouterContext.Provider>
    ),
  ],
  args: { to: "https://example.com", target: "_blank" },
};
