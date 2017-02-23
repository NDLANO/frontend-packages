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

const oClasses = new BEMHelper({
  name: 'flag',
  prefix: 'o-',
});

const cClasses = new BEMHelper({
  name: 'topic-introduction',
  prefix: 'c-',
});

const TopicIntroduction = ({ toTopic, topic, subjectId }) => (
  <li {...cClasses('item')}>
    <div {...oClasses('body u-block-mobile')}>
      <h1 {...cClasses('header')}>{topic.name}</h1>
      {topic.introduction ? <p>{topic.introduction}</p> : null}
      <SafeLink {...oClasses('topic-link c-button c-button--outline ')} to={toTopic(subjectId, topic.id)}>Gå til emnet</SafeLink>
      <SafeLink {...cClasses('resource')}>Se fagstoff</SafeLink>
    </div>
    <div{...oClasses('img u-block-mobile')}>
      <img src="http://staging.api.ndla.no/image-api/v1/images/full/boker_om_skriveregler.jpg" width="300" role="presentation" />
    </div>
  </li>
);

TopicIntroduction.propTypes = {
  topic: TopicShape.isRequired,
  toTopic: PropTypes.func.isRequired,
  subjectId: PropTypes.string.isRequired,
};

const TopicIntroductionList = ({ topics, ...rest }) => (
  <ul className="o-list--clean" >
    { topics.map(topic => <TopicIntroduction key={topic.id} {...rest} topic={topic} />)}
  </ul>
  );

TopicIntroductionList.propTypes = {
  subjectId: PropTypes.string.isRequired,
  toTopic: PropTypes.func.isRequired,
  topics: PropTypes.arrayOf(TopicShape).isRequired,
};

export default TopicIntroductionList;
