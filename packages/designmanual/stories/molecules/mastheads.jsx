/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
  searchFieldSearchResults,
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
    const searchFieldResults =
      this.state.value.length > 1 ? searchFieldSearchResults : null;

    let searchButtonView = null;

    if (!this.props.hideSearchButton) {
      searchButtonView = (
        <ToggleSearchButton
          searchPageUrl="#"
          messages={{ buttonText: 'Søk' }}
          expanded={this.props.searchFieldExpanded}>
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
                { value: 'Value', title: 'Medieuttrykk og mediesamfunn' },
              ]}
              onFilterRemove={() => {}}
              messages={{
                allContentTypeResultLabel: 'Se alle',
                allResultLabel: 'Se alle søkeresultat for:',
              }}
              allResultUrl="#"
              searchResult={searchFieldResults}
            />
          </SearchOverlay>
        </ToggleSearchButton>
      );
    }

    return (
      <Masthead fixed hideOnNarrowScreen={this.props.hideOnNarrowScreen}>
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
          {searchButtonView}
          <Logo to="#" altText="Nasjonal digital læringsarena" />
        </MastheadItem>
      </Masthead>
    );
  }
}

MastheadWithTopicMenu.propTypes = {
  searchFieldExpanded: PropTypes.bool,
  hideOnNarrowScreen: PropTypes.bool,
  hideSearchButton: PropTypes.bool,
};

MastheadWithTopicMenu.defaultProps = {
  searchFieldExpanded: false,
};

export { MastheadWithTopicMenu };

export default MastheadWithTopicMenu;
