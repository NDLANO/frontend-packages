/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Meta, StoryObj, StoryFn } from "@storybook/react";
import { LinkBlock } from "./LinkBlock";
import { LinkBlockSection } from "./LinkBlockSection";

export default {
  title: "Components/Link Block",
  component: LinkBlock,
  tags: ["autodocs"],
  args: {
    title: "Redaksjonell <em>medarbeider</em> i faget spansk 2",
    articleLanguage: "nb",
    date: "05. mars 2023",
    url: "",
  },
} as Meta<typeof LinkBlock>;

export const AnnouncementExample: StoryObj<typeof LinkBlock> = {};

export const LinkList: StoryFn<typeof LinkBlock> = (args) => (
  <LinkBlockSection>
    <LinkBlock {...args} />
    <LinkBlock {...args} />
    <LinkBlock {...args} />
    <LinkBlock {...args} />
  </LinkBlockSection>
);
