/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef } from "react";
import { type HTMLArkProps, ark } from "@ark-ui/react";
import { styled } from "@ndla/styled-system/jsx";
import type { StyledProps } from "@ndla/styled-system/types";

export interface ExpandableBoxProps extends HTMLArkProps<"details">, StyledProps {}

const StyledExpandableBox = styled(
  ark.details,
  {
    base: {
      transitionDuration: "fast",
      width: "100%",
      position: "relative",
      border: "1px solid",
      borderRadius: "xsmall",
      borderColor: "stroke.subtle",
      padding: "medium",
      clear: "both",
      overflow: "hidden",
      _open: {
        padding: "medium",
        "& summary, [data-embed-type='expandable-box-summary']": {
          marginBlockEnd: "-xxsmall",
        },
      },
    },
  },
  { baseComponent: true },
);

export const ExpandableBox = forwardRef<HTMLDetailsElement, ExpandableBoxProps>((props, ref) => (
  <StyledExpandableBox {...props} data-embed-type="expandable-box" ref={ref} />
));

export interface ExpandableBoxSummaryProps extends HTMLArkProps<"summary">, StyledProps {}

const StyledExpandableBoxSummary = styled(
  ark.summary,
  {
    base: {
      cursor: "pointer",
      margin: "-medium",
      padding: "medium",
      textStyle: "label.large!",
      _hover: {
        color: "text.action",
      },
      "& > *": {
        display: "inline!",
        textStyle: "label.large!",
      },
    },
  },
  { baseComponent: true },
);

export const ExpandableBoxSummary = forwardRef<HTMLElement, ExpandableBoxSummaryProps>((props, ref) => (
  <StyledExpandableBoxSummary {...props} data-embed-type="expandable-box-summary" ref={ref} />
));
