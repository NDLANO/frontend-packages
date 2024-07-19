/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef } from "react";
import { Hero, HeroProps, HeroVariant } from "@ndla/primitives";
import { ContentType } from "../ContentTypeBadge/ContentTypeBadgeNew";
import * as contentTypes from "../model/ContentType";

// TODO: Figure out what to do with frontpage articles. If anything...
// Also, verify all of these colors.
export const contentTypeToHeroMap: Record<ContentType, HeroVariant> = {
  [contentTypes.SUBJECT_MATERIAL]: "primary",
  [contentTypes.TASKS_AND_ACTIVITIES]: "brand2Strong",
  [contentTypes.ASSESSMENT_RESOURCES]: "brand2",
  // This will never happen
  [contentTypes.SUBJECT]: "primary",
  [contentTypes.SOURCE_MATERIAL]: "brand1",
  // This will never happen
  [contentTypes.LEARNING_PATH]: "primary",
  // TODO: This needs a color
  [contentTypes.TOPIC]: "neutral",
  // TODO: This is just taken from thin air.
  [contentTypes.MULTIDISCIPLINARY_TOPIC]: "brand4",
  [contentTypes.CONCEPT]: "brand1Subtle",
  // TODO: No clue what this'll be. Maybe unused?
  [contentTypes.EXTERNAL]: "primary",
  [contentTypes.IMAGE]: "primary",
  [contentTypes.AUDIO]: "primary",
  [contentTypes.PODCAST]: "primary",
  [contentTypes.VIDEO]: "primary",
  [contentTypes.MISSING]: "neutral",
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
