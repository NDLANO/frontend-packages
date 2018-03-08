import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

const classes = BEMHelper('c-subject-content');

export const SubjectContent = ({ children, breadcrumb, twoColumns }) => (
  <div {...classes()}>
    <div {...classes('breadcrumb')}>{breadcrumb}</div>
    <div {...classes('content', { twoColumns })}>{children}</div>
  </div>
);

SubjectContent.propTypes = {
  children: PropTypes.node.isRequired,
  breadcrumb: PropTypes.node.isRequired,
  subjects: PropTypes.node,
  twoColumns: PropTypes.bool,
};

const childContentClasses = BEMHelper('c-subject-child-content');

export const SubjectChildContent = ({ children }) => (
  <div {...childContentClasses()}>{children}</div>
);

SubjectChildContent.propTypes = {
  children: PropTypes.node.isRequired,
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

export const SubjectFlexWrapper = ({ children }) => (
  <div className="c-subject-flex">{children}</div>
);

SubjectFlexWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export const SubjectFlexChild = ({ children }) => (
  <div className="c-subject-flex__child">{children}</div>
);

SubjectFlexChild.propTypes = {
  children: PropTypes.node.isRequired,
};

export const SubjectSectionTitle = ({ children, className }) => (
  <h1 className={`c-subject-section-title ${className}`}>{children}</h1>
);

SubjectSectionTitle.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
