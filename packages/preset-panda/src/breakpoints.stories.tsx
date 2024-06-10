/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryFn } from "@storybook/react";
import { css } from "@ndla/styled-system/css";
import { styled } from "@ndla/styled-system/jsx";
import { SizeToken } from "@ndla/styled-system/tokens";

const BreakpointsContainer = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "small",
  },
});

interface Props {
  width: SizeToken;
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
