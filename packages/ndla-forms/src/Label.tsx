/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentPropsWithRef, forwardRef } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { utils, colors } from "@ndla/core";
import { Text, TextProps } from "@ndla/typography";
import { useFormControlContext } from "./FormControl";

type Props = TextProps & {
  visuallyHidden?: boolean;
} & ComponentPropsWithRef<"label">;

const visuallyHiddenStyle = css`
  ${utils.visuallyHidden};
`;

const StyledLabel = styled(Text)`
  display: inline-block;
  &[data-disabled="true"] {
    color: ${colors.brand.greyMedium};
  }
`;

export const Label = forwardRef<HTMLLabelElement, Props>(
  ({ textStyle = "label-large", visuallyHidden, margin = "none", ...rest }, ref) => {
    const control = useFormControlContext();
    const fieldProps = control?.getLabelProps(rest, ref) ?? { ref, ...rest };

    return (
      <StyledLabel
        element="label"
        css={visuallyHidden ? visuallyHiddenStyle : undefined}
        {...rest}
        {...fieldProps}
        textStyle={textStyle}
        margin={margin}
      />
    );
  },
);

const StyledLegend = styled(Text)`
  float: none;
  width: inherit;
  &[data-disabled="true"] {
    color: ${colors.brand.greyMedium};
  }
`;

export const Legend = forwardRef<HTMLLabelElement, Props>(
  ({ textStyle = "label-large", visuallyHidden, margin = "small", ...rest }, ref) => {
    const control = useFormControlContext();
    // Legend does not use htmlFor (for), so we remove it.
    const { id: _, htmlFor: __, ...fieldProps } = control?.getLabelProps(rest, ref) ?? { ref, ...rest };

    return (
      <StyledLegend
        element="legend"
        css={visuallyHidden ? visuallyHiddenStyle : undefined}
        {...rest}
        {...fieldProps}
        textStyle={textStyle}
        margin={margin}
      />
    );
  },
);

export const Fieldset = styled.fieldset`
  border: none;
  padding: 0;
  margin: 0;
`;
