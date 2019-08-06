/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { colors, fonts, spacing, utils } from '@ndla/core';

const SIZE: string = '22px';

const StyledSwitch = styled.div`
  color: ${colors.brand.primary};
  margin: 0;
  padding-right: ${spacing.large};
  ${fonts.sizes(16, 1.1)};
  font-family: ${fonts.sans};
  position: relative;
  cursor: pointer;
  label {
    &:after {
      content "";
      display: block;
      width: ${SIZE};
      height: ${SIZE};
      position: absolute;
      right: 0;
      top: -2px;
      transform: translateX(calc(-${spacing.spacingUnit * 1.5}px + ${SIZE}));
      background: ${colors.brand.greyMedium};
      transition: all 100ms ease;
      border-radius: 100%;
    }
    &:before {
      content "";
      display: block;
      position: absolute;
      right: 0;
      top: -2px;
      width: ${spacing.spacingUnit * 1.5}px;
      height: calc(${SIZE} - 4px);
      transform: translateY(2px);
      background: ${colors.brand.greyLight};
      transition: all 100ms ease;
      border-radius: ${SIZE};
      pointer-events: all;
    }
  }
  input {
    width: 0;
    height: 0;
    position: absolute;
    z-index: -1;
    opacity: 0;
    padding: 0;
    margin: 0;
    &:checked + label {
      &:after {
        transform: translateX(0);
        background: ${colors.brand.dark};
      }
      &:before {
        background: ${colors.brand.tertiary};
      }
    }
    &:focus {
      + label {
        &:before {
          ${utils.restoreOutline};
        }
      }
      &:checked {
        + label {
          &:before {
            background: ${colors.brand.tertiary};
          }
          &:after {
            background: ${colors.brand.dark};
          }
        }
      }
      &:not(:checked) {
        + label {
          &:after {
            background: ${colors.brand.grey};
          }
        }
      }
    }
  }
`;

type Props = {
  checked: boolean;
  label: string;
  id: string;
  disabled?: boolean;
  onChange: void;
}

const Switch: React.FunctionComponent<Props & React.HTMLProps<HTMLElement>> = ({
  onChange, checked, disabled, id, label, ...rest
}) => (
  <StyledSwitch {...rest}>
    <input onChange={onChange} id={id} type="checkbox" checked={checked} disabled={disabled} />
    <label htmlFor={id}>{label}</label>
  </StyledSwitch>
);

export default Switch;