import React from 'react';
import BEMHelper from 'react-bem-helper';
import PropTypes from 'prop-types';

const classes = BEMHelper('c-select');

const Select = ({ children, className, label, id, ...rest }) =>
  <div {...classes()}>
    <label htmlFor={ id } {...classes('label')}>{ label }</label>
    <div {...classes('wrapper')}>
      <select {...classes('input')} {...rest} id={id}>
        { children }
      </select>
      <span {...classes('symbol')}>-</span>
    </div>
  </div>

Select.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
};

Select.defaultProps = {
  className: '',
  label: '',
  id: 'selectElement'
};

export default Select;
