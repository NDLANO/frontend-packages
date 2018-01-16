import React from 'react';
import {
  LearningPathBadge,
  TasksAndActivitiesBadge,
  SubjectMaterialBadge,
  AssessmentResourcesBadge,
} from 'ndla-ui';

export const autocompleteData = [
  {
    title: 'Læringsstier',
    icon: <LearningPathBadge size="x-small" />,
    totalCount: 2,
    items: [
      {
        url: '#1',
        display: 'Mediemakt',
      },
      {
        url: '#2',
        display: 'Media som dne fjerde statsmakt',
      },
    ],
  },
  {
    title: 'Oppgaver og aktiviteter',
    icon: <TasksAndActivitiesBadge size="x-small" />,
    totalCount: 5,
    items: [
      {
        url: '#1',
        display: 'Hvem har mediemakt i dag?',
      },
    ],
  },
  {
    title: 'Fagartikler',
    icon: <SubjectMaterialBadge size="x-small" />,
    totalCount: 2,
    showAllLinkUrl: '#',
    items: [
      {
        url: '#1',
        display: 'Hva er makt?',
      },
      {
        url: '#2',
        display: 'Maktfordelingsprinsippet',
      },
    ],
  },
  {
    title: 'Vurderingsressurser',
    icon: <AssessmentResourcesBadge size="x-small" />,
    totalCount: 1,
    items: [
      {
        url: '#1',
        display: 'Vurdering i Mediestruktur',
      },
    ],
  },
];
