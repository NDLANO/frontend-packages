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

const topicClasses = new BEMHelper({
  prefix: 'c-',
  name: 'topic-introduction',
  outputIsString: true,
});

const twoColumnsClass = new BEMHelper({
  prefix: 'c-',
  name: 'subject-twocolumns',
  outputIsString: true,
});

const TopicIntroduction = ({ toTopic, topic, subjectPage, shortcuts, twoColumns }) => {
  const className = `${(twoColumns ? twoColumnsClass('column') : '')} ${topicClasses('item', { subjectPage })}`;
  return (
    <li className={className}>
      <article className={topicClasses('body')}>
        <h1 className={topicClasses('header')}>
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
}

TopicIntroduction.propTypes = {
  topic: TopicShape.isRequired,
  toTopic: PropTypes.func.isRequired,
  subjectPage: PropTypes.bool,
  shortcuts: PropTypes.arrayOf(),
  twoColumns: PropTypes.bool,
};

const TopicIntroductionList = ({ topics, twoColumns, ...rest }) => {
  const className = `${(twoColumns ? twoColumnsClass('wrapper') : '')} ${topicClasses('list')}`;
  return (
    <ul className={className}>
      {topics.map(topic => {
        const shortcuts = topic.shortcuts ? topic.shortcuts : [];
        return (
          <TopicIntroduction
            key={topic.id}
            {...rest}
            topic={topic}
            shortcuts={shortcuts}
            twoColumns
          />
        );
      })}
    </ul>
  );
};

TopicIntroductionList.propTypes = {
  toTopic: PropTypes.func.isRequired,
  topics: PropTypes.arrayOf(TopicShape).isRequired,
  shortcuts: PropTypes.arrayOf(),
  twoColumns: PropTypes.bool,
};

TopicIntroductionList.defaultProps = {
  twoColumns: false,
};

export default TopicIntroductionList;
