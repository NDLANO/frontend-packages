/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef } from "react";
import { Field, HTMLArkProps } from "@ark-ui/react";
import { css } from "@ndla/styled-system/css";
import { styled } from "@ndla/styled-system/jsx";
import { JsxStyleProps } from "@ndla/styled-system/types";
import { TextProps } from "./Text";

const StyledFieldHelper = styled(Field.HelperText);

export const FieldHelper = forwardRef<HTMLDivElement, TextProps & HTMLArkProps<"div"> & JsxStyleProps>(
  ({ textStyle = "label.small", fontWeight, color, srOnly, css: cssProp, ...props }, ref) => {
    return <StyledFieldHelper css={css.raw({ textStyle, fontWeight, color, srOnly }, cssProp)} {...props} ref={ref} />;
  },
);
