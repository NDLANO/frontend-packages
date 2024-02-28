/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { components, InputProps } from "react-select";
import { css } from "@emotion/react";
import { colors, spacing } from "@ndla/core";
import { TagType } from "./types";
import { StyledValueButton } from "./ValueButton";

const inputStyle = css`
  && {
    padding: 0 ${spacing.small};
    color: ${colors.brand.primary};
    margin: 0;
    ${StyledValueButton} + & {
      padding-left: ${spacing.xxsmall};
    }
  }
`;

const Input = (props: InputProps<TagType, true>) => {
  return <components.Input css={inputStyle} {...props} />;
};

export default Input;
