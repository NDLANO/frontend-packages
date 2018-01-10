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
  ContentTypeBadge,
  constants,
} from 'ndla-ui';
import {
  learningPathResources,
  articleResources,
  exerciseResources,
  assessmentResources,
} from '../../dummydata/index';

const { contentTypes } = constants;

const toLink = () => ({
  href: '#',
});

const resourceGroup1 = {
  id: 'type-learning-path',
  title: 'Læringsstier',
  contentType: contentTypes.LEARNING_PATH,
  resources: learningPathResources,
};

const resourceGroup2 = {
  id: 'subject-material',
  title: 'Fagstoff',
  contentType: contentTypes.SUBJECT_MATERIAL,
  resources: articleResources,
};

const resourceGroup3 = {
  id: 'tasks-and-activities',
  title: 'Oppgaver og aktiviteter',
  contentType: contentTypes.TASKS_AND_ACTIVITIES,
  resources: exerciseResources,
};

const resourceGroup4 = {
  id: 'assessment-resources',
  title: 'Vurderingsressurser',
  contentType: contentTypes.ASSESSMENT_RESOURCES,
  resources: assessmentResources,
};

const resourceGroups = [
  resourceGroup1,
  resourceGroup2,
  resourceGroup3,
  resourceGroup4,
];

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
        contentType={group.contentType}
        icon={<ContentTypeBadge type={group.contentType} />}
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
