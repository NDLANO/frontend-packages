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
import { uuid } from 'ndla-util';
import { Home } from 'ndla-icons/common';
import BreadcrumbItem from './BreadcrumbItem';
import { SubjectShape, TopicShape } from '../shapes';

const classes = BEMHelper({
  name: 'breadcrumb',
  prefix: 'c-',
});

const Breadcrumb = ({ children, subject, topicPath, toTopic, toSubjects }) => {
  const topicIds = topicPath.map(topic => topic.id);
  return (
    <div {...classes()}>
      {children}
      <ol {...classes('list')}>
        <BreadcrumbItem
          key={uuid()}
          classes={classes}
          topicIds={[]}
          to={toSubjects()}
          extraClass="home">
          <Home className="c-icon--20" />
        </BreadcrumbItem>
        <BreadcrumbItem
          classes={classes}
          key={subject.id}
          topicIds={[]}
          to={toTopic(subject.id)}>
          {subject.name}
        </BreadcrumbItem>
        {topicPath.map((topic, i) => (
          <BreadcrumbItem
            classes={classes}
            key={topic.id}
            to={toTopic(subject.id, ...topicIds.slice(0, 1 + i))}
            isCurrent={i === topicPath.length - 1}>
            {topic.name}
          </BreadcrumbItem>
        ))}
      </ol>
    </div>
  );
};

Breadcrumb.propTypes = {
  children: PropTypes.node,
  subject: SubjectShape.isRequired,
  topicPath: PropTypes.arrayOf(TopicShape),
  toTopic: PropTypes.func.isRequired,
  toSubjects: PropTypes.func.isRequired,
  subjectsTitle: PropTypes.string.isRequired,
};

export default Breadcrumb;
