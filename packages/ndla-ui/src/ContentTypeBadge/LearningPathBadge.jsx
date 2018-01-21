import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

import {
  SubjectMaterialBadge,
  TasksAndActivitiesBadge,
  AssessmentResourcesBadge,
} from './ContentTypeBadge';

const classes = BEMHelper({
  prefix: 'c-',
  name: 'learning-path-badge',
});

export const LearningPathBadge = ({ size }) => (
  <div {...classes('', [size])}>
    <SubjectMaterialBadge type="subject-material" background size={size} />
    <span {...classes('plus')}>+</span>
    <TasksAndActivitiesBadge
      type="tasks-and-activities"
      background
      size={size}
    />
    <span {...classes('plus')}>+</span>
    <AssessmentResourcesBadge
      type="assessment-resources"
      background
      size={size}
    />
  </div>
);

LearningPathBadge.propTypes = {
  size: PropTypes.oneOf(['x-small', 'small']),
};
