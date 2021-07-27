/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { colors, spacing, fonts } from '@ndla/core';

const SelectWrapper = styled.select`
  font-weight: ${fonts.weight.normal};
  color: ${colors.brand.primary};
  border: 0;
  ${fonts.sizes(18, 1.25)};
  height: ${spacing.large};
  width: 100%;
  padding-left: ${spacing.small};
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  transition: background-color 200ms ease;
  background: url('data:image/svg+xml,%3Csvg fill="${
    colors.text.primary
  }" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" data-license="Apache License 2.0" data-source="Material Design"%3E%3Cpath d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /%3E%3C/svg%3E')
    calc(100% - 11px) / 30px no-repeat ${colors.brand.lighter};
  &:hover,
  &:focus {
    background-color: ${colors.brand.light};
  }
`;

const Select = ({ children, ...rest }) => <SelectWrapper {...rest}>{children}</SelectWrapper>;

Select.propTypes = {
  children: PropTypes.node,
  onChange: PropTypes.func.isRequired,
};

export default Select;
