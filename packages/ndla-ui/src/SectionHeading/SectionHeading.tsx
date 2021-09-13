import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

const classes = BEMHelper('c-section-heading');

interface Props {
  children: ReactNode;
  large?: boolean;
  className?: string;
}
const SectionHeading = ({ children, large = false, className }: Props) => (
  <h1 {...classes('', { large }, className)}>{children}</h1>
);

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
