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
import { getCurrentBreakpoint, breakpoints } from 'ndla-util';
import debounce from 'lodash/debounce';

import { Home } from 'ndla-icons/common';
import { Cross } from 'ndla-icons/action';

import SafeLink from '../common/SafeLink';
import SubtopicLinkList from './SubtopicLinkList';
import { TopicShape } from '../shapes';

import { OpenSearchButton } from '../Search';
import Logo from '../Logo';
import { FilterList } from '../Filter';

const classes = new BEMHelper({
  name: 'topic-menu',
  prefix: 'c-',
});

export default class TopicMenu extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleBtnKeyPress = this.handleBtnKeyPress.bind(this);
    this.handleSubtopicExpand = this.handleSubtopicExpand.bind(this);
    this.handleOnGoBack = this.handleOnGoBack.bind(this);
    this.setScreenSize = this.setScreenSize.bind(this);
    this.setScreenSizeDebounced = debounce(
      () => this.setScreenSize(false),
      100,
    );

    this.state = {
      isNarrowScreen: false,
    };
  }

  componentDidMount() {
    this.setScreenSize(true);
    window.addEventListener('resize', this.setScreenSizeDebounced);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setScreenSizeDebounced);
  }

  setScreenSize(initial = false) {
    const currentBreakpoint = getCurrentBreakpoint();
    const isNarrowScreen =
      currentBreakpoint === breakpoints.mobile ||
      currentBreakpoint === breakpoints.tablet;

    /* eslint react/no-did-mount-set-state: 0 */
    if ((initial && isNarrowScreen) || !initial) {
      this.setState({
        isNarrowScreen,
      });
    }
    /* eslint react/no-did-mount-set-state: 1 */
  }

  handleClick(event, topicId) {
    this.props.onNavigate(topicId, null, null);
  }

  handleSubtopicExpand(subtopicId, level2 = false) {
    if (level2) {
      this.props.onNavigate(
        this.props.expandedTopicId,
        this.props.expandedSubtopicId,
        subtopicId,
      );
    } else {
      this.props.onNavigate(this.props.expandedTopicId, subtopicId, null);
    }
  }

  handleOnGoBack() {
    if (this.props.expandedSubtopicLevel2Id) {
      this.handleSubtopicExpand(this.props.expandedSubtopicId);
    } else if (this.props.expandedSubtopicId) {
      this.handleSubtopicExpand(null);
    } else {
      this.props.onNavigate(null, null, null);
    }
  }

  handleBtnKeyPress(event, topicId) {
    if (event.charCode === 32 || event.charCode === 13) {
      // space or enter
      event.preventDefault();
      this.props.onNavigate(topicId, null, null);
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
      expandedSubtopicId,
      expandedSubtopicLevel2Id,
      filterOptions,
      filterValues,
      onFilterClick,
      resourceToLinkProps,
      hideSearch,
    } = this.props;
    const expandedTopic = topics.find(topic => topic.id === expandedTopicId);
    let expandedSubtopic = null;
    let expandedSubtopicLevel2 = null;

    if (expandedTopic && expandedSubtopicId) {
      expandedSubtopic = expandedTopic.subtopics.find(
        topic => topic.id === expandedSubtopicId,
      );
    }

    if (expandedSubtopic && expandedSubtopicLevel2Id) {
      expandedSubtopicLevel2 = expandedSubtopic.subtopics.find(
        topic => topic.id === expandedSubtopicLevel2Id,
      );
    }

    const subTopicModifiers = ['sub-topic'];

    if (!expandedSubtopic) {
      subTopicModifiers.push('no-border');
    }

    const disableMain = this.state.isNarrowScreen && expandedTopic;
    const disableSubTopic = disableMain && expandedSubtopic;
    const disableSubTopicLevel2 = disableSubTopic && expandedSubtopicLevel2;

    const subTopicLinkListMessages = {
      backButton: messages.back,
      goToLabel: messages.goTo,
      contentTypeResultsShowMore: messages.contentTypeResultsShowMore,
      contentTypeResultsShowLess: messages.contentTypeResultsShowLess,
      learningResourcesHeading: messages.learningResourcesHeading,
      contentTypeResultsNoHit: messages.contentTypeResultsNoHit,
    };

    return (
      <nav {...classes('dropdown', null, 'o-wrapper u-1/1')}>
        <div {...classes('masthead')}>
          <div {...classes('masthead-left')}>
            <button {...classes('close-button')} onClick={closeMenu}>
              <Cross />
              <span>{messages.closeButton}</span>
            </button>
          </div>
          <div {...classes('masthead-right')}>
            {!hideSearch && (
              <OpenSearchButton
                onOpen={this.props.onOpenSearch}
                searchPageUrl={this.props.searchPageUrl}
                messages={{
                  buttonText: messages.search,
                }}
              />
            )}
            <Logo
              to="#"
              altText="Nasjonal digital læringsarena"
              isBeta={this.props.isBeta}
            />
          </div>
        </div>
        <div {...classes('content')}>
          {!disableMain && (
            <Fragment>
              <div {...classes('back')}>
                <SafeLink {...classes('back-link')} to="/">
                  <Home {...classes('home-icon', '', 'c-icon--20')} />
                  {messages.subjectOverview}
                </SafeLink>
              </div>
              <div
                {...classes('subject', {
                  hasFilter: filterOptions && filterOptions.length > 0,
                })}>
                <h1>
                  <SafeLink to={toSubject()}>{subjectTitle}</SafeLink>
                </h1>
                {filterOptions &&
                  filterOptions.length > 0 && (
                    <FilterList
                      options={filterOptions}
                      values={filterValues}
                      onChange={onFilterClick}
                    />
                  )}
              </div>
            </Fragment>
          )}

          <div {...classes('subject-navigation')}>
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
                          <button
                            {...classes('link')}
                            onClick={event => this.handleClick(event, topic.id)}
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
                  className={classes('section', subTopicModifiers).className}
                  closeMenu={closeMenu}
                  topic={expandedTopic}
                  messages={subTopicLinkListMessages}
                  goToTitle={messages.goTo}
                  toTopic={toTopic}
                  expandedSubtopicId={expandedSubtopicId}
                  onSubtopicExpand={this.handleSubtopicExpand}
                  onGoBack={this.handleOnGoBack}
                  resourceToLinkProps={resourceToLinkProps}
                />
              )}
            {expandedSubtopic &&
              !disableSubTopicLevel2 && (
                <SubtopicLinkList
                  classes={classes}
                  className={
                    classes('section', ['sub-topic', 'no-border']).className
                  }
                  closeMenu={closeMenu}
                  topic={expandedSubtopic}
                  messages={subTopicLinkListMessages}
                  toTopic={toTopic}
                  expandedSubtopicId={expandedSubtopicLevel2Id}
                  onSubtopicExpand={id => {
                    this.handleSubtopicExpand(id, true);
                  }}
                  onGoBack={this.handleOnGoBack}
                  resourceToLinkProps={resourceToLinkProps}
                />
              )}
            {expandedSubtopicLevel2 && (
              <SubtopicLinkList
                classes={classes}
                className={classes('section', ['sub-topic']).className}
                closeMenu={closeMenu}
                topic={expandedSubtopicLevel2}
                messages={subTopicLinkListMessages}
                toTopic={toTopic}
                onGoBack={this.handleOnGoBack}
                resourceToLinkProps={resourceToLinkProps}
              />
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
  expandedSubtopicId: PropTypes.string,
  expandedSubtopicLevel2Id: PropTypes.string,
  isBeta: PropTypes.bool,
  hideSearch: PropTypes.bool,
};
