/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef } from "react";
import styled from "@emotion/styled";
import { RadioGroupItemProps, Item, Indicator } from "@radix-ui/react-radio-group";
import { spacing, colors } from "@ndla/core";
import { useFormControl } from "../FormControl";

export const StyledRadioGroupItem = styled(Item)`
  all: unset;
  transition: 200ms all ease;
  box-shadow: 0 0 0 2px ${colors.brand.light};
  min-width: ${spacing.nsmall};
  min-height: ${spacing.nsmall};
  width: ${spacing.nsmall};
  height: ${spacing.nsmall};
  border-radius: 100%;
  &[data-state="checked"] {
    box-shadow: 0 0 0 2px ${colors.brand.primary};
  }

  &:focus-within {
    box-shadow: 0 0 0 2px ${colors.brand.dark};
    &[data-state="checked"] {
      box-shadow: 0 0 0 3px ${colors.brand.dark};
    }
  }
`;
const RadioButtonIndicator = styled(Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  &::after {
    content: "";
    display: block;
    width: 0px;
    height: 0px;
    border-radius: 50%;
    background-color: ${colors.brand.light};
    transition: 200ms all ease;
  }
  &:hover,
  &:focus-visible,
  &[data-state="checked"] {
    &::after {
      width: ${spacing.small};
      height: ${spacing.small};
    }
  }
  &[data-disabled] {
    &::after {
      width: 0px;
      height: 0px;
    }
  }

  &[data-state="checked"] {
    &::after {
      background-color: ${colors.brand.primary};
    }
  }
`;

export const RadioButtonItem = forwardRef<HTMLButtonElement, RadioGroupItemProps>(({ ...rest }, ref) => {
  const props = useFormControl(rest);
  return (
    <StyledRadioGroupItem {...props} ref={ref}>
      <RadioButtonIndicator forceMount />
    </StyledRadioGroupItem>
  );
});
