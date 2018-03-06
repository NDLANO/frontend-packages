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
import { TopicShape } from '../shapes';
import TopicIntroductionShortcuts from './TopicIntroductionShortcuts';

const classes = new BEMHelper({
  name: 'topic-introduction',
  prefix: 'c-',
});

const TopicIntroduction = ({ toTopic, topic, subjectPage, shortcuts }) => (
  <li {...classes('item', { subjectPage })}>
    <article {...classes('body')}>
      <h1 {...classes('header')}>
        <SafeLink to={toTopic(topic.id)}>{topic.name}</SafeLink>
      </h1>
      <p>{topic.introduction}</p>
      {shortcuts ? (
        <TopicIntroductionShortcuts
          shortcuts={shortcuts}
          key={`${topic.id}-shortcuts`}
        />
      ) : null}
    </article>
  </li>
);

TopicIntroduction.propTypes = {
  topic: TopicShape.isRequired,
  toTopic: PropTypes.func.isRequired,
  subjectPage: PropTypes.bool,
  shortcuts: PropTypes.arrayOf(),
};

const TopicIntroductionList = ({ topics, ...rest }) => (
  <ul {...classes('list')}>
    {topics.map(topic => {
      const shortcuts = topic.shortcuts ? topic.shortcuts : [];
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
  shortcuts: PropTypes.arrayOf(),
};

export default TopicIntroductionList;
