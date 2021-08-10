import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

const classes = BEMHelper('c-section-heading');

const SectionHeading = ({ children, large, className }) => <h1 {...classes('', { large }, className)}>{children}</h1>;

export default SectionHeading;

SectionHeading.propTypes = {
  children: PropTypes.node.isRequired,
  large: PropTypes.bool,
  className: PropTypes.string,
};

SectionHeading.defaultProps = {
  large: false,
  className: null,
};
