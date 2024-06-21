/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { MenuProps, components, GroupBase } from "react-select";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors, misc, spacing } from "@ndla/core";
import { Option } from "./types";

const menuStyle = css`
  && {
    min-width: 100%;
    width: unset;
  }
`;

const StyledBaseMenu = styled.div`
  overflow: hidden;
  background-color: ${colors.white};
  pointer-events: auto;
  border: 1px solid ${colors.brand.light};
  border-radius: 8px;
  margin: ${spacing.xxsmall} 0;
  &[data-small="true"] {
    border-radius: ${misc.borderRadius};
  }
`;

const BaseMenu = <T extends boolean>({ selectProps, children, ...props }: MenuProps<Option, T>) => (
  <components.Menu<Option, T, GroupBase<Option>> {...props} selectProps={selectProps} css={menuStyle}>
    <StyledBaseMenu data-small={selectProps.small}>{children}</StyledBaseMenu>
  </components.Menu>
);

export default BaseMenu;
