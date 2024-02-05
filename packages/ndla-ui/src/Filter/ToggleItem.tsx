/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ChangeEvent, ElementType } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { breakpoints, colors, fonts, misc, mq, spacing, stackOrder } from "@ndla/core";

interface Props {
  id: string;
  label: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  disabled?: boolean;
  tabIndex?: number;
  value?: string;
  component?: ElementType;
  hits?: number;
}

const StyledText = styled.span`
  flex-grow: 1;
  z-index: ${stackOrder.offsetDouble};
`;

const StyledInput = styled.input`
  position: absolute;
  opacity: 0;
  z-index: ${stackOrder.trigger};
  cursor: pointer;

  &:checked {
    & + label [data-checkbox] {
      border: 2px solid ${colors.brand.primary};
      background: ${colors.brand.primary};
      ::before {
        background: white;
        width: 5px;
      }
      ::after {
        background: white;
        width: 10px;
      }
    }
  }
`;

const StyledItemCheckbox = styled.span`
  content: "";
  display: inline-block;
  position: relative;
  width: ${spacing.normal};
  height: ${spacing.normal};
  padding: 0;
  background: ${colors.white};
  border: 2px solid ${colors.brand.tertiary};
  margin: 2px ${spacing.small} 2px 3px;
  border-radius: 2px;
  flex-shrink: 0;
  ${mq.range({ from: breakpoints.tablet })} {
    width: 20px;
    height: 20px;
    margin: 4px ${spacing.small} 4px 3px;
  }
  &::before {
    content: "";
    width: 0px;
    height: 2px;
    border-radius: 2px;
    background: ${colors.brand.tertiary};
    position: absolute;
    transform: rotate(45deg);
    top: 10px;
    left: 7px;
    ${mq.range({ from: breakpoints.tablet })} {
      top: 8px;
      left: 5px;
    }
    transition: width 50ms ease 50ms;
    transform-origin: 0% 0%;
  }

  &::after {
    content: "";
    width: 0;
    height: 2px;
    border-radius: 2px;
    background: ${colors.brand.tertiary};
    position: absolute;
    transform: rotate(305deg);
    top: 13px;
    left: 8px;

    ${mq.range({ from: breakpoints.tablet })} {
      top: 11px;
      left: 6px;
    }
    transition: width 50ms ease;
    transform-origin: 0% 0%;
  }
`;

const toggleItemCss = css`
  display: inline-block;
  position: relative;
  margin: 0 ${spacing.small} 0 2px;
  color: ${colors.brand.primary};
  border-radius: ${misc.borderRadius};
  transition: all 0.2s cubic-bezier(0.17, 0.04, 0.03, 0.94);
  cursor: pointer;
  ${fonts.sizes("16px", "18px")};

  &:hover {
    [data-checkbox] {
      border: 2px solid ${colors.brand.tertiary};
    }
    [data-checkbox]::before {
      width: 5px;
      transition: width 100ms ease;
    }

    [data-checkbox]::after {
      width: 10px;
      transition: width 150ms ease 100ms;
    }
  }
  label {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    ${mq.range({ until: breakpoints.tabletWide })} {
      width: 100%;
    }
    ${mq.range({ until: breakpoints.mobileWide })} {
      width: 100%;
      padding: $spacing--xsmall 0;
      justify-content: space-between;
      min-height: 52px;
      align-items: center;
    }
  }
`;

const ToggleItem = ({
  id,
  checked = false,
  label,
  component: Component = "li",
  onChange,
  tabIndex,
  value,
  disabled,
  hits,
}: Props) => (
  <Component css={toggleItemCss}>
    <StyledInput
      type="checkbox"
      id={id}
      value={value}
      disabled={disabled}
      tabIndex={tabIndex}
      checked={checked}
      onChange={onChange}
    />
    <label htmlFor={id}>
      <StyledItemCheckbox data-checkbox="" />
      <StyledText>
        {label}
        {hits !== undefined && ` (${hits})`}
      </StyledText>
    </label>
  </Component>
);

export default ToggleItem;
