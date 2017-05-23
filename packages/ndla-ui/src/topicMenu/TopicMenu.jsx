/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import SafeLink from '../common/SafeLink';
import SubtopicLinkList from './SubtopicLinkList';
import { TopicShape } from '../shapes';
import Icon from '../icons/Icon';

const classes = new BEMHelper({
  name: 'topic-menu',
  prefix: 'c-',
});
const filterClasses = new BEMHelper({
  name: 'filter',
  prefix: 'c-',
});

export default class TopicMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expandedTopicId: undefined,
    };

    this.closeCallback = null;
    this.handleMouseClick = this.handleMouseClick.bind(this);
  }

  componentWillUnmount() {
    if (this.closeCallback) {
      clearTimeout(this.closeCallback);
    }
  }

  handleMouseClick(topicId) {
    if (this.closeCallback) {
      clearTimeout(this.closeCallback);
      this.closeCallback = null;
    }
    this.setState({ expandedTopicId: topicId });
  }

  render() {
    const { topics, toTopic, subject, toSubject, close: closeMenu } = this.props;
    const { expandedTopicId } = this.state;
    const expandedTopic = topics.find(topic => topic.id === expandedTopicId);
    return (
      <div {...classes('dropdown', null, 'o-wrapper u-1/1')}>
        <div {...classes('masthead')}>
          <div {...classes('search')}>
            <div {...classes('search-icon')}>
              <Icon.Search />
            </div>
            Søk
          </div>
          <ul {...filterClasses('list')}>
            <li {...filterClasses('label')}>FILTER:</li>
            <li {...filterClasses('item')}>1T</li>
            <li {...filterClasses('item')}>R1</li>
            <li {...filterClasses('item')}>R2</li>
            <li {...filterClasses('item')}>S1</li>
            <li {...filterClasses('item')}>S2</li>
          </ul>
          <div {...classes('right-filler')} />
        </div>
        <ul {...classes('list', null, classes('left').className)}>
          <li {...classes('subject')} >
            <SafeLink to={toSubject}>{ subject }</SafeLink>
          </li>
          { topics.map(topic =>
            (<li {...classes('topic-item', topic.id === expandedTopicId && 'active')} onClick={() => this.handleMouseClick(topic.id)} key={topic.id}>
              <SafeLink {...classes('link')} to={toTopic(topic.id)}>{ topic.name }</SafeLink>
            </li>),
          ) }
        </ul>
        { expandedTopic ?
          <SubtopicLinkList
            classes={classes}
            className={classes('right').className}
            closeMenu={closeMenu}
            topic={expandedTopic}
            toTopic={toTopic}
          /> : null}
      </div>
    );
  }
}

TopicMenu.propTypes = {
  topics: PropTypes.arrayOf(TopicShape).isRequired,
  toTopic: PropTypes.func.isRequired,
  toSubject: PropTypes.string,
  close: PropTypes.func,
  delay: PropTypes.number,
  subject: PropTypes.string,
  subjectId: PropTypes.string,
};

TopicMenu.defaultProps = {
  delay: 500,
};
