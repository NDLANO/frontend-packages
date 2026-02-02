/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { styled } from "@ndla/styled-system/jsx";
import { composeRefs } from "@ndla/util";
import { type ComponentPropsWithRef, type KeyboardEvent, forwardRef, useCallback, useRef } from "react";

const StyledSpan = styled("span", { base: {} });

export const InlineTriggerButton = forwardRef<HTMLSpanElement, ComponentPropsWithRef<"span">>(
  ({ onClick, ...props }, ref) => {
    const spanRef = useRef<HTMLSpanElement>(null);

    // Emulate a button click when pressing Enter or Space
    const onKeyboardEvent = useCallback((event: KeyboardEvent<HTMLSpanElement>) => {
      if (event.key === "Enter" || event.key === " ") {
        spanRef.current?.click();
      }
    }, []);

    return (
      <StyledSpan
        ref={composeRefs(spanRef, ref)}
        onKeyUp={onKeyboardEvent}
        onClick={onClick}
        role="button"
        tabIndex={0}
        {...props}
      />
    );
  },
);
