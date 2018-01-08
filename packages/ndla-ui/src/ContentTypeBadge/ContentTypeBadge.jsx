import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

import {
  SubjectMaterial,
  TasksAndActivities,
  AssessmentResource,
  Subject,
} from 'ndla-icons/contentType';

import * as contentTypes from '../model/ContentType';

const classes = new BEMHelper({
  name: 'content-type-badge',
  prefix: 'c-',
});

const ContentTypeBadge = ({ type, background, size }) => {
  const modifiers = [type, size];

  if (background) {
    modifiers.push('background');
  }

  let icon = null;
  switch (type) {
    case contentTypes.SUBJECT_MATERIAL:
      icon = <SubjectMaterial />;
      break;
    case contentTypes.TASKS_AND_ACTIVITIES:
      icon = <TasksAndActivities />;
      break;
    case contentTypes.ASSESSMENT_RESOURCES:
      icon = <AssessmentResource />;
      break;
    case contentTypes.SUBJECT:
      icon = <Subject />;
      break;
    default:
      break;
  }
  return <div {...classes('', modifiers)}>{icon}</div>;
};

ContentTypeBadge.propTypes = {
  size: PropTypes.oneOf(['small', 'large']),
  type: PropTypes.oneOf([
    contentTypes.SUBJECT_MATERIAL,
    contentTypes.TASKS_AND_ACTIVITIES,
    contentTypes.ASSESSMENT_RESOURCES,
  ]),
  background: PropTypes.bool,
};

ContentTypeBadge.defaultProps = {
  size: 'small',
};

export const SubjectMaterialBadge = props => (
  <ContentTypeBadge {...props} type={contentTypes.SUBJECT_MATERIAL} />
);
export const TasksAndActivitiesBadge = props => (
  <ContentTypeBadge {...props} type={contentTypes.TASKS_AND_ACTIVITIES} />
);
export const AssessmentResourcesBadge = props => (
  <ContentTypeBadge {...props} type={contentTypes.ASSESSMENT_RESOURCES} />
);
export const SubjectBadge = props => (
  <ContentTypeBadge {...props} type={contentTypes.SUBJECT} />
);
