/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { ReactNode } from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { Heading, Text } from "@ndla/primitives";
import { css } from "@ndla/styled-system/css";
import { styled } from "@ndla/styled-system/jsx";
import { type ColorToken, token } from "@ndla/styled-system/tokens";

const StyledColorBlocks = styled("div", {
  base: {
    display: "flex",
    flexWrap: "wrap",
    gap: "small",
  },
});

interface ColorBlocksProps {
  title?: string;
  description?: string;
  children: ReactNode;
}

const ColorBlocks = ({ title, description, children }: ColorBlocksProps) => (
  <div>
    {!!title && (
      <Heading asChild consumeCss>
        <h2>{title}</h2>
      </Heading>
    )}
    {!!description && <Text>{description}</Text>}
    <StyledColorBlocks>{children}</StyledColorBlocks>
  </div>
);

const StyledColorBlock = styled("div", {
  base: {
    "& > p": {
      margin: "0px",
    },
  },
});

interface Props {
  backgroundColor: ColorToken;
}

const ColorBlock = ({ backgroundColor }: Props) => (
  <StyledColorBlock>
    <div className={css({ backgroundColor, height: "100px", width: "188px" })} />
    <Text>{backgroundColor}</Text>
    <Text>{token(`colors.${backgroundColor}`)}</Text>
  </StyledColorBlock>
);

export default {
  title: "Preset/Colors",
  tags: ["autodocs"],
  component: ColorBlocks,
  parameters: {
    inlineStories: true,
  },
} as Meta<typeof ColorBlocks>;

