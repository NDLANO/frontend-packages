/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { DropdownIndicatorProps } from "react-select";
import styled from "@emotion/styled";
import { ChevronDown } from "@ndla/icons/common";
import { Option } from "./types";

export const StyledDropdown = styled.div`
  svg {
    height: 22px;
    width: 22px;
    &[data-small="true"] {
      height: 16px;
      width: 16px;
    }
  }
`;

const BaseDropdownIndicator = <T extends boolean>({
  innerProps,
  selectProps: { small },
}: DropdownIndicatorProps<Option, T>) => (
  <StyledDropdown data-small={small} {...innerProps}>
    <ChevronDown />
  </StyledDropdown>
);
export default BaseDropdownIndicator;
