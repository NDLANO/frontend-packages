/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';

import {
  ResourcesWrapper,
  ResourceGroup,
  ResourcesTopicTitle,
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
  noContentLabel: 'Det er ikke noe kjernestoff for læringsstier.',
};

const resourceGroup2 = {
  id: 'subject-material',
  title: 'Fagstoff',
  contentType: contentTypes.SUBJECT_MATERIAL,
  resources: articleResources,
  noContentLabel: 'Det er ikke noe kjernestoff for fagstoff.',
};

const resourceGroup3 = {
  id: 'tasks-and-activities',
  title: 'Oppgaver og aktiviteter',
  contentType: contentTypes.TASKS_AND_ACTIVITIES,
  resources: exerciseResources,
  noContentLabel: 'Det er ikke noe kjernestoff for oppgaver og aktiviteter.',
};

const resourceGroup4 = {
  id: 'assessment-resources',
  title: 'Vurderingsressurser',
  contentType: contentTypes.ASSESSMENT_RESOURCES,
  resources: assessmentResources,
  noContentLabel: 'Det er ikke noe kjernestoff for læringsstier.',
};

const resourceGroups = [
  resourceGroup1,
  resourceGroup2,
  resourceGroup3,
  resourceGroup4,
];

class Resources extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAdditionalResources: false,
      showAdditionalDialog: false,
    };
    this.toggleAdditionalResources = this.toggleAdditionalResources.bind(this);
    this.toggleAdditionalDialog = this.toggleAdditionalDialog.bind(this);
  }
  toggleAdditionalResources() {
    this.setState({
      showAdditionalResources: !this.state.showAdditionalResources,
    });
  }
  toggleAdditionalDialog() {
    this.setState({
      showAdditionalDialog: !this.state.showAdditionalDialog,
    });
  }
  render() {
    const { showAdditionalResources, showAdditionalDialog } = this.state;
    const hasAdditionalResources = resourceGroups.some(group =>
      group.resources.some(resource => resource.additional),
    );
    return (
      <ResourcesWrapper
        header={
          <ResourcesTopicTitle
            messages={{
              label: 'Læringsressurser',
              additionalFilterLabel: 'Vis tilleggsressurser',
              dialogTooltip: 'Hva er kjernestoff og tilleggsstoff?',
              dialogHeading: 'Kjernestoff og tilleggsstoff',
              dialogTexts: [
                'Når du lærer deg kjernestoffet skaffer du deg den kompetansen som beskrives i læreplanen for faget.',
                'Tilleggstoff er innhold i faget som du kan velge i tillegg til kjernestoffet. Gjennom tilleggsstoffet kan du fordype deg i et emne eller tilnærme deg emnet på en annen måte.',
              ],
            }}
            explainationIconLabelledBy="learning-resources-info-header-id"
            id="learning-resources-id"
            title="Havbunnsløsninger"
            toggleAdditionalResources={this.toggleAdditionalResources}
            showAdditionalResources={showAdditionalResources}
            hasAdditionalResources={hasAdditionalResources}
            toggleAdditionalDialog={this.toggleAdditionalDialog}
            showAdditionalDialog={showAdditionalDialog}
          />
        }>
        {resourceGroups.map(group => (
          <ResourceGroup
            key={group.id}
            title={group.title}
            resources={group.resources}
            showAdditionalResources={showAdditionalResources}
            toggleAdditionalResources={this.toggleAdditionalResources}
            contentType={group.contentType}
            icon={<ContentTypeBadge type={group.contentType} />}
            messages={{
              noContentBoxLabel: group.noContentLabel,
              noContentBoxButtonText: 'Vis tilleggsstoff',
              toggleFilterLabel: 'Tilleggsressurser',
              coreTooptip: 'Kjernestoff er fagstoff som er på pensum',
              additionalTooltip: 'Tilleggsstoff er ikke på pensum',
            }}
            resourceToLinkProps={toLink}
          />
        ))}
      </ResourcesWrapper>
    );
  }
}

export default Resources;
