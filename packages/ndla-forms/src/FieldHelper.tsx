/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentPropsWithRef, forwardRef } from "react";
import { Text, TextProps } from "@ndla/typography";
import { useFormControlContext } from "./FormControl";

export const FieldHelper = forwardRef<HTMLDivElement, TextProps & ComponentPropsWithRef<"div">>(
  ({ textStyle = "meta-text-small", margin, ...props }, ref) => {
    const field = useFormControlContext();
    return (
      <Text
        textStyle={textStyle}
        margin={margin}
        element="div"
        {...(field?.getHelpTextProps(props, ref) ?? { ref, ...props })}
      />
    );
  },
);
