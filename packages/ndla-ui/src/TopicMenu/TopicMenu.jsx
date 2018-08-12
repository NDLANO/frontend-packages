/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

// Can be removed when updating to jsx-a11y 6.x
/* eslint jsx-a11y/no-noninteractive-element-to-interactive-role: 1 */

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { getCurrentBreakpoint, breakpoints, noScroll } from 'ndla-util';
import debounce from 'lodash/debounce';

import { Home, Back, Additional } from 'ndla-icons/common';
import { Cross } from 'ndla-icons/action';
import { Button, SafeLink, Tooltip } from 'ndla-ui';
import SubtopicLinkList from './SubtopicLinkList';
import { TopicShape } from '../shapes';

import { OpenSearchButton } from '../Search';
import Logo from '../Logo';
import { FilterList } from '../Filter';

const classes = new BEMHelper({
  name: 'topic-menu',
  prefix: 'c-',
});

export const renderAdditionalIcon = (isAdditional, label) => {
  if (isAdditional && label) {
    return (
      <Tooltip
        tooltip={label}
        tooltipContainerClass="c-topic-menu__tooltipContainer">
        <Additional className="c-icon--20" />
      </Tooltip>
    );
  } else if (isAdditional) {
    return <Additional className="c-icon--20 c-topic-menu__tooltipContainer" />;
  }
  return null;
};

