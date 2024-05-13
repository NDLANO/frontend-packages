/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryFn } from "@storybook/react";
import Tabs from "./Tabs";

export default {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  args: {
    "aria-label": "Oversikt over farge og figur",
    variant: "underlined",
    defaultValue: "colors",
    tabs: [
      {
        title: "Farge",
        id: "colors",
        content: (
          <>
            <h2 style={{ margin: 0 }}>Oversikt over farger</h2>
            <p>Grønn, blå og rød.</p>
          </>
        ),
      },
      {
        title: "Figur",
        id: "shapes",
        content: (
          <>
            <h2 style={{ margin: 0 }}>Oversikt over figurer</h2>
            <p>Sirkel, trekant og firkant.</p>
          </>
        ),
      },
      {
        title: "Hemmelig",
        disabled: true,
        id: "secret",
        content: (
          <>
            <h2 style={{ margin: 0 }}>Ikke hemmelig</h2>
            <p>Egentlig ikke så spennende.</p>
          </>
        ),
      },
      {
        title: "Hemmelig 2",
        disabled: false,
        id: "secret2",
        content: (
          <>
            <h2 style={{ margin: 0 }}>Ikke hemmelig</h2>
            <p>Egentlig ikke så spennende.</p>
          </>
        ),
      },
    ],
  },
} as Meta<typeof Tabs>;

export const TabsStory: StoryFn<typeof Tabs> = ({ ...args }) => {
  return <Tabs {...args} />;
};

TabsStory.storyName = "Tabs";
