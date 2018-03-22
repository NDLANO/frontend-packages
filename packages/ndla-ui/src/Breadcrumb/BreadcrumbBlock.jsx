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
import { SubjectShape, TopicShape } from '../shapes';
import BreadcrumbItem from './BreadcrumbItem';

const classes = BEMHelper({
  name: 'breadcrumb-block',
  prefix: 'c-',
});

const BreadcrumbBlock = ({ children, subject, topicPath, toTopic }) => {
  const topicIds = topicPath.map(topic => topic.id);
  return (
    <div {...classes('')}>
      {children}
      <ol {...classes('list')}>
        <BreadcrumbItem
          key={subject.id}
          to={toTopic(subject.id)}
          classes={classes}>
          {subject.name}
        </BreadcrumbItem>
        {topicPath.map((topic, i) => (
          <BreadcrumbItem
            key={topic.id}
            classes={classes}
            to={toTopic(subject.id, ...topicIds.slice(0, 1 + i))}
            isCurrent={i === topicPath.length - 1}>
            {topic.name}
          </BreadcrumbItem>
        ))}
      </ol>
    </div>
  );
};

BreadcrumbBlock.propTypes = {
  children: PropTypes.node,
  subject: SubjectShape.isRequired,
  topicPath: PropTypes.arrayOf(TopicShape).isRequired,
  toTopic: PropTypes.func.isRequired,
};

export default BreadcrumbBlock;
