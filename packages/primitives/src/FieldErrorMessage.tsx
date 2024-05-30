/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentPropsWithRef, forwardRef } from "react";
import { styled } from "@ndla/styled-system/jsx";
import { useFormControlContext } from "./FormControl";
import { Text, TextProps } from "./Text";

const StyledText = styled(Text, {
  base: {
    color: "text.error",
    whiteSpace: "pre-line",
  },
});

export const FieldErrorMessage = forwardRef<HTMLSpanElement, TextProps & ComponentPropsWithRef<"div">>(
  ({ textStyle = "label.small", ...props }, ref) => {
    const field = useFormControlContext();
    if (field && !field.isInvalid) return null;
    return (
      <StyledText textStyle={textStyle} as="div" {...(field?.getErrorMessageProps(props, ref) ?? { ref, ...props })} />
    );
  },
);
