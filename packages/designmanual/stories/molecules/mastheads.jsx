/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';

import {
  SiteNav,
  Masthead,
  MastheadItem,
  Logo,
  ClickToggle,
  TopicMenu,
  DisplayOnPageYOffset,
  BreadcrumbBlock,
  ToggleSearchButton,
  SearchOverlay,
  SearchField,
} from 'ndla-ui';

import {
  topicMenu,
  subjectList,
  topicList,
  autocompleteData,
} from '../../dummydata';

export const MastheadLeftRight = () => (
  <Masthead>
    <MastheadItem left>Left</MastheadItem>
    <MastheadItem right>Right</MastheadItem>
  </Masthead>
);

export const MastheadWithLogo = () => (
  <Masthead fixed>
    <MastheadItem right>
      <Logo to="#" altText="Nasjonal digital læringsarena" />
    </MastheadItem>
  </Masthead>
);

const messages = {
  goTo: 'Gå til',
  subjectOverview: 'Fagoversikt',
  search: 'Søk',
};

class MastheadWithTopicMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  render() {
    const autocompleteResult =
      this.state.value.length > 1 ? autocompleteData : null;

    return (
      <Masthead fixed>
        <MastheadItem left>
          <SiteNav>
            <ClickToggle
              title="Meny"
              openTitle="Lukk"
              className="c-topic-menu-container"
              buttonClassName="c-btn c-button--outline c-topic-menu-toggle-button">
              <TopicMenu
                subjectTitle="Mediefag"
                toSubject={() => '#'}
                toTopic={() => '#'}
                withSearchAndFilter
                topics={topicMenu}
                messages={messages}
              />
            </ClickToggle>
          </SiteNav>

          <DisplayOnPageYOffset yOffset={150}>
            <BreadcrumbBlock
              subject={subjectList[1]}
              topicPath={topicList.slice(0, 2)}
              toTopic={() => '#'}
            />
          </DisplayOnPageYOffset>
        </MastheadItem>
        <MastheadItem right>
          <ToggleSearchButton messages={{ buttonText: 'Søk' }}>
            <SearchOverlay>
              <SearchField
                placeholder="Søk i fagstoff, oppgaver og aktiviteter eller læringsstier"
                value={this.state.value}
                onChange={event => {
                  this.setState({
                    value: event.currentTarget.value,
                  });
                }}
                filters={[
                  { value: 'Value', display: 'Medieuttrykk og mediesamfunn' },
                ]}
                onFilterRemove={() => {}}
                messages={{
                  allContentTypeResultLabel: 'Se alle',
                  allResultLabel: 'Se alle søkeresultat for:',
                }}
                allResultUrl="#"
                autocompleteResult={autocompleteResult}
              />
            </SearchOverlay>
          </ToggleSearchButton>
          <Logo to="#" altText="Nasjonal digital læringsarena" />
        </MastheadItem>
      </Masthead>
    );
  }
}

export { MastheadWithTopicMenu };

export default MastheadWithTopicMenu;
