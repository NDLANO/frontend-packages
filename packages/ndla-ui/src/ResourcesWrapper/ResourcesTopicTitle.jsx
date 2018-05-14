import React from 'react';
import PropTypes from 'prop-types';

import { classes } from './ResourcesWrapper';
import SafeLink from '../common/SafeLink';

import { SubjectBadge } from '../ContentTypeBadge';

const ResourcesTopicTitle = ({ messages, title, url }) => (
  <header {...classes('topic-title-wrapper')}>
    <SubjectBadge background />
    <div {...classes('topic-title-text')}>
      <p {...classes('topic-title-label')}>{messages.label}</p>
      <h1 {...classes('topic-title')}>
        <SafeLink to={url} {...classes('topic-title-link')}>
          {title}
        </SafeLink>
      </h1>
    </div>
  </header>
);

ResourcesTopicTitle.propTypes = {
  messages: PropTypes.shape({
    label: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default ResourcesTopicTitle;
