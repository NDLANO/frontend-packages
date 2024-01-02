/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { CSSProperties, ComponentProps, useMemo } from "react";

import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { breakpoints, colors, mq } from "@ndla/core";
import { MenuBook } from "@ndla/icons/action";
import {
  SubjectMaterial,
  TasksAndActivities,
  AssessmentResource,
  Subject,
  ExternalLearningResource,
  SharedResource,
  LearningPath,
  MultidisciplinaryTopic,
} from "@ndla/icons/contentType";

import { Concept, ImageNormal, SquareAudio, SquareVideo } from "@ndla/icons/editor";

import * as contentTypes from "../model/ContentType";

interface Props extends ComponentProps<"div"> {
  size?: "xx-small" | "x-small" | "small" | "large";
  type: string;
  title?: string;
  background?: boolean;
  border?: boolean;
  className?: string;
}

const sizes = {
  "xx-small": css`
    width: 20px;
    height: 20px;
    border: 1px solid;
    svg {
      width: 10px;
      height: 10x;
    }
  `,
  "x-small": css`
    width: 20px;
    height: 20px;
    border: 1px solid;
    ${mq.range({ from: breakpoints.tablet })} {
      height: 26px;
      width: 26px;
    }
    svg {
      width: 10px;
      height: 10x;
      ${mq.range({ from: breakpoints.tablet })} {
        width: 12px;
        height: 12px;
      }
    }
  `,
  small: "",
  large: css`
    width: 50px;
    height: 50px;
    svg {
      width: 25px;
      height: 25px;
    }
  `,
} as const;

const BaseContentTypeBadge = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  width: 34px;
  height: 34px;
  color: var(--icon-color);
`;

const borderStyle = css`
  border: 2px solid;
  border-color: var(--icon-color);
`;

const backgroundStyle = css`
  background-color: var(--background-color);
`;

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
    icon: AssessmentResource,
    iconColor: colors.assessmentResource.dark,
    backgroundColor: colors.assessmentResource.light,
  },
  [contentTypes.SUBJECT]: {
    icon: MenuBook,
    iconColor: colors.subject.dark,
    backgroundColor: colors.subject.light,
  },
  [contentTypes.EXTERNAL_LEARNING_RESOURCES]: {
    icon: ExternalLearningResource,
    iconColor: colors.externalLearningResource.dark,
    backgroundColor: colors.externalLearningResource.light,
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
  [contentTypes.resourceEmbedTypeMapping.image]: {
    icon: ImageNormal,
    iconColor: colors.brand.grey,
    backgroundColor: colors.brand.greyLight,
  },
  [contentTypes.resourceEmbedTypeMapping.audio]: {
    icon: SquareAudio,
    iconColor: colors.brand.grey,
    backgroundColor: colors.brand.greyLight,
  },
  [contentTypes.resourceEmbedTypeMapping.video]: {
    icon: SquareVideo,
    iconColor: colors.brand.grey,
    backgroundColor: colors.brand.greyLight,
  },
  [contentTypes.resourceEmbedTypeMapping.concept]: {
    icon: Concept,
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

  const cssStyles = useMemo(() => {
    const styles = [sizes[size]];
    if (background) {
      styles.push(backgroundStyle);
    }
    if (border) {
      styles.push(borderStyle);
    }
    return styles;
  }, [background, border, size]);

  return (
    <BaseContentTypeBadge
      css={cssStyles}
      title={title}
      style={style}
      aria-label={title}
      className={className}
      data-badge=""
      data-type={type}
      {...rest}
    >
      <Icon />
    </BaseContentTypeBadge>
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
export const ExternalLearningResourcesBadge = (props: Omit<Props, "type">) => (
  <ContentTypeBadge {...props} type={contentTypes.EXTERNAL_LEARNING_RESOURCES} />
);
export const SourceMaterialBadge = (props: Omit<Props, "type">) => (
  <ContentTypeBadge {...props} type={contentTypes.SOURCE_MATERIAL} />
);

export const LearningPathBadge = (props: Omit<Props, "type">) => (
  <ContentTypeBadge {...props} type={contentTypes.LEARNING_PATH} />
);

export const MultidisciplinaryTopicBadge = (props: Omit<Props, "type">) => (
  <ContentTypeBadge {...props} type={contentTypes.MULTIDISCIPLINARY_TOPIC} />
);
