/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { css } from "@ndla/styled-system/css";
import { styled } from "@ndla/styled-system/jsx";
import type { Meta, StoryFn } from "@storybook/react";
import React from "react";

const TextContainer = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    gap: "small",
  },
});

interface Props {
  mark: string;
}

const TextItem = ({ mark }: Props) => {
  const tag = React.createElement(mark, {}, mark);
  return (
    <div className={css({ display: "flex", flexDirection: "column", alignItems: "center" })}>
      <p>Her er et avsnitt med {tag} text!</p>
    </div>
  );
};

export default {
  title: "Preset/Typography",
  tags: ["autodocs"],
  component: TextItem,
  parameters: {
    inlineStories: true,
  },
} as Meta<typeof TextItem>;

export const Marks: StoryFn = () => (
  <TextContainer>
    {["strong", "em", "code", "sub", "sup", "u"].map((mark) => (
      <TextItem key={mark} mark={mark} />
    ))}
  </TextContainer>
);
