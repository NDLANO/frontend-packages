/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef } from "react";
import styled from "@emotion/styled";
import { colors, fonts, spacing, utils } from "@ndla/core";
import { uuid } from "@ndla/util";

const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  width: auto;
  cursor: pointer;
  &:checked {
    & + label > span:first-of-type {
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

interface CheckboxLabelProps {
  hasLabel?: boolean;
}

const CheckboxLabel = styled.label<CheckboxLabelProps>`
  font-family: ${fonts.sans};
  ${fonts.sizes(16, 1.75)};
  color: ${colors.brand.primary};
  align-items: center;
  display: inline-flex;
  &:not(:last-child) {
    margin-right: ${spacing.medium};
  }
  > span:first-of-type {
    content: "";
    display: inline-block;
    position: relative;
    width: 20px;
    height: 20px;
    padding: 0;
    background: #fff;
    border: 2px solid ${colors.brand.tertiary};
    margin: 2px ${(props) => (props.hasLabel ? spacing.small : "3px")} 2px 3px;
    border-radius: 2px;
    flex-shrink: 0;

    &:before {
      content: "";
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
      content: "";
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
    > span:first-of-type {
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

interface Props {
  disabled?: boolean;
  checked?: boolean;
  value?: string | number;
  onChange?: (id?: number) => void;
  id?: number;
  label?: string;
}

const CheckboxItem = forwardRef<HTMLInputElement, Props>(
  ({ label = "", checked, value, id, onChange, disabled }, ref) => {
    const uniqueID = uuid();
    return (
      <>
        <CheckboxInput
          ref={ref}
          disabled={disabled}
          aria-checked={checked}
          checked={checked}
          type="checkbox"
          value={value}
          id={uniqueID}
          name={id?.toString()}
          onChange={() => onChange?.(id)}
        />
        <CheckboxLabel htmlFor={uniqueID} hasLabel={label !== ""}>
          <span />
          <span>{label}</span>
        </CheckboxLabel>
      </>
    );
  },
);

export default CheckboxItem;
