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
  ResourcesTopicTitle,
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
    this.setState(prevState => ({
      showAdditionalCores: !prevState.showAdditionalCores,
    }));
  }

  toggleAdditionalDialog() {
    this.setState(prevState => ({
      showAdditionalDialog: !prevState.showAdditionalDialog,
    }));
  }

  render() {
    const { showAdditionalCores, showAdditionalDialog } = this.state;
    return (
      <ResourcesWrapper
        header={
          <ResourcesTopicTitle
            messages={{
              label: 'Emner',
              additionalFilterLabel: 'Vis tilleggsemner',
              dialogTooltip: 'Hva er kjernestoff og tilleggsstoff?',
              dialogHeading: 'Kjernestoff og tilleggsstoff',
              dialogTexts: [
                'Når du lærer deg kjernestoffet skaffer du deg den kompetansen som beskrives i læreplanen for faget.',
                'Tilleggstoff er innhold i faget som du kan velge i tillegg til kjernestoffet. Gjennom tilleggsstoffet kan du fordype deg i et emne eller tilnærme deg emnet på en annen måte.',
              ],
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
