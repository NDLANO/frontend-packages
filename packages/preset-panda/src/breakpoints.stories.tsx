/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { css } from "@ndla/styled-system/css";
import { styled } from "@ndla/styled-system/jsx";
import type { SizeToken } from "@ndla/styled-system/tokens";
import type { Meta, StoryFn } from "@storybook/react";

const BreakpointsContainer = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "small",
  },
});

interface Props {
  width: SizeToken;
  name?: string;
}

const BreakpointItem = ({ width }: Props) => (
  <div
    className={css({
      width: width,
      backgroundColor: "surface.action",
      color: "text.onAction",
      padding: "medium",
    })}
  >
    {width}
  </div>
);

const ContainerSizesItem = ({ width, name }: Props) => (
  <div
    className={css({
      width: width,
      backgroundColor: "surface.brand.2",
      color: "text.onAction",
      padding: "medium",
    })}
  >
    {name}
  </div>
);

export default {
  title: "Preset/Breakpoints",
  tags: ["autodocs"],
  component: BreakpointItem,
  parameters: {
    inlineStories: true,
  },
} as Meta<typeof BreakpointItem>;

export const Breakpoints: StoryFn = () => (
  <BreakpointsContainer>
    <BreakpointItem width="breakpoint-mobile" />
    <BreakpointItem width="breakpoint-mobileWide" />
    <BreakpointItem width="breakpoint-tablet" />
    <BreakpointItem width="breakpoint-tabletWide" />
    <BreakpointItem width="breakpoint-desktop" />
    <BreakpointItem width="breakpoint-wide" />
    <BreakpointItem width="breakpoint-ultraWide" />
  </BreakpointsContainer>
);

export const ContainerSizes: StoryFn = () => (
  <BreakpointsContainer>
    <ContainerSizesItem width="breakpoint-mobile" name="mobile" />
    <ContainerSizesItem width="breakpoint-mobileWide" name="mobileWide" />
    <ContainerSizesItem width="breakpoint-tablet" name="tablet" />
    <ContainerSizesItem width="breakpoint-tabletWide" name="tabletWide" />
    <ContainerSizesItem width="breakpoint-desktop" name="desktop" />
    <ContainerSizesItem width="breakpoint-wide" name="wide" />
    <ContainerSizesItem width="breakpoint-ultraWide" name="ultraWide" />
  </BreakpointsContainer>
);
