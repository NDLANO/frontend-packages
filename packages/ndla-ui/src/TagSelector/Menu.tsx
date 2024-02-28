/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { MenuProps, components } from "react-select";
import { css } from "@emotion/react";
import { colors } from "@ndla/core";
import { StyledMenuList } from "./MenuList";
import { TagType } from "./types";

const menuStyle = css`
  display: flex;
  position: relative;
  flex-direction: column;
  margin: 0;
  overflow: hidden;
  border-top: 1px solid ${colors.brand.tertiary};
  min-height: 70px;

  :has(${StyledMenuList}>*:only-child) {
    min-height: 40px;
  }
`;

const Menu = ({ children, ...props }: MenuProps<TagType, true>) => {
  return (
    <components.Menu css={menuStyle} {...props}>
      {children}
    </components.Menu>
  );
};

export default Menu;
