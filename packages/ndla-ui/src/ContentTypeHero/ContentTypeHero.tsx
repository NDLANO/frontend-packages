/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef } from "react";
import { Hero, type HeroProps, type HeroVariant } from "@ndla/primitives";
import type { ContentType } from "../ContentTypeBadge/ContentTypeBadge";
import * as contentTypes from "../model/ContentType";

export const contentTypeToHeroMap: Record<ContentType, HeroVariant> = {
  [contentTypes.SUBJECT_MATERIAL]: "primary",
  [contentTypes.TASKS_AND_ACTIVITIES]: "brand2Bold",
  [contentTypes.ASSESSMENT_RESOURCES]: "brand2",
  // This will never happen
  [contentTypes.SUBJECT]: "primary",
  [contentTypes.SOURCE_MATERIAL]: "brand1",
  // This will never happen
  [contentTypes.LEARNING_PATH]: "primary",
  [contentTypes.TOPIC]: "neutral",
  [contentTypes.MULTIDISCIPLINARY]: "primary",
  [contentTypes.CONCEPT]: "brand1Moderate",
  [contentTypes.EXTERNAL]: "primary",
  [contentTypes.IMAGE]: "primary",
  [contentTypes.AUDIO]: "primary",
  [contentTypes.PODCAST]: "primary",
  [contentTypes.VIDEO]: "primary",
  [contentTypes.MISSING]: "neutral",
  [contentTypes.GLOSS]: "brand1Moderate",
  // this will never happen
  [contentTypes.PROGRAMME]: "primary",
  // this will never happen
  [contentTypes.PODCAST_SERIES]: "primary",
  [contentTypes.FRONTPAGE_ARTICLE]: "primary",
};

export interface ContentTypeHeroProps extends HeroProps {
  contentType: ContentType | undefined;
}

export const ContentTypeHero = forwardRef<HTMLDivElement, ContentTypeHeroProps>(
  ({ contentType, children, ...props }, ref) => {
    return (
      <Hero
        variant={contentTypeToHeroMap[contentType ?? "missing"] ?? contentTypeToHeroMap["missing"]}
        {...props}
        ref={ref}
      >
        {children}
      </Hero>
    );
  },
);
