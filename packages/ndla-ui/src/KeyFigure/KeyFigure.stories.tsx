/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryFn } from "@storybook/react";
import KeyFigure from "./KeyFigure";
const args = {
  title: "<i>500</i>",
  subtitle: `<span lang="nn">TVERRFAGLEGE</span> RESSURSER`,
  image: {
    alt: "Nøkkeltall tverrfaglig",
    src: "https://api.test.ndla.no/image-api/raw/wMowCjRg.svg",
  },
};

export default {
  title: "Components/Key figures",
  component: KeyFigure,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: args,
} as Meta<typeof KeyFigure>;

export const KeyFigureStory: StoryFn<typeof KeyFigure> = ({ ...args }) => {
  return <KeyFigure {...args} />;
};

KeyFigureStory.args = args;
KeyFigureStory.storyName = "Key figures";
