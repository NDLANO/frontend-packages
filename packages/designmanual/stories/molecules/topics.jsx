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
  TopicIntroductionList,
} from 'ndla-ui';
import { topicList } from '../../dummydata/index';

class Topics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAdditionalCores: false,
      showAdditionalDialog: false,
    };
    this.toggleAdditionalCores = this.toggleAdditionalCores.bind(this);
    this.toggleAdditionalDialog = this.toggleAdditionalDialog.bind(this);
  }
  toggleAdditionalCores() {
    this.setState({
      showAdditionalCores: !this.state.showAdditionalCores,
    });
  }
  toggleAdditionalDialog() {
    this.setState({
      showAdditionalDialog: !this.state.showAdditionalDialog,
    });
  }
  render() {
    const { showAdditionalCores, showAdditionalDialog } = this.state;
    return (
      <ResourcesWrapper
        header={
          <ResourcesTopicTitle
            messages={{
              label: 'Emner',
              toggleFilterLabel: 'Vis tilleggsemner',
              additionalDialogLabel: 'Hva er kjernestoff og tilleggstoff?',
              additionalDialogDescription1:
                'Når du lærer deg kjernestoffet skaffer du deg den kompetansen som beskrives i læreplanen for faget.',
              additionalDialogDescription2:
                'Tilleggstoff er innhold i faget som du kan velge i tillegg til kjernestoffet. Gjennom tilleggsstoffet kan du fordype deg i et emne eller tilnærme deg emnet på en annen måte.',
              additionalDialogTooptip: 'Hva er kjernestoff og tilleggstoff?',
            }}
            explainationIconLabelledBy="subject-header-id"
            title="Medieproduksjon"
            hasAdditionalResources={topicList.some(topic => topic.additional)}
            toggleAdditionalResources={this.toggleAdditionalCores}
            showAdditionalResources={showAdditionalCores}
            toggleAdditionalDialog={this.toggleAdditionalDialog}
            showAdditionalDialog={showAdditionalDialog}
          />
        }>
        <TopicIntroductionList
          toTopic={() => '#'}
          topics={topicList}
          subjectPage
          showAdditionalCores={showAdditionalCores}
          toggleAdditionalCores={this.toggleAdditionalCores}
          messages={{
            noContentBoxLabel: 'Det er ikke noe kjernestoff tilgjengelig.',
            noContentBoxButtonText: 'Vis tilleggsstoff',
            shortcutButtonText: 'Lærestoff',
            tooltipCoreTopic: 'Kjernestoff er fagstoff som er på pensum',
            tooltipAdditionalTopic:
              'Tilleggsstoff er fagstoff som er på pensum',
          }}
        />
      </ResourcesWrapper>
    );
  }
}

export default Topics;
