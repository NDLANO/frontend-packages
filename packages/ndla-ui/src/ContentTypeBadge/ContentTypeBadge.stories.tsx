/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { styled } from "@ndla/styled-system/jsx";
import { ContentTypeBadge } from "./ContentTypeBadge";
import * as contentTypes from "../model/ContentType";

export default {
  title: "Components/ContentTypeBadge",
  tags: ["autodocs"],
  parameters: {
    inlineStories: true,
  },
  args: {
    size: "small",
    border: true,
    type: "subject-material",
    background: true,
    title: "I'm a badge",
  },
  argTypes: {
    children: { control: false },
  },
  component: ContentTypeBadge,
} as Meta<typeof ContentTypeBadge>;

export const Default: StoryObj<typeof ContentTypeBadge> = {};

export const Sizes: StoryFn<typeof ContentTypeBadge> = ({ ...args }) => (
  <>
    <ContentTypeBadge {...args} size="xx-small" />
    <ContentTypeBadge {...args} size="x-small" />
    <ContentTypeBadge {...args} size="small" />
    <ContentTypeBadge {...args} size="large" />
  </>
);

export const NoBorder: StoryObj<typeof ContentTypeBadge> = {
  args: {
    border: false,
  },
};

export const NoBackground: StoryObj<typeof ContentTypeBadge> = {
  args: {
    background: false,
  },
};

const BadgesWrapper = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    gap: "xsmall",
  },
});

export const AllBadges: StoryFn<typeof ContentTypeBadge> = ({ ...args }) => (
  <BadgesWrapper>
    <ContentTypeBadge {...args} type={contentTypes.SUBJECT_MATERIAL} />
    <ContentTypeBadge {...args} type={contentTypes.TASKS_AND_ACTIVITIES} />
    <ContentTypeBadge {...args} type={contentTypes.ASSESSMENT_RESOURCES} />
    <ContentTypeBadge {...args} type={contentTypes.SUBJECT} />
    <ContentTypeBadge {...args} type={contentTypes.SOURCE_MATERIAL} />
    <ContentTypeBadge {...args} type={contentTypes.LEARNING_PATH} />
    <ContentTypeBadge {...args} type={contentTypes.TOPIC} />
    <ContentTypeBadge {...args} type={contentTypes.MULTIDISCIPLINARY} />
    <ContentTypeBadge {...args} type={contentTypes.CONCEPT} />
    <ContentTypeBadge {...args} type={contentTypes.EXTERNAL} />
    <ContentTypeBadge {...args} type={contentTypes.resourceEmbedTypeMapping.image} />
    <ContentTypeBadge {...args} type={contentTypes.resourceEmbedTypeMapping.audio} />
    <ContentTypeBadge {...args} type={contentTypes.resourceEmbedTypeMapping.video} />
  </BadgesWrapper>
);
