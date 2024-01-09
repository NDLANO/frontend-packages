/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { MenuListProps } from "react-select";
import styled from "@emotion/styled";
import { utils } from "@ndla/core";
import { TagType } from "./types";

export const StyledMenuList = styled.div`
  overflow: auto;
  overflow: overlay;
  ${utils.scrollbar}
  display: flex;
  flex-direction: column;
`;

const MenuList = ({ innerProps, innerRef, children }: MenuListProps<TagType, true>) => {
  return (
    <StyledMenuList ref={innerRef} {...innerProps}>
      {children}
    </StyledMenuList>
  );
};

export default MenuList;
