/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useTranslation } from "react-i18next";
import { Meta, StoryFn } from "@storybook/react";
import MessageBanner from "./MessageBanner";

/**
 * Brukes i toppen av nettleseren når noe trenger mye oppmerksomhet globalt i systemet.
 */
export default {
  title: "Patterns/MessageBanner",
  component: MessageBanner,
  tags: ["autodocs"],
  parameters: {
    inlineStories: true,
  },
  args: {
    showCloseButton: true,
  },
} as Meta<typeof MessageBanner>;

export const Default: StoryFn<typeof MessageBanner> = ({ ...args }) => {
  const { t } = useTranslation();
  return <MessageBanner {...args}>{t("messageBoxInfo.updateBrowser")}</MessageBanner>;
};
