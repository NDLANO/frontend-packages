/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { PropTypes } from 'react';
import BEMHelper from 'react-bem-helper';
import SafeLink from '../common/SafeLink';
import { TopicShape } from '../shapes';

const classes = new BEMHelper({
  name: 'topic-introduction',
  prefix: 'c-',
});

const TopicIntroduction = ({ toTopic, topic, subjectId }) => (
  <li {...classes('item')}>
    <h1 {...classes('header')}>{topic.name}</h1>
    {topic.introduction ? <p>{topic.introduction}</p> : null}
    <SafeLink {...classes('topic-link')} to={toTopic(subjectId, topic.id)}>Gå til emnet</SafeLink>
  </li>
);

TopicIntroduction.propTypes = {
  topic: TopicShape.isRequired,
  toTopic: PropTypes.func.isRequired,
  subjectId: PropTypes.string.isRequired,
};

const TopicIntroductionList = ({ topics, ...rest }) => (
  <ul {...classes('list')} >
    { topics.map(topic => <TopicIntroduction key={topic.id} {...rest} topic={topic} />)}
  </ul>
  );

TopicIntroductionList.propTypes = {
  subjectId: PropTypes.string.isRequired,
  toTopic: PropTypes.func.isRequired,
  topics: PropTypes.arrayOf(TopicShape).isRequired,
};

export default TopicIntroductionList;
