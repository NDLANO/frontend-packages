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
import SafeLink from '../common/SafeLink';
import SubtopicLinkList from './SubtopicLinkList';
import { TopicShape } from '../shapes';
import FilterList from '../filter/FilterList';
import { Search, Home } from '../icons';

const classes = new BEMHelper({
  name: 'topic-menu',
  prefix: 'c-',
});

const SearchAndFilter = ({ messages }) => (
  <div {...classes('masthead')}>
    <div {...classes('search')}>
      <div {...classes('search-icon')}>
        <Search />
      </div>
      {messages.search}
    </div>
    <FilterList
      filterContent={[
        { title: 'VG1', active: true },
        { title: 'VG2', active: true },
      ]}
    />
    <div {...classes('right-filler')} />
  </div>
);

SearchAndFilter.propTypes = {
  messages: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
};

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

    this.state = {
      expandedTopicId: undefined,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleBtnKeyPress = this.handleBtnKeyPress.bind(this);
  }

  handleClick(event, topicId) {
    this.setState({ expandedTopicId: topicId });
    handleBlur(event.target);
  }

  handleBtnKeyPress(event, topicId) {
    if (event.charCode === 32 || event.charCode === 13) {
      // space or enter
      event.preventDefault();
      this.setState({ expandedTopicId: topicId });
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
      withSearchAndFilter,
    } = this.props;
    const { expandedTopicId } = this.state;
    const expandedTopic = topics.find(topic => topic.id === expandedTopicId);
    return (
      <div {...classes('dropdown', null, 'o-wrapper u-1/1')}>
        {withSearchAndFilter ? (
          <SearchAndFilter messages={messages} />
        ) : (
          <div {...classes('masthead')} />
        )}
        <ul {...classes('list', null, classes('left').className)}>
          <li {...classes('back')}>
            <SafeLink {...classes('back-link')} to="/">
              <Home {...classes('home-icon', '', 'c-icon--20')} />
              {messages.subjectOverview}
            </SafeLink>
          </li>
          <li {...classes('subject')}>
            <SafeLink to={toSubject()}>{subjectTitle}</SafeLink>
          </li>
          {topics.map(topic => (
            <li
              {...classes(
                'topic-item',
                topic.id === expandedTopicId && 'active',
              )}
              onClick={event => this.handleClick(event, topic.id)}
              role="button"
              tabIndex="0"
              onKeyPress={event => this.handleBtnKeyPress(event, topic.id)}
              key={topic.id}>
              <span {...classes('link')}> {topic.name} </span>
              {topic.id === expandedTopicId && window.innerWidth < 700 ? (
                <SubtopicLinkList
                  classes={classes}
                  className={classes('right').className}
                  closeMenu={closeMenu}
                  topic={expandedTopic}
                  goToTitle={messages.goTo}
                  toTopic={toTopic}
                />
              ) : null}
            </li>
          ))}
        </ul>
        {expandedTopic && window.innerWidth > 700 ? (
          <SubtopicLinkList
            classes={classes}
            className={classes('right').className}
            closeMenu={closeMenu}
            topic={expandedTopic}
            goToTitle={messages.goTo}
            toTopic={toTopic}
          />
        ) : null}
      </div>
    );
  }
}

TopicMenu.propTypes = {
  topics: PropTypes.arrayOf(TopicShape).isRequired,
  toTopic: PropTypes.func.isRequired,
  toSubject: PropTypes.func.isRequired,
  close: PropTypes.func,
  withSearchAndFilter: PropTypes.bool,
  messages: PropTypes.shape({
    goTo: PropTypes.string.isRequired,
    subjectOverview: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
  }).isRequired,
  subjectTitle: PropTypes.string.isRequired,
};
