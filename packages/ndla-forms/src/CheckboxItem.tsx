/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef } from "react";
import styled from "@emotion/styled";
import { CheckboxProps, Root } from "@radix-ui/react-checkbox";
import { colors } from "@ndla/core";

export const StyledCheckboxRoot = styled(Root)`
  all: unset;
  border: 2px solid ${colors.brand.tertiary};
  border-radius: 2px;
  width: 16px;
  height: 16px;
  position: relative;

  &:disabled {
    cursor: not-allowed;
  }

  span:before {
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
  span:after {
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
  &:hover:not(:disabled),
  &[data-state="checked"]:not(:disabled),
  &:active:not(:disabled) {
    span:before {
      width: 5px;
      transition: width 100ms ease;
    }
    span:after {
      width: 10px;
      transition: width 150ms ease 100ms;
    }
  }

  &[data-state="checked"]:not(:disabled) {
    background: ${colors.brand.primary};
    border-color: transparent;
    span:before,
    span:after {
      background: ${colors.white};
    }
  }
`;

export const CheckboxItem = forwardRef<HTMLButtonElement, CheckboxProps>(({ ...rest }, ref) => (
  <StyledCheckboxRoot {...rest} ref={ref}>
    <span />
  </StyledCheckboxRoot>
));
