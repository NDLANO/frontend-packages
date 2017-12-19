/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { ResourcesWrapper, ResourceGroup } from 'ndla-ui';
import { Document, Path, Pencil } from 'ndla-icons/common';
import {
  learningPathResources,
  articleResources,
  exerciseResources,
} from '../../dummydata/index';

const toLink = () => ({
  href: '#',
});

const resourceGroup2 = {
  id: 'subject-material',
  title: 'Fagstoff',
  className: 'c-resource-group--subject-material',
  description: 'Relaterte emneartikler',
  viewAllLinkTitle: 'Mer fagstoff',
  resources: articleResources,
  icon: 'Document',
  iconEl: <Document />,
  type: 'Fagstoff',
};

const resourceGroup1 = {
  id: 'type-learning-path',
  title: 'Læringsstier',
  className: 'c-resource-group--learingpath',
  viewAllLinkTitle: 'Flere læringsstier',
  description: 'Tilknyttet dette emnet',
  resources: learningPathResources,
  icon: 'Path',
  iconEl: <Path />,
  type: 'Læringsstier',
};

const resourceGroup3 = {
  id: 'tasks-and-activities',
  title: 'Oppgaver og aktiviteter',
  className: 'c-resource-group--tasks-and-activities',
  description: 'Relatert til emnet',
  viewAllLinkTitle: 'Flere oppgaver og aktiviteter',
  resources: exerciseResources,
  icon: 'Pencil',
  iconEl: <Pencil />,
  type: 'Oppgaver og aktiviteter',
};

const resourceGroups = [resourceGroup1, resourceGroup2, resourceGroup3];

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
          activateSuggestion: '',
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
