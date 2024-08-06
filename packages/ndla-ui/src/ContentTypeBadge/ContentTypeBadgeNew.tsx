/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import { Badge, BadgeProps, type BadgeVariant } from "@ndla/primitives";
import * as contentTypes from "../model/ContentType";

export interface ContentTypeBadgeProps extends Omit<BadgeProps, "colorTheme"> {
  contentType: ContentType | undefined;
}

export type ContentType =
  | typeof contentTypes.SUBJECT_MATERIAL
  | typeof contentTypes.TASKS_AND_ACTIVITIES
  | typeof contentTypes.ASSESSMENT_RESOURCES
  | typeof contentTypes.SUBJECT
  | typeof contentTypes.SOURCE_MATERIAL
  | typeof contentTypes.LEARNING_PATH
  | typeof contentTypes.TOPIC
  | typeof contentTypes.MULTIDISCIPLINARY_TOPIC
  | typeof contentTypes.CONCEPT
  | typeof contentTypes.EXTERNAL
  | typeof contentTypes.IMAGE
  | typeof contentTypes.AUDIO
  | typeof contentTypes.VIDEO
  | typeof contentTypes.MISSING
  | typeof contentTypes.PODCAST
  // This allows for us to fallback to string without getting a ts error, while still keeping intellisense
  | (string & {});

export const contentTypeToBadgeVariantMap: Record<ContentType, BadgeVariant> = {
  [contentTypes.SUBJECT_MATERIAL]: "brand1",
  [contentTypes.TASKS_AND_ACTIVITIES]: "brand2",
  [contentTypes.ASSESSMENT_RESOURCES]: "brand2",
  [contentTypes.SUBJECT]: "neutral",
  [contentTypes.SOURCE_MATERIAL]: "brand1",
  [contentTypes.LEARNING_PATH]: "brand3",
  [contentTypes.TOPIC]: "neutral",
  // TODO: Verify this color
  [contentTypes.MULTIDISCIPLINARY_TOPIC]: "neutral",
  [contentTypes.CONCEPT]: "brand1",
  // TODO: Verify this color
  [contentTypes.EXTERNAL]: "brand2",
  // TODO: Verify resourceEmbedTypeMapping colors
  [contentTypes.IMAGE]: "brand1",
  [contentTypes.AUDIO]: "brand1",
  [contentTypes.PODCAST]: "brand1",
  [contentTypes.VIDEO]: "brand1",
  [contentTypes.MISSING]: "neutral",
};

export const ContentTypeBadge = forwardRef<HTMLDivElement, ContentTypeBadgeProps>(
  ({ contentType, children, ...props }, ref) => {
    const { t } = useTranslation();
    return (
      <Badge
        colorTheme={contentTypeToBadgeVariantMap[contentType ?? "missing"] ?? contentTypeToBadgeVariantMap["missing"]}
        {...props}
        ref={ref}
      >
        {children ?? t(`contentTypes.${contentType}`)}
      </Badge>
    );
  },
);
