/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentPropsWithRef, forwardRef } from "react";
import styled from "@emotion/styled";
import { colors } from "@ndla/core";
import { Text, TextProps } from "@ndla/typography";
import { useFormControlContext } from "./FormControl";

const StyledText = styled(Text)`
  color: ${colors.support.red};
  white-space: pre-line;
`;

export const FieldErrorMessage = forwardRef<HTMLSpanElement, TextProps & ComponentPropsWithRef<"div">>(
  ({ textStyle = "meta-text-small", margin, ...props }, ref) => {
    const field = useFormControlContext();
    if (field && !field.isInvalid) return null;
    return (
      <StyledText
        textStyle={textStyle}
        margin={margin}
        element="div"
        {...(field?.getErrorMessageProps(props, ref) ?? { ref, ...props })}
      />
    );
  },
);
