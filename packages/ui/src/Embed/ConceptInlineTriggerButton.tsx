/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { styled } from "@ndla/styled-system/jsx";
import { InlineTriggerButton } from "./InlineTriggerButton";

export const ConceptInlineTriggerButton = styled(InlineTriggerButton, {
  base: {
    position: "relative",
    overflow: "visible",
    borderBottom: "1px solid",
    borderStyle: "dashed",
    borderColor: "stroke.hover",
    paddingBlockStart: "5xsmall",
    width: "fit-content",
    cursor: "pointer",
    _hover: {
      borderColor: "text.link",
      background: "surface.actionSubtle.hover",
    },
    _active: {
      borderColor: "text.link",
      background: "surface.actionSubtle.active",
    },
    // The global focus ring forces the border-radius to be xsmall, causing the dashed border to be cut off. This is a workaround.
    _focusVisible: {
      outline: "none",
      borderRadius: "0",
      _after: {
        content: '""',
        position: "absolute",
        inset: "0",
        outline: "3px",
        borderRadius: "xsmall",
        outlineColor: "stroke.default",
        outlineOffset: "3px",
        outlineStyle: "solid",
      },
    },
  },
});
