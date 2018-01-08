import React from 'react';
import ContentTypeBadge from './ContentTypeBadge';

const LearningPathBadge = () => (
  <div className="c-learning-path-badge">
    <ContentTypeBadge type="subject-material" background />
    <span className="c-learning-path-badge c-learning-path-badge__plus">+</span>
    <ContentTypeBadge type="tasks-and-activities" background />
    <span className="c-learning-path-badge c-learning-path-badge__plus">+</span>
    <ContentTypeBadge type="assessment-resources" background />
  </div>
);

export default LearningPathBadge;
