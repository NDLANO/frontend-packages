/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import SafeLink from '../common/SafeLink';
import { TopicShape } from '../shapes';

const SubtopicLink = ({ classes, closeMenu, to, subtopic }) =>
  <li {...classes('subtopic-item')} key={subtopic.id}>
    <SafeLink {...classes('link', 'underline')} onClick={closeMenu} to={to}>
      {subtopic.name}
    </SafeLink>
  </li>;

SubtopicLink.propTypes = {
  classes: PropTypes.func.isRequired,
  closeMenu: PropTypes.func,
  subtopic: TopicShape.isRequired,
  to: PropTypes.string.isRequired,
};

const SubtopicLinkList = ({
  goToTitle,
  className,
  classes,
  closeMenu,
  topic,
  toTopic,
}) =>
  <div className={className}>
    <SafeLink
      {...classes('link', ['underline', 'big'])}
      onClick={closeMenu}
      to={toTopic(topic.id)}>
      <span {...classes('link-label')}>
        {goToTitle}:{' '}
      </span>
      <span {...classes('link-target')}>
        {topic.name} {'›'}
      </span>
    </SafeLink>
    <ul {...classes('list')}>
      {topic.subtopics.map(subtopic =>
        <SubtopicLink
          classes={classes}
          closeMenu={closeMenu}
          key={subtopic.id}
          to={toTopic(topic.id, subtopic.id)}
          subtopic={subtopic}
        />,
      )}
    </ul>
  </div>;

SubtopicLinkList.propTypes = {
  goToTitle: PropTypes.string.isRequired,
  classes: PropTypes.func.isRequired,
  className: PropTypes.string,
  closeMenu: PropTypes.func.isRequired,
  topic: TopicShape.isRequired,
  toTopic: PropTypes.func.isRequired,
};

export default SubtopicLinkList;
