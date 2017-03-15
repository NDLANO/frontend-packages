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
import { SubjectShape, TopicShape } from '../shapes';

const classes = new BEMHelper({
  name: 'breadcrumb',
  prefix: 'c-',
});

const TopicBreadcrumbItem = ({ to, children }) => (
  <li {...classes('item')}>
    <SafeLink to={to}>
      {children}
    </SafeLink>
  </li>
);

TopicBreadcrumbItem.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

const TopicBreadcrumb = ({ children, subject, topicPath, toTopic }) => {
  const topicIds = topicPath.map(topic => topic.id);
  return (
    <div {...classes('', '')}>
      {children}
      <ol {...classes('list')}>
        <TopicBreadcrumbItem key={subject.id} topicIds={[]} to={toTopic(subject.id)}>{subject.name}</TopicBreadcrumbItem>
        { topicPath.map((topic, i) =>
          <TopicBreadcrumbItem key={topic.id} topicIds={topicIds.slice(0, 1 + i)} to={toTopic(subject.id, ...topicIds.slice(0, 1 + i))}>
            {topic.name}
          </TopicBreadcrumbItem>)
        }
      </ol>
    </div>
  );
};

TopicBreadcrumb.propTypes = {
  children: PropTypes.node,
  subject: SubjectShape.isRequired,
  topicPath: PropTypes.arrayOf(TopicShape),
  toTopic: PropTypes.func.isRequired,
};

export default TopicBreadcrumb;
