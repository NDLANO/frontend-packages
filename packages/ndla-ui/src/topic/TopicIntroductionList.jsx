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
import { Icon } from '../';

const classes = new BEMHelper({
  name: 'topic-introduction',
  prefix: 'c-',
});

const TopicIntroduction = ({ toTopic, topic }) => (
  <li {...classes('item o-flag o-flag--top')}>
    <div {...classes('icon o-flag__img')}>
      <Icon.Book />
    </div>
    <div {...classes('body o-flag__body')}>
      <h1 {...classes('header')}><SafeLink to={toTopic(topic.id)}>{topic.name}</SafeLink></h1>
      {topic.introduction ? <p>{topic.introduction}</p> : null}
    </div>
  </li>
);

TopicIntroduction.propTypes = {
  topic: TopicShape.isRequired,
  toTopic: PropTypes.func.isRequired,
};

const TopicIntroductionList = ({ topics, ...rest }) => (
  <ul {...classes('list')} >
    { topics.map(topic => <TopicIntroduction key={topic.id} {...rest} topic={topic} />)}
  </ul>
  );

TopicIntroductionList.propTypes = {
  toTopic: PropTypes.func.isRequired,
  topics: PropTypes.arrayOf(TopicShape).isRequired,
};

export default TopicIntroductionList;
