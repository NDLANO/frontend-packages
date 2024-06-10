/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentPropsWithoutRef } from "react";
import { styled } from "@ndla/styled-system/jsx";

const StyledExpandableBox = styled("details", {
  base: {
    transitionDuration: "fast",
    width: "100%",
    position: "relative",
    border: "1px solid",
    borderRadius: "xsmall",
    borderColor: "stroke.subtle",
    padding: "medium",
    _open: {
      padding: "medium",
      "& summary": {
        marginBlockEnd: "-xxsmall",
      },
    },
  },
});

export type ExpandableBoxProps = ComponentPropsWithoutRef<"details">;

export const ExpandableBox = (props: ExpandableBoxProps) => <StyledExpandableBox {...props} />;

const StyledExpandableBoxSummary = styled("summary", {
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
});

export type ExpandableBoxSummaryProps = ComponentPropsWithoutRef<"summary">;

export const ExpandableBoxSummary = ({ children, ...rest }: ExpandableBoxSummaryProps) => {
  return <StyledExpandableBoxSummary {...rest}>{children}</StyledExpandableBoxSummary>;
};
