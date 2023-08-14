/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Component } from 'react';
import PropTypes from 'prop-types';

import { ResourcesWrapper, ResourceGroup, ResourcesTopicTitle, ContentTypeBadge, constants } from '@ndla/ui';
import { FavoriteButton } from '@ndla/button';
import {
  learningPathResources,
  articleResources,
  exerciseResources,
  assessmentResources,
  sourceMaterialResources,
  externalLearningResources,
} from '../../dummydata/index';

const { contentTypes } = constants;

const toLink = () => ({
  to: '#',
});

const resourceGroup1 = {
  id: 'type-learning-path',
  title: 'Læringsstier',
  contentType: contentTypes.LEARNING_PATH,
  resources: learningPathResources.map((r) => ({ ...r, type: '', path: '' })),
  noContentLabel: 'Det er ikke noe kjernestoff for læringsstier.',
};

const resourceGroup2 = {
  id: 'subject-material',
  title: 'Fagstoff',
  contentType: contentTypes.SUBJECT_MATERIAL,
  resources: articleResources.map((r) => ({ ...r, type: '', path: '' })),
  noContentLabel: 'Det er ikke noe kjernestoff for fagstoff.',
};

const resourceGroup3 = {
  id: 'tasks-and-activities',
  title: 'Oppgaver og aktiviteter',
  contentType: contentTypes.TASKS_AND_ACTIVITIES,
  resources: exerciseResources.map((r) => ({ ...r, type: '', path: '' })),
  noContentLabel: 'Det er ikke noe kjernestoff for oppgaver og aktiviteter.',
};

const resourceGroup4 = {
  id: 'assessment-resources',
  title: 'Vurderingsressurser',
  contentType: contentTypes.ASSESSMENT_RESOURCES,
  resources: assessmentResources.map((r) => ({ ...r, type: '', path: '' })),
  noContentLabel: 'Det er ikke noe kjernestoff for læringsstier.',
};

const resourceGroup5 = {
  id: 'source-material-resources',
  title: 'Kildemateriale',
  contentType: contentTypes.SOURCE_MATERIAL,
  resources: sourceMaterialResources.map((r) => ({ ...r, type: '', path: '' })),
  noContentLabel: 'Det er ikke noe kjernestoff for kildemateriale.',
};

const resourceGroup6 = {
  id: 'external-learning-resources',
  title: 'Eksterne læringsressurser',
  contentType: contentTypes.EXTERNAL_LEARNING_RESOURCES,
  resources: externalLearningResources.map((r) => ({ ...r, type: '', path: '' })),
  noContentLabel: 'Det er ikke noe kjernestoff for eksterne læringssressurser.',
};

const resourceGroups = [resourceGroup1, resourceGroup2, resourceGroup3, resourceGroup4, resourceGroup5, resourceGroup6];

const flattenResources = resourceGroups.flatMap((group) =>
  group.resources.map((r) => {
    return {
      ...r,
      contentTypeName: group.title,
      contentType: group.contentType,
    };
  }),
);

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
    this.setState((prevState) => ({
      showAdditionalResources: !prevState.showAdditionalResources,
    }));
  }

  toggleAdditionalDialog() {
    this.setState((prevState) => ({
      showAdditionalDialog: !prevState.showAdditionalDialog,
    }));
  }

  render() {
    const { title, showActiveResource, showUngrouped } = this.props;
    const { showAdditionalResources, showAdditionalDialog } = this.state;
    const hasAdditionalResources = resourceGroups.some((group) =>
      group.resources.some((resource) => resource.additional),
    );

    if (!showActiveResource) {
      resourceGroups.forEach((group) => {
        group.resources.forEach((resource) => {
          if (resource.active) {
            resource.active = false;
          }
        });
      });
    }

    const allResources = showUngrouped
      ? flattenResources.map((r, index) => {
          return { ...r, extraBottomMargin: (index + 1) % 4 === 0 };
        })
      : [];

    return (
      <ResourcesWrapper
        header={
          <ResourcesTopicTitle
            messages={{
              label: 'Læringsressurser',
              additionalFilterLabel: 'Tilleggsressurser',
              dialogTooltip: 'Hva er kjernestoff og tilleggsstoff?',
              dialogHeading: 'Kjernestoff og tilleggsstoff',
              dialogTexts: [
                'Når du lærer deg kjernestoffet skaffer du deg den kompetansen som beskrives i læreplanen for faget.',
                'Tilleggstoff er innhold i faget som du kan velge i tillegg til kjernestoffet. Gjennom tilleggsstoffet kan du fordype deg i et emne eller tilnærme deg emnet på en annen måte.',
              ],
            }}
            explainationIconLabelledBy="learning-resources-info-header-id"
            id="learning-resources-id"
            title={title}
            toggleAdditionalResources={this.toggleAdditionalResources}
            showAdditionalResources={showAdditionalResources}
            hasAdditionalResources={hasAdditionalResources}
            toggleAdditionalDialog={this.toggleAdditionalDialog}
            showAdditionalDialog={showAdditionalDialog}
          />
        }
      >
        {showUngrouped && (
          <ResourceGroup
            resources={allResources}
            showAdditionalResources={showAdditionalResources}
            toggleAdditionalResources={this.toggleAdditionalResources}
            resourceToLinkProps={toLink}
            unGrouped
            heartButton={() => <FavoriteButton isFavorite />}
          />
        )}
        {!showUngrouped &&
          resourceGroups.map((group) => (
            <ResourceGroup
              key={group.id}
              title={group.title}
              resources={group.resources}
              showAdditionalResources={showAdditionalResources}
              toggleAdditionalResources={this.toggleAdditionalResources}
              contentType={group.contentType}
              icon={<ContentTypeBadge type={group.contentType} />}
              resourceToLinkProps={toLink}
              heartButton={() => <FavoriteButton />}
            />
          ))}
      </ResourcesWrapper>
    );
  }
}

Resources.propTypes = {
  title: PropTypes.string,
  showActiveResource: PropTypes.bool,
  showUngrouped: PropTypes.bool,
};

Resources.defaultProps = {
  title: 'Havbunnsløsninger',
  showActiveResource: true,
  showUngrouped: false,
};

export default Resources;
