/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { CSSProperties, ComponentPropsWithoutRef, useMemo } from "react";

import { colors } from "@ndla/core";
import { Minus, MenuBook } from "@ndla/icons/action";
import { VoicePrintLine } from "@ndla/icons/common";
import {
  MenuSearchLine,
  ExternalLearningResource,
  LearningPath,
  MultidisciplinaryTopic,
  SharedResource,
  Subject,
  SubjectMaterial,
  TasksAndActivities,
} from "@ndla/icons/contentType";
import { ChatLine, Media, Video } from "@ndla/icons/editor";
import { styled } from "@ndla/styled-system/jsx";

import * as contentTypes from "../model/ContentType";

interface Props extends ComponentPropsWithoutRef<"div"> {
  size?: "xx-small" | "x-small" | "small" | "large";
  type: string;
  title?: string;
  background?: boolean;
  border?: boolean;
  className?: string;
}

const StyledContentTypeBadge = styled("div", {
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "100%",
    color: "var(--icon-color)",
  },
  defaultVariants: {
    size: "small",
    border: true,
    background: false,
  },
  variants: {
    size: {
      "xx-small": {
        width: "20px",
        height: "20px",
        border: "1px solid",
        "& svg": {
          width: "10px",
          height: "10px",
        },
      },
      "x-small": {
        width: "20px",
        height: "20px",
        border: "1px solid",
        tablet: {
          height: "26px",
          width: "26px",
        },
        "& svg": {
          width: "10px",
          height: "10px",
          tablet: {
            width: "12px",
            height: "12px",
          },
        },
      },
      small: {
        width: "34px",
        height: "34px",
      },
      large: {
        width: "50px",
        height: "50px",
        "& svg": {
          width: "25px",
          height: "25px",
        },
      },
    },
    border: {
      true: {
        border: "2px solid",
        borderColor: "var(--icon-color)",
      },
      false: {},
    },
    background: {
      true: {
        backgroundColor: "var(--background-color)",
      },
    },
  },
});

const iconMap = {
  [contentTypes.SUBJECT_MATERIAL]: {
    icon: SubjectMaterial,
    iconColor: colors.subjectMaterial.dark,
    backgroundColor: colors.subjectMaterial.light,
  },
  [contentTypes.TASKS_AND_ACTIVITIES]: {
    icon: TasksAndActivities,
    iconColor: colors.tasksAndActivities.dark,
    backgroundColor: colors.tasksAndActivities.light,
  },
  [contentTypes.ASSESSMENT_RESOURCES]: {
    icon: MenuSearchLine,
    iconColor: colors.assessmentResource.dark,
    backgroundColor: colors.assessmentResource.light,
  },
  [contentTypes.SUBJECT]: {
    icon: MenuBook,
    iconColor: colors.subject.dark,
    backgroundColor: colors.subject.light,
  },
  [contentTypes.SOURCE_MATERIAL]: {
    icon: SharedResource,
    iconColor: colors.sourceMaterial.dark,
    backgroundColor: colors.sourceMaterial.light,
  },
  [contentTypes.LEARNING_PATH]: {
    icon: LearningPath,
    iconColor: colors.learningPath.dark,
    backgroundColor: colors.learningPath.light,
  },
  [contentTypes.TOPIC]: {
    icon: Subject,
    iconColor: colors.subject.dark,
    backgroundColor: colors.subject.light,
  },
  [contentTypes.MULTIDISCIPLINARY_TOPIC]: {
    icon: MultidisciplinaryTopic,
    backgroundColor: "#b9b37b",
  },
  [contentTypes.CONCEPT]: {
    icon: ChatLine,
    iconColor: colors.concept.text,
    backgroundColor: colors.concept.light,
  },
  [contentTypes.EXTERNAL]: {
    icon: ExternalLearningResource,
    iconColor: colors.external.dark,
    backgroundColor: colors.external.light,
  },
  [contentTypes.resourceEmbedTypeMapping.image]: {
    icon: Media,
    iconColor: colors.brand.grey,
    backgroundColor: colors.brand.greyLight,
  },
  [contentTypes.resourceEmbedTypeMapping.audio]: {
    icon: VoicePrintLine,
    iconColor: colors.brand.grey,
    backgroundColor: colors.brand.greyLight,
  },
  [contentTypes.resourceEmbedTypeMapping.video]: {
    icon: Video,
    iconColor: colors.brand.grey,
    backgroundColor: colors.brand.greyLight,
  },
  [contentTypes.MISSING]: {
    icon: Minus,
    iconColor: colors.brand.grey,
    backgroundColor: colors.brand.greyLight,
  },
} as const;

export const ContentTypeBadge = ({
  type,
  background,
  title,
  size = "small",
  border = true,
  className,
  ...rest
}: Props) => {
  const { Icon, style } = useMemo(() => {
    const fromMap = iconMap[type];
    const style = {
      "--icon-color": fromMap.iconColor,
      "--background-color": fromMap.backgroundColor,
    } as CSSProperties;
    return { Icon: fromMap.icon, style };
  }, [type]);

  return (
    <StyledContentTypeBadge
      title={title}
      background={background}
      size={size}
      border={border}
      style={style}
      aria-label={title}
      className={className}
      data-badge=""
      data-type={type}
      {...rest}
    >
      <Icon />
    </StyledContentTypeBadge>
  );
};

export const SubjectMaterialBadge = (props: Omit<Props, "type">) => (
  <ContentTypeBadge {...props} type={contentTypes.SUBJECT_MATERIAL} />
);
export const TasksAndActivitiesBadge = (props: Omit<Props, "type">) => (
  <ContentTypeBadge {...props} type={contentTypes.TASKS_AND_ACTIVITIES} />
);
export const AssessmentResourcesBadge = (props: Omit<Props, "type">) => (
  <ContentTypeBadge {...props} type={contentTypes.ASSESSMENT_RESOURCES} />
);
export const SubjectBadge = (props: Omit<Props, "type">) => <ContentTypeBadge {...props} type={contentTypes.SUBJECT} />;
export const SourceMaterialBadge = (props: Omit<Props, "type">) => (
  <ContentTypeBadge {...props} type={contentTypes.SOURCE_MATERIAL} />
);
export const LearningPathBadge = (props: Omit<Props, "type">) => (
  <ContentTypeBadge {...props} type={contentTypes.LEARNING_PATH} />
);
export const MultidisciplinaryTopicBadge = (props: Omit<Props, "type">) => (
  <ContentTypeBadge {...props} type={contentTypes.MULTIDISCIPLINARY_TOPIC} />
);
export const ConceptBadge = (props: Omit<Props, "type">) => <ContentTypeBadge {...props} type={contentTypes.CONCEPT} />;
