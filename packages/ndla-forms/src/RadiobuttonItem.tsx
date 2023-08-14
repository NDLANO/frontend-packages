/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { colors, fonts, spacing, utils } from '@ndla/core';

const RadioInput = styled.input`
  opacity: 0;
  position: absolute;
  &:hover,
  &:focus {
    + label {
      ${utils.restoreOutline} &:after {
        transform: translateX(5px) scale(1, 1);
        background: ${colors.brand.tertiary};
      }
    }
  }
  &:checked {
    + label {
      &:before {
        border-color: ${colors.brand.primary};
      }
      &:after {
        transform: translateX(5px) scale(1, 1);
        background: ${colors.brand.primary};
      }
    }
  }
`;

interface RadioLabelProps {
  hasLabel?: boolean;
}

const RadioLabel = styled.label<RadioLabelProps>`
  font-family: ${fonts.sans};
  ${fonts.sizes(16, 1.75)};
  color: ${colors.brand.primary};
  align-items: center;
  display: inline-flex;
  &:before {
    content: '';
    margin-right: ${(props) => (props.hasLabel ? spacing.small : '0px')};
    width: 20px;
    height: 20px;
    border-radius: 100%;
    border: 2px solid ${colors.brand.tertiary};
    transition: 200ms border-color ease;
  }
  &:after {
    content: '';
    background: transparent;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    position: absolute;
    transform: translateX(5px) scale(0, 0);
    transition: 200ms all ease;
  }
  &:not(:last-child) {
    margin-right: ${spacing.medium};
  }
`;

interface Props {
  label?: string;
  id: string;
  onChange: (id: string) => void;
  checked?: boolean;
  disabled?: boolean;
  value: string | number;
}
const RadiobuttonItem = ({ label = '', checked, value, id, onChange, disabled }: Props) => (
  <>
    <RadioInput
      disabled={disabled}
      aria-checked={checked}
      checked={checked}
      type="radio"
      value={value}
      id={id}
      name={id}
      onChange={() => onChange(id)}
    />
    <RadioLabel htmlFor={id} hasLabel={label !== ''}>
      {label}
    </RadioLabel>
  </>
);

export default RadiobuttonItem;
