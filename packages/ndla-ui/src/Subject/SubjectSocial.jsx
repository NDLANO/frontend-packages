import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

const classes = BEMHelper('c-subject-social');

export const SubjectSocialContent = ({ children }) => (
  <div {...classes('content')}>{children}</div>
);

SubjectSocialContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export const SubjectSocialSection = ({ children, title }) => (
  <section {...classes('section')}>
    <h1 {...classes('title')}>{title}</h1>
    {children}
  </section>
);

SubjectSocialSection.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

SubjectSocialSection.defaultProps = {
  title: '',
};