export const Colors: StoryFn = () => (
  <div>
    <ColorBlocks title="Other colors">
      <ColorBlock backgroundColor={"primary"} />
      <ColorBlock backgroundColor={"white"} />
    </ColorBlocks>
    <ColorBlocks title="Grey">
      <ColorBlock backgroundColor={"grey.50"} />
      <ColorBlock backgroundColor={"grey.100"} />
      <ColorBlock backgroundColor={"grey.200"} />
      <ColorBlock backgroundColor={"grey.300"} />
      <ColorBlock backgroundColor={"grey.400"} />
      <ColorBlock backgroundColor={"grey.500"} />
      <ColorBlock backgroundColor={"grey.600"} />
      <ColorBlock backgroundColor={"grey.700"} />
      <ColorBlock backgroundColor={"grey.800"} />
      <ColorBlock backgroundColor={"grey.900"} />
      <ColorBlock backgroundColor={"grey.950"} />
    </ColorBlocks>
    <ColorBlocks title="Blue">
      <ColorBlock backgroundColor={"blue.50"} />
      <ColorBlock backgroundColor={"blue.100"} />
      <ColorBlock backgroundColor={"blue.200"} />
      <ColorBlock backgroundColor={"blue.300"} />
      <ColorBlock backgroundColor={"blue.400"} />
      <ColorBlock backgroundColor={"blue.500"} />
      <ColorBlock backgroundColor={"blue.600"} />
      <ColorBlock backgroundColor={"blue.700"} />
      <ColorBlock backgroundColor={"blue.800"} />
      <ColorBlock backgroundColor={"blue.900"} />
      <ColorBlock backgroundColor={"blue.950"} />
    </ColorBlocks>
    <ColorBlocks title="Purple">
      <ColorBlock backgroundColor={"purple.50"} />
      <ColorBlock backgroundColor={"purple.100"} />
      <ColorBlock backgroundColor={"purple.200"} />
      <ColorBlock backgroundColor={"purple.300"} />
      <ColorBlock backgroundColor={"purple.400"} />
      <ColorBlock backgroundColor={"purple.500"} />
      <ColorBlock backgroundColor={"purple.600"} />
      <ColorBlock backgroundColor={"purple.700"} />
      <ColorBlock backgroundColor={"purple.800"} />
      <ColorBlock backgroundColor={"purple.900"} />
      <ColorBlock backgroundColor={"purple.950"} />
    </ColorBlocks>
    <ColorBlocks title="Purple.alpha">
      <ColorBlock backgroundColor={"purple.alpha.5"} />
      <ColorBlock backgroundColor={"purple.alpha.10"} />
      <ColorBlock backgroundColor={"purple.alpha.20"} />
      <ColorBlock backgroundColor={"purple.alpha.30"} />
      <ColorBlock backgroundColor={"purple.alpha.40"} />
      <ColorBlock backgroundColor={"purple.alpha.50"} />
      <ColorBlock backgroundColor={"purple.alpha.60"} />
      <ColorBlock backgroundColor={"purple.alpha.70"} />
      <ColorBlock backgroundColor={"purple.alpha.80"} />
      <ColorBlock backgroundColor={"purple.alpha.90"} />
    </ColorBlocks>
    <ColorBlocks title="lightYellow">
      <ColorBlock backgroundColor={"lightYellow.50"} />
      <ColorBlock backgroundColor={"lightYellow.100"} />
      <ColorBlock backgroundColor={"lightYellow.200"} />
      <ColorBlock backgroundColor={"lightYellow.300"} />
      <ColorBlock backgroundColor={"lightYellow.400"} />
      <ColorBlock backgroundColor={"lightYellow.500"} />
      <ColorBlock backgroundColor={"lightYellow.600"} />
      <ColorBlock backgroundColor={"lightYellow.700"} />
      <ColorBlock backgroundColor={"lightYellow.800"} />
      <ColorBlock backgroundColor={"lightYellow.900"} />
      <ColorBlock backgroundColor={"lightYellow.950"} />
      <ColorBlock backgroundColor={"lightYellow.1000"} />
      <ColorBlock backgroundColor={"lightYellow.1100"} />
      <ColorBlock backgroundColor={"lightYellow.1200"} />
      <ColorBlock backgroundColor={"lightYellow.1300"} />
      <ColorBlock backgroundColor={"lightYellow.1400"} />
    </ColorBlocks>
    <ColorBlocks title="Yellow">
      <ColorBlock backgroundColor={"yellow.50"} />
      <ColorBlock backgroundColor={"yellow.100"} />
      <ColorBlock backgroundColor={"yellow.200"} />
      <ColorBlock backgroundColor={"yellow.300"} />
      <ColorBlock backgroundColor={"yellow.400"} />
      <ColorBlock backgroundColor={"yellow.500"} />
      <ColorBlock backgroundColor={"yellow.600"} />
      <ColorBlock backgroundColor={"yellow.700"} />
      <ColorBlock backgroundColor={"yellow.800"} />
      <ColorBlock backgroundColor={"yellow.900"} />
      <ColorBlock backgroundColor={"yellow.950"} />
    </ColorBlocks>
    <ColorBlocks title="Green">
      <ColorBlock backgroundColor={"green.50"} />
      <ColorBlock backgroundColor={"green.100"} />
      <ColorBlock backgroundColor={"green.200"} />
      <ColorBlock backgroundColor={"green.300"} />
      <ColorBlock backgroundColor={"green.400"} />
      <ColorBlock backgroundColor={"green.500"} />
      <ColorBlock backgroundColor={"green.600"} />
      <ColorBlock backgroundColor={"green.700"} />
      <ColorBlock backgroundColor={"green.800"} />
      <ColorBlock backgroundColor={"green.900"} />
      <ColorBlock backgroundColor={"green.950"} />
    </ColorBlocks>
    <ColorBlocks title="lightGreen">
      <ColorBlock backgroundColor={"lightGreen.50"} />
      <ColorBlock backgroundColor={"lightGreen.100"} />
      <ColorBlock backgroundColor={"lightGreen.200"} />
      <ColorBlock backgroundColor={"lightGreen.300"} />
      <ColorBlock backgroundColor={"lightGreen.400"} />
      <ColorBlock backgroundColor={"lightGreen.500"} />
      <ColorBlock backgroundColor={"lightGreen.600"} />
      <ColorBlock backgroundColor={"lightGreen.700"} />
      <ColorBlock backgroundColor={"lightGreen.800"} />
      <ColorBlock backgroundColor={"lightGreen.900"} />
      <ColorBlock backgroundColor={"lightGreen.950"} />
    </ColorBlocks>
    <ColorBlocks title="Pink">
      <ColorBlock backgroundColor={"pink.50"} />
      <ColorBlock backgroundColor={"pink.100"} />
      <ColorBlock backgroundColor={"pink.200"} />
      <ColorBlock backgroundColor={"pink.300"} />
      <ColorBlock backgroundColor={"pink.400"} />
      <ColorBlock backgroundColor={"pink.500"} />
      <ColorBlock backgroundColor={"pink.600"} />
      <ColorBlock backgroundColor={"pink.700"} />
      <ColorBlock backgroundColor={"pink.800"} />
      <ColorBlock backgroundColor={"pink.900"} />
      <ColorBlock backgroundColor={"pink.950"} />
    </ColorBlocks>
    <ColorBlocks title="Red">
      <ColorBlock backgroundColor={"red.50"} />
      <ColorBlock backgroundColor={"red.100"} />
      <ColorBlock backgroundColor={"red.200"} />
      <ColorBlock backgroundColor={"red.300"} />
      <ColorBlock backgroundColor={"red.400"} />
      <ColorBlock backgroundColor={"red.500"} />
      <ColorBlock backgroundColor={"red.600"} />
      <ColorBlock backgroundColor={"red.700"} />
      <ColorBlock backgroundColor={"red.800"} />
      <ColorBlock backgroundColor={"red.900"} />
      <ColorBlock backgroundColor={"red.950"} />
    </ColorBlocks>
  </div>
);

