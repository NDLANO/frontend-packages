import React, { ChangeEvent } from 'react';
import BEMHelper from 'react-bem-helper';
import PropTypes from 'prop-types';

// @ts-ignore
import FilterList from '../Filter/FilterList';

const searchFilterClasses = BEMHelper({
  prefix: 'c-',
  name: 'filter',
  outputIsString: true,
});

const valueShape = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

interface Props {
  label: string;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  options: {
    value: string | number;
    title: string;
  }[];
  values: (string | number)[];
}

const SubjectFilter = ({ label, options, values, onChange }: Props) => (
  <div className={searchFilterClasses('', ['subject', 'background'])}>
    <FilterList onChange={onChange} labelNotVisible options={options} label={label} values={values} />
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
