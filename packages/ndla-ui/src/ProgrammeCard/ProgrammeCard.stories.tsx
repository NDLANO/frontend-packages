/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryFn } from "@storybook/react";
import ProgrammeCard from "./ProgrammeCard";

export default {
  title: "Components/ProgrammeCard",
  component: ProgrammeCard,
  tags: ["autodocs"],
  args: {
    id: "test ID",
    title: { title: "Elektro og datateknologi", language: "nb" },
    desktopImage: {
      src: "https://api.test.ndla.no/image-api/raw/ajvkVKKR.svg?width=600&ts=1682591987993",
      alt: "",
    },
    mobileImage: {
      src: "https://api.test.ndla.no/image-api/raw/YIAprLg9.svg?width=600&ts=1682592022017",
      alt: "",
    },
    url: "#",
  },
} as Meta<typeof ProgrammeCard>;

export const ProgrammeCardStory: StoryFn<typeof ProgrammeCard> = ({ ...args }) => {
  return <ProgrammeCard {...args} />;
};

ProgrammeCardStory.storyName = "ProgrammeCard";
