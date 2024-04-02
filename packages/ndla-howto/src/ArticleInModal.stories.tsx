/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryFn } from "@storybook/react";
import { ButtonV2 } from "@ndla/button";
import ArticleInModal from "./ArticleInModal";

export default {
  title: "Production system/How To",
  tags: ["autodocs"],
  component: ArticleInModal,
  args: {
    pageId: "Paragraph",
  },
  parameters: {
    inlineStories: true,
  },
} as Meta<typeof ArticleInModal>;

export const Default: StoryFn<typeof ArticleInModal> = ({ ...args }) => {
  return <ArticleInModal {...args} activateButton={<ButtonV2>Vis info om {args.pageId}</ButtonV2>} />;
};
