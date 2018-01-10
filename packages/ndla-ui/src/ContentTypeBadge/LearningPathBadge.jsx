import React from 'react';
import {
  SubjectMaterialBadge,
  TasksAndActivitiesBadge,
  AssessmentResourcesBadge,
} from './ContentTypeBadge';

export const LearningPathBadge = () => (
  <div className="c-learning-path-badge">
    <SubjectMaterialBadge type="subject-material" background />
    <span className="c-learning-path-badge c-learning-path-badge__plus">+</span>
    <TasksAndActivitiesBadge type="tasks-and-activities" background />
    <span className="c-learning-path-badge c-learning-path-badge__plus">+</span>
    <AssessmentResourcesBadge type="assessment-resources" background />
  </div>
);
