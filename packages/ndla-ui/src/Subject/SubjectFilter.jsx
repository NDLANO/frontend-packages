import React from 'react';
import BEMHelper from 'react-bem-helper';
import PropTypes from 'prop-types';

import FilterList from '../Filter/FilterList';

const searchFilterClasses = BEMHelper({
  prefix: 'c-',
  name: 'filter',
  outputIsString: true,
});

const valueShape = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

const SubjectFilter = ({ label, options, values, onChange }) => (
  <div className={searchFilterClasses('', 'background')}>
    <FilterList
      onChange={onChange}
      labelNotVisible
      options={options}
      label={label}
      values={values}
    />
  </div>
);

SubjectFilter.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: valueShape.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  values: PropTypes.arrayOf(valueShape),
};

SubjectFilter.defaultProps = {
  values: [],
};

export default SubjectFilter;
