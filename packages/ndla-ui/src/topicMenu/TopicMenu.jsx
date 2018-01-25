/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

// Can be removed when updating to jsx-a11y 6.x
/* eslint jsx-a11y/no-noninteractive-element-to-interactive-role: 1 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

import { Home } from 'ndla-icons/common';
import SafeLink from '../common/SafeLink';
import SubtopicLinkList from './SubtopicLinkList';
import { TopicShape, ContentTypeResultShape } from '../shapes';

import { OpenSearchButton, ContentTypeResult } from '../Search';
import FilterList from '../filter/FilterList';

const classes = new BEMHelper({
  name: 'topic-menu',
  prefix: 'c-',
});

const handleBlur = target => {
  if (target.nodeName === 'SPAN') {
    target.parentNode.blur();
  } else {
    target.blur();
  }
};

export default class TopicMenu extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleBtnKeyPress = this.handleBtnKeyPress.bind(this);
    this.handleSubtopicExpand = this.handleSubtopicExpand.bind(this);
  }

  handleClick(event, topicId) {
    this.props.onNavigate(topicId, undefined);
    handleBlur(event.target);
  }

  handleSubtopicExpand(subtopicId) {
    this.props.onNavigate(this.props.expandedTopicId, subtopicId);
  }

  handleBtnKeyPress(event, topicId) {
    if (event.charCode === 32 || event.charCode === 13) {
      // space or enter
      event.preventDefault();
      this.props.onNavigate(topicId, undefined);
      handleBlur(event.target);
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
    } = this.props;
    const expandedTopic = topics.find(topic => topic.id === expandedTopicId);
    let expandedSubtopic = null;

    if (expandedTopic && expandedSubtopicId) {
      expandedSubtopic = expandedTopic.subtopics.find(
        topic => topic.id === expandedSubtopicId,
      );
    }
    return (
      <nav {...classes('dropdown', null, 'o-wrapper u-1/1')}>
        <div {...classes('masthead')}>
          <OpenSearchButton
            onOpen={this.props.onOpenSearch}
            searchPageUrl={this.props.searchPageUrl}
            messages={{
              buttonText: messages.search,
            }}
          />
        </div>
        <div {...classes('content')}>
          <div {...classes('back')}>
            <SafeLink {...classes('back-link')} to="/">
              <Home {...classes('home-icon', '', 'c-icon--20')} />
              {messages.subjectOverview}
            </SafeLink>
          </div>
          <div {...classes('subject')}>
            <h1>
              <SafeLink to={toSubject()}>{subjectTitle}</SafeLink>
            </h1>
            {this.props.filterOptions &&
              this.props.filterOptions.length > 0 && (
                <FilterList
                  options={this.props.filterOptions}
                  values={this.props.filterValues}
                />
              )}
          </div>
          <div {...classes('subject-navigation')}>
            <div {...classes('subject-structure')}>
              <div {...classes('left')}>
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
                    const tabIndex = active ? null : 0;

                    return (
                      <li
                        {...classes('topic-item', active && 'active')}
                        key={topic.id}>
                        <button
                          {...classes('link')}
                          tabIndex={tabIndex}
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
              {expandedTopic && (
                <SubtopicLinkList
                  classes={classes}
                  className={
                    classes('left', !expandedSubtopic && 'no-border').className
                  }
                  closeMenu={closeMenu}
                  topic={expandedTopic}
                  goToTitle={messages.goTo}
                  toTopic={toTopic}
                  expandedSubtopicId={expandedSubtopicId}
                  onSubtopicExpand={this.handleSubtopicExpand}
                />
              )}
              {expandedSubtopic && (
                <SubtopicLinkList
                  classes={classes}
                  className={classes('left', 'no-border').className}
                  closeMenu={closeMenu}
                  topic={expandedSubtopic}
                  goToTitle={messages.goTo}
                  toTopic={toTopic}
                />
              )}
            </div>
            {expandedTopic &&
              this.props.contentTypeResults &&
              this.props.contentTypeResults.length > 0 && (
                <aside {...classes('content-type-results')}>
                  <h1>
                    <span>{messages.learningResourcesHeading}</span>{' '}
                    <SafeLink to={toTopic(expandedTopic.id)}>
                      {expandedTopic.name}
                    </SafeLink>
                  </h1>
                  {this.props.contentTypeResults.map(result => (
                    <ContentTypeResult
                      key={result.title}
                      contentTypeResult={result}
                      messages={{ allResultLabel: 'Vis mer' }}
                    />
                  ))}
                </aside>
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
    goTo: PropTypes.string.isRequired,
    subjectOverview: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    subjectPage: PropTypes.string.isRequired,
    learningResourcesHeading: PropTypes.string.isRequired,
  }).isRequired,
  filterOptions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ),
  filterValues: PropTypes.arrayOf(PropTypes.string),
  subjectTitle: PropTypes.string.isRequired,
  onOpenSearch: PropTypes.func.isRequired,
  searchPageUrl: PropTypes.string.isRequired,
  contentTypeResults: PropTypes.arrayOf(ContentTypeResultShape),
  onNavigate: PropTypes.func.isRequired,
  expandedTopicId: PropTypes.string,
  expandedSubtopicId: PropTypes.string,
};
