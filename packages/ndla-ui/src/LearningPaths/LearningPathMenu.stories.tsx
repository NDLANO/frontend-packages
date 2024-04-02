/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryFn } from "@storybook/react";
import LearningPathMenu from "./LearningPathMenu";
import { contentTypes } from "../model/ContentType";
const args = {
  name: "Læringssti",
  LearningPathId: 1,
  lastUpdated: "2023-06-01",
  copyright: {
    contributors: [
      {
        type: "originator",
        name: "NDLA",
      },
    ],
    license: {
      license: "CC-BY-SA-4.0",
    },
  },
  learningPathUrl: "https://stier.ndla.no",
  currentIndex: 1,
  cookies: {},
  learningsteps: [
    {
      id: 1,
      title: "Introduksjon",
      type: contentTypes.LEARNING_PATH,
    },
    {
      id: 2,
      title: "Steg 1",
      type: contentTypes.SUBJECT_MATERIAL,
    },
    {
      id: 3,
      title: "Steg 2",
      type: contentTypes.TASKS_AND_ACTIVITIES,
    },
  ],
  toLearningPathUrl: (pathId: number, stepId: number) => "",
};

export default {
  title: "Patterns/Learning path menu",
  component: LearningPathMenu,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: args,
} as Meta<typeof LearningPathMenu>;

export const LearningPathMenuStory: StoryFn<typeof LearningPathMenu> = ({ ...args }) => {
  return <LearningPathMenu {...args} />;
};

LearningPathMenuStory.args = args;
LearningPathMenuStory.storyName = "Learning path menu";
