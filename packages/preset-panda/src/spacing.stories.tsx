/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { css } from "@ndla/styled-system/css";
import { styled } from "@ndla/styled-system/jsx";
import { type SizeToken, token } from "@ndla/styled-system/tokens";
import type { Meta, StoryFn } from "@storybook/react";

const SizesContainer = styled("div", {
  base: {
    display: "flex",
    flexWrap: "wrap",
    gap: "small",
  },
});

interface Props {
  width: SizeToken;
}

const SizeItem = ({ width }: Props) => (
  <div className={css({ display: "flex", flexDirection: "column", alignItems: "center" })}>
    <div
      className={css({
        width,
        textAlign: "center",
        aspectRatio: "1",
        backgroundColor: "surface.action",
        color: "text.onAction",
      })}
    />
    <p>Token: {width}</p>
    {token(`sizes.${width}`)}
  </div>
);

export default {
  title: "Preset/Spacing",
  tags: ["autodocs"],
  component: SizeItem,
  parameters: {
    inlineStories: true,
  },
} as Meta<typeof SizeItem>;

export const Widths: StoryFn = () => (
  <SizesContainer>
    <SizeItem width="1" />
    <SizeItem width="2" />
    <SizeItem width="3" />
    <SizeItem width="4" />
    <SizeItem width="5" />
    <SizeItem width="6" />
    <SizeItem width="7" />
    <SizeItem width="8" />
    <SizeItem width="9" />
    <SizeItem width="10" />
    <SizeItem width="11" />
    <SizeItem width="12" />
    <SizeItem width="13" />
    <SizeItem width="14" />
    <SizeItem width="15" />
    <SizeItem width="16" />
    <SizeItem width="17" />
    <SizeItem width="18" />
    <SizeItem width="19" />
    <SizeItem width="20" />
    <SizeItem width="22" />
    <SizeItem width="24" />
    <SizeItem width="26" />
    <SizeItem width="28" />
    <SizeItem width="32" />
    <SizeItem width="36" />
    <SizeItem width="40" />
    <SizeItem width="44" />
    <SizeItem width="48" />
    <SizeItem width="50" />
    <SizeItem width="60" />
    <SizeItem width="72" />
    <SizeItem width="75" />
    <SizeItem width="100" />
    <SizeItem width="150" />
    <SizeItem width="200" />
    <SizeItem width="300" />
    <SizeItem width="350" />
    <SizeItem width="400" />
    <SizeItem width="500" />
    <SizeItem width="550" />
  </SizesContainer>
);

export const SemanticWidth: StoryFn = () => (
  <SizesContainer>
    <SizeItem width="5xsmall" />
    <SizeItem width="4xsmall" />
    <SizeItem width="3xsmall" />
    <SizeItem width="xxsmall" />
    <SizeItem width="xsmall" />
    <SizeItem width="small" />
    <SizeItem width="medium" />
    <SizeItem width="large" />
    <SizeItem width="xlarge" />
    <SizeItem width="xxlarge" />
    <SizeItem width="3xlarge" />
    <SizeItem width="4xlarge" />
    <SizeItem width="5xlarge" />
  </SizesContainer>
);

export const SurfaceWidths: StoryFn = () => (
  <SizesContainer>
    <SizeItem width="surface.4xsmall" />
    <SizeItem width="surface.3xsmall" />
    <SizeItem width="surface.xxsmall" />
    <SizeItem width="surface.xsmall" />
    <SizeItem width="surface.small" />
    <SizeItem width="surface.medium" />
    <SizeItem width="surface.large" />
    <SizeItem width="surface.xlarge" />
    <SizeItem width="surface.xxlarge" />
    <SizeItem width="surface.3xlarge" />
    <SizeItem width="surface.4xlarge" />
  </SizesContainer>
);
