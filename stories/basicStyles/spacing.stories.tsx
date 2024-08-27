/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from "@emotion/styled";
import { Meta, StoryFn } from "@storybook/react";
import { colors, spacing } from "@ndla/core";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${spacing.small};
  p {
    margin: 0px;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Block = styled.div`
  background-color: ${colors.brand.primary};
  color: ${colors.white};
  text-align: center;
  width: min-content;
`;

const SpacingBlock = ({ name }: { name: keyof typeof spacing }) => (
  <div>
    <p>{name}</p>
    <Block style={{ padding: spacing[name] }} />
    <p>{spacing[name]}</p>
  </div>
);

export default {
  title: "Base styles/Spacing",
  tags: ["autodocs"],
  parameters: {
    inlineStories: true,
  },
} as Meta;

export const Default: StoryFn = () => (
  <Wrapper>
    <SpacingBlock name="xxsmall" />
    <SpacingBlock name="xsmall" />
    <SpacingBlock name="small" />
    <SpacingBlock name="nsmall" />
    <SpacingBlock name="normal" />
    <SpacingBlock name="medium" />
    <SpacingBlock name="mediumlarge" />
    <SpacingBlock name="large" />
    <SpacingBlock name="xlarge" />
    <SpacingBlock name="xxlarge" />
  </Wrapper>
);
