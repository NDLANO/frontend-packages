/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import _ from 'lodash';

import {
  Masthead,
  MastheadItem,
  LanguageSelector,
  Logo,
  TopicMenu,
  DisplayOnPageYOffset,
  SearchField,
  SearchResultSleeve,
  MastheadSearchModal,
  TopicMenuButton,
  SearchFieldForm,
  HeaderBreadcrumb,
} from '@ndla/ui';
import Modal from '@ndla/modal';
import SafeLink from '@ndla/safelink';
import styled from '@emotion/styled';
import { breakpoints, mq } from '@ndla/core';
import { contentTypeResults, dummyLanguageOptions } from '../../dummydata';
import MastHeadAuthModal from './MastHeadAuthModal';
import { programmes, programme, subjectCategories, topics } from '../../dummydata/mockPrograms';
import { feideUserLaerer } from './feideUser';

const BreadcrumbWrapper = styled.div`
  ${mq.range({ until: breakpoints.tablet })} {
    display: none;
  }
`;

export const MastheadWithLogo = ({ skipToMainContentId }) => (
  <Masthead fixed skipToMainContentId={skipToMainContentId}>
    <MastheadItem right>
      <Logo to="#" label="Nasjonal digital læringsarena" />
    </MastheadItem>
  </Masthead>
);

class MastheadWithTopicMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      expandedTopicId: null,
      expandedSubtopicsId: [],
    };
    this.inputRef = createRef();
    this.closeAllModals = [null, null];
  }

  renderSearchField() {
    const filters = [];
    if (!this.props.hideMenuButton) {
      filters.push({
        value: 'Value',
        title: this.props.ndlaFilm ? 'NDLA Film' : 'Medieuttrykk og mediesamfunnet',
      });
    }
    return (
      <SearchFieldForm onSubmit={(e) => e.preventDefault()}>
        <SearchField
          inputRef={this.inputRef}
          placeholder={this.props.t('searchPage.searchFieldPlaceholder')}
          value={this.state.value}
          onChange={(value) => {
            this.setState({
              value,
            });
          }}
          filters={filters}
          onFilterRemove={() => {}}
          messages={{
            searchFieldTitle: 'Søk',
          }}
          onNavigate={() => {
            try {
              this.closeAllModals[1]();
            } catch (e) {
              console.log('no search modal to close'); // eslint-disable-line no-console
            }
            try {
              this.closeAllModals[0]();
            } catch (e) {
              console.log('no menu modal to close'); // eslint-disable-line no-console
            }
          }}
        />
        {this.state.value.length > 2 && (
          <SearchResultSleeve
            result={contentTypeResults}
            searchString={this.state.value}
            allResultUrl={'#'}
            resourceToLinkProps={(resource) => ({ to: resource.path })}
          />
        )}
      </SearchFieldForm>
    );
  }

  renderSearchButtonView = (hideOnNarrowScreen, ndlaFilm) => {
    if (this.props.hideSearchButton) {
      return null;
    }
    return (
      <MastheadSearchModal
        ndlaFilm={ndlaFilm}
        hideOnNarrowScreen={hideOnNarrowScreen}
        onClose={() => {
          this.setState({ value: '' });
          this.closeAllModals[1] = null;
        }}>
        {this.renderSearchField()}
      </MastheadSearchModal>
    );
  };

  render() {
    const {
      skipToMainContentId,
      ndlaFilm,
      beta,
      betaInfoContent,
      topicMenuProps,
      hideMenuButton,
      breadcrumbItems,
      isAuthed,
      menuProps,
      t,
      i18n,
      messages,
    } = this.props;

    const authedProps = isAuthed
      ? {
          isAuthenticated: true,
          ...feideUserLaerer,
          onAuthenticateClick: () => {},
        }
      : {
          onAuthenticateClick: () => {},
        };

    const initialSelectedMenu = () => {
      if (menuProps.hideSubject && menuProps.hideCurrentProgramme) {
        return 'programmes';
      }
      if (menuProps.hideSubject) {
        return 'programme';
      }
      return null;
    };

    const remapTopicProps = (value) => {
      if (value.label) {
        value.name = value.label;
        if (value.subTopics) {
          value.subtopics = value.subTopics;
        }
      }
    };

    // must add props to topic object that matches the TopicMenu component
    const topicMenuValues = _.cloneDeepWith(topics, remapTopicProps);

    return (
      <Masthead
        fixed
        skipToMainContentId={skipToMainContentId}
        ndlaFilm={ndlaFilm}
        infoContent={beta && betaInfoContent}
        messages={messages}>
        <MastheadItem left>
          {!hideMenuButton && (
            <Modal
              size="fullscreen"
              activateButton={<TopicMenuButton ndlaFilm={ndlaFilm}>{t('masthead.menu.title')}</TopicMenuButton>}
              animation="subtle"
              animationDuration={150}
              backgroundColor="grey"
              noBackdrop
              onClose={() => {
                this.setState({
                  expandedTopicId: null,
                  expandedSubtopicsId: [],
                });
                this.closeAllModals[0] = null;
              }}>
              {(onClose) => {
                this.closeAllModals[0] = onClose;
                return (
                  <TopicMenu
                    close={onClose}
                    searchFieldComponent={this.renderSearchButtonView(false, ndlaFilm)}
                    subjectTitle={menuProps.hideSubject ? '' : 'Forretningsdrift (SR Vg1)'}
                    toFrontpage={() => ''}
                    toSubject={() => '#'}
                    toTopic={() => '#'}
                    programmes={programmes}
                    subjectCategories={subjectCategories}
                    currentProgramme={
                      menuProps.hideCurrentProgramme
                        ? null
                        : {
                            name: programme.label,
                            grades: programme.grades,
                            selectedGradeIndex: 0,
                          }
                    }
                    topics={topicMenuValues}
                    initialSelectedMenu={initialSelectedMenu()}
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
                    onFilterClick={(values) => {
                      this.setState({
                        filterMenuValues: values,
                      });
                    }}
                    resourceToLinkProps={(resource) => ({ to: resource.path })}
                    expandedTopicId={this.state.expandedTopicId}
                    expandedSubtopicsId={this.state.expandedSubtopicsId}
                    onNavigate={(expandedTopicId, subtopicId, currentIndex) => {
                      let { expandedSubtopicsId } = this.state;
                      if (expandedSubtopicsId.length > currentIndex) {
                        expandedSubtopicsId = expandedSubtopicsId.slice(0, currentIndex);
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
                    {...topicMenuProps}
                  />
                );
              }}
            </Modal>
          )}
          {breadcrumbItems && (
            <DisplayOnPageYOffset yOffsetMin={150}>
              <BreadcrumbWrapper>
                <HeaderBreadcrumb items={breadcrumbItems} />
              </BreadcrumbWrapper>
            </DisplayOnPageYOffset>
          )}
        </MastheadItem>
        <MastheadItem right>
          <DisplayOnPageYOffset yOffsetMin={0} yOffsetMax={150}>
            <LanguageSelector inverted={ndlaFilm} options={dummyLanguageOptions} currentLanguage={i18n.language} />
          </DisplayOnPageYOffset>
          <MastHeadAuthModal inverted={ndlaFilm} {...authedProps} />
          {this.renderSearchButtonView(true, ndlaFilm)}
          <Logo
            to="?selectedKind=Emnesider&selectedStory=1.%20Fagoversikt&full=0&addons=0&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel"
            label="Nasjonal digital læringsarena"
            isBeta={beta}
            cssModifier={ndlaFilm && 'white'}
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
  hideMenuButton: PropTypes.bool,
  beta: PropTypes.bool,
  betaInfoContent: PropTypes.node,
  topicMenuProps: PropTypes.object,
  t: PropTypes.func.isRequired,
  ndlaFilm: PropTypes.bool,
  skipToMainContentId: PropTypes.string,
  breadcrumbItems: PropTypes.array,
  isAuthed: PropTypes.bool,
  menuProps: PropTypes.shape({
    hideSubject: PropTypes.bool,
    hideCurrentProgramme: PropTypes.bool,
  }),
  messages: PropTypes.arrayOf(PropTypes.string),
};

MastheadWithTopicMenu.defaultProps = {
  searchFieldExpanded: false,
  betaInfoContent: (
    <>
      <span>Du tester nå de nye nettsidene.</span> <SafeLink to="#">Les mer om nye NDLA.no</SafeLink>
    </>
  ),
  menuProps: {},
};

export default withTranslation()(MastheadWithTopicMenu);
