/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef } from "react";
import { Field, Fieldset } from "@ark-ui/react";
import { css } from "@ndla/styled-system/css";
import { styled } from "@ndla/styled-system/jsx";
import type { JsxStyleProps } from "@ndla/styled-system/types";
import type { TextProps } from "./Text";

const StyledFieldHelper = styled(Field.HelperText, {}, { baseComponent: true });

export const FieldHelper = forwardRef<HTMLSpanElement, Field.HelperTextProps & TextProps & JsxStyleProps>(
  ({ textStyle = "label.small", fontWeight, color, srOnly, css: cssProp, ...props }, ref) => {
    return <StyledFieldHelper css={css.raw({ textStyle, fontWeight, color, srOnly }, cssProp)} {...props} ref={ref} />;
  },
);

const StyledFieldsetHelper = styled(Fieldset.HelperText, {}, { baseComponent: true });

export const FieldsetHelper = forwardRef<HTMLSpanElement, Fieldset.HelperTextProps & TextProps & JsxStyleProps>(
  ({ textStyle = "label.small", fontWeight, color, srOnly, css: cssProp, ...props }, ref) => {
    return (
      <StyledFieldsetHelper css={css.raw({ textStyle, fontWeight, color, srOnly }, cssProp)} {...props} ref={ref} />
    );
  },
);
