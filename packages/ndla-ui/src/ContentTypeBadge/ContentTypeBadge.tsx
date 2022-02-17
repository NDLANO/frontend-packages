import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

import {
  SubjectMaterial,
  TasksAndActivities,
  AssessmentResource,
  Subject,
  ExternalLearningResource,
  SharedResource,
  LearningPath,
} from '@ndla/icons/contentType';

import { MenuBook } from '@ndla/icons/action';

import * as contentTypes from '../model/ContentType';
// @ts-ignore
import { ContentTypeShape } from '../shapes';

const classes = new BEMHelper({
  name: 'content-type-badge',
  prefix: 'c-',
});

interface Props {
  size: 'xx-small' | 'x-small' | 'small' | 'large';
  type: string;
  title?: string;
  background?: boolean;
  border?: boolean;
}

export const ContentTypeBadge = ({ type, background, title, size = 'small', border = true }: Props) => {
  const modifiers = [type, size];

  if (background) {
    modifiers.push('background');
  }
  if (border) {
    modifiers.push('border');
  }

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
    default:
      break;
  }
  return <div {...classes('', modifiers)}>{icon}</div>;
};

ContentTypeBadge.propTypes = {
  size: PropTypes.oneOf(['xx-small', 'x-small', 'small', 'large']),
  type: ContentTypeShape,
  title: PropTypes.string,
  background: PropTypes.bool,
  border: PropTypes.bool,
};

ContentTypeBadge.defaultProps = {
  size: 'small',
  border: true,
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
