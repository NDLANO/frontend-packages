import React, { ElementType, ReactNode } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

const classes = BEMHelper('c-section-heading');

interface Props {
  children: ReactNode;
  large?: boolean;
  className?: string;
}

const SectionHeading = ({ children, large = false, className }: Props) => {
  const Wrapper: ElementType = large ? 'h1' : 'h2';
  return <Wrapper {...classes('', { large: !!large }, className)}>{children}</Wrapper>;
};

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
