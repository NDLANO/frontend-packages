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

const classes = new BEMHelper({
  name: 'topic-introduction',
  prefix: 'c-',
});

const TopicIntroduction = ({ toTopic, topic }) => (
  <li {...classes('item')}>
    <div {...classes('body')}>
      <h2 {...classes('header')}>
        <SafeLink to={toTopic(topic.id)}>{topic.name}</SafeLink>
      </h2>
      {/* Since topic introduction is already escaped from the api
       we run into a double escaping issues as React escapes all strings.
       Use dangerouslySetInnerHTML to circumvent the issue */}
      <p dangerouslySetInnerHTML={{ __html: topic.introduction }} />
    </div>
  </li>
);

TopicIntroduction.propTypes = {
  topic: TopicShape.isRequired,
  toTopic: PropTypes.func.isRequired,
};

const TopicIntroductionList = ({ topics, ...rest }) => (
  <ul {...classes('list')}>
    {topics.map(topic => (
      <TopicIntroduction key={topic.id} {...rest} topic={topic} />
    ))}
  </ul>
);

TopicIntroductionList.propTypes = {
  toTopic: PropTypes.func.isRequired,
  topics: PropTypes.arrayOf(TopicShape).isRequired,
};

export default TopicIntroductionList;
