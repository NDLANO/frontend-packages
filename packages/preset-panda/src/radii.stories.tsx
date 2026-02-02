/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { RadiusToken } from "@ndla/styled-system/tokens";
import type { Meta, StoryFn } from "@storybook/react";
import { styled } from "@ndla/styled-system/jsx";

const RadiiContainer = styled("div", {
  base: {
    display: "flex",
    gap: "small",
  },
});

interface Props {
  borderRadius: RadiusToken;
}

const RadiiItem = ({ borderRadius }: Props) => (
  <styled.div css={{ borderRadius, backgroundColor: "surface.action", color: "text.onAction", padding: "medium" }}>
    {borderRadius}
  </styled.div>
);

export default {
  title: "Preset/Radii",
  tags: ["autodocs"],
  component: RadiiItem,
  parameters: {
    inlineStories: true,
  },
} as Meta<typeof RadiiItem>;

export const Radiis: StoryFn = () => (
  <RadiiContainer>
    <RadiiItem borderRadius="sharp" />
    <RadiiItem borderRadius="xsmall" />
    <RadiiItem borderRadius="small" />
    <RadiiItem borderRadius="medium" />
    <RadiiItem borderRadius="large" />
    <RadiiItem borderRadius="full" />
  </RadiiContainer>
);