export const SemanticColors: StoryFn = () => (
  <div>
    <ColorBlocks title="Background">
      <ColorBlock backgroundColor={"background.default"} />
      <ColorBlock backgroundColor={"background.subtle"} />
      <ColorBlock backgroundColor={"background.strong"} />
    </ColorBlocks>
    <ColorBlocks title="Text">
      <ColorBlock backgroundColor={"text.default"} />
      <ColorBlock backgroundColor={"text.subtle"} />
      <ColorBlock backgroundColor={"text.strong"} />
      <ColorBlock backgroundColor={"text.action"} />
      <ColorBlock backgroundColor={"text.onAction"} />
      <ColorBlock backgroundColor={"text.link"} />
      <ColorBlock backgroundColor={"text.error"} />
      <ColorBlock backgroundColor={"text.disabled"} />
    </ColorBlocks>
    <ColorBlocks title="Icon">
      <ColorBlock backgroundColor={"icon.default"} />
      <ColorBlock backgroundColor={"icon.strong"} />
      <ColorBlock backgroundColor={"icon.onAction"} />
      <ColorBlock backgroundColor={"icon.subtle"} />
      <ColorBlock backgroundColor={"icon.warning"} />
      <ColorBlock backgroundColor={"icon.danger"} />
    </ColorBlocks>
    <ColorBlocks title="Surface">
      <ColorBlock backgroundColor={"surface.default"} />
      <ColorBlock backgroundColor={"surface.hover"} />
      <ColorBlock backgroundColor={"surface.active"} />
      <ColorBlock backgroundColor={"surface.selected"} />
    </ColorBlocks>
    <ColorBlocks title="Surface Brand">
      <ColorBlock backgroundColor={"surface.brand.1.subtle"} />
      <ColorBlock backgroundColor={"surface.brand.1.moderate"} />
      <ColorBlock backgroundColor={"surface.brand.1"} />
      <ColorBlock backgroundColor={"surface.brand.1.strong"} />
      <ColorBlock backgroundColor={"surface.brand.2.subtle"} />
      <ColorBlock backgroundColor={"surface.brand.2.moderate"} />
      <ColorBlock backgroundColor={"surface.brand.2"} />
      <ColorBlock backgroundColor={"surface.brand.2.strong"} />
      <ColorBlock backgroundColor={"surface.brand.3.subtle"} />
      <ColorBlock backgroundColor={"surface.brand.3.moderate"} />
      <ColorBlock backgroundColor={"surface.brand.3"} />
      <ColorBlock backgroundColor={"surface.brand.3.strong"} />
      <ColorBlock backgroundColor={"surface.brand.4.subtle"} />
      <ColorBlock backgroundColor={"surface.brand.4.moderate"} />
      <ColorBlock backgroundColor={"surface.brand.4"} />
      <ColorBlock backgroundColor={"surface.brand.4.strong"} />
      <ColorBlock backgroundColor={"surface.brand.5.subtle"} />
      <ColorBlock backgroundColor={"surface.brand.5.moderate"} />
      <ColorBlock backgroundColor={"surface.brand.5"} />
      <ColorBlock backgroundColor={"surface.brand.5.strong"} />
    </ColorBlocks>
    <ColorBlocks title="Surface disabled">
      <ColorBlock backgroundColor={"surface.disabled"} />
      <ColorBlock backgroundColor={"surface.disabled.subtle"} />
      <ColorBlock backgroundColor={"surface.disabled.strong"} />
    </ColorBlocks>
    <ColorBlocks title="Surface info">
      <ColorBlock backgroundColor={"surface.infoSubtle"} />
      <ColorBlock backgroundColor={"surface.infoSubtle.hover"} />
      <ColorBlock backgroundColor={"surface.infoSubtle.active"} />
    </ColorBlocks>
    <ColorBlocks title="Surface action">
      <ColorBlock backgroundColor={"surface.action"} />
      <ColorBlock backgroundColor={"surface.action.hover"} />
      <ColorBlock backgroundColor={"surface.action.active"} />
      <ColorBlock backgroundColor={"surface.actionSubtle"} />
      <ColorBlock backgroundColor={"surface.actionSubtle.hover"} />
      <ColorBlock backgroundColor={"surface.actionSubtle.hover.strong"} />
      <ColorBlock backgroundColor={"surface.actionSubtle.active"} />
      <ColorBlock backgroundColor={"surface.actionSubtle.selected"} />
    </ColorBlocks>
    <ColorBlocks title="Surface success">
      <ColorBlock backgroundColor={"surface.success"} />
      <ColorBlock backgroundColor={"surface.success.hover"} />
      <ColorBlock backgroundColor={"surface.success.active"} />
      <ColorBlock backgroundColor={"surface.successSubtle"} />
      <ColorBlock backgroundColor={"surface.successSubtle.hover"} />
      <ColorBlock backgroundColor={"surface.successSubtle.active"} />
    </ColorBlocks>
    <ColorBlocks title="Surface warning">
      <ColorBlock backgroundColor={"surface.warning"} />
      <ColorBlock backgroundColor={"surface.warning.hover"} />
      <ColorBlock backgroundColor={"surface.warning.active"} />
      <ColorBlock backgroundColor={"surface.warningSubtle"} />
      <ColorBlock backgroundColor={"surface.warningSubtle.hover"} />
      <ColorBlock backgroundColor={"surface.warningSubtle.active"} />
    </ColorBlocks>
    <ColorBlocks title="Surface error">
      <ColorBlock backgroundColor={"surface.error"} />
      <ColorBlock backgroundColor={"surface.error.hover"} />
      <ColorBlock backgroundColor={"surface.error.active"} />
      <ColorBlock backgroundColor={"surface.errorSubtle"} />
      <ColorBlock backgroundColor={"surface.errorSubtle.hover"} />
      <ColorBlock backgroundColor={"surface.errorSubtle.active"} />
    </ColorBlocks>
    <ColorBlocks title="Surface subtle">
      <ColorBlock backgroundColor={"surface.subtle"} />
      <ColorBlock backgroundColor={"surface.subtle.selected"} />
    </ColorBlocks>
    <ColorBlocks title="Stroke">
      <ColorBlock backgroundColor={"stroke.default"} />
      <ColorBlock backgroundColor={"stroke.hover"} />
      <ColorBlock backgroundColor={"stroke.subtle"} />
      <ColorBlock backgroundColor={"stroke.success"} />
      <ColorBlock backgroundColor={"stroke.info"} />
      <ColorBlock backgroundColor={"stroke.warning"} />
      <ColorBlock backgroundColor={"stroke.error"} />
      <ColorBlock backgroundColor={"stroke.disabled"} />
      <ColorBlock backgroundColor={"stroke.discrete"} />
    </ColorBlocks>
  </div>
);
