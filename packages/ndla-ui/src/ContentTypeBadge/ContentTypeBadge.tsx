import React from 'react';
import BEMHelper from 'react-bem-helper';

import {
  SubjectMaterial,
  TasksAndActivities,
  AssessmentResource,
  Subject,
  ExternalLearningResource,
  SharedResource,
  LearningPath,
  MultidisciplinaryTopic,
} from '@ndla/icons/contentType';

import { MenuBook } from '@ndla/icons/action';
import { Concept, ImageNormal, SquareAudio, SquareVideo } from '@ndla/icons/editor';

import * as contentTypes from '../model/ContentType';

const classes = new BEMHelper({
  name: 'content-type-badge',
  prefix: 'c-',
});

interface Props {
  size?: 'xx-small' | 'x-small' | 'small' | 'large';
  type: string;
  title?: string;
  background?: boolean;
  border?: boolean;
  className?: string;
}

export const ContentTypeBadge = ({ type, background, title, size = 'small', border = true, className }: Props) => {
  const modifiers = [type, size];

  let embedResource = false;

  let icon = null;
  switch (type) {
    case contentTypes.SUBJECT_MATERIAL:
      icon = <SubjectMaterial title={title} />;
      break;
    case contentTypes.TASKS_AND_ACTIVITIES:
      icon = <TasksAndActivities title={title} />;
      break;
    case contentTypes.ASSESSMENT_RESOURCES:
      icon = <AssessmentResource title={title} />;
      break;
    case contentTypes.SUBJECT:
      icon = <MenuBook title={title} />;
      break;
    case contentTypes.EXTERNAL_LEARNING_RESOURCES:
      icon = <ExternalLearningResource title={title} />;
      break;
    case contentTypes.SOURCE_MATERIAL:
      icon = <SharedResource title={title} />;
      break;
    case contentTypes.LEARNING_PATH:
      icon = <LearningPath title={title} />;
      break;
    case contentTypes.TOPIC:
      icon = <Subject title={title} />;
      break;
    case contentTypes.MULTIDISCIPLINARY_TOPIC:
      icon = <MultidisciplinaryTopic />;
      break;
    case contentTypes.resourceEmbedTypeMapping.image:
      icon = <ImageNormal />;
      embedResource = true;
      break;
    case contentTypes.resourceEmbedTypeMapping.audio:
      icon = <SquareAudio />;
      embedResource = true;
      break;
    case contentTypes.resourceEmbedTypeMapping.video:
      icon = <SquareVideo />;
      embedResource = true;
      break;
    case contentTypes.resourceEmbedTypeMapping.concept:
      icon = <Concept />;
      embedResource = true;
      break;
    default:
      break;
  }

  if (embedResource) {
    modifiers.push('embed-resource');
  }
  if (background) {
    modifiers.push('background');
  }
  if (border) {
    modifiers.push('border');
  }
  return <div {...classes('', modifiers, className)}>{icon}</div>;
};

export const SubjectMaterialBadge = (props: Omit<Props, 'type'>) => (
  <ContentTypeBadge {...props} type={contentTypes.SUBJECT_MATERIAL} />
);
export const TasksAndActivitiesBadge = (props: Omit<Props, 'type'>) => (
  <ContentTypeBadge {...props} type={contentTypes.TASKS_AND_ACTIVITIES} />
);
export const AssessmentResourcesBadge = (props: Omit<Props, 'type'>) => (
  <ContentTypeBadge {...props} type={contentTypes.ASSESSMENT_RESOURCES} />
);
export const SubjectBadge = (props: Omit<Props, 'type'>) => <ContentTypeBadge {...props} type={contentTypes.SUBJECT} />;
export const ExternalLearningResourcesBadge = (props: Omit<Props, 'type'>) => (
  <ContentTypeBadge {...props} type={contentTypes.EXTERNAL_LEARNING_RESOURCES} />
);
export const SourceMaterialBadge = (props: Omit<Props, 'type'>) => (
  <ContentTypeBadge {...props} type={contentTypes.SOURCE_MATERIAL} />
);

export const LearningPathBadge = (props: Omit<Props, 'type'>) => (
  <ContentTypeBadge {...props} type={contentTypes.LEARNING_PATH} />
);

export const MultidisciplinaryTopicBadge = (props: Omit<Props, 'type'>) => (
  <ContentTypeBadge {...props} type={contentTypes.MULTIDISCIPLINARY_TOPIC} />
);
