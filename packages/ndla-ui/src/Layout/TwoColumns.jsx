import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

const classes = BEMHelper({
  prefix: 'o-',
  name: 'wrapper',
  outputIsString: true,
});

export const TwoColumns = ({
  children,
  className,
  noPadding,
}) => {
  const modifiers = [];
  if (noPadding) {
    modifiers.push('no-padding');
  }
  return (
    <div className={`${classes('', modifiers)} ${className}`}>
      { children }
    </div>
  );
}

TwoColumns.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  noPadding: PropTypes.bool,
};

TwoColumns.defaultProps = {
  className: '',
};

export default TwoColumns;
