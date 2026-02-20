/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { css } from "@ndla/styled-system/css";
import { styled } from "@ndla/styled-system/jsx";
import type { ShadowToken } from "@ndla/styled-system/tokens";
import type { Meta, StoryFn } from "@storybook/react";

const ShadowsContainer = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "large",
  },
});

interface Props {
  boxShadow: ShadowToken;
}

const ShadowBlock = ({ boxShadow }: Props) => (
  <div className={css({ boxShadow, backgroundColor: "surface.default", padding: "medium" })}>{boxShadow}</div>
);

export default {
  title: "Preset/Box Shadows",
  tags: ["autodocs"],
  component: ShadowBlock,
  parameters: {
    inlineStories: true,
  },
} as Meta<typeof ShadowBlock>;

export const Shadows: StoryFn = () => (
  <ShadowsContainer>
    <ShadowBlock boxShadow="xsmall" />
    <ShadowBlock boxShadow="small" />
    <ShadowBlock boxShadow="medium" />
    <ShadowBlock boxShadow="large" />
    <ShadowBlock boxShadow="xlarge" />
    <ShadowBlock boxShadow="full" />
    <ShadowBlock boxShadow="inner" />
    <ShadowBlock boxShadow="innerTop" />
    <ShadowBlock boxShadow="innerRight" />
  </ShadowsContainer>
);
