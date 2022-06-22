/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree. *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from '@ndla/ui';
import { Search } from '@ndla/icons/common';
import { getFieldValue } from './dropdownHelper';
import { Input, FormPill } from '.';

const DropdownInput = ({
  multiSelect,
  testid,
  onToggleMenu,
  loading,
  values,
  removeItem,
  idField,
  labelField,
  ...rest
}) => (
  <Input
    iconRight={loading ? <Spinner size="normal" margin="0" aria-hidden="true" /> : <Search aria-hidden="true" />}
    {...rest}
    tags={
      multiSelect &&
      values.map((value) => (
        <FormPill
          label={getFieldValue(value, labelField)}
          key={getFieldValue(value, idField)}
          id={getFieldValue(value, idField)}
          onClick={removeItem}
        />
      ))
    }
    data-testid={testid}
  />
);

DropdownInput.propTypes = {
  multiSelect: PropTypes.bool,
  removeItem: PropTypes.func.isRequired,
  idField: PropTypes.string,
  labelField: PropTypes.string,
  name: PropTypes.string,
  loading: PropTypes.bool,
  values: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object])),
  inputProps: PropTypes.shape({
    value: PropTypes.string,
    ref: PropTypes.func,
    onChange: PropTypes.func,
    onKeyDown: PropTypes.func,
    onFocus: PropTypes.func,
  }),
};

DropdownInput.defaultProps = {
  values: [],
  loading: false,
};

export default DropdownInput;
