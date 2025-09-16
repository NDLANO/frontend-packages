/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { HTMLProps } from "react";
import { mergeProps } from "@zag-js/react";
import { Label, useFieldContext, type LabelProps, type TextProps } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import type { StyledProps } from "@ndla/styled-system/types";

interface Props extends TextProps, StyledProps, Omit<HTMLProps<HTMLParagraphElement>, "color" | "as"> {}

const StyledLabel = styled(Label, {
  base: {
    cursor: "default",
  },
});

export const ContentEditableFieldLabel = ({ children, ...props }: Props) => {
  const field = useFieldContext();
  const { htmlFor, form, ...rest } = mergeProps(field?.getLabelProps() as Props, props);

  return (
    <StyledLabel
      asChild
      consumeCss
      onClick={(_) => {
        document.getElementById(field?.ids.control)?.focus();
      }}
      {...(rest as LabelProps)}
    >
      <p>{children}</p>
    </StyledLabel>
  );
};
