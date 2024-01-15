/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryObj } from "@storybook/react";
import { FavoriteButton } from "@ndla/button";
import ResourceItem from "./ResourceItem";
import { defaultParameters } from "../../../../stories/defaults";

export default {
  title: "Components/ResourceItem",
  tags: ["autodocs"],
  component: ResourceItem,
  parameters: {
    inlineStories: true,
    ...defaultParameters,
  },
  args: {
    id: "urn:resource:a7a49c0a-32ea-4343-8b11-bd6d65c24f87",
    name: "Refleksjonsoppgave om ideer og idéutvikling",
    path: "",
    contentType: "subject-material",
    additional: false,
    heartButton: () => <FavoriteButton />,
    access: undefined,
  },
} as Meta<typeof ResourceItem>;

export const Default: StoryObj<typeof ResourceItem> = {};

export const WithCoreOrAdditionalIndicator: StoryObj<typeof ResourceItem> = {
  args: {
    contentTypeName: "Fagstoff",
    contentTypeDescription: "Kjernestoff",
    showAdditionalResources: true,
  },
};

export const WithCoreOrAdditionalIndicatorAdditional: StoryObj<typeof ResourceItem> = {
  args: {
    additional: true,
    contentTypeName: "Fagstoff",
    contentTypeDescription: "Tilleggsstoff",
    showAdditionalResources: true,
  },
};

export const RelevanceIndicatorWithoutLabel: StoryObj<typeof ResourceItem> = {
  args: {
    contentTypeDescription: "Kjernestoff",
    showAdditionalResources: true,
  },
};

export const OnlyAvailableForTeachers: StoryObj<typeof ResourceItem> = {
  args: {
    access: "teacher",
  },
};

export const CurrentPage: StoryObj<typeof ResourceItem> = {
  args: { active: true },
};

export const SubjectMaterial: StoryObj<typeof ResourceItem> = {
  args: {
    contentType: "subject-material",
  },
};

export const TasksAndActivities: StoryObj<typeof ResourceItem> = {
  args: {
    contentType: "tasks-and-activities",
  },
};

export const AssessmentResource: StoryObj<typeof ResourceItem> = {
  args: {
    contentType: "assessment-resources",
  },
};

export const ExternalLearningResource: StoryObj<typeof ResourceItem> = {
  args: {
    contentType: "external-learning-resources",
  },
};

export const SourceMaterial: StoryObj<typeof ResourceItem> = {
  args: {
    contentType: "source-material",
  },
};

export const LearningPath: StoryObj<typeof ResourceItem> = {
  args: {
    contentType: "learning-path",
  },
};
