/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import {
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
  SafeLink,
} from 'ndla-ui';

import {
  topicMenu,
  subjectList,
  topicList,
  contentTypeResults,
} from '../../dummydata';

export const MastheadWithLogo = () => (
  <Masthead fixed>
    <MastheadItem right>
      <Logo to="#" altText="Nasjonal digital læringsarena" />
    </MastheadItem>
  </Masthead>
);

const messages = {
  closeButton: 'Lukk',
  goTo: 'Gå til',
  subjectOverview: 'Fagoversikt',
  search: 'Søk',
  subjectPage: 'Fagforside',
  learningResourcesHeading: 'Læringsressurser',
  back: 'Tilbake',
  contentTypeResultsShowMore: 'Vis mer',
  contentTypeResultsNoHit: 'Ingen ressurser',
};

class MastheadWithTopicMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      menuIsOpen: false,
      searchIsOpen: this.props.searchFieldExpanded,
      expandedTopicId: null,
      expandedSubtopicId: null,
    };
  }

  render() {
    const searchFieldResults =
      this.state.value.length > 1 ? contentTypeResults : null;

    let searchButtonView = null;

    if (!this.props.hideSearchButton) {
      searchButtonView = (
        <ToggleSearchButton
          isOpen={this.state.searchIsOpen}
          onToggle={isOpen => {
            this.setState({
              searchIsOpen: isOpen,
            });
          }}
          searchPageUrl="#"
          messages={{ buttonText: 'Søk' }}>
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
                allResultButtonText: 'Vis alle søketreff',
                searchFieldTitle: 'Søk',
                searchResultHeading: 'Forslag:',
                contentTypeResultNoHit: 'Ingen treff',
              }}
              allResultUrl="#"
              searchResult={searchFieldResults}
            />
          </SearchOverlay>
        </ToggleSearchButton>
      );
    }

    return (
      <Masthead
        fixed
        hideOnNarrowScreen={this.props.hideOnNarrowScreen}
        infoContent={this.props.beta && this.props.betaInfoContent}>
        <MastheadItem left>
          <ClickToggle
            isOpen={this.state.menuIsOpen}
            onToggle={isOpen => {
              this.setState({
                menuIsOpen: isOpen,
                expandedTopicId: null,
                expandedSubtopicId: null,
              });
            }}
            title="Meny"
            openTitle="Lukk"
            className="c-topic-menu-container"
            buttonClassName="c-btn c-button--outline c-topic-menu-toggle-button">
            <TopicMenu
              isBeta={this.props.beta}
              subjectTitle="Mediefag"
              toSubject={() => '#'}
              toTopic={() => '#'}
              withSearchAndFilter
              topics={topicMenu}
              messages={messages}
              onOpenSearch={() => {
                this.setState({
                  menuIsOpen: false,
                  searchIsOpen: true,
                });
              }}
              filterOptions={[
                {
                  title: 'Medieuttrykk',
                  value: 'Medieuttrykk',
                },
                {
                  title: 'Mediesamfunnet',
                  value: 'Mediesamfunnet',
                },
              ]}
              filterValues={['Medieuttrykk']}
              searchPageUrl="#"
              expandedTopicId={this.state.expandedTopicId}
              expandedSubtopicId={this.state.expandedSubtopicId}
              onNavigate={(expandedTopicId, expandedSubtopicId) => {
                this.setState({
                  expandedTopicId,
                  expandedSubtopicId,
                });
              }}
            />
          </ClickToggle>
          <DisplayOnPageYOffset yOffsetMin={150}>
            <BreadcrumbBlock
              subject={subjectList[1]}
              topicPath={topicList.slice(0, 2)}
              toTopic={() => '#'}
            />
          </DisplayOnPageYOffset>
        </MastheadItem>
        <MastheadItem right>
          {searchButtonView}
          <Logo
            to="#"
            altText="Nasjonal digital læringsarena"
            isBeta={this.props.beta}
          />
        </MastheadItem>
      </Masthead>
    );
  }
}

MastheadWithTopicMenu.propTypes = {
  searchFieldExpanded: PropTypes.bool,
  hideOnNarrowScreen: PropTypes.bool,
  hideSearchButton: PropTypes.bool,
  beta: PropTypes.bool,
  betaInfoContent: PropTypes.node,
};

MastheadWithTopicMenu.defaultProps = {
  searchFieldExpanded: false,
  betaInfoContent: (
    <Fragment>
      <span>Du tester nå de nye nettsidene.</span>{' '}
      <SafeLink to="#">Les mer om nye NDLA.no</SafeLink>
    </Fragment>
  ),
};

export { MastheadWithTopicMenu };

export default MastheadWithTopicMenu;
