/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from "@emotion/styled";
import { Meta, StoryFn } from "@storybook/react";
import { colors, spacing } from "@ndla/core";
import { LanguageSelector } from "@ndla/ui";
export default {
  title: "Components/LanguageSelector",
  tags: ["autodocs"],
  component: LanguageSelector,
  args: {
    locales: ["en", "nb", "nn"],
    inverted: false,
    // eslint-disable-next-line no-console
    onSelect: (locale) => console.log(`selected ${locale}`),
  },
} as Meta<typeof LanguageSelector>;

interface ButtonWrapperProps {
  inverted?: boolean;
}

const shouldForwardProp = (p: string) => p !== "inverted";

const ButtonWrapper = styled("div", { shouldForwardProp })<ButtonWrapperProps>`
  background-color: ${(p) => p.inverted && colors.brand.primary};
  padding: ${spacing.normal};
`;

export const LanguageSelectorStory: StoryFn<typeof LanguageSelector> = (args) => {
  return (
    <ButtonWrapper inverted={args.inverted}>
      <LanguageSelector {...args} />
    </ButtonWrapper>
  );
};

LanguageSelectorStory.storyName = "LanguageSelector";
