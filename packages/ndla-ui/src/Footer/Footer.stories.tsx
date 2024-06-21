/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryObj } from "@storybook/react";
import FooterBlock from "./FooterBlock";

export default {
  title: "Components/FooterBlock",
  tags: ["autodocs"],
  component: FooterBlock,
  parameters: {
    inlineStories: true,
  },

  args: {
    children: (
      <>
        <p>Litt tekst i footer!</p>
      </>
    ),
  },
  argTypes: {
    children: { control: false },
    languageSelector: { control: false },
    auth: { control: false },
  },
  render: (args) => <FooterBlock {...args} />,
} as Meta<typeof FooterBlock>;

export const Default: StoryObj<typeof FooterBlock> = {};
