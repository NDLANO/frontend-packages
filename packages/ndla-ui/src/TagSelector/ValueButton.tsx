/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { MultiValueProps } from "react-select";
import styled from "@emotion/styled";
import { buttonStyleV2 as buttonStyle } from "@ndla/button";
import { colors, spacing } from "@ndla/core";
import { Cross } from "@ndla/icons/action";
import { TagType } from "./types";

interface StyledProps {
  selected: boolean;
}

export const StyledValueButton = styled.div<StyledProps>`
  && {
    background: ${({ selected }) => selected && colors.brand.primary};
    color: ${({ selected }) => selected && colors.white};
    padding: ${spacing.xxsmall} ${spacing.small};
    margin: ${spacing.xxsmall};
    border: none;
  }
`;

const ValueButton = ({ innerProps, children, removeProps, isFocused }: MultiValueProps<TagType, true>) => {
  return (
    <StyledValueButton
      selected={isFocused}
      role="button"
      css={buttonStyle({ colorTheme: "lighter", shape: "pill", size: "small" })}
      {...innerProps}
      {...removeProps}
    >
      <span aria-hidden>#</span>
      {children}
      <Cross />
    </StyledValueButton>
  );
};

export default ValueButton;