export default class TopicMenu extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleBtnKeyPress = this.handleBtnKeyPress.bind(this);
    this.handleSubtopicExpand = this.handleSubtopicExpand.bind(this);
    this.handleOnGoBack = this.handleOnGoBack.bind(this);
    this.setScreenSize = this.setScreenSize.bind(this);
    this.setScreenSizeDebounced = debounce(() => this.setScreenSize(false), 50);

    this.state = {
      isNarrowScreen: false,
      competenceGoalsOpen: false,
    };
  }

  componentDidMount() {
    noScroll(true);
    this.setScreenSize(true);
    window.addEventListener('resize', this.setScreenSizeDebounced);
  }

  componentWillUnmount() {
    noScroll(false);
    window.removeEventListener('resize', this.setScreenSizeDebounced);
  }

  setScreenSize(initial = false) {
    const currentBreakpoint = getCurrentBreakpoint();
    const isNarrowScreen =
      currentBreakpoint === breakpoints.mobile ||
      currentBreakpoint === breakpoints.tablet ||
      currentBreakpoint === 'none';

    /* eslint react/no-did-mount-set-state: 0 */
    if ((initial && isNarrowScreen) || !initial) {
      this.setState({
        isNarrowScreen,
      });
    }
    /* eslint react/no-did-mount-set-state: 1 */
  }

  handleClick(event, topicId) {
    this.props.onNavigate(topicId, null);
  }

  handleSubtopicExpand(subtopicId, index) {
    this.props.onNavigate(this.props.expandedTopicId, subtopicId, index);
  }

  handleOnGoBack() {
    this.props.onNavigate(
      this.props.expandedSubtopicsId.length ? this.props.expandedTopicId : null,
      null,
    );
  }

  handleBtnKeyPress(event, topicId) {
    if (event.charCode === 32 || event.charCode === 13) {
      // space or enter
      event.preventDefault();
      this.props.onNavigate(topicId, null);
    }
  }

  render() {
    const {
      topics,
      toTopic,
      subjectTitle,
      toSubject,
      close: closeMenu,
      messages,
      expandedTopicId,
      expandedSubtopicsId,
      filterOptions,
      filterValues,
      onFilterClick,
      resourceToLinkProps,
      hideSearch,
      competenceGoals,
      searchPageUrl,
      onOpenSearch,
    } = this.props;
    const { competenceGoalsOpen } = this.state;
    const expandedTopic = topics.find(topic => topic.id === expandedTopicId);

    const currentlyExpandedSubTopics = [];
    if (expandedTopic) {
      let currentSubtopic;
      let foundMatch;
      expandedSubtopicsId.forEach((id, index) => {
        if (index === 0) {
          currentSubtopic = expandedTopic.subtopics.find(
            topic => topic.id === id,
          );
          foundMatch = currentSubtopic ? 0 : undefined;
        } else {
          currentSubtopic = currentSubtopic.subtopics.find(
            topic => topic.id === id,
          );
          foundMatch += currentSubtopic ? 1 : 0;
        }
        if (foundMatch === index) {
          currentlyExpandedSubTopics[index] = currentSubtopic;
        }
      });
    }

    const hasExpandedSubtopics = currentlyExpandedSubTopics.length > 0;
    const subTopicModifiers = ['sub-topic'];

    if (!hasExpandedSubtopics) {
      subTopicModifiers.push('no-border');
    }

    const disableMain = this.state.isNarrowScreen && expandedTopic;
    const disableSubTopic = disableMain && hasExpandedSubtopics;
    const disableHeaderNavigation =
      this.state.isNarrowScreen && competenceGoalsOpen;

    const subTopicLinkListMessages = {
      backButton: messages.back,
      goToLabel: messages.goTo,
      contentTypeResultsShowMore: messages.contentTypeResultsShowMore,
      contentTypeResultsShowLess: messages.contentTypeResultsShowLess,
      learningResourcesHeading: messages.learningResourcesHeading,
      contentTypeResultsNoHit: messages.contentTypeResultsNoHit,
      additionalFilterLabel: messages.additionalFilterLabel,
      additionalFilterTooltipLabel: messages.additionalFilterTooltipLabel,
      additionalTooltipLabel: messages.additionalTooltipLabel,
      coreAdditionalExplainationHeading:
        messages.coreAdditionalExplainationHeading,
      coreAdditionalExplainationTexts: messages.coreAdditionalExplainationTexts,
    };

    return (
      <nav {...classes('', '', 'o-wrapper u-1/1')}>
        <div {...classes('masthead')}>
          <div {...classes('masthead-left')}>
            <button
              type="button"
              {...classes('close-button')}
              onClick={closeMenu}>
              <Cross />
              <span>{messages.closeButton}</span>
            </button>
          </div>
          <div {...classes('masthead-right')}>
            {!hideSearch && (
              <OpenSearchButton
                onOpen={onOpenSearch}
                searchPageUrl={searchPageUrl}
                narrow
                messages={{
                  buttonText: messages.search,
                }}
              />
            )}
            <Logo
              to="#"
              label="Nasjonal digital læringsarena"
              isBeta={this.props.isBeta}
            />
          </div>
        </div>
        <div {...classes('dropdown')}>
          <div {...classes('content')}>
            {!disableMain && (
              <Fragment>
                {!disableHeaderNavigation && (
                  <div {...classes('back')}>
                    <SafeLink {...classes('back-link')} to="/">
                      <Home {...classes('home-icon', '', 'c-icon--20')} />
                      {messages.subjectOverview}
                    </SafeLink>
                  </div>
                )}
                {!disableHeaderNavigation && (
                  <div
                    {...classes('subject', {
                      hasFilter:
                        filterOptions &&
                        filterOptions.length > 0 &&
                        !competenceGoalsOpen,
                    })}>
                    <div {...classes('subject__header')}>
                      <h1>
                        <SafeLink to={toSubject()}>{subjectTitle}</SafeLink>
                      </h1>
                      {competenceGoals && (
                        <Button
                          className={
                            classes('competence-toggle-button').className
                          }
                          stripped
                          onClick={() =>
                            this.setState({
                              competenceGoalsOpen: !competenceGoalsOpen,
                            })
                          }>
                          {competenceGoalsOpen ? (
                            <span>
                              {messages.competenceGoalsToggleButtonClose}{' '}
                              <Cross />
                            </span>
                          ) : (
                            messages.competenceGoalsToggleButtonOpen
                          )}
                        </Button>
                      )}
                    </div>

                    {!competenceGoalsOpen &&
                      filterOptions &&
                      filterOptions.length > 0 && (
                        <FilterList
                          options={filterOptions}
                          values={filterValues}
                          onChange={onFilterClick}
                        />
                      )}
                    {!competenceGoalsOpen && (
                      <div {...classes('back-button-slide-wrapper')}>
                        <button
                          {...classes(
                            'back-button-slides',
                            `slide-${currentlyExpandedSubTopics.length}`,
                          )}
                          onClick={this.handleOnGoBack}>
                          <Back /> <span>{messages.back}</span>
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </Fragment>
            )}
            {competenceGoalsOpen && (
              <div {...classes('competence')}>
                <button
                  {...classes('competence-close-button')}
                  onClick={() =>
                    this.setState({
                      competenceGoalsOpen: false,
                    })
                  }>
                  <Back />
                  {messages.competenceGoalsNarrowBackButton}
                </button>
                {competenceGoals}
              </div>
            )}
            {!competenceGoalsOpen && (
              <div
                {...classes(
                  'subject-navigation',
                  `slide-${currentlyExpandedSubTopics.length}`,
                )}>
                {!disableMain && (
                  <Fragment>
                    <div {...classes('section', 'main')}>
                      <SafeLink
                        to={toSubject()}
                        className={classes('link', 'big').className}>
                        <span {...classes('link-label')}>{messages.goTo}:</span>
                        <span {...classes('link-target')}>
                          {messages.subjectPage} ›
                        </span>
                      </SafeLink>
                      <ul {...classes('list')}>
                        {topics.map(topic => {
                          const active = topic.id === expandedTopicId;

                          return (
                            <li
                              {...classes('topic-item', active && 'active')}
                              key={topic.id}>
                              {renderAdditionalIcon(
                                topic.additional,
                                messages.additionalTooltipLabel,
                              )}
                              <button
                                type="button"
                                {...classes('link')}
                                onClick={event =>
                                  this.handleClick(event, topic.id)
                                }
                                onKeyPress={event =>
                                  this.handleBtnKeyPress(event, topic.id)
                                }>
                                {topic.name}
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </Fragment>
                )}
                {expandedTopic &&
                  !disableSubTopic && (
                    <SubtopicLinkList
                      classes={classes}
                      className={
                        classes('section', subTopicModifiers).className
                      }
                      closeMenu={closeMenu}
                      topic={expandedTopic}
                      messages={subTopicLinkListMessages}
                      goToTitle={messages.goTo}
                      toTopic={toTopic}
                      expandedSubtopicId={
                        currentlyExpandedSubTopics[0] &&
                        currentlyExpandedSubTopics[0].id
                      }
                      onSubtopicExpand={id => {
                        this.handleSubtopicExpand(id, 0);
                      }}
                      onGoBack={this.handleOnGoBack}
                      resourceToLinkProps={resourceToLinkProps}
                    />
                  )}
                {currentlyExpandedSubTopics.map((subTopic, index) => (
                  <SubtopicLinkList
                    key={subTopic.id}
                    classes={classes}
                    className={
                      classes('section', ['sub-topic', 'no-border']).className
                    }
                    closeMenu={closeMenu}
                    topic={subTopic}
                    messages={subTopicLinkListMessages}
                    toTopic={toTopic}
                    expandedSubtopicId={
                      currentlyExpandedSubTopics[index + 1]
                        ? currentlyExpandedSubTopics[index + 1].id
                        : 'no way'
                    }
                    onSubtopicExpand={id => {
                      this.handleSubtopicExpand(id, index + 1);
                    }}
                    onGoBack={this.handleOnGoBack}
                    resourceToLinkProps={resourceToLinkProps}
                  />
                ))}
                {!disableMain &&
                  competenceGoals && (
                    <button
                      {...classes('competence-open-button')}
                      onClick={() =>
                        this.setState({
                          competenceGoalsOpen: true,
                        })
                      }>
                      {messages.competenceGoalsNarrowOpenButton}
                    </button>
                  )}
              </div>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

TopicMenu.propTypes = {
  topics: PropTypes.arrayOf(TopicShape).isRequired,
  toTopic: PropTypes.func.isRequired,
  toSubject: PropTypes.func.isRequired,
  close: PropTypes.func,
  messages: PropTypes.shape({
    competenceGoalsToggleButtonOpen: PropTypes.string.isRequired,
    competenceGoalsToggleButtonClose: PropTypes.string.isRequired,
    competenceGoalsNarrowOpenButton: PropTypes.string.isRequired,
    competenceGoalsNarrowBackButton: PropTypes.string.isRequired,
    closeButton: PropTypes.string.isRequired,
    goTo: PropTypes.string.isRequired,
    subjectOverview: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    subjectPage: PropTypes.string.isRequired,
    learningResourcesHeading: PropTypes.string.isRequired,
    back: PropTypes.string.isRequired,
    contentTypeResultsShowMore: PropTypes.string.isRequired,
    contentTypeResultsShowLess: PropTypes.string.isRequired,
    contentTypeResultsNoHit: PropTypes.string.isRequired,
    additionalTooltipLabel: PropTypes.string,
  }).isRequired,
  filterOptions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ),
  onFilterClick: PropTypes.func,
  filterValues: PropTypes.arrayOf(PropTypes.string),
  subjectTitle: PropTypes.string.isRequired,
  onOpenSearch: PropTypes.func.isRequired,
  searchPageUrl: PropTypes.string.isRequired,
  resourceToLinkProps: PropTypes.func.isRequired,
  onNavigate: PropTypes.func.isRequired,
  expandedTopicId: PropTypes.string,
  // expandedSubtopicId: PropTypes.string,
  // expandedSubtopicLevel2Id: PropTypes.string,
  expandedSubtopicsId: PropTypes.arrayOf(PropTypes.string).isRequired,
  isBeta: PropTypes.bool,
  hideSearch: PropTypes.bool,
  competenceGoals: PropTypes.node,
};
