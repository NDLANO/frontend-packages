/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentPropsWithRef, forwardRef } from "react";
import { useFormControlContext } from "./FormControl";
import { Text, TextProps } from "./Text";

export const FieldHelper = forwardRef<HTMLDivElement, TextProps & ComponentPropsWithRef<"div">>(
  ({ textStyle = "label.small", ...props }, ref) => {
    const field = useFormControlContext();
    return <Text textStyle={textStyle} as="div" {...(field?.getHelpTextProps(props, ref) ?? { ref, ...props })} />;
  },
);
