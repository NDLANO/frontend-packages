import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

const classes = BEMHelper('c-subject-about');

const SubjectAbout = ({ fixedWidth, media, heading, description }) => (
  <section {...classes('', { fixedWidth })}>
    <h1 {...classes('heading', { top: true })}>{heading}</h1>
    <div {...classes('media-wrapper')}>{media}</div>
    <div {...classes('content')}>
      <h1 {...classes('heading', { main: true })}>{heading}</h1>
      <p {...classes('description')}>{description}</p>
    </div>
  </section>
);

SubjectAbout.propTypes = {
  fixedWidth: PropTypes.bool,
  media: PropTypes.node.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

SubjectAbout.defaultProps = {
  fixedWidth: false,
};

export default SubjectAbout;
