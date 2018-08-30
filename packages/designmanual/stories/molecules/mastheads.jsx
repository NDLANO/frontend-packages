/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { injectT } from 'ndla-i18n';

import {
  Masthead,
  MastheadItem,
  Logo,
  Button,
  TopicMenu,
  DisplayOnPageYOffset,
  SearchField,
  SafeLink,
  Modal,
} from 'ndla-ui';

import { Search } from 'ndla-icons/common';
import { Cross } from 'ndla-icons/action';

import { topicMenu, contentTypeResults } from '../../dummydata';
import { BreadcrumbBlock } from './breadcrumbs';

import CompetenceGoalsExample from '../organisms/CompetenceGoalsExample';

export const MastheadWithLogo = () => (
  <Masthead fixed>
    <MastheadItem right>
      <Logo to="#" label="Nasjonal digital læringsarena" />
    </MastheadItem>
  </Masthead>
);

const classes = BEMHelper({
  prefix: 'c-',
  name: 'toggle-search-button',
  outputIsString: true,
});

const searchFieldClasses = BEMHelper({
  prefix: 'c-',
  name: 'search-field',
});

class MastheadWithTopicMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      expandedTopicId: null,
      expandedSubtopicsId: [],
      filterMenuValues: ['Medieuttrykk'],
    };
    this.searchFieldRef = React.createRef();
  }

  renderSearchField() {
    const searchFieldResults =
      this.state.value.length > 1 ? contentTypeResults : null;

    return (
      <SearchField
        placeholder={this.props.t('searchPage.searchFieldPlaceholder')}
        value={this.state.value}
        onChange={event => {
          this.setState({
            value: event.currentTarget.value,
          });
        }}
        onSearch={e => {
          /* eslint-disable no-console */
          console.log(
            'search for:',
            e.target.getElementsByTagName('input')[0].value,
          );
          e.preventDefault();
        }}
        filters={[{ value: 'Value', title: 'Medieuttrykk og mediesamfunnet' }]}
        onFilterRemove={() => {}}
        messages={{
          searchFieldTitle: 'Søk',
        }}
        allResultUrl="#"
        searchResult={searchFieldResults}
        resourceToLinkProps={() => {}}
      />
    );
  }

  render() {
    let searchButtonView = null;

    if (!this.props.hideSearchButton) {
      searchButtonView = (
        <Modal
          backgroundColor="grey"
          animation="slide-down"
          animationDuration={200}
          size="full-width"
          onOpen={() => {
            this.searchFieldRef.current
              .getElementsByTagName('input')[0]
              .focus();
          }}
          onClose={() => {
            this.setState({ value: '' });
          }}
          className="c-search-field__overlay-content"
          activateButton={
            <button
              type="button"
              className="c-button c-toggle-search-button__button c-toggle-search-button__button--wide">
              <span className={classes('button-text')}>Søk</span>
              <Search />
            </button>
          }>
          {onClose => (
            <Fragment>
              <div className="c-search-field__overlay-top" />
              <div ref={this.searchFieldRef} {...searchFieldClasses('header')}>
                <div {...searchFieldClasses('header-container')}>
                  {this.renderSearchField()}
                  <Button stripped onClick={onClose}>
                    <Cross className="c-icon--medium" />
                  </Button>
                </div>
              </div>
            </Fragment>
          )}
        </Modal>
      );
    }

    return (
      <Masthead
        fixed
        hideOnNarrowScreen={this.props.hideOnNarrowScreen}
        infoContent={this.props.beta && this.props.betaInfoContent}>
        <MastheadItem left>
          <Modal
            size="fullscreen"
            activateButton={
              <Button outline className="c-topic-menu-toggle-button">
                Meny
              </Button>
            }
            animation="subtle"
            animationDuration={150}
            backgroundColor="grey"
            noBackdrop
            onClose={() => {
              this.setState({
                expandedTopicId: null,
                expandedSubtopicsId: [],
              });
            }}>
            {onClose => (
              <TopicMenu
                close={onClose}
                isBeta={this.props.beta}
                searchFieldComponent={searchButtonView}
                subjectTitle="Mediefag"
                toSubject={() => '#'}
                toTopic={() => '#'}
                topics={topicMenu}
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
                filterValues={this.state.filterMenuValues}
                competenceGoals={
                  <CompetenceGoalsExample menu subjectName="Mediefag" /> // Not required.
                }
                onFilterClick={values => {
                  this.setState({
                    filterMenuValues: values,
                  });
                }}
                resourceToLinkProps={() => {}}
                expandedTopicId={this.state.expandedTopicId}
                expandedSubtopicsId={this.state.expandedSubtopicsId}
                onNavigate={(expandedTopicId, subtopicId, currentIndex) => {
                  let { expandedSubtopicsId } = this.state;
                  if (expandedSubtopicsId.length > currentIndex) {
                    expandedSubtopicsId = expandedSubtopicsId.slice(
                      0,
                      currentIndex,
                    );
                  }
                  if (subtopicId) {
                    expandedSubtopicsId.push(subtopicId);
                  } else {
                    expandedSubtopicsId.pop();
                  }
                  this.setState({
                    expandedTopicId,
                    expandedSubtopicsId,
                  });
                }}
              />
            )}
          </Modal>
          <DisplayOnPageYOffset yOffsetMin={150}>
            <BreadcrumbBlock />
          </DisplayOnPageYOffset>
        </MastheadItem>
        <MastheadItem right>
          {searchButtonView}
          <Logo
            to="#"
            label="Nasjonal digital læringsarena"
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
  t: PropTypes.func.isRequired,
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

export default injectT(MastheadWithTopicMenu);
