/* eslint-disable  */
/* @todo: fix onClick handling on <li> */
/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* eslint jsx-a11y/no-static-element-interactions: 1 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import SafeLink from '../common/SafeLink';
import SubtopicLinkList from './SubtopicLinkList';
import { TopicShape } from '../shapes';
import { FilterList } from '../';
import { Search, Home } from '../icons';

const classes = new BEMHelper({
  name: 'topic-menu',
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
              <Search />
            </div>
            Søk
          </div>
          <FilterList
            filterContent={[
            { title: 'VG1', active: true },
            { title: 'VG2', active: true },
            ]}
          />
          <div {...classes('right-filler')} />
        </div>
        <ul {...classes('list', null, classes('left').className)}>
          <li {...classes('back')}>
            <SafeLink {...classes('back-link')} to="/"><Home {...classes('home-icon', '', 'c-icon--20')} />Fagoversikt</SafeLink>
          </li>
          <li {...classes('subject')} >
            <SafeLink to={toSubject}>{ subject }</SafeLink>
          </li>
          { topics.map(topic =>
            (<li {...classes('topic-item', topic.id === expandedTopicId && 'active')} onClick={() => this.handleMouseClick(topic.id)} key={topic.id}>
              <SafeLink onClick={() => this.handleMouseClick(topic.id)} {...classes('link')} to={() => null}>{ topic.name }</SafeLink>
              { topic.id === expandedTopicId && window.innerWidth < 700 ?
                <SubtopicLinkList
                  classes={classes}
                  className={classes('right').className}
                  closeMenu={closeMenu}
                  topic={expandedTopic}
                  toTopic={toTopic}
                /> : null }
            </li>),
          ) }
        </ul>
        { expandedTopic && window.innerWidth > 700 ?
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
