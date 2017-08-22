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
import SafeLink from '../common/SafeLink';
import { SubjectShape, TopicShape } from '../shapes';
import { Home } from '../icons';

const classes = BEMHelper({
  name: 'breadcrumb',
  prefix: 'c-',
});

const TopicBreadcrumbItem = ({ to, children, extraClass }) =>
  <li {...classes('item', extraClass)}>
    <SafeLink to={to}>
      {children}
    </SafeLink>
  </li>;

TopicBreadcrumbItem.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  extraClass: PropTypes.string,
};

const TopicBreadcrumb = ({
  children,
  subject,
  topicPath,
  toTopic,
  toSubjects,
}) => {
  const topicIds = topicPath.map(topic => topic.id);
  return (
    <div {...classes()}>
      {children}
      <ol {...classes('list')}>
        <TopicBreadcrumbItem
          key={uuid()}
          topicIds={[]}
          to={toSubjects()}
          extraClass="home">
          <Home className="c-icon--20" />
        </TopicBreadcrumbItem>
        <TopicBreadcrumbItem
          key={subject.id}
          topicIds={[]}
          to={toTopic(subject.id)}>
          {subject.name}
        </TopicBreadcrumbItem>
        {topicPath.map((topic, i) =>
          <TopicBreadcrumbItem
            key={topic.id}
            to={toTopic(subject.id, ...topicIds.slice(0, 1 + i))}>
            {topic.name}
          </TopicBreadcrumbItem>,
        )}
      </ol>
    </div>
  );
};

TopicBreadcrumb.propTypes = {
  children: PropTypes.node,
  subject: SubjectShape.isRequired,
  topicPath: PropTypes.arrayOf(TopicShape),
  toTopic: PropTypes.func.isRequired,
  toSubjects: PropTypes.func.isRequired,
  subjectsTitle: PropTypes.string.isRequired,
};

export default TopicBreadcrumb;
