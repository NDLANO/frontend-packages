import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

import {
  SubjectMaterial,
  TasksAndActivities,
  AssessmentResource,
} from 'ndla-icons/contentType';

const classes = new BEMHelper({
  name: 'content-type-badge',
  prefix: 'c-',
});

const subjectMaterial = 'subject-material';
const tasksAndActivities = 'tasks-and-activities';
const assessmentResources = 'assessment-resources';

const ContentTypeBadge = ({ type, background }) => {
  const modifiers = [type];

  if (background) {
    modifiers.push('background');
  }

  let icon = null;
  switch (type) {
    case subjectMaterial:
      icon = <SubjectMaterial />;
      break;
    case tasksAndActivities:
      icon = <TasksAndActivities />;
      break;
    case assessmentResources:
      icon = <AssessmentResource />;
      break;
    default:
      break;
  }
  return <div {...classes('', modifiers)}>{icon}</div>;
};

ContentTypeBadge.propTypes = {
  type: PropTypes.oneOf([
    subjectMaterial,
    tasksAndActivities,
    assessmentResources,
  ]),
  background: PropTypes.bool,
};

export default ContentTypeBadge;
