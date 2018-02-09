import React from 'react';
import {
  LearningPathBadge,
  TasksAndActivitiesBadge,
  SubjectMaterialBadge,
  AssessmentResourcesBadge,
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
    title: 'Oppgaver og aktiviteter',
    icon: <TasksAndActivitiesBadge size="x-small" />,
    totalCount: 5,
    resources: [
      {
        path: '#1',
        name: 'Hvem har mediemakt i dag?',
      },
    ],
  },
  {
    title: 'Fagartikler',
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
    title: 'Vurderingsressurser',
    icon: <AssessmentResourcesBadge size="x-small" />,
    totalCount: 1,
    resources: [
      {
        path: '#1',
        name: 'Vurdering i Mediestruktur',
      },
    ],
  },
];
