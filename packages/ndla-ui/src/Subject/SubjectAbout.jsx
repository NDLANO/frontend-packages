import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import SectionHeading from '../SectionHeading';

const classes = BEMHelper('c-subject-about');

const SubjectAbout = ({ fixedWidth, media, heading, description }) => (
  <section {...classes('', { fixedWidth })}>
    <SectionHeading large className={classes('top-heading').className}>
      {heading}
    </SectionHeading>
    <div {...classes('media-wrapper')}>{media}</div>
    <div {...classes('content')}>
      <h1 {...classes('main-heading')}>{heading}</h1>
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
