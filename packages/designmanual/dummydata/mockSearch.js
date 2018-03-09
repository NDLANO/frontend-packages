import React from 'react';
import {
  LearningPathBadge,
  TasksAndActivitiesBadge,
  SubjectMaterialBadge,
} from 'ndla-ui';

export const searchFieldSearchResults = [
  {
    title: 'Læringsstier',
    icon: <LearningPathBadge size="x-small" />,
    totalCount: 2,
    resources: [
      {
        path: '#1',
        name: 'Mediemakt',
      },
      {
        path: '#2',
        name: 'Media som dne fjerde statsmakt',
      },
    ],
  },
  {
    title: 'Fagstoff',
    icon: <SubjectMaterialBadge size="x-small" />,
    totalCount: 2,
    showAllLinkUrl: '#',
    resources: [
      {
        path: '#1',
        name: 'Hva er makt?',
      },
      {
        path: '#2',
        name: 'Maktfordelingsprinsippet',
      },
    ],
  },
  {
    title: 'Oppgaver og aktiviteter',
    icon: <TasksAndActivitiesBadge size="x-small" />,
    totalCount: 0,
    resources: [],
  },
];
