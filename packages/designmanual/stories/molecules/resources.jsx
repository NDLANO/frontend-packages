/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  ResourcesWrapper,
  ResourceGroup,
  SubjectMaterialBadge,
  LearningPathBadge,
  TasksAndActivitiesBadge,
  AssessmentResourcesBadge,
} from 'ndla-ui';
import { learningPathResources, articleResources, exerciseResources, assessmentResources } from '../../dummydata/index';

const toLink = () => ({
  href: '#',
});

const resourceGroup2 = {
  id: 'subject-material',
  title: 'Fagstoff',
  className: 'c-resource-group--subject-material',
  resources: articleResources,
  iconEl: <SubjectMaterialBadge />,
};

const resourceGroup1 = {
  id: 'type-learning-path',
  title: 'Læringsstier',
  className: 'c-resource-group--learningpath',
  resources: learningPathResources,
  iconEl: <LearningPathBadge />,
};

const resourceGroup3 = {
  id: 'tasks-and-activities',
  title: 'Oppgaver og aktiviteter',
  className: 'c-resource-group--tasks-and-activities',
  resources: exerciseResources,
  iconEl: <TasksAndActivitiesBadge />,
};

const resourceGroup4 = {
  id: 'assessment-resources',
  title: 'Vurderingsressurser',
  className: 'c-resource-group--assessment-resources',
  resources: assessmentResources,
  iconEl: <AssessmentResourcesBadge />,
};

const resourceGroups = [resourceGroup1, resourceGroup2, resourceGroup3, resourceGroup4];

export const Resources = ({ onlyAdditional }) => (
  <ResourcesWrapper>
    {resourceGroups.map(group => (
      <ResourceGroup
        key={group.id}
        title={group.title}
        resources={group.resources.filter(resource => {
          if (onlyAdditional) {
            return resource.additional;
          }
          return true;
        })}
        className={group.className}
        icon={group.iconEl}
        messages={{
          noCoreResourcesAvailable: 'Det er ikke noe kjernestoff tilgjengelig.',
          activateAdditionalResources: 'Vis tilleggsstoff',
          toggleFilterLabel: 'Tilleggsstoff',
          showLess: 'Vis mindre',
          showMore: 'Vis mer',
        }}
        resourceToLinkProps={toLink}
      />
    ))}
  </ResourcesWrapper>
);

Resources.propTypes = {
  onlyAdditional: PropTypes.bool,
};
