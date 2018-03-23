/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import SafeLink from '../common/SafeLink';
import { TopicShape, ShortcutShape } from '../shapes';
import TopicIntroductionShortcuts from './TopicIntroductionShortcuts';

const topicClasses = new BEMHelper({
  prefix: 'c-',
  name: 'topic-introduction',
  outputIsString: true,
});

const TopicIntroduction = ({ toTopic, topic, subjectPage, shortcuts }) => (
  <li className={topicClasses('item', { subjectPage })}>
    <article className={topicClasses('body')}>
      <h1 className={topicClasses('header')}>
        <SafeLink to={toTopic(topic.id)}>{topic.name}</SafeLink>
      </h1>
      {/* Since topic introduction is already escaped from the api
        we run into a double escaping issues as React escapes all strings.
        Use dangerouslySetInnerHTML to circumvent the issue */}
      <p dangerouslySetInnerHTML={{ __html: topic.introduction }} />
      {shortcuts && <TopicIntroductionShortcuts shortcuts={shortcuts} />}
    </article>
  </li>
);

TopicIntroduction.propTypes = {
  topic: TopicShape.isRequired,
  toTopic: PropTypes.func.isRequired,
  subjectPage: PropTypes.bool,
  shortcuts: PropTypes.arrayOf(ShortcutShape),
  twoColumns: PropTypes.bool,
};

const TopicIntroductionList = ({ topics, twoColumns, ...rest }) => (
  <ul className={topicClasses('list', { twoColumns })}>
    {topics.map(topic => {
      const { shortcuts } = topic;
      return (
        <TopicIntroduction
          key={topic.id}
          {...rest}
          topic={topic}
          shortcuts={shortcuts}
        />
      );
    })}
  </ul>
);

TopicIntroductionList.propTypes = {
  toTopic: PropTypes.func.isRequired,
  topics: PropTypes.arrayOf(TopicShape).isRequired,
  twoColumns: PropTypes.bool,
};

TopicIntroductionList.defaultProps = {
  twoColumns: false,
};

export default TopicIntroductionList;
