/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { colors, fonts, spacing, utils } from 'ndla-core';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import styled from 'react-emotion';

const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  &:checked {
    & + label > span:first-child {
      border: 2px solid ${colors.brand.primary};
      background: ${colors.brand.primary};
      &:before {
        background: white;
        width: 5px;
      }
      &:after {
        background: white;
        width: 10px;
      }
    }
  }
  &:focus,
  &:active {
    & + label {
      ${utils.restoreOutline};
    }
  }
`;

const CheckboxLabel = styled.label`
  font-family: ${fonts.sans};
  ${fonts.sizes(16, 1.75)} color: ${colors.brand.primary};
  align-items: center;
  display: inline-flex;
  &:not(:last-child) {
    margin-right: ${spacing.medium};
  }
  > span:first-child {
    content: '';
    display: inline-block;
    position: relative;
    width: 20px;
    height: 20px;
    padding: 0;
    background: #fff;
    border: 2px solid ${colors.brand.tertiary};
    margin: 2px ${props => (props.hasLabel ? spacing.small : '3px')} 2px 3px;
    border-radius: 2px;
    flex-shrink: 0;

    &:before {
      content: '';
      width: 0px;
      height: 2px;
      border-radius: 2px;
      background: ${colors.brand.tertiary};
      position: absolute;
      transform: rotate(45deg);
      top: 8px;
      left: 5px;
      transition: width 50ms ease 50ms;
      transform-origin: 0% 0%;
    }

    &:after {
      content: '';
      width: 0;
      height: 2px;
      border-radius: 2px;
      background: ${colors.brand.tertiary};
      position: absolute;
      transform: rotate(305deg);
      top: 11px;
      left: 6px;
      transition: width 50ms ease;
      transform-origin: 0% 0%;
    }
  }
  &:hover,
  &:focus {
    > span:first-child {
      border: 2px solid ${colors.brand.tertiary};
      &:before {
        width: 5px;
        transition: width 100ms ease;
      }
      &:after {
        width: 10px;
        transition: width 150ms ease 100ms;
      }
    }
  }
`;

const CheckboxItem = ({ label, checked, value, id, onChange, disabled }) => (
  <Fragment>
    <CheckboxInput
      disabled={disabled}
      aria-checked={checked}
      checked={checked}
      type="checkbox"
      value={value}
      id={id}
      name={id}
      onChange={() => onChange(id)}
    />
    <CheckboxLabel htmlFor={id} hasLabel={label !== ''}>
      <span />
      <span>{label}</span>
    </CheckboxLabel>
  </Fragment>
);

CheckboxItem.propTypes = {
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
};

CheckboxItem.defaultProps = {
  label: '',
};

export default CheckboxItem;
