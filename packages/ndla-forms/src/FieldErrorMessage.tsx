/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentPropsWithRef, forwardRef } from "react";
import { css } from "@emotion/react";
import { colors } from "@ndla/core";
import { Text, TextProps } from "@ndla/typography";
import { useFormControlContext } from "./FormControl";

const errorStyling = css`
  color: ${colors.support.red};
  white-space: pre-line;
`;

export const FieldErrorMessage = forwardRef<HTMLSpanElement, TextProps & ComponentPropsWithRef<"div">>(
  ({ textStyle = "meta-text-small", margin, ...props }, ref) => {
    const field = useFormControlContext();
    if (field && !field.isInvalid) return null;
    return (
      <Text
        textStyle={textStyle}
        margin={margin}
        element="div"
        css={errorStyling}
        {...(field?.getErrorMessageProps(props, ref) ?? { ref, ...props })}
      />
    );
  },
);
