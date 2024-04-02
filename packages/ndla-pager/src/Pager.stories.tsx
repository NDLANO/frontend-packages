/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryFn } from "@storybook/react";
import Pager from "./Pager";

export default {
  title: "Components/Pager",
  component: Pager,
  tags: ["autodocs"],
  args: {
    page: 1,
    lastPage: 2,
    query: {},
  },
} as Meta<typeof Pager>;

export const PagerStory: StoryFn<typeof Pager> = ({ ...args }) => {
  return <Pager {...args}></Pager>;
};

PagerStory.storyName = "Pager";
