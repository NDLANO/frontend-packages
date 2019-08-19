/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree. *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from '@ndla/editor';
import { Search } from '@ndla/icons/common';
import { Input, FormPill } from '@ndla/forms';

const DropdownInput = ({
  multiSelect,
  testid,
  onToggleMenu,
  loading,
  values,
  removeItem,
  idField,
  labelField,
  ...props
}) => (
  <Input
    {...props}
    iconRight={loading ? <Spinner size="normal" margin="0" /> : <Search />}
    tags={
      multiSelect &&
      values.map(value => (
        <FormPill
          label={labelField ? value[labelField] : value}
          key={idField ? value[idField] : value}
          id={idField ? value[idField] : value}
          onClick={removeItem}
        />
      ))
    }
    data-testid={testid}
    container="div"
  />
);

DropdownInput.propTypes = {
  multiSelect: PropTypes.bool,
  getInputProps: PropTypes.func,
  idField: PropTypes.string,
  labelField: PropTypes.string,
  name: PropTypes.string,
  inputProps: PropTypes.shape({
    value: PropTypes.string,
    ref: PropTypes.func,
    onChange: PropTypes.func,
    onKeyDown: PropTypes.func,
    onFocus: PropTypes.func,
  }),
};

export default DropdownInput;
