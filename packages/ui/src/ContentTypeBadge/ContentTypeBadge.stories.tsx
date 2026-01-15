/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useTranslation } from "react-i18next";
import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { MovieLine } from "@ndla/icons";
import { HStack, styled } from "@ndla/styled-system/jsx";
import { ContentTypeBadge } from "./ContentTypeBadge";

export default {
  title: "Components/ContentTypeBadge",
  component: ContentTypeBadge,
  tags: ["autodocs"],
  parameters: {
    inlineStories: true,
  },
  args: {
    contentType: "subject-material",
  },
} satisfies Meta<typeof ContentTypeBadge>;

export const Default: StoryObj<typeof ContentTypeBadge> = {};

const StyledHStack = styled(HStack, {
  base: {
    flexWrap: "wrap",
  },
});

export const AllBadges: StoryFn<typeof ContentTypeBadge> = () => (
  <StyledHStack gap="3xsmall">
    <ContentTypeBadge contentType="subject-material" />
    <ContentTypeBadge contentType="tasks-and-activities" />
    <ContentTypeBadge contentType="assessment-resources" />
    <ContentTypeBadge contentType="subject" />
    <ContentTypeBadge contentType="source-material" />
    <ContentTypeBadge contentType="learning-path" />
    <ContentTypeBadge contentType="topic" />
    <ContentTypeBadge contentType="multidisciplinary" />
    <ContentTypeBadge contentType="concept" />
    <ContentTypeBadge contentType="external" />
    <ContentTypeBadge contentType="image" />
    <ContentTypeBadge contentType="audio" />
    <ContentTypeBadge contentType="video" />
    <ContentTypeBadge contentType="missing" />
    <ContentTypeBadge contentType="frontpage-article" />
    <ContentTypeBadge contentType="programme" />
    <ContentTypeBadge contentType="podcast" />
    <ContentTypeBadge contentType="podcast-series" />
    <ContentTypeBadge contentType="gloss" />
  </StyledHStack>
);

const StyledContentTypeBadge = styled(ContentTypeBadge, {
  base: {
    display: "flex",
    gap: "4xsmall",
    alignItems: "center",
  },
});

export const ContentOverride: StoryFn<typeof ContentTypeBadge> = () => {
  const { t } = useTranslation();
  return (
    <StyledContentTypeBadge contentType="video">
      <MovieLine size="small" />
      {t("contentTypes.video")}
    </StyledContentTypeBadge>
  );
};
