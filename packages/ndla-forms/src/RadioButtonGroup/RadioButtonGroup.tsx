/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef } from "react";
import { RadioGroupProps, Root } from "@radix-ui/react-radio-group";
import { useFormControl } from "../FormControl";

export const RadioButtonGroup = forwardRef<HTMLDivElement, RadioGroupProps>(({ children, ...rest }, ref) => {
  // This is usually rendered as a fieldset, so we can ignore the ID.
  const { id: _, ...props } = useFormControl(rest);
  return (
    <Root {...props} ref={ref}>
      {children}
    </Root>
  );
});
