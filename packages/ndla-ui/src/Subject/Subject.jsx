import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

const classes = BEMHelper('c-subject-content');

export const SubjectContent = ({ children, breadcrumb }) => (
  <div {...classes()}>
    <div {...classes('breadcrumb')}>{breadcrumb}</div>
    <div {...classes('content')}>{children}</div>
  </div>
);

SubjectContent.propTypes = {
  children: PropTypes.node.isRequired,
  breadcrumb: PropTypes.node.isRequired,
};

const topicClasses = BEMHelper('c-subject-topics');

export const SubjectTopics = ({ messages, children }) => (
  <section {...topicClasses()}>
    <header {...topicClasses('header')}>
      <h1 {...topicClasses('heading')}>{messages.heading}</h1>
    </header>
    <div {...topicClasses('content')}>{children}</div>
  </section>
);

SubjectTopics.propTypes = {
  messages: PropTypes.shape({
    heading: PropTypes.string.isRequired,
  }),
  children: PropTypes.node.isRequired,
};

const sidebarClasses = BEMHelper('c-subject-sidebar-wrapper');

export const SubjectSidebarWrapper = ({ children }) => (
  <div {...sidebarClasses()}>{children}</div>
);

SubjectSidebarWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
