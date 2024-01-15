/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentPropsWithRef, forwardRef } from "react";
import { css } from "@emotion/react";
import { utils } from "@ndla/core";
import { Text, TextProps } from "@ndla/typography";
import { useFormControlContext } from "./FormControl";

type Props = TextProps & {
  visuallyHidden?: boolean;
} & ComponentPropsWithRef<"label">;

const visuallyHiddenStyle = css`
  ${utils.visuallyHidden};
`;

export const Label = forwardRef<HTMLLabelElement, Props>(
  ({ textStyle = "label-large", visuallyHidden, margin = "small", ...rest }, ref) => {
    const control = useFormControlContext();
    const fieldProps = control?.getLabelProps(rest, ref) ?? { ref, ...rest };

    return (
      <Text
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
